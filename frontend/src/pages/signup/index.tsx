import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { styles } from './styles'
import Logo from "../../assets/logo.png";

export default function Signup() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const router = useRouter();

  const handleSignup = () => {
    // Aqui você pode adicionar a lógica para autenticação do usuário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Password:', password);
    //router.push('/MenuScreen');
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
      <Text style={styles.textButton}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

