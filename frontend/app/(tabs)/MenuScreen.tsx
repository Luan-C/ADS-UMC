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
      <TouchableOpacity onPress={handleLogin} style={styles.cadastrar}>
        <ThemedText type="defaultSemiBold" darkColor='#00000'>CADASTRAR</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.estoque}>
        <ThemedText type="defaultSemiBold" darkColor='#00000'>ESTOQUE</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Image
          source={require('@/assets/images/logout.png')}
          style={styles.sair}
        />
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  cadastrar: {
    backgroundColor: '#2B3BEB',
    paddingVertical: 50,
    paddingHorizontal: 120,
    borderRadius: 10,
    marginTop: 100,
    alignItems: 'center',
  },
  estoque: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 50,
    paddingHorizontal: 130,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  sair: {
    height: 50,
    width: 50,
    marginTop: 140,
    alignItems: 'flex-end',
  },
});