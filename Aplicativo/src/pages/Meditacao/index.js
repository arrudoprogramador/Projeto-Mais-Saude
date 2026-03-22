import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Modal, Image } from "react-native";
import { Audio } from "expo-audio";
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

// https://rapidapi.com/

export default function Meditacao() {
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [musicaAtualIndex, setMusicaAtualIndex] = useState(null);
  const sound = useRef(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    buscarMusicas();
    return () => {
      sound.current.unloadAsync();
    };
  }, []);

  const buscarMusicas = async () => {
    try {
      const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=meditation", {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "da7e2f3664mshe18c587d53f9170p17240djsn86b8f17b923e",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
        }
      });
      const json = await response.json();
      setMusicas(json.data);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    } finally {
      setLoading(false);
    }
  };

  const tocarMusica = async (index) => {
    try {
      await sound.current.unloadAsync();
      await sound.current.loadAsync({ uri: musicas[index].preview });
      await sound.current.playAsync();
      setMusicaAtualIndex(index);
      setModalVisible(true);
      setIsPlaying(true);
    } catch (error) {
      console.error("Erro ao tocar música:", error);
    }
  };

  const pausarMusica = async () => {
    try {
      await sound.current.pauseAsync();
        setIsPlaying(false);
    } catch (error) {
      console.error("Erro ao pausar música:", error);
    }
  };

  const reproduzirMusica = async () => {
    await sound.current.playAsync();
    setIsPlaying(true);
  };


  const proximaMusica = () => {
    const proximo = musicaAtualIndex + 1;
    if (proximo < musicas.length) {
      tocarMusica(proximo);
    }
  };

  const musicaAnterior = () => {
    const anterior = musicaAtualIndex - 1;
    if (anterior >= 0) {
      tocarMusica(anterior);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>{item.title} - {item.artist.name}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => tocarMusica(index)}>
        <Text style={styles.botaoTexto}>▶️</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#88c9bf" />
        <Text>Carregando músicas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>♫ Lista de Músicas de Meditação</Text>
      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {musicas[musicaAtualIndex] && (
              <>
                <Text style={styles.modalTitle}>🎵 {musicas[musicaAtualIndex].title}</Text>
                <Text style={styles.modalArtist}>👤 {musicas[musicaAtualIndex].artist.name}</Text>

                <View style={styles.modalButtons}>
                  <TouchableOpacity style={styles.modalButton} onPress={musicaAnterior}>
                    <Text style={styles.modalButtonText}>⏮️ Anterior</Text>
                  </TouchableOpacity>

                {
                  isPlaying ? (
                    <TouchableOpacity style={styles.modalButton} onPress={pausarMusica}>
                      <Text style={styles.modalButtonText}>⏸️ Pausar</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={styles.modalButton} onPress={reproduzirMusica}>
                      <Text style={styles.modalButtonText}>▶️ Iniciar</Text>
                    </TouchableOpacity>
                  )
                }
                  <TouchableOpacity style={styles.modalButton} onPress={proximaMusica}>
                    <Text style={styles.modalButtonText}>⏭️ Próxima</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.fechar} onPress={() => setModalVisible(false)}>
                  <Text style={{ color: "#fff" }}>❌ Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    
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
    </View>
  );
}
