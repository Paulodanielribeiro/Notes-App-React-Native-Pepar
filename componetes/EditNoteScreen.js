import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, DatePicker, Divider, RadioButton, RadioButtonGroup } from 'react-native-paper';

const EditNoteScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState(route.params.note.title);
  const [content, setContent] = useState(route.params.note.content);
  const [editDate, setEditDate] = useState(new Date()); // Inicialize com a data atual
  const [category, setCategory] = useState(route.params.note.category || ''); 
  const [priority, setPriority] = useState(route.params.note.priority || 'Normal'); 
  const [isFavorite, setIsFavorite] = useState(route.params.note.isFavorite || false);

  const handleSaveNote = () => {
   
    const originalNote = route.params.note;

    
    const updatedNote = {
      ...originalNote,
      title: title,
      content: content,
      editDate: editDate,
      priority: priority, 
      isFavorite: isFavorite, 
      
    };

    // Chame a função de callback para salvar a nota editada
    route.params.onEditNote(updatedNote);

    // Volte para a tela anterior
    navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Editar Nota</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="Título" />
      <TextInput value={content} onChangeText={setContent} placeholder="Conteúdo" multiline />
      
      {/* Componente DatePicker do React Native Paper para a data de edição */}
      <DatePicker
        label="Data de Edição"
        value={editDate}
        mode="date"
        onDateChange={setEditDate}
      />

      {/* Campo de Categoria */}
      <TextInput
        value={category}
        onChangeText={setCategory}
        placeholder="Categoria"
      />

      {/* Campo de Prioridade */}
      <RadioButton.Group onValueChange={setPriority} value={priority}>
        <View>
          <Text>Prioridade</Text>
          <RadioButton.Item label="Baixa" value="Baixa" />
          <RadioButton.Item label="Normal" value="Normal" />
          <RadioButton.Item label="Alta" value="Alta" />
        </View>
      </RadioButton.Group>

      {/* Campo de Favorito */}
      <RadioButton.Group onValueChange={setIsFavorite} value={isFavorite}>
        <View>
          <Text>Favorito</Text>
          <RadioButton.Item label="Sim" value={true} />
          <RadioButton.Item label="Não" value={false} />
        </View>
      </RadioButton.Group>

      {/* Divider para separação */}
      <Divider style={{ marginVertical: 16 }} />

      {/* Botões para salvar e cancelar */}
      <Button mode="contained" onPress={handleSaveNote}>
        Salvar Edições
      </Button>
      <Button mode="outlined" onPress={() => navigation.goBack()} style={{ marginTop: 8 }}>
        Cancelar
      </Button>
    </View>
  );
};

export default EditNoteScreen;
