import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';


export default function EscolherLogin() {
  const navigation = useNavigation();


  return (
    <View style={style.container}>
      <StatusBar style="auto" />

       {/* Cabeçalho com gradiente */}
      <LinearGradient
        colors={['#4C9BE5', '#87CEEB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={style.cabecalho}  // ⚠️ mantém estilo com altura, borderRadius, etc.
      >
        <Text style={style.text}>
          +Saúde{'\n'}bem-vindo(a){'\n'}
        </Text>
        <Text style={style.textsub}>
          App que auxilia na saúde
        </Text>
      </LinearGradient>

      <View style={style.content}>
          <Image
            style={style.avatar}
            source={require('../../../assets/phone.jpg')}
              resizeMode="cover" // ou "contain"

          />
      </View>

      <View style={style.buttons}>
      <TouchableOpacity style={style.button_semiazul} onPress={() => navigation.navigate("Home")}>
          <Text style={style.buttonTextSemiAzul}>Entrar como convidado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button_azul} onPress={() => navigation.navigate("Login")}>
          <Text style={style.buttonTextAzul}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button_azul} onPress={() => navigation.navigate("Cadastro")}>
          <Text style={style.buttonTextAzul}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
