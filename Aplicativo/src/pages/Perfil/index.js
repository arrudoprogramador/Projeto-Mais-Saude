import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Modal, TextInput, View, Image, ActivityIndicator, Alert, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import api from '../../services/api'; 
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [foto, setFoto] = useState(null); 
  const [userId, setUserId] = useState(null);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [modalEditarVisible, setModalEditarVisible] = useState(false);
  const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
  const [sucessoModalVisible, setSucessoModalVisible] = useState(false);
  
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); 
 
  useEffect(() => {
    const buscarDados = async () => {
      try {
        const response = await api.get('/user');
        const userData = response.data;

        setUsuario(userData);
        setNome(userData.nome);
        setEmail(userData.email);
        setAltura(userData.altura.toString());
        setPeso(userData.peso.toString());
        setUserId(userData.id);
        setFoto(userData.foto);

      } catch (error) {
        console.error('Erro ao buscar dados do perfil', error);
      }
    };

    buscarDados();
  }, []);

  function dataURLtoBlob(dataURL) {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }


  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert("Permissão necessária", "Permita o acesso à câmera.");
          return;
        }
    
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
          base64: true,  
        });
    
    
        if (!result.canceled && result.assets && result.assets.length > 0) {
          const asset = result.assets[0];
          const filename = `foto_${Date.now()}.jpg`;
    
          setFoto({
            uri: `data:${asset.type};base64,${asset.base64}`,
            name: filename,
            type: asset.type || 'image/jpeg',
            base64: asset.base64
          });
          console.log('Imagem capturada:', {
            uri: asset.uri,
            name: filename,
            type: asset.type || 'image/jpeg',
          });
        } else {
          console.warn('Nenhuma imagem selecionada.');
        }
      };

  const atualizarPerfil = async () => {
  try {
    setLoading(true);

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('password', senha);
    formData.append('altura', altura);
    formData.append('peso', peso);
    formData.append('_method', 'PUT');

    if (foto && foto.uri && foto.uri.startsWith('data:')) {
      const blob = dataURLtoBlob(foto.uri);
      formData.append('foto', blob, foto.name || 'foto.jpg');

    } else if (foto && foto.uri) {
      formData.append('foto', {
        uri: Platform.OS === 'android' ? foto.uri : foto.uri.replace('file://', ''),
        name: foto.name || 'foto.jpg',
        type: foto.type || 'image/jpeg',
      });
    }

    const response = await fetch(`http://127.0.0.1:8000/api/conta/atualizar/${userId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });

    const json = await response.json();

    if (response.ok) {
     
      const res = await api.get('/user');
      setUsuario(res.data);
      setNome(res.data.nome);
      setEmail(res.data.email);
      setAltura(res.data.altura.toString());
      setPeso(res.data.peso.toString());
      setFoto(res.data.foto);

      setModalEditarVisible(false);
      setSucessoModalVisible(true);
    } else {
      console.warn(json);
      Alert.alert('Erro', 'Erro ao atualizar perfil: ' + JSON.stringify(json.errors || json.message));
    }

  } catch (error) {
    console.error('Erro na atualização:', error);
    Alert.alert('Erro', 'Ocorreu um erro ao atualizar.');
  } finally {
    setLoading(false);
  }
};


  const sairDaConta = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      setUsuario(null);
      navigation.navigate('EscolherLogin');
    } catch (error) {
      console.error('Erro ao sair da conta:', error);
    }
  };

  if (!usuario) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4B7BEC" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {usuario.nome}</Text>

      {foto ? (
        <Image
          source={{ uri: `http://127.0.0.1:8000/${foto}` }}
          style={styles.image}
        />
      ) : (
        <View style={styles.noImageContainer}>
          <Text style={styles.noImageText}>Sem foto de perfil</Text>
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoValue}>{usuario.email}</Text>

        <Text style={styles.infoLabel}>Altura</Text>
        <Text style={styles.infoValue}>{usuario.altura} m</Text>

        <Text style={styles.infoLabel}>Peso</Text>
        <Text style={styles.infoValue}>{usuario.peso} kg</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => setModalEditarVisible(true)} activeOpacity={0.8}>
        <Text style={styles.logoutButtonText}>Editar informações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}   onPress={() => setModalLogoutVisible(true)} activeOpacity={0.8}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalEditarVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>

            {foto ? (
               typeof foto === 'string' ? (
                 <Image source={{ uri: `http://127.0.0.1:8000/${foto}` }} style={styles.imageModal} />
               ) : (
                <View style={styles.imagePreviewContainer}>
                  <Image source={{ uri: foto.uri }} style={styles.imageModal} />
                </View>
              )
            ) : (
              <View style={styles.imagePreviewContainer}>
                <TouchableOpacity onPress={selecionarImagem} style={styles.imageButton}>
                  <Text style={styles.imageButtonText}>Selecionar nova imagem</Text>
                </TouchableOpacity>
              </View>
            )}
            

            <TouchableOpacity onPress={selecionarImagem} style={styles.changeImageButton}>
              <Text style={styles.changeImageButtonText}>Alterar imagem</Text>
            </TouchableOpacity>

            <TextInput
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
              style={styles.inputField}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              style={[styles.inputField, { flex: 1 }]}
            />
              <View style={styles.inputFieldContainer}>
                  <TextInput
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Senha (deixe em branco para manter)"
                    secureTextEntry={!senhaVisivel}
                    style={[ {flex: 1, paddingVertical: 10 }]}
                  />
                  <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
                    <Ionicons
                      name={senhaVisivel ? 'eye-off' : 'eye'}
                      size={24}
                      color="gray"
                      style={{ marginLeft: 10, marginRight: 5 }}
                    />
                  </TouchableOpacity>
              </View>
            <TextInput
              value={altura}
              onChangeText={setAltura}
              placeholder="Altura (m)"
              keyboardType="numeric"
              style={styles.inputField}
            />
            <TextInput
              value={peso}
              onChangeText={setPeso}
              placeholder="Peso (kg)"
              keyboardType="numeric"
              style={styles.inputField}
            />

            <TouchableOpacity onPress={atualizarPerfil} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalEditarVisible(false)} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

     {/* Modal de confirmação */}
      <Modal
        transparent
        animationType="fade"
        visible={modalLogoutVisible}
        onRequestClose={() => setModalLogoutVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              padding: 24,
              borderRadius: 10,
              width: '80%',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 20,
                fontWeight: 'bold',
              }}
            >
              Deseja sair da conta?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                gap: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => setModalLogoutVisible(false)}
                style={{
                  backgroundColor: '#bdc3c7',
                  padding: 10,
                  borderRadius: 8,
                  marginRight: 10,
                }}
              >
                <Text style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                  Cancelar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={sairDaConta}
                style={{
                  backgroundColor: '#e74c3c',
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                  Sair
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      <Modal
        visible={sucessoModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setSucessoModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Perfil atualizado com sucesso!</Text>
            <TouchableOpacity
              onPress={() => setSucessoModalVisible(false)}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <StatusBar style="auto" />
    </View>
  );
}
