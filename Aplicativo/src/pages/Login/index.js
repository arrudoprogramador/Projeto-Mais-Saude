import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Modal, 
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Alert
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import style from './style';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMensagem, setModalMensagem] = useState('');

  // Configuração da URL base - MESMA LÓGICA DO CADASTRO
  const getApiBaseUrl = () => {
    if (__DEV__) {
      // PARA iOS - SUBSTITUA PELO IP DA SUA MÁQUINA NA REDE
      const LOCAL_IP = '192.168.18.33'; // ⚠️ ALTERE PARA SEU IP!
      return `http://${LOCAL_IP}:8000`;
    } else {
      return 'https://seuservidor.com'; // URL de produção
    }
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

  const handleLogin = async () => {
    if (!email.trim() || !senha) {
      setModalMensagem('Por favor, preencha todos os campos.');
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
      // Primeiro testa a conexão
      

      const apiBaseUrl = getApiBaseUrl();
      console.log('Tentando login em:', `${apiBaseUrl}/api/login`);

      const response = await axios.post(
        `${apiBaseUrl}/api/login`,
        {
          email: email.trim().toLowerCase(),
          password: senha
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          timeout: 15000,
        }
      );

      const token = response.data.token;

      if (token) {
        await AsyncStorage.setItem('userToken', token); 
        setModalMensagem('Login realizado com sucesso!');
        setModalVisible(true);
        
        // Navega após um delay para usuário ver a mensagem
        setTimeout(() => {
          navigation.navigate("Home");
        }, 1500);
      } else {
        setModalMensagem('Token não recebido. Tente novamente.');
        setModalVisible(true);
      }

    } catch (error) {
      console.error("Erro completo no login:", error);
      
      // Tratamento de erro detalhado
      if (error.code === 'ECONNABORTED') {
        setModalMensagem('Tempo de conexão esgotado. Tente novamente.');
      } else if (error.response) {
        // O servidor respondeu com um status de erro
        if (error.response.status === 401) {
          setModalMensagem('Email ou senha incorretos.');
        } else if (error.response.status === 422) {
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

          {/* Header com Gradient - ESTILO IGUAL AO CADASTRO */}
          <LinearGradient
            colors={['#4C9BE5', '#87CEEB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={style.cabecalho}
          >
            <View style={{ alignItems: 'center', paddingVertical: 40 }}>
              <View style={style.fotoContainer}>
                <View style={style.fotoPlaceholder}>
                  <Ionicons name="person" size={50} color="#fff" />
                </View>
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
            <Text style={style.title}>Faça Login</Text>

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
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />
          </View>

          {/* Botões */}
          <View style={style.buttons}>
            <TouchableOpacity 
              style={[
                style.button, 
                loading && style.buttonDisabled
              ]} 
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={style.buttonText}>Entrar</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity 
              style={style.linkButton}
              onPress={() => navigation.navigate('Cadastro')}
              disabled={loading}
            >
              <Text style={style.linkButtonText}>
                Não tem uma conta? <Text style={style.linkText}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Modal - ESTILO IGUAL AO CADASTRO */}
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
                      navigation.navigate('Home');
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