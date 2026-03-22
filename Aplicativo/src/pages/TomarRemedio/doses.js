import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import style from "./style2";


export default function DosesLista() {
  const navigation = useNavigation();
  const route = useRoute();
  const { doses } = route.params || { doses: [] };

  return (
    <View style={style.container}>
      <Text style={style.title}>📋 Doses Agendadas</Text>

      <FlatList
        data={doses}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ ...style.listContainer, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={style.doseItem}>
            <Image source={{ uri: item.foto }} style={style.image} />
            <View style={style.doseInfo}>
              <Text style={style.doseNome}>{item.nome}</Text>
              <Text style={style.doseHorario}>{index + 1}ª dose: {item.horario}</Text>
            </View>
          </View>
        )}
      />

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
