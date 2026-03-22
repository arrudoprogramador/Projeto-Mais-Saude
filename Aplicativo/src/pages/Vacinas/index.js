import React, { useState } from 'react';
import { Modal, Button, TextInput, View, Text, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';

export default function Vacinas() {
  const navigation = useNavigation();

  const [vacinas, setVacinas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    ubs: '',
    horario: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (name, value) => {
    let formattedValue = value;
    if (name === 'data') {
      formattedValue = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    } else if (name === 'horario') {
      formattedValue = value.replace(/(\d{2})(\d{2})/, '$1:$2');
    }
    setFormData((prevState) => ({ ...prevState, [name]: formattedValue }));
  };

  const adicionarOuEditarVacina = () => {
    if (!formData.nome || !formData.data || !formData.ubs || !formData.horario) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    const novaVacina = {
      nome: formData.nome.trim(),
      data: formData.data.trim(),
      ubs: formData.ubs.trim(),
      horario: formData.horario.trim()
    };

    if (editIndex !== null) {
      const novasVacinas = [...vacinas];
      novasVacinas[editIndex] = novaVacina;
      setVacinas(novasVacinas);
      setEditIndex(null);
    } else {
      setVacinas([...vacinas, novaVacina]);
    }

    setFormData({ nome: '', data: '', ubs: '', horario: '' });
    setShowModal(false);
    setError('');
  };

  const excluirVacina = (index) => {
    const novasVacinas = vacinas.filter((_, i) => i !== index);
    setVacinas(novasVacinas);
  };

  const editarVacina = (index) => {
    setFormData(vacinas[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <View style={style.container}>
      <Text style={style.header}>Minhas Vacinas</Text>

      <FlatList
        data={vacinas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={style.card}>
            <Text style={style.cardHeader}>{item.nome}</Text>
            <View style={style.cardBody}>
              <Text><Text style={style.bold}>Vacina:</Text> {item.nome}</Text>
              <Text><Text style={style.bold}>Data:</Text> {item.data}</Text>
              <Text><Text style={style.bold}>UBS:</Text> {item.ubs}</Text>
              <Text><Text style={style.bold}>Horário:</Text> {item.horario}</Text>
            </View>
            <View style={style.cardButtons}>
              <Button style={style.buttomBlue} color="#4C9BE5" title="Editar" onPress={() => editarVacina(index)} />
              <Button style={style.buttomRed} title="Excluir" color="#FF0000" onPress={() => excluirVacina(index)} />
            </View>
          </View>
        )}
      />

      {error ? <Text style={style.errorText}>{error}</Text> : null}

      <TouchableOpacity style={style.addButton} onPress={() => setShowModal(true)}>
        <Text style={style.addButtonText}>Adicionar Vacina</Text>
      </TouchableOpacity>
      


      <Modal transparent={true} visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)}>
        <View style={style.modalOverlay}>
          <View style={style.modalContent}>
            <Text style={style.modalTitle}>{editIndex !== null ? 'Editar Vacina' : 'Adicionar Nova Vacina'}</Text>

            <TextInput
              style={style.input}
              placeholder="Nome da vacina"
              value={formData.nome}
              onChangeText={(text) => handleInputChange('nome', text)}
            />
            <TextInput
              style={style.input}
              placeholder="Data (DD/MM/AAAA)"
              value={formData.data}
              onChangeText={(text) => handleInputChange('data', text.replace(/\D/g, ''))}
              keyboardType="numeric"
              maxLength={10}
            />
            <TextInput
              style={style.input}
              placeholder="UBS"
              value={formData.ubs}
              onChangeText={(text) => handleInputChange('ubs', text)}
            />
            <TextInput
              style={style.input}
              placeholder="Horário (HH:MM)"
              value={formData.horario}
              onChangeText={(text) => handleInputChange('horario', text.replace(/\D/g, ''))}
              keyboardType="numeric"
              maxLength={5}
            />

            <View style={style.modalButtons}>
              <Button title="Fechar" onPress={() => setShowModal(false)} />
              <Button title={editIndex !== null ? "Salvar" : "Adicionar"} onPress={adicionarOuEditarVacina} />
            </View>
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
    </View>
  );
}