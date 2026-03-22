import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Modal, 
  Pressable, 
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import style from './style';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [foto, setFoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMensagem, setModalMensagem] = useState('');

  // Configuração da URL base - AJUSTE AQUI COM SEU IP
  const getApiBaseUrl = () => {
    if (__DEV__) {
      // PARA iOS - SUBSTITUA PELO IP DA SUA MÁQUINA NA REDE
      const LOCAL_IP = '192.168.18.33'; // ⚠️ ALTERE PARA SEU IP!
      return `http://${LOCAL_IP}:8000`;
    } else {
      return 'https://seuservidor.com'; // URL de produção
    }
  };

  // Função otimizada para iOS - com tratamento de permissões
  const pegarFoto = async () => {
    try {
      // iOS requer permissões específicas
      if (Platform.OS === 'ios') {
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (cameraStatus.status !== 'granted' || libraryStatus.status !== 'granted') {
          Alert.alert(
            "Permissão necessária", 
            "Precisamos acessar sua câmera e galeria para adicionar fotos.",
            [{ text: "OK" }]
          );
          return;
        }
      }

      // Alert para escolher entre câmera ou galeria
      Alert.alert(
        "Adicionar Foto",
        "Escolha como deseja adicionar sua foto:",
        [
          {
            text: "Tirar Foto",
            onPress: async () => {
              const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.7,
                base64: true,
              });

              if (!result.canceled && result.assets?.[0]) {
                processarImagem(result.assets[0]);
              }
            }
          },
          {
            text: "Escolher da Galeria",
            onPress: async () => {
              const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.7,
                base64: true,
              });

              if (!result.canceled && result.assets?.[0]) {
                processarImagem(result.assets[0]);
              }
            }
          },
          {
            text: "Cancelar",
            style: "cancel"
          }
        ]
      );

    } catch (error) {
      console.error('Erro ao acessar câmera:', error);
      Alert.alert("Erro", "Não foi possível acessar a câmera.");
    }
  };

  const processarImagem = (asset) => {
    const filename = `foto_${Date.now()}.jpg`;
    
    setFoto({
      uri: asset.uri,
      name: filename,
      type: 'image/jpeg',
    });
  };

  // Função para testar a conexão com o servidor
  const testarConexao = async () => {
    try {
      const apiBaseUrl = getApiBaseUrl();
      const response = await axios.get(`${apiBaseUrl}/api/teste`, {
        timeout: 5000
      });
      return true;
    } catch (error) {
      console.log('Teste de conexão falhou:', error);
      return false;
    }
  };

  // Função corrigida para FormData
  const handleCadastro = async () => {
    // Validações melhoradas
    if (!nome.trim() || !email.trim() || !senha || !altura || !peso) {
      setModalMensagem('Preencha todos os campos obrigatórios.');
      setModalVisible(true);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setModalMensagem('Por favor, insira um email válido.');
      setModalVisible(true);
      return;
    }

    setLoading(true);

    try {
      
      const dados = new FormData();

      // Adiciona campos de texto
      dados.append('nome', nome.trim());
      dados.append('email', email.trim().toLowerCase());
      dados.append('password', senha);
      dados.append('altura', altura.replace(',', '.'));
      dados.append('peso', peso.replace(',', '.'));

      // Adiciona a foto - tratamento específico para iOS
      if (foto && foto.uri) {
        // No iOS, o FormData aceita o objeto diretamente
        dados.append('foto', {
          uri: foto.uri,
          name: foto.name || 'foto.jpg',
          type: foto.type || 'image/jpeg',
        });
      }

      const apiBaseUrl = getApiBaseUrl();
      console.log('Tentando conectar com:', `${apiBaseUrl}/api/conta/adicionar`);

      const response = await axios.post(
        `${apiBaseUrl}/api/conta/adicionar`,
        dados,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
          },
          timeout: 20000, // Aumentado para 20 segundos
        }
      );

      if (response.status === 201) {
        const token = response.data.token;
        if (token) {
          await AsyncStorage.setItem('userToken', token);
        }

        setModalMensagem('Cadastro realizado com sucesso!');
        setModalVisible(true);
        
        // Navega após um delay para usuário ver a mensagem
        setTimeout(() => {
          navigation.navigate("Login");
        }, 1500);
      }
    } catch (error) {
      console.error("Erro completo no cadastro:", error);
      
      // Tratamento de erro detalhado
      if (error.code === 'ECONNABORTED') {
        setModalMensagem('Tempo de conexão esgotado. Tente novamente.');
      } else if (error.response) {
        // O servidor respondeu com um status de erro
        if (error.response.status === 422) {
          const errors = error.response.data.errors;
          const mensagens = Object.values(errors).flat().join('\n');
          setModalMensagem(mensagens);
        } else if (error.response.data?.message) {
          setModalMensagem(error.response.data.message);
        } else {
          setModalMensagem(`Erro do servidor: ${error.response.status}`);
        }
      } else if (error.request) {
        // A requisição foi feita mas não houve resposta
        setModalMensagem('Sem resposta do servidor. Verifique:\n\n• Servidor está rodando?\n• IP correto?\n• Mesma rede Wi-Fi?');
      } else {
        setModalMensagem('Erro inesperado. Tente novamente.');
      }
      setModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  // Função para mostrar informações de debug
  const mostrarInfoConexao = () => {
    const apiBaseUrl = getApiBaseUrl();
    Alert.alert(
      'Informações de Conexão',
      `URL do servidor: ${apiBaseUrl}\n\nCertifique-se que:\n1. Servidor Laravel está rodando\n2. IP está correto\n3. Mesma rede Wi-Fi\n4. Porta 8000 liberada`,
      [{ text: 'OK' }]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          style={style.container}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <StatusBar style="dark" />

          {/* Header com Gradient */}
          <LinearGradient
            colors={['#4C9BE5', '#87CEEB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={style.cabecalho}
          >
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <View style={style.fotoContainer}>
                {foto ? (
                  <Image
                    source={{ uri: foto.uri }}
                    style={style.fotoPerfil}
                  />
                ) : (
                  <View style={style.fotoPlaceholder}>
                    <Ionicons name="camera" size={40} color="#666" />
                  </View>
                )}
                <TouchableOpacity 
                  style={style.botaoFoto}
                  onPress={pegarFoto}
                  disabled={loading}
                >
                  <Text style={style.botaoFotoTexto}>
                    {foto ? 'Alterar Foto' : 'Adicionar Foto'}
                  </Text>
                </TouchableOpacity>
              </View>
              
              {/* Botão de debug - remova em produção */}
              <TouchableOpacity 
                style={style.debugButton}
                onPress={mostrarInfoConexao}
              >
                <Text style={style.debugButtonText}>ℹ️ Info Conexão</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          {/* Formulário */}
          <View style={style.content}>
            <Text style={style.title}>Crie sua conta</Text>

            <TextInput 
              style={style.input} 
              placeholder="Nome completo" 
              value={nome} 
              onChangeText={setNome}
              editable={!loading}
              returnKeyType="next"
            />
            
            <TextInput 
              style={style.input} 
              placeholder="E-mail" 
              keyboardType="email-address" 
              autoCapitalize="none" 
              autoComplete="email"
              value={email} 
              onChangeText={setEmail}
              editable={!loading}
              returnKeyType="next"
            />
            
            <TextInput 
              style={style.input} 
              placeholder="Senha" 
              secureTextEntry 
              value={senha} 
              onChangeText={setSenha}
              editable={!loading}
              returnKeyType="next"
            />
            
            <View style={style.row}>
              <TextInput 
                style={[style.input, style.inputHalf]} 
                placeholder="Altura (cm)" 
                keyboardType="decimal-pad"
                value={altura} 
                onChangeText={setAltura}
                editable={!loading}
                returnKeyType="next"
              />
              
              <TextInput 
                style={[style.input, style.inputHalf]} 
                placeholder="Peso (kg)" 
                keyboardType="decimal-pad"
                value={peso} 
                onChangeText={setPeso}
                editable={!loading}
                returnKeyType="done"
              />
            </View>
          </View>

          {/* Botões */}
          <View style={style.buttons}>
            <TouchableOpacity 
              style={[
                style.button, 
                loading && style.buttonDisabled
              ]} 
              onPress={handleCadastro}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={style.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity 
              style={style.linkButton}
              onPress={() => navigation.navigate('Login')}
              disabled={loading}
            >
              <Text style={style.linkButtonText}>
                Já tem uma conta? <Text style={style.linkText}>Faça login</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Modal */}
          <Modal 
            animationType="fade" 
            transparent={true} 
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={style.modalOverlay}>
              <View style={style.modalContent}>
                <Text style={style.modalText}>{modalMensagem}</Text>
                <Pressable 
                  style={style.modalButton}
                  onPress={() => {
                    setModalVisible(false);
                    if (modalMensagem.includes('sucesso')) {
                      navigation.navigate('Login');
                    }
                  }}
                >
                  <Text style={style.modalButtonText}>OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}