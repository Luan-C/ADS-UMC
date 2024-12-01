import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { styles } from "./styles";
import Car from "../../assets/carro1.png";
import { api } from '../../server/api';

export default function Inventory({ navigation }: { navigation: any }) {
  const [filter, setFilter] = useState('mais_antigo');
  const [searchText, setSearchText] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVehicles = async () => {
    try {
      const response = await api.get('/details');
      setVehicles(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os carros:", error);
      setLoading(false);
      Alert.alert("Erro", "Não foi possível carregar os carros.");
    }
  };

  // Carregar os carros quando o componente for montado
  useEffect(() => {
    fetchVehicles();
  }, []);

  const sortedVehicles = [...vehicles]
    .filter((vehicle) =>
      vehicle.license_plate.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      return filter === 'mais_antigo'
        ? new Date(a.created_at) - new Date(b.created_at)
        : new Date(b.created_at) - new Date(a.created_at);
    });

  const handleDarBaixa = async (ticket_id) => {
    try {
      await api.put('/update', { ticket_id });
      Alert.alert(
        "Baixa realizada",
        `Veículo de Ticket ID ${ticket_id} foi liberado com sucesso ✅`
      );

      // Remover o veículo da lista local após a baixa
      setVehicles((prevVehicles) =>
        prevVehicles.filter((vehicle) => vehicle.ticket_id !== ticket_id)
      );
    } catch (error) {
      console.error("Erro ao dar baixa no veículo:", error);
      Alert.alert("Erro", "Não foi possível dar baixa no veículo.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ESTOQUE</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar por placa"
          placeholderTextColor="#fff"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.infoText}>Veículos no pátio: {sortedVehicles.length}</Text>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.sortButton, filter === 'mais_antigo' && styles.activeSortButton]}
            onPress={() => setFilter('mais_antigo')}
          >
            <Text style={styles.sortButtonText}>Mais antigo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, filter === 'mais_recente' && styles.activeSortButton]}
            onPress={() => setFilter('mais_recente')}
          >
            <Text style={styles.sortButtonText}>Mais recente</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {loading ? (
          <Text style={styles.loadingText}>Carregando...</Text>
        ) : (
          sortedVehicles.map((vehicle) => (
            <View style={styles.card} key={vehicle.id}>
              <Image style={styles.vehicleImage} source={Car} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardText}>Veículo: {vehicle.model}</Text>
                <Text style={styles.cardText}>Placa: {vehicle.license_plate}</Text>
                <Text style={styles.cardText}>Proprietário: {vehicle.owner_name}</Text>
                <Text style={styles.cardText}>Data: {new Date(vehicle.created_at).toLocaleDateString()}</Text>
                <Text style={styles.cardText}>Ocupando vaga {vehicle.id}</Text>
                <Text style={styles.cardText}>Ticket ID: {vehicle.ticket_id}</Text>
              </View>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleDarBaixa(vehicle.ticket_id)}
              >
                <Text style={styles.editButtonText}>Dar Baixa</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}