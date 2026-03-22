import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, TextInput, Modal, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { LinearGradient } from 'expo-linear-gradient';

import style from './style';
import { useNavigation } from '@react-navigation/native';

export default function BeberAgua() {
  const [entrada, setEntrada] = useState('');
  const [consumoFinal, setConsumoFinal] = useState(0);
  const [recomendado, setRecomendado] = useState(2500);
  const [consumoAtual, setConsumoAtual] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const progresso = Math.min(consumoAtual / recomendado, 1);

  const calcularAgua = () => {
    const entradaNumber = parseInt(entrada, 10);

    if (isNaN(entradaNumber) || entradaNumber <= 0) {
      setFeedback('Por favor, insira um valor válido para o consumo.');
      setShowModal(true);
      return;
    }

    const novoConsumoAtual = consumoAtual + entradaNumber;
    const novoConsumoFinal = consumoFinal + entradaNumber;

    setConsumoAtual(novoConsumoAtual);
    setConsumoFinal(novoConsumoFinal);
    setEntrada('');

    if (novoConsumoFinal >= recomendado) {
      setFeedback('Parabéns, você atingiu o recomendado!');
    } else {
      setFeedback('Continue, você ainda não atingiu o valor esperado!');
    }

    setShowAddModal(false); // Fecha o modal de adicionar água
    setShowModal(true); // Abre o modal de feedback
  };

  const zerar = () => {
    setEntrada('');
    setConsumoFinal(0);
    setConsumoAtual(0);
    setFeedback('');
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Hoje</Text>

{/* <View style={style.statsContainer}>
  <View style={style.sla}><Text style={style.text}>Consumo:  </Text> {consumoAtual} ml</View>
  <View style={style.sla}> <Text style={style.text}>Meta:  </Text> {recomendado} ml</View>
</View> */}

{/* Barra de progresso circular com toque */}
<TouchableOpacity style={style.redondo} onPress={() => setShowAddModal(true)}>
  <ImageBackground
  // source={require('../../../assets/tomar.png')}
  style={style.redondoBackground}
  >
    <AnimatedCircularProgress
      size={255}
      width={9}
      fill={progresso * 100}
      tintColor="#87CEFA"
      backgroundColor="#e0e0e0"
      rotation={0}
      lineCap="round"
    >
      {(fill) => (
        
<Text style={style.circularText}>
    {`${consumoAtual} ml\n`}<Text style={{ fontSize: 20, color: '#999' }}>de {recomendado} ml</Text>
  </Text>      )}
    </AnimatedCircularProgress>
  </ImageBackground>
</TouchableOpacity>





      {/* Modal para entrada de água (aparece ao tocar no círculo) */}
{/* Modal para entrada de água (aparece ao tocar no círculo) */}
<Modal
  transparent={true}
  visible={showAddModal}
  animationType="slide"
  onRequestClose={() => setShowAddModal(false)}
>

</Modal>


      {/* Modal para feedback */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={style.modalOverlay}>
          <View style={style.modalContent}>
            <Text style={style.feedback}>{feedback}</Text>
            <TouchableOpacity onPress={() => setShowModal(false)} style={style.modalButton}>
              <Text style={style.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <View style={style.cards}>
  <Text style={style.text_historico}>Adicionar Consumo</Text>

  <View style={style.cardContainer}>
    {[100, 250, 500, 750, 1000].map((quantidade) => (
      <TouchableOpacity
        key={quantidade}
        style={style.card}
        onPress={() => {
          const novoConsumoAtual = consumoAtual + quantidade;
          const novoConsumoFinal = consumoFinal + quantidade;

          setConsumoAtual(novoConsumoAtual);
          setConsumoFinal(novoConsumoFinal);

          if (novoConsumoFinal >= recomendado) {
            setFeedback('Parabéns, você atingiu o recomendado!');
          } else {
            setFeedback('Continue, você ainda não atingiu o valor esperado!');
          }

          setShowModal(true);
        }}
      >
        <Text style={style.cardText}>{quantidade} ml</Text>
      </TouchableOpacity>
    ))}
  </View>
  <TouchableOpacity style={style.button} onPress={zerar}>
        <Image
        source={require('../../../assets/reiniciar.png')}
        style={style.img_reiniciar}>
        </Image>
        <Text style={style.text_reiniciar}>Reiniciar</Text>

      </TouchableOpacity>
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


      <StatusBar style="auto" />
    </View>

  );
}
