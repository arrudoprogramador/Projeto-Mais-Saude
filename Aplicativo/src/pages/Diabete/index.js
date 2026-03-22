import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, Text, View, Button, Modal, TouchableOpacity, Image, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import style from "./style";  

export default function Diabete() {
    const [glicose, setGlicose] = useState(""); 
    const [resultado, setResultado] = useState(""); 
    const [imagemResultado, setImagemResultado] = useState(null); 
    const [showModal, setShowModal] = useState(false); 
    const [data, setData] = useState(""); 
    const [hora, setHora] = useState(""); 
    const [historico, setHistorico] = useState([]); 

    const [isJejum, setIsJejum] = useState(null); 

    const calcularDiabeteJejum = () => {
        if (!glicose) {
            alert("Por favor, insira o valor da glicose.");
            return;
        }

        let imagem = null;
        let res = "";

        if (glicose < 100) {
            res = 'Normal';
            imagem = require("../../../assets/diabete1.png");
        } else if (glicose >= 100 && glicose <= 125) {
            res = "Pré diabetes: glicemia alterada";
            imagem = require("../../../assets/diabete3.png");
        } else if (glicose > 126) {
            res = "Possível diabetes";
            imagem = require("../../../assets/diabete4.png");
        }

        setResultado(res);
        setImagemResultado(imagem);
        setIsJejum(true); 
        setShowModal(true); 
    };

    const calcularDiabeteSemJejum = () => {
        if (!glicose) {
            alert("Por favor, insira o valor da glicose.");
            return;
        }

        let imagem = null;
        let res = "";

        if (glicose < 140) {
            res = 'Normal';
            imagem = require("../../../assets/diabete1.png");
        } else if (glicose >= 140 && glicose <= 199) {
            res = "Pré diabetes: glicemia alterada";
            imagem = require("../../../assets/diabete3.png");
        } else if (glicose > 199) {
            res = "Possível diabetes";
            imagem = require("../../../assets/diabete4.png");
        }

        setResultado(res);
        setImagemResultado(imagem);
        setIsJejum(false);
        setShowModal(true); 
    };

    const getResultadoColor = () => {
        if (resultado.includes("Normal")) {
            return "#93c5fd"; // Azul claro
        } else if (resultado.includes("Pré diabetes")) {
            return "#2563eb"; // Azul escuro
        } else if (resultado.includes("Possível diabetes")) {
            return "#a62e2e"; // Vermelho
        } else {
            return "#e5e7eb"; // Cinza padrão caso não tenha resultado
        }
    };

    const finalizarRegistro = () => {
        if (data && hora) {
            const novoRegistro = {
                glicose,
                resultado,
                data,
                hora,
                imagem: imagemResultado,
            };

            setHistorico([novoRegistro, ...historico]);

            setShowModal(false);
            setGlicose("");
            setData(""); 
            setHora(""); 
        } else {
            alert("Por favor, preencha a data e a hora.");
        }
    };

    const cancelarRegistro = () => {
        setShowModal(false);
        setGlicose(""); 
        setData(""); 
        setHora(""); 
    };

    return (
        
        <View style={style.container}>
            <View style={style.conteudo}>
                <View style={style.inputContainer}>
                    <TextInput
                        style={style.input1}
                        placeholder="Valor da glicose"
                        keyboardType="numeric"   // Isso ativa o teclado numérico no celular
                        value={glicose}
                        onChangeText={(text) => {
                            // Aqui garantimos que só números entrem
                            const onlyNumbers = text.replace(/[^0-9]/g, '');
                            setGlicose(onlyNumbers);
                        }}
                    />
                </View>
            </View>

            <View style={style.botoes}>
                <TouchableOpacity style={style.button} onPress={calcularDiabeteJejum}>
                    <Text style={style.buttonText}>Estou em jejum</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={calcularDiabeteSemJejum}>
                    <Text style={style.buttonText}>Não estou em jejum</Text>
                </TouchableOpacity>
            </View>


            {/* Exibe o resultado após a inserção de data e hora */}
            {resultado && imagemResultado && (
                <View style={[style.resultado, { backgroundColor: getResultadoColor() }]}>
                    <Text style={style.resultText}>{resultado}</Text>
                    <Image source={imagemResultado} style={style.imageResult} />
                </View>
            )}

            {/* Modal para registrar a data e a hora */}
            <Modal
                transparent={true}
                visible={showModal}
                animationType="slide"
                onRequestClose={cancelarRegistro}
            >
                <View style={style.modalOverlay}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Complete seu registro de glicose</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Data (DD/MM/AAAA)"
                            keyboardType="numeric"
                            maxLength={10}
                            value={data}
                            onChangeText={(text) => {
                                const onlyNumbers = text.replace(/[^0-9]/g, '');
                                let formattedDate = onlyNumbers;

                                if (onlyNumbers.length >= 5) {
                                    formattedDate = `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}/${onlyNumbers.slice(4, 8)}`;
                                } else if (onlyNumbers.length >= 3) {
                                    formattedDate = `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}`;
                                }

                                setData(formattedDate);
                            }}
                        />

                        <TextInput
                            style={style.input}
                            placeholder="Horário (HH:MM)"
                            keyboardType="numeric"
                            maxLength={5}
                            value={hora}
                            onChangeText={(text) => {
                                // Remove tudo que não for número
                                const onlyNumbers = text.replace(/[^0-9]/g, '');
                                let formattedTime = onlyNumbers;

                                if (onlyNumbers.length >= 3) {
                                    formattedTime = `${onlyNumbers.slice(0, 2)}:${onlyNumbers.slice(2, 4)}`;
                                }

                                setHora(formattedTime);
                            }}
                        />

                        <Button title="Finalizar Registro" onPress={finalizarRegistro} />
                        <Button title="Voltar" onPress={cancelarRegistro} color="gray" />
                    </View>
                </View>
            </Modal>

            <FlatList
                data={historico}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={style.card}>
                        <View style={style.cardGroup}>
                            <Text style={style.cardTitle}>Glicose:</Text>
                            <Text style={style.cardText}>{item.glicose}</Text>
                        </View>

                        <View style={style.cardGroup}>
                            <Text style={style.cardTitle}>Resultado:</Text>
                            <Text style={style.cardText}>{item.resultado}</Text>
                        </View>

                        <View style={style.cardGroup}>
                            <Text style={style.cardTitle}>Data:</Text>
                            <Text style={style.cardText}>{item.data}</Text>
                        </View>

                        <View style={style.cardGroup}>
                            <Text style={style.cardTitle}>Hora:</Text>
                            <Text style={style.cardText}>{item.hora}</Text>
                        </View>

                        {item.imagem && (
                            <Image source={item.imagem} style={style.cardImage} />
                        )}
                    </View>
                )}
            />

           
            <StatusBar style="auto" />
        
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
