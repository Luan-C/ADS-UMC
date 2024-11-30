import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from "./styles";
import Save from "../../assets/checked.png";
import { api } from '../../server/api';

export default function CarRegistration({ navigation }: { navigation: any }) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerCpf, setOwnerCpf] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');

  const handleCarRegistration = async () => {
    if (!brand || !model || !licensePlate || !ownerName || !ownerCpf || !ownerEmail || !ownerPhone) {
      Alert.alert("Erro", "Todos os campos obrigatórios devem ser preenchidos!");
      return;
    }

    try {
      const carData = {
        brand: brand,
        model: model,
        license_plate: licensePlate,
        owner_name: ownerName,
        owner_cpf: ownerCpf,
        owner_email: ownerEmail,
        owner_phone: ownerPhone,
      };

      const response = await api.post("/register", carData);
      Alert.alert("Sucesso", "Carro registrado com sucesso!", response.data);

      navigation.navigate('Inventory');
    } catch (error) {
      Alert.alert("Erro", "Não foi possível registrar o carro. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} >Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={brand}
        onChangeText={setBrand}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={model}
        onChangeText={setModel}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Placa"
        value={licensePlate}
        onChangeText={setLicensePlate}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome proprietário"
        value={ownerName}
        onChangeText={setOwnerName}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={ownerCpf}
        onChangeText={setOwnerCpf}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={ownerEmail}
        onChangeText={setOwnerEmail}
        placeholderTextColor="white"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={ownerPhone}
        onChangeText={setOwnerPhone}
        placeholderTextColor="white"
      />
      <TouchableOpacity onPress={handleCarRegistration}>
        <Image
          source={Save}
          style={styles.confirmar}
        />
      </TouchableOpacity>
    </View>
  );
};
