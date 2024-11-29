import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';

const EstoqueScreen = () => {
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
    // Lógica para manipular o cadastro
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
          source={require('@/assets/images/photo-camera.png')}
          style={styles.camera}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCadastro}>
        <Image
          source={require('@/assets/images/tick.png')}
          style={styles.confirmar}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#373841',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#494C6B',
    backgroundColor: '#494C6B',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  camera: {
    height: 50,
    width: 50,
    marginTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  confirmar: {
    height: 50,
    width: 50,
    marginTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default EstoqueScreen;