import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { styles } from "./styles";
import Logout from '../../assets/logout.png';
import Logo from "../../assets/logo.png";


export default function Menu({ navigation }: { navigation: any }) {
  const handleCadastrar = () => {
    navigation.navigate('CarRegistration');
  };

  // TODO: Função para navegar para a tela de estoque
  // const handleEstoque = () => {
  //   navigation.navigate('Inventory');
  // };

  const handleLogoff = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
      />
      <TouchableOpacity onPress={handleCadastrar} style={styles.cadastrar}>
        <Text style={styles.textButton}>CADASTRAR</Text>
      </TouchableOpacity>
      {/* editar para handleEstoque depois! */}
      <TouchableOpacity onPress={handleLogoff} style={styles.estoque}>
        <Text style={styles.textButton}>ESTOQUE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogoff}>
        <Image
          source={Logout}
          style={styles.sair}
        />
      </TouchableOpacity>
    </View>
  );
}
