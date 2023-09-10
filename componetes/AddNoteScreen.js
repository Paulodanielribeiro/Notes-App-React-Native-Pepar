import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, RadioButton, RadioButtonGroup, DatePicker } from 'react-native-paper'; // Importe os componentes necessários

const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('Pendente');
  const [taskDate, setTaskDate] = useState('');

  const handleAddTask = async () => {
    // Verifique se o nome da tarefa não está vazio
    if (!taskName.trim()) {
      alert('Por favor, insira um nome para a tarefa.');
      return;
    }

    // Crie um objeto de tarefa com nome, descrição, status e data
    const newTask = {
      name: taskName,
      description: taskDescription,
      status: taskStatus,
      date: taskDate,
    };

    try {
      // Obtenha as tarefas existentes do AsyncStorage (se houver)
      const existingTasksJson = await AsyncStorage.getItem('tasks');
      const existingTasks = existingTasksJson ? JSON.parse(existingTasksJson) : [];

      // Adicione a nova tarefa à lista de tarefas existentes
      existingTasks.push(newTask);

      // Salve a lista atualizada de tarefas no AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify(existingTasks));

      // Limpe os campos após adicionar a tarefa
      setTaskName('');
      setTaskDescription('');
      setTaskStatus('Pendente');
      setTaskDate('');

      // Volte para a tela anterior (ou qualquer outra ação desejada)
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao adicionar a tarefa:', error);
    }
  };

  const statusOptions = ['Pendente', 'Em Progresso', 'Concluída', 'Cancelada']; // Adicione mais opções de status conforme necessário

  return (
    <View style={{ padding: 16 }}>
      <Text>Adicionar Tarefa</Text>
      <TextInput
        label="Nome da Tarefa"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        label="Descrição da Tarefa"
        value={taskDescription}
        onChangeText={setTaskDescription}
        multiline
      />
      <RadioButton.Group onValueChange={(value) => setTaskStatus(value)} value={taskStatus}>
        <View>
          <Text>Status da Tarefa</Text>
          {statusOptions.map((option) => (
            <RadioButton.Item key={option} label={option} value={option} />
          ))}
        </View>
      </RadioButton.Group>
      <DatePicker
        label="Data (opcional)"
        value={taskDate}
        mode="date"
        onDateChange={(date) => setTaskDate(date)}
      />
      <Button mode="contained" onPress={handleAddTask}>
        Adicionar Tarefa
      </Button>
    </View>
  );
};

export default AddTaskScreen;
