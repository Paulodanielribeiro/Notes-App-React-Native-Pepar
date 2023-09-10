import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './componetes/HomeScreen';
import AddNoteScreen from './componetes/AddNoteScreen';
import ViewNoteScreen from './componetes/ViewNoteScreen';
import EditNoteScreen from './componetes/EditNoteScreen';
import SettingsScreen from './componetes/SettingsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
        <Stack.Screen name="ViewNote" component={ViewNoteScreen} />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
