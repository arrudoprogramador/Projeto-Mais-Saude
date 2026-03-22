import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView, TouchableOpacity, Pressable } from "react-native";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const navigation = useNavigation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const botoes = [
        { nome: "IMC", imagem: require("../../../assets/imc.jpg"), tela: "IMC" },
        { nome: "Calorias de alimentos", imagem: require("../../../assets/frutas.png"), tela: "Frutas" },
        { nome: "Filosofia Diária", imagem: require("../../../assets/Filosofia.png"), tela: "FrasesMotivacionais" },
        { nome: "Diabete", imagem: require("../../../assets/diabete.png"), tela: "Diabete" },
        { nome: "Meditação", imagem: require("../../../assets/meditacao.png"), tela: "Meditacao" },
        { nome: "Pressão", imagem: require("../../../assets/Pressao.png"), tela: "Pressao" },
        { nome: "Consumo de Água", imagem: require("../../../assets/beberAgua.png"), tela: "BeberAgua" },
        { nome: "Vacinas", imagem: require("../../../assets/vacinas.png"), tela: "Vacinas" },
        { nome: "Tomar Remédio", imagem: require("../../../assets/remedio.png"), tela: "TomarRemedio" },
        { nome: "Sobre", imagem: require("../../../assets/logo.png"), tela: "Sobre" },
    ];

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

   if (!isAuthenticated) {
        return (
            <View style={style.container}>
                <LinearGradient
                    colors={['#4C9BE5', '#87CEEB']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={style.cabecalho}
                    >
                    <View>
                        <Text style={style.text_title}>+Saúde</Text>
                        <Text style={style.item}>Sem login</Text>
                    </View>
                    </LinearGradient>

                <View>
                    {/* <Image
                    source={require('../../../assets/icon.png')}
                    style={style.perfil}
                    /> */}
                </View>

                
                <ScrollView contentContainerStyle={style.scrollContent}>

                    <View style={style.grid}>
                        <Pressable 
                            style={style.button} 
                            onPress={() => navigation.navigate("IMC")}
                        >
                            <Image source={require("../../../assets/imc.jpg")} style={style.icon} />
                            <Text style={style.buttonText}>IMC</Text>
                        </Pressable>

                        <Pressable 
                            style={style.button} 
                            onPress={() => navigation.navigate("FrasesMotivacionais")}
                        >
                            <Image source={require("../../../assets/Filosofia.png")} style={style.icon} />
                            <Text style={style.buttonText}>Filosofia Diária</Text>
                        </Pressable>

                        <Pressable 
                            style={style.button} 
                            onPress={() => navigation.navigate("Frutas")}
                        >
                            <Image source={require("../../../assets/frutas.png")} style={style.icon} />
                            <Text style={style.buttonText}>Alimentos saudáveis</Text>
                        </Pressable>

                        <Pressable 
                            style={style.button} 
                            onPress={() => navigation.navigate("Sobre")}
                        >
                            <Image source={require("../../../assets/logo.png")} style={style.icon} />
                            <Text style={style.buttonText}>Sobre os devs</Text>
                        </Pressable>

                    </View>
                </ScrollView>

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
     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
       <Image
         source={require('../../../assets/usuario.png')}
         style={style.footerIcon}
       />
     </TouchableOpacity>
   </View>
 </LinearGradient>

                <StatusBar style="light" />
            </View>
        );
    } else {
        return (
            <View style={style.container}>
                
            <LinearGradient
                    colors={['#4C9BE5', '#87CEEB']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={style.cabecalho}
                    >
                    <View>
                        <Text style={style.text_title}>+Saúde</Text>
                    </View>
                    </LinearGradient>         
                
                <ScrollView contentContainerStyle={style.scrollContent}>
                    <Text style={style.text}>Escolha um para checar sua saúde</Text>

                    <View style={style.grid}>
                        {botoes.map((item) => (
                            <Pressable 
                                key={item.nome}
                                style={style.button} 
                                onPress={() => navigation.navigate(item.tela)}
                            >
                                <Image source={item.imagem} style={style.icon} />
                                <Text style={style.buttonText}>{item.nome}</Text>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>

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


                <StatusBar style="light" />
            </View>
        );
    }
}
