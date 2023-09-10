import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Divider, List, IconButton } from 'react-native-paper';
import moment from 'moment'; // Importe a biblioteca moment

const ViewNoteScreen = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState(moment().format('DD/MM/YYYY'));

  useEffect(() => {
    // Atualize a data atual a cada segundo
    const interval = setInterval(() => {
      setCurrentDate(moment().format('DD/MM/YYYY'));
    }, 1000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  const note = {
    title: 'Título da Nota',
    content: 'Conteúdo da Nota',
    date: currentDate, // Use a data atual em tempo real
    category: 'Trabalho',
    priority: 'Alta',
    // Adicione mais campos da nota conforme necessário
  };

  const handleEditNote = () => {
    // Navegue para a tela de edição de nota
    navigation.navigate('EditNote', { note });
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Visualizar Nota</Text>
      <Divider />

      <List.Item
        title="Título"
        description={note.title}
        left={() => <List.Icon icon="note" />}
      />
      <Divider />

      <List.Item
        title="Conteúdo"
        description={note.content}
        left={() => <List.Icon icon="text" />}
      />
      <Divider />

      {/* Campo de Data */}
      <List.Item
        title="Data"
        description={note.date}
        left={() => <List.Icon icon="calendar" />}
      />
      <Divider />

      {/* Campo de Categoria */}
      <List.Item
        title="Categoria"
        description={note.category}
        left={() => <List.Icon icon="folder" />}
      />
      <Divider />

      {/* Campo de Prioridade */}
      <List.Item
        title="Prioridade"
        description={note.priority}
        left={() => <List.Icon icon="star" />}
      />
      <Divider />

     
      
      <Button
        mode="contained"
        onPress={handleEditNote}
        style={{ marginTop: 16 }}
      >
        Editar Nota
      </Button>

      <IconButton
        icon="arrow-left"
        color="#333"
        size={24}
        style={{ marginTop: 16 }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ViewNoteScreen;
