import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import Logo from "../../assets/logo.png";
import { api } from '../../server/api';

export default function Signup({ navigation }: { navigation: any }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateFields = () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return false;
    }

    if (password.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateFields()) {
      return;
    }

    setLoading(true)

    try {
      const response = await api.post("/signup", { name, email, password });
      console.log(response.data.message);
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");

      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível realizar o cadastro. Tente novamente.");
    } finally {
      setLoading(false);
    }
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
          placeholder="name"
          value={name}
          onChangeText={setName}
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
