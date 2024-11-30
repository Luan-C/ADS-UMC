import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { styles } from "./styles";
import Save from "../../assets/checked.png";
import Cancel from "../../assets/cancel.png";
import Car from "../../assets/carro.png";

export default function CarDetails() {
    const [ticket, setTicket] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [cor, setCor] = useState('');
    const [placa, setPlaca] = useState('');
    const [dono, setDono] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataEntrada, setDataEntrada] = useState('');
    const [dataSaida, setDataSaida] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [observacao, setObservacao] = useState('');

      function handleCadastro() {
        console.log({
          ticket,
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
          <Text style={styles.header} >Detalhes</Text>
          <Image
              source={Car}
              style={styles.car}
            />
          <TextInput
            style={styles.input}
            placeholder="Ticket"
            value={ticket}
            onChangeText={setTicket}
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
            placeholder="Placa"
            value={placa}
            onChangeText={setPlaca}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Saida"
            value={dataSaida}
            onChangeText={setDataSaida}
            placeholderTextColor="white"
          />
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
            placeholder="Observacao"
            value={observacao}
            onChangeText={setObservacao}
            placeholderTextColor="white"
          />
          {/* <TouchableOpacity onPress={handleCadastro}>
            <Image
              source={Cancel}
              style={styles.Cancel}
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={handleCadastro}>
            <Image
              source={Save}
              style={styles.confirmar}
            />
          </TouchableOpacity>
        </View>
    );
};