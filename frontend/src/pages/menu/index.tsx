import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { styles } from "./styles";
import Logout from '../../assets/logout.png';
import Logo from "../../assets/logo.png";


export default function Menu() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticação do usuário
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.cadastrar}>
        <Text style={styles.textButton}>CADASTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.estoque}>
        <Text style={styles.textButton}>ESTOQUE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Image
          source={Logout}
          style={styles.sair}
        />
      </TouchableOpacity>
    </View>
  );
}