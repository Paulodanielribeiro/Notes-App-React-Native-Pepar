import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Lista de Notas</Text>
      <Card>
        <Card.Title title="Título da Nota" />
        <Card.Content>
          <Text>Conteúdo da Nota</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('ViewNote')}>Ver</Button>
        </Card.Actions>
      </Card>
      <Button onPress={() => navigation.navigate('AddNote')}>Adicionar Nota</Button>
    </View>
  );
};

export default HomeScreen;
