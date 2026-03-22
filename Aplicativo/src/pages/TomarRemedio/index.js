import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {Text, View, Image, Alert, TextInput, TouchableOpacity,ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import style from "./style";

export default function TomarRemedio() {
  const navigation = useNavigation();

  const [image, setImage] = useState();
  const [internal, setInternal] = useState('');
  const [lastDose, setLastDose] = useState('');
  const [nomeMed, setNomeMed] = useState('');
  const [quantMed, setQuantMed] = useState('');
  const [doses, setDoses] = useState([]);

  Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

  async function pickImage() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permissão necessária", "Permita o acesso à câmera.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: false,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setImage(result.assets[0].uri);
    }
  }

  
  const formatTimeInput = (value, setter) => {
    let formatted = value.replace(/\D/g, '');
    if (formatted.length >= 3) {
      formatted = formatted.replace(/(\d{2})(\d{1,2})/, '$1:$2');
    }
    setter(formatted);
  };

  const isValidTime = (time) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
  };

  
  const scheduleDose = async () => {
  if (!isValidTime(lastDose) || !isValidTime(internal) || !nomeMed || !quantMed) {
    Alert.alert("Campos inválidos", "Preencha todos os campos corretamente.");
    return;
  }

  const [startHour, startMinute] = lastDose.split(":").map(Number);
  const [intHour, intMinute] = internal.split(":").map(Number);
  const intervalMs = (intHour * 60 + intMinute) * 60 * 1000;

  const dosesToSchedule = [];

  for (let i = 0; i < parseInt(quantMed); i++) {
    const doseTime = new Date();
    doseTime.setHours(startHour, startMinute, 0);
    doseTime.setTime(doseTime.getTime() + intervalMs * i);

    const formattedTime = doseTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    dosesToSchedule.push({
      horario: formattedTime,
      nome: nomeMed,
      foto: image,
      date: doseTime,
    });

    
    if (Platform.OS !== 'web') {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `Hora do ${nomeMed}`,
          body: `Dose ${i + 1} de ${nomeMed}`,
        },
        trigger: doseTime,
      });
    } else {
      console.log(`(WEB) Notificação ignorada para: Dose ${i + 1} - ${formattedTime}`);
    }
  }

  setDoses([...doses, ...dosesToSchedule]);
  Alert.alert("Sucesso", "Doses agendadas com sucesso!");
  navigation.navigate("DosesLista", { doses: [...doses, ...dosesToSchedule] });
};

  // Solicita permissões
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      const { status: notifStatus } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão necessária", "Ative a câmera para tirar fotos.");
      }
      if (notifStatus !== "granted") {
        Alert.alert("Permissão necessária", "Ative as notificações para receber alertas.");
      }
    })();
  }, []);

 return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={80} 
  >
    <View style={{ flex: 1 }}>
      <ScrollView
        style={style.container}
        contentContainerStyle={{ padding: 20, paddingBottom: 140 }} // reserva espaço pro footer
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style="auto" />

        <Text style={style.title}>Cadastro de Medicamento</Text>

        {image && (
          <View style={style.imageContainer}>
            <Image source={{ uri: image }} style={style.image} resizeMode="cover" />
          </View>
        )}

        <TextInput
          style={style.input}
          placeholder="Nome do medicamento"
          value={nomeMed}
          onChangeText={setNomeMed}
        />

        <TextInput
          style={style.input}
          placeholder="Horário da última dose (HH:MM)"
          value={lastDose}
          onChangeText={(text) => formatTimeInput(text, setLastDose)}
          maxLength={5}
        />

        <TextInput
          style={style.input}
          placeholder="Intervalo entre doses (HH:MM)"
          value={internal}
          onChangeText={(text) => formatTimeInput(text, setInternal)}
          maxLength={5}
        />

        <TextInput
          style={style.input}
          placeholder="Quantidade de doses"
          value={quantMed}
          onChangeText={setQuantMed}
          keyboardType="numeric"
        />

        <TouchableOpacity style={style.button} onPress={scheduleDose}>
          <Text style={style.buttonText}>Agendar Doses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[style.button, { backgroundColor: "#888", marginTop: 15 }]}
          onPress={() => navigation.navigate("DosesLista", { doses })}
        >
          <Text style={style.buttonText}>Ver Doses Agendadas</Text>
        </TouchableOpacity>
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
      <TouchableOpacity  style={style.buttonFooterCam} onPress={pickImage}>
            <Image source={require("../../../assets/camera.png")} style={{ width: 30, height: 30 }} />
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
  </KeyboardAvoidingView>
);

  
  
}
