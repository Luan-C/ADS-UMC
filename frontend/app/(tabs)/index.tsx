import 'expo-router/entry';
import { Tabs } from 'expo-router';

export default function Index() {
  return (
    <Tabs>
      <Tabs.Screen name="Login" options={{ title: 'Login' }} />
      <Tabs.Screen name="Menu" options={{ title: 'Menu' }} />
      <Tabs.Screen name="Cadastro" options={{ title: 'Cadastro' }} />
      <Tabs.Screen name="CadastroCarro" options={{ title: 'CadastroCarro' }} />
    </Tabs>
  );
}