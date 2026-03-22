import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sobre o App</Text>
        <Image
          source={require('../../../assets/logo.png')} // Adicione uma imagem de logo ou algo representativo
          style={styles.logo}
        />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          Este aplicativo foi criado para ajudá-lo a manter uma vida saudável. Aqui, você pode acompanhar informações sobre sua saúde, obter dicas de alimentação e meditação, além de monitorar seus hábitos diários.
        </Text>
        <Text style={styles.subtitle}>Nosso objetivo é promover o bem-estar de forma prática e simples!</Text>
      </View>

      

      
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
                  
                  
                  <StatusBar style="auto" />
    </View>
  );
}
