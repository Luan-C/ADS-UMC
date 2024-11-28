import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticação do usuário
    console.log('Email:', email);
    console.log('Password:', password);
    router.push('/MenuScreen');
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/CarManagerIcon.png')}
        style={styles.reactLogo}
      />
      <ThemedText type="subtitle" lightColor='#FFFFFF'>Faça o login para acessar</ThemedText>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <ThemedText type="defaultSemiBold" lightColor='#FFFFFF'>Entrar</ThemedText>
      </TouchableOpacity>

      <ThemedView style={styles.footer}>
        <ThemedText lightColor='#FFFFFF'>
        Não tem login ? <Text style={styles.link} >Cadastre-se</Text>
        </ThemedText>
      </ThemedView>
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
  input: {
    height: 45,
    borderColor: '#494C6B',
    backgroundColor: '#494C6B',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#434DC0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#373841',
  },
  link: {
    color: '#007bff',
  },
});