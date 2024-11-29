import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import Logo from "../../assets/logo.png";

export default function Signup({ navigation }: { navigation: any }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Cadastre-se para acessar</Text>


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

      <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text style={styles.textButton}>Finalizar cadastro e acessar</Text>
      </TouchableOpacity>
    </View>
  );
}
