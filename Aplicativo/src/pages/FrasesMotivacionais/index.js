import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';  // Corrigido o nome da importação
import { StyleSheetContext } from 'styled-components';

// Lista de frases motivacionais
const frases = [
  "O único modo de fazer um ótimo trabalho é amar o que você faz. Quando você coloca seu coração e sua alma em algo, não há limites para o que você pode alcançar. A paixão é o motor que move a excelência, e a excelência é o que transforma uma ideia em algo incrível.",
  "Acredite em si mesmo e tudo será possível. O primeiro passo para alcançar seus sonhos é acreditar que você é capaz. Quando você tem confiança no seu próprio potencial, nenhuma barreira parece grande demais para ser superada.",
  "Não espere por uma oportunidade, crie uma. Às vezes, as oportunidades não batem à nossa porta, e é nesse momento que precisamos agir. Crie seu próprio caminho, construa suas próprias oportunidades e transforme o impossível em possível.",
  "Seja a mudança que você deseja ver no mundo. Em um mundo que muitas vezes parece estar em constante turbulência, a verdadeira transformação começa com cada um de nós. Se você deseja um mundo melhor, comece sendo essa mudança, com suas atitudes, ações e pensamentos.",
  "A vida começa onde sua zona de conforto termina. Nada de grandioso acontece quando estamos confortáveis. O crescimento só acontece quando desafiamos a nós mesmos, quando saímos da nossa zona de conforto e enfrentamos o desconhecido com coragem e determinação.",
  "A persistência é o caminho do êxito. O sucesso não vem da noite para o dia, mas sim da persistência diária, da vontade de seguir em frente mesmo quando as coisas ficam difíceis. Quando você continua tentando, independentemente das falhas, você se aproxima cada vez mais do seu objetivo.",
  "O único limite para o nosso sucesso de amanhã são nossas dúvidas de hoje. O maior obstáculo que podemos enfrentar na vida é o medo de falhar. Quando deixamos nossas dúvidas controlarem nossas ações, bloqueamos nosso próprio sucesso. Acredite no seu potencial e vá além do que você imagina ser possível.",
  "Acredite em seus sonhos e eles se tornarão realidade. Quando você acredita firmemente no que deseja alcançar, o universo começa a trabalhar ao seu favor. Sonhos não são apenas desejos vazios, são o ponto de partida para grandes conquistas que só se tornam realidade quando você tem coragem de persegui-los.",
  "O maior erro que você pode cometer é ter medo de cometer erros. Errar é uma parte fundamental do processo de aprendizagem e crescimento. Quando temos medo de falhar, acabamos nos limitando e deixando de tentar. O verdadeiro fracasso está em não tentar, então não tenha medo de errar e aprenda com cada experiência.",
  "Faça acontecer, não espere acontecer. O futuro não é algo que vai cair no seu colo. Você tem que agir, planejar e trabalhar em direção aos seus objetivos. A verdadeira diferença é feita por aqueles que tomam a iniciativa e fazem acontecer, em vez de esperar que as coisas aconteçam por conta própria."
];


export default function App() {
  const [indexInicio, setIndexInicio] = useState(0); 
  const [fraseAtual, setFraseAtual] = useState(frases[0]);  // Armazenar uma única frase exibida

  // Função para trocar a frase exibida
  const trocarFrase = () => {
    let novoIndexInicio = indexInicio + 1;

    if (novoIndexInicio >= frases.length) {
      novoIndexInicio = 0; 
    }

    setIndexInicio(novoIndexInicio);
    setFraseAtual(frases[novoIndexInicio]);  // Atualiza com a próxima frase
  };

  return (
    // Adicionando o ImageBackground
    <ImageBackground 
      source={require('../../../assets/teste.jpg')}  // Substitua pelo caminho da sua imagem
      style={styles.container}
      resizeMode="cover"  // Faz a imagem cobrir todo o espaço disponível
    >
      {/* <Text style={styles.titulo}>Filosofia Diária</Text> */}

      {/* Exibe uma única frase dentro de um card */}
      <View style={styles.card}>
        <Text style={styles.frase}>{fraseAtual}</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={trocarFrase}>
        <Text style={styles.botaoTexto}>Trocar Frase</Text>
      </TouchableOpacity>
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
    </ImageBackground>

    
  );
}
