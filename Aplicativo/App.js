import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';
import Sobre from './src/pages/Sobre';
import IMC from './src/pages/IMC';
import Frutas from './src/pages/Frutas';
import beberAgua from './src/pages/BeberAgua';
import Diabete from './src/pages/Diabete';
import FrasesMotivacionais from './src/pages/FrasesMotivacionais';
import Vacinas from './src/pages/Vacinas';
import Pressao from './src/pages/Pressao';
import Meditacao from './src/pages/Meditacao';
import TomarRemedio from './src/pages/TomarRemedio';
import DosesLista from './src/pages/TomarRemedio/doses';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Perfil from './src/pages/Perfil';
import EscolherLogin from './src/pages/EscolherLogin';
import GradientHeader from './src/pages/componentes/gradiente';



const Stack = createNativeStackNavigator();

export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EscolherLogin">

      <Stack.Screen name="Home" component={Home} 
        options={{
          title: "Home",
          headerStyle:{backgroundColor: "#4C9BE5"},//Fundo
          headerTintColor: "#4C9BE5", //Letra
          headerShown: false, //Esconder]
                    headerBackground: () => <GradientHeader />

        }}/>

      <Stack.Screen name="DosesLista" component={DosesLista} 
        options={{
          title: "DosesLista",
          headerStyle:{backgroundColor: "#4C9BE5"},//Fundo
          headerTintColor: "#2175b5", //Letra
          headerTitleAlign: 'center',
          headerTintColor: "#fff", //Letra
                    headerBackground: () => <GradientHeader />

        }}/>
        
        <Stack.Screen name="Sobre" component={Sobre}
        options={{
          title: "Sobre",
          headerTitleAlign: 'center',
          headerStyle:{backgroundColor: "#4C9BE5"},//Fundo
          headerTintColor: "#fff", //Letra
                    headerBackground: () => <GradientHeader />

                                  
        }}/>
      
        <Stack.Screen name="IMC" component={IMC}
        options={{
          title: "Faça seu IMC",
          headerTitleAlign: 'center',
          headerStyle:{backgroundColor: "#4C9BE5"},//Fundo
          headerTintColor: "#fff", //Letra
          height: 70,  // Aumenta um pouco o cabeçalho
          padding: 20,
          borderBottomLeftRadius: 30,  // Bordas arredondadas
          borderBottomRightRadius: 30,
                    headerBackground: () => <GradientHeader />

        }}/>


        <Stack.Screen name="Frutas" component={Frutas}
          options={{
            title: "Calorias de alimentos",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff", 
                      headerBackground: () => <GradientHeader />

          }}/>


        <Stack.Screen name="BeberAgua" component={beberAgua}
          options={{
            title: "Consumo de Água Diário",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",    
                      headerBackground: () => <GradientHeader />

          }}/>

         <Stack.Screen name="Diabete" component={Diabete}
          options={{
            title: "Diabete",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",   
                      headerBackground: () => <GradientHeader />
           
          }}/>

          <Stack.Screen name="Pressao" component={Pressao}
          options={{
            title: "Pressao",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",      
                      headerBackground: () => <GradientHeader />
        
          }}/>

          <Stack.Screen name="Meditacao" component={Meditacao}
          options={{
            title: "Meditação",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",
                      headerBackground: () => <GradientHeader />
              
          }}/>

        <Stack.Screen name="FrasesMotivacionais" component={FrasesMotivacionais}
          options={{
            title: "Frases Motivacionais",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",  
                      headerBackground: () => <GradientHeader />
               
        }}/>

        <Stack.Screen name="Vacinas" component={Vacinas}
          options={{
            title: "Vacinas",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",  
                      headerBackground: () => <GradientHeader />
         
        }}/>

        

        <Stack.Screen name="TomarRemedio" component={TomarRemedio}
          options={{
            title: "Lembretes de Remédio",
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: "#4C9BE5", },
            headerTintColor: "#fff", 
                      headerBackground: () => <GradientHeader />

          }}/>  
        
      

        <Stack.Screen name="Login" component={Login}
          options={{
            title: "Login",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",  
                      headerBackground: () => <GradientHeader />

        }}/>

        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
            title: "Cadastro",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",    
                      headerBackground: () => <GradientHeader />
 
        }}/>

       <Stack.Screen name="Perfil" component={Perfil}
          options={{
            title: "Perfil",
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: "#4C9BE5"},
            headerTintColor: "#fff",    
                      headerBackground: () => <GradientHeader />
 
        }}/>

        <Stack.Screen name="EscolherLogin" component={EscolherLogin}
        options={{
          title: " ",
          headerTitleAlign: 'center',
          headerStyle:{backgroundColor: "#4C9BE5"},//Fundo
          headerTintColor: "#fff", //Letra
          headerShown: false, //Esconder]
          headerBackVisible: false, // Esconde o botão de voltar (React Navigation 6.x+)
          headerLeft: () => null, // Garante que não apareça nada no lado esquerdo
                 headerBackground: () => <GradientHeader />

       }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
