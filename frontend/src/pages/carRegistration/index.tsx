import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";
import Save from "../../assets/checked.png";
import Camera from "../../assets/photo-camera.png";

export default function carRegistration() {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');
  const [placa, setPlaca] = useState('');
  const [dono, setDono] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataEntrada, setDataEntrada] = useState('');
  const [funcionario, setFuncionario] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleCadastro = () => {
    console.log({
      marca,
      modelo,
      cor,
      placa,
      dono,
      rg,
      cpf,
      dataEntrada,
      funcionario,
      observacao,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} >Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Cor"
        value={cor}
        onChangeText={setCor}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Placa"
        value={placa}
        onChangeText={setPlaca}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Dono"
        value={dono}
        onChangeText={setDono}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="RG"
        value={rg}
        onChangeText={setRg}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Entrada"
        value={dataEntrada}
        onChangeText={setDataEntrada}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Funcionario"
        value={funcionario}
        onChangeText={setFuncionario}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Observacao"
        value={observacao}
        onChangeText={setObservacao}
        placeholderTextColor="white"
      />
      <TouchableOpacity onPress={handleCadastro}>
        <Image
          source={Camera}
          style={styles.camera}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCadastro}>
        <Image
          source={Save}
          style={styles.confirmar}
        />
      </TouchableOpacity>
    </View>
  );
};