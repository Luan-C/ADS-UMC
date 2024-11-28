import 'expo-router/entry';
import { Tabs } from 'expo-router';

export default function Index() {
  return (
    <Tabs>
      <Tabs.Screen name="LoginScreen" options={{ title: 'LoginScreen' }} />
      <Tabs.Screen name="MenuScreen" options={{ title: 'MenuScreen' }} />
    </Tabs>
  );
}