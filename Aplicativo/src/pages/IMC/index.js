import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Modal, Text, View, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import style from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function IMC() {
    const [usuario, setUsuario] = useState(null);
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');
    const [resultado, setResultado] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [corResultado, setCorResultado] = useState('#C0C0C0'); // Cinza inicial
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const calcularIMC = (pesoValor, alturaValor) => {
    const pesoNum = parseFloat(String(pesoValor).replace(',', '.'));
    const alturaNum = parseFloat(String(alturaValor).replace(',', '.'));

    if (!pesoNum || pesoNum <= 0 || !alturaNum || alturaNum <= 0) {
      setResultado("Insira valores válidos!");
      setCorResultado('#C0C0C0');
      setImc('');
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = imcCalculado.toFixed(2);
    let categoria = "";
    let cor = "";

    if (imcCalculado < 18.5) {
      categoria = "Abaixo do peso";
      cor = "#87CEEB";
    } else if (imcCalculado < 25) {
      categoria = "Peso normal";
      cor = "#32CD32";
    } else if (imcCalculado < 30) {
      categoria = "Sobrepeso";
      cor = "#FFD700";
    } else if (imcCalculado < 35) {
      categoria = "Obesidade Grau 1";
      cor = "#FF8C00";
    } else if (imcCalculado < 40) {
      categoria = "Obesidade Grau 2";
      cor = "#FF4500";
    } else {
      categoria = "Obesidade Grau 3";
      cor = "#8B0000";
    }

    setImc(imcFormatado);
    setResultado(categoria);
    setCorResultado(cor);
  };

 useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken'); 
        setIsAuthenticated(!!token); 
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
  
  const buscarUsuario = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const response = await axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsuario(response.data);
      setPeso(String(response.data.peso));
      setAltura(String(response.data.altura));
      calcularIMC(response.data.peso, response.data.altura);
    } catch (error) {
      console.error('Erro ao buscar usuário', error);
    }
  };


  const salvarAlteracoes = () => {
    setUsuario((prev) => ({
      ...prev,
      peso,
      altura,
    }));
    calcularIMC(peso, altura);
    setModalVisible(false);
  };

  useEffect(() => {
    buscarUsuario();
  }, []);

    if(!usuario){
        return (
            <View style={style.container}>
                <View style={style.content}>
                    <View style={style.form}>
                        <View style={style.inputs}>
                            <Text style={style.text_input}>Peso (kg):</Text>
                            <TextInput
                                style={style.inputField}
                                keyboardType="numeric"
                                value={peso}
                                onChangeText={setPeso}
                                placeholder="Ex: 60"
                                autoCapitalize="none"
                            />

                            <Text style={style.text_input}>Altura (m):</Text>
                            <TextInput
                                style={style.inputField}
                                keyboardType="numeric"
                                value={altura}
                                onChangeText={setAltura}
                                placeholder="Ex: 1.75"
                                autoCapitalize="none"
                            />
                        </View>

                        <LinearGradient
                            colors={['#545eff', '#87CEEB']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={style.button}
                        >
                            <TouchableOpacity onPress={() => calcularIMC(peso, altura)}>
                                <Text style={style.buttonText}>Calcular</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <View style={style.form1}>
                        <Text style={style.text}>Seu resultado</Text>
                        <View style={style.result}>
                            <Pressable 
                                style={[
                                    style.resultCircle, 
                                    { backgroundColor: corResultado, justifyContent: 'center', alignItems: 'center' }
                                ]}
                            >
                                {imc !== '' && (
                                    <Text style={style.resultText}>{imc}</Text>
                                )}
                            </Pressable> 
                        </View>

                        <View style={style.result}>
                            {resultado !== '' && <Text style={style.resultText1}>{resultado}</Text>}
                        </View>

                        <View style={style.border}></View>

                        <Text style={style.text1}>Categorias de IMC:</Text>

                        <View style={style.linha}><Pressable style={[style.p1, { backgroundColor: "#87CEEB" }]} /><Text style={style.texto}>Abaixo do peso (18.5)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p2, { backgroundColor: "#32CD32" }]} /><Text style={style.texto}>Peso normal (18.5 - 24.9)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p3, { backgroundColor: "#FFD700" }]} /><Text style={style.texto}>Sobrepeso (25 - 29.9)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p4, { backgroundColor: "#FF8C00" }]} /><Text style={style.texto}>Obesidade Grau 1 (30 - 34.9)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p5, { backgroundColor: "#FF4500" }]} /><Text style={style.texto}>Obesidade Grau 2 (35 - 39.9)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p6, { backgroundColor: "#8B0000" }]} /><Text style={style.texto}>Obesidade Grau 3 (40+)</Text></View>
                    </View>

                    <StatusBar style="auto" />
                </View>
{/* Footer fixo */}
                        <LinearGradient
           colors={['#4C9BE5', '#87CEEB']} // Altere as cores como quiser
           start={{ x: 0, y: 0 }}
           end={{ x: 1, y: 0 }}
           style={style.footer}
         >
           <View style={style.contentFooter}>
             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
               <Image
                 source={require('../../../assets/home.png')}
                 style={style.footerIcon}
               />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
               <Image
                 source={require('../../../assets/usuario.png')}
                 style={style.footerIcon}
               />
             </TouchableOpacity>
           </View>
         </LinearGradient>
            </View>
        );
    } 
return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.form}>
          <View style={style.inputs2}>
            <Text style={style.text_input}>Peso (kg):</Text>
            <Text style={style.infoValue}>{peso} kg</Text>

            <Text style={style.text_input}>Altura (m):</Text>
            <Text style={style.infoValue}>{altura} m</Text>

            
          </View>

          <LinearGradient
            colors={['#545eff', '#87CEEB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.button}
          >
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={style.buttonText}>Visualizar com outros</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={style.form1}>
                        <Text style={style.text}>Seu resultado</Text>
                        <View style={style.result}>
                            <Pressable 
                                style={[
                                    style.resultCircle, 
                                    { backgroundColor: corResultado, justifyContent: 'center', alignItems: 'center' }
                                ]}
                            >
                                {imc !== '' && (
                                    <Text style={style.resultText}>{imc}</Text>
                                )}
                            </Pressable> 
                        </View>

                        <View style={style.result}>
                            {resultado !== '' && <Text style={style.resultText1}>{resultado}</Text>}
                        </View>

                        <View style={style.border}></View>

                        <Text style={style.text1}>Categorias de IMC:</Text>

                        <View style={style.linha}><Pressable style={[style.p1, { backgroundColor: "#87CEEB" }]} /><Text style={style.texto}>Abaixo do peso (18.5)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p2, { backgroundColor: "#32CD32" }]} /><Text style={style.texto}>Peso normal (18.5 - 24.9)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p3, { backgroundColor: "#FFD700" }]} /><Text style={style.texto}>Sobrepeso (25 - 29.9)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p4, { backgroundColor: "#FF8C00" }]} /><Text style={style.texto}>Obesidade Grau 1 (30 - 34.9)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p5, { backgroundColor: "#FF4500" }]} /><Text style={style.texto}>Obesidade Grau 2 (35 - 39.9)</Text></View>
                        <View style={style.linha}><Pressable style={[style.p6, { backgroundColor: "#8B0000" }]} /><Text style={style.texto}>Obesidade Grau 3 (40+)</Text></View>
                    </View>

        <StatusBar style="auto" />
      </View>

      {/* Modal para edição */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style={style.text}>Teste com outros números</Text>
              <Text style={style.text2}>Para editar suas informações, vá em perfil.</Text>
                <TextInput
                  placeholder="Peso (kg)"
                  keyboardType="numeric"
                  value={peso}
                  onChangeText={setPeso}
                  style={style.inputField}
                />
                <TextInput
                  placeholder="Altura (m)"
                  keyboardType="numeric"
                  value={altura}
                  onChangeText={setAltura}
                  style={style.inputField}
                />
                <TouchableOpacity onPress={salvarAlteracoes}  style={style.modalButton}>
                  <Text style={style.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={[style.modalButton, style.modalButtonCancel]}>
                  <Text style={style.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
                                  {/* Footer fixo */}
                        <LinearGradient
           colors={['#4C9BE5', '#87CEEB']} // Altere as cores como quiser
           start={{ x: 0, y: 0 }}
           end={{ x: 1, y: 0 }}
           style={style.footer}
         >
           <View style={style.contentFooter}>
             <TouchableOpacity onPress={() => useNavigation.navigate('Home')}>
               <Image
                 source={require('../../../assets/home.png')}
                 style={style.footerIcon}
               />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
               <Image
                 source={require('../../../assets/usuario.png')}
                 style={style.footerIcon}
               />
             </TouchableOpacity>
           </View>
         </LinearGradient>
    </View>
  );
}