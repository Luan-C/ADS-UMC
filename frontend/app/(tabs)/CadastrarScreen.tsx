import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const router = useRouter();

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticação do usuário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Password:', password);
    //router.push('/MenuScreen');
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/CarManagerIcon.png')}
        style={styles.reactLogo}
      />
      <ThemedText type="subtitle" lightColor='#FFFFFF'>Cadastre-se para acessar</ThemedText>

    
      <View style={styles.inputContainer}>
      <TextInput 
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          keyboardType="default"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="white"
        />
      </View>

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
    marginBottom: 70,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    height: 45,
    borderColor: '#494C6B',
    backgroundColor: '#494C6B',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#373841',
  },
  link: {
    color: '#007bff',
  },
  sair: {
    height: 50,
    width: 50,
    marginTop: 187,
    alignItems: 'flex-end',
  },
});