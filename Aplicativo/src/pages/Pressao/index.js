import React, { useState } from 'react';
import { View, Text, TextInput, Image,TouchableOpacity,Pressable,Modal  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native'; // ⬅️ certifique-se de importar
import styles from './style'

export default function Pressao() {
  const [sistolica, setSistolica] = useState('');
  const [diastolica, setDiastolica] = useState('');
  const [resultados, setResultados] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

const getCorResultado = (res) => {
  switch (res) {
    case 'Pressão Baixa':
      return '#1E90FF';
    case 'Pressão Normal':
      return '#32CD32';
    case 'Pré-hipertensão':
      return '#FFD700';
    case 'Pressão Alta':
      return '#FF4500';
    case 'Por favor, insira valores válidos.':
      return '#808080';
    default:
      return '#000';
  }
};



const verificarPressao = () => {
  const sis = parseInt(sistolica);
  const dia = parseInt(diastolica);

  if (isNaN(sis) || isNaN(dia)) {
    setResultados(prev => [...prev, 'Por favor, insira valores válidos.']);
    return;
  }

  let resultado = '';

  if (sis < 90 || dia < 60) {
    resultado = 'Pressão Baixa';
  } else if (sis <= 120 && dia <= 80) {
    resultado = 'Pressão Normal';
  } else if (sis <= 139 || dia <= 89) {
    resultado = 'Pré-hipertensão';
  } else {
    resultado = 'Pressão Alta';
  }

  setResultados(prev => [...prev, resultado]);
};


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Veja sua Pressão Arterial</Text>

    <View style={styles.paiImg}>
        <Image
            source={require('../../../assets/Pressao.png')}
            style={styles.img}
        />
    </View>

    <View style={styles.inputs}>
      <TextInput
        style={styles.inputField}
        placeholder="Sistólica (ex: 120)"
        keyboardType="numeric"
        value={sistolica}
        onChangeText={setSistolica}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Diastólica (ex: 80)"
        keyboardType="numeric"
        value={diastolica}
        onChangeText={setDiastolica}
      />
      </View>
      <LinearGradient
      colors={['#545eff', '#87CEEB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.button}
    >
      <TouchableOpacity onPress={verificarPressao} style={styles.touchable}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </LinearGradient>
    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.botaoAbrirModal}>
  <Text style={styles.botaoTexto}>Ver tabela de classificação</Text>
</TouchableOpacity>


{resultados.length > 0 && (
  <ScrollView 
    style={styles.listaResultados}
    contentContainerStyle={{ paddingBottom: 100 }} // espaço extra no fim
    showsVerticalScrollIndicator={false}
  >
    {resultados.map((res, index) => (
      <View key={index} style={styles.cardResultado}>
        <View style={styles.resultadoInterno}>
          <View style={[styles.bolinha, { backgroundColor: getCorResultado(res) }]} />
          <Text style={[styles.resultadoTexto, { color: getCorResultado(res) }]}>
            {res}
          </Text>
        </View>
      </View>
    ))}
  </ScrollView>
)}



{/* Footer fixo */}
      {/* Footer fixo */}
                <LinearGradient
   colors={['#4C9BE5', '#87CEEB']} // Altere as cores como quiser
   start={{ x: 0, y: 0 }}
   end={{ x: 1, y: 0 }}
   style={styles.footer}
 >
   <View style={styles.contentFooter}>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
       <Image
         source={require('../../../assets/home.png')}
         style={styles.footerIcon}
       />
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
       <Image
         source={require('../../../assets/usuario.png')}
         style={styles.footerIcon}
       />
     </TouchableOpacity>
   </View>
 </LinearGradient>

      



<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalFundo}>
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.fecharModal}>
      </TouchableOpacity>

      <View style={styles.form1}>
        <Text style={styles.text}>Classificação da Pressão Arterial</Text>
        <View style={styles.border}></View>
        <Text style={styles.text1}>Categorias:</Text>

        <View style={styles.linha}>
          <Pressable style={[styles.p1, { backgroundColor: "#1E90FF" }]} />
          <Text style={styles.texto}>Baixa: abaixo de 90 por 60</Text>
        </View>

        <View style={styles.linha}>
          <Pressable style={[styles.p2, { backgroundColor: "#32CD32" }]} />
          <Text style={styles.texto}>Normal: entre 90 por 60 e 120 por 80</Text>
        </View>

        <View style={styles.linha}>
          <Pressable style={[styles.p3, { backgroundColor: "#FFD700" }]} />
          <Text style={styles.texto}>Pré-hipertensão: até 139 por 89</Text>
        </View>

        <View style={styles.linha}>
          <Pressable style={[styles.p4, { backgroundColor: "#FF4500" }]} />
          <Text style={styles.texto}>Hipertensão estágio 1: até 159 por 99</Text>
        </View>

        <View style={styles.linha}>
          <Pressable style={[styles.p5, { backgroundColor: "#B22222" }]} />
          <Text style={styles.texto}>Hipertensão estágio 2: acima de 160 por 100</Text>
        </View>

        <View style={styles.linha}>
          <Pressable style={[styles.p6, { backgroundColor: "#8B0000" }]} />
          <Text style={styles.texto}>Crise hipertensiva: acima de 180 por 120</Text>
        </View>
      </View>
      <View style={styles.paibtn}>
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.fecharBotao}>
        <Text style={styles.fecharTexto}>Fechar</Text>
        </TouchableOpacity>
        </View>
    </View>
  </View>
</Modal>



    </View>
  );
}


