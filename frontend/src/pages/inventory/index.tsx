import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from "./styles";
import Car from "../../assets/carro1.png";

export default function App() {
  const [filter, setFilter] = useState('mais_antigo'); // Estado para controlar o filtro
  const [searchText, setSearchText] = useState(''); // Estado para armazenar o texto de busca
  const [vehicles, setVehicles] = useState([
    { id: 1, status: 'Disponível', veiculo: 'Carro A', data: '2024-11-20', placa: 'ABC1234', imagem: '../../assets/carro.png' },
    { id: 2, status: 'Manutenção', veiculo: 'Carro B', data: '2024-11-25', placa: 'DEF5678', imagem: '../../assets/carro.png' },
    { id: 3, status: 'Vendido', veiculo: 'Carro C', data: '2024-11-15', placa: 'GHI9101', imagem: '../../assets/carro.png' },
  ]); 

  const sortedVehicles = [...vehicles]
    .filter((vehicle) =>
      vehicle.placa.toLowerCase().includes(searchText.toLowerCase()) // Filtra pela placa
    )
    .sort((a, b) => {
      return filter === 'mais_antigo'
        ? new Date(a.data) - new Date(b.data) // Mais antigo primeiro
        : new Date(b.data) - new Date(a.data); // Mais recente primeiro
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ESTOQUE</Text>

      {/* Campo de busca */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar por placa"
          placeholderTextColor="#fff"
          value={searchText}
          onChangeText={(text) => setSearchText(text)} // Atualiza o texto de busca dinamicamente
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.infoText}>Veículos no pátio: {sortedVehicles.length}</Text>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.sortButton,
              filter === 'mais_antigo' && styles.activeSortButton,
            ]}
            onPress={() => setFilter('mais_antigo')}
          >
            <Text style={styles.sortButtonText}>Mais antigo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortButton,
              filter === 'mais_recente' && styles.activeSortButton,
            ]}
            onPress={() => setFilter('mais_recente')}
          >
            <Text style={styles.sortButtonText}>Mais recente</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {sortedVehicles.map((vehicle) => (
          <View style={styles.card} key={vehicle.id}>
            <Image style={styles.vehicleImage} source={Car} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardText}>Status: {vehicle.status}</Text>
              <Text style={styles.cardText}>Veículo: {vehicle.veiculo}</Text>
              <Text style={styles.cardText}>Data: {vehicle.data}</Text>
              <Text style={styles.cardText}>Placa: {vehicle.placa}</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}