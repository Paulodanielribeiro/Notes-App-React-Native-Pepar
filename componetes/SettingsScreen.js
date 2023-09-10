import React from 'react';
import { View, Text, Switch } from 'react-native';
import { List, Divider } from 'react-native-paper';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Configurações</Text>

      {/* Configuração de Notificações */}
      <List.Item
        title="Ativar Notificações"
        right={() => (
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
          />
        )}
      />
      <Divider />

      {/* Configuração de Modo Escuro */}
      <List.Item
        title="Modo Escuro"
        right={() => (
          <Switch
            value={darkModeEnabled}
            onValueChange={toggleDarkMode}
          />
        )}
      />
      <Divider />
    </View>
  );
};

export default SettingsScreen;
