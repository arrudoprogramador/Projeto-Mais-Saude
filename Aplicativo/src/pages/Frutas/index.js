import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, Pressable, Text, View, Image, FlatList, Button, Modal, TouchableOpacity } from "react-native";
import style from "./style";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function Frutas() {
  const navigation = useNavigation();

  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa
  const [alimentos, setAlimentos] = useState([]); // Lista de alimentos
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  // Função para buscar alimentos na API
  const fetchAlimentos = async () => {
    if (searchTerm.trim() === "") return;

    setLoading(true);
    setError(null);

    const apiUrl = "https://trackapi.nutritionix.com/v2/search/instant"; // URL corrigida
    const apiId = "36ee3035"; // ID da API
    const apiKey = "46c68e1cd97f1cc785ee997d942cf266"; // Chave da API

    try {
      const response = await fetch(
        `${apiUrl}?query=${searchTerm}`,
        {
          method: "GET",
          headers: {
            "x-app-id": apiId,
            "x-app-key": apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Falha ao buscar alimentos");
      }

      const data = await response.json();

      console.log(data);

      // Extraímos os dados essenciais
      const alimentosEssenciais = data.branded.map((item) => ({
        nome: item.food_name, // Nome do alimento
        calorias: item.nf_calories, // Calorias
        imagem: item.photo?.thumb || "https://via.placeholder.com/150", // Imagem com fallback caso não haja imagem
      }));

      setAlimentos(alimentosEssenciais); // Armazenamos os alimentos essenciais
    } catch (err) {
      setError(err.message); // Armazena erro se houver
    } finally {
      setLoading(false);
    }
  };

  // Função chamada sempre que o termo de pesquisa muda
  useEffect(() => {
    fetchAlimentos();
  }, [searchTerm]); // Reexecuta a busca quando o termo de pesquisa muda

  return (
    <View style={style.container}>
      {/* Campo de pesquisa */}
      <TextInput
        style={style.searchInput}
        placeholder="Pesquise um alimento..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)} // Atualiza o termo de pesquisa
      />
      <Button title="Buscar" onPress={fetchAlimentos} />
      
      {/* Exibição do estado de carregamento ou erro */}
      {loading ? (
        <Text>Carregando...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : alimentos.length === 0 ? (
        <Text>Nenhum alimento encontrado</Text>
      ) : (
        <FlatList
          data={alimentos}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={style.list}
          renderItem={({ item }) => (
            <Pressable style={style.card} onPress={() => openModal(item)}>
              {/* Exibindo a imagem do alimento */}
              <Image
                source={{ uri: item.imagem }} // Usando a URL da imagem
                style={style.image}
              />
              <Text style={style.text}>{item.nome}</Text> {/* Nome do alimento */}
              <Text style={style.text}>Calorias: {item.calorias}</Text> {/* Calorias */}
            </Pressable>
          )}
        />
      )}

      {/* Modal de detalhes do item */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={style.modalOverlay}>
          <View style={style.modalContent}>
            {/* Exibindo a imagem no modal */}
            {selectedItem?.imagem && (
              <Image
                source={{ uri: selectedItem.imagem }} // Usando a URL da imagem
                style={style.modalImage}
              />
            )}
            <Text style={style.modalTitle}>Detalhes do Item</Text>
            <Text style={style.modalText}>Nome: {selectedItem?.nome}</Text>
            <Text style={style.modalText}>Calorias: {selectedItem?.calorias} kcal</Text>
            
            <TouchableOpacity style={style.modalButton} onPress={closeModal}>
              <Text style={style.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


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

      <StatusBar style="auto" />
    </View>
  );
}
