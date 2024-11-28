import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MenuScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticação do usuário
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/CarManagerIcon.png')}
        style={styles.reactLogo}
      />
      <ThemedText type="subtitle" lightColor='#FFFFFF'>Faça o login para acessar</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#373841',
  },
  reactLogo: {
    height: 157,
    width: 302,
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
  },
});