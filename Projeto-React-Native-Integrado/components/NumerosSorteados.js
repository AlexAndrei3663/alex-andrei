import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

export default function NumerosSorteados(props) {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.number}>{item < 10 ? "0" + String(item) : item}</Text>
    </View>
  )
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Números Sorteados</Text>
      <FlatList
        data={props.numerosSorteados}
        renderItem={renderItem}
        numColumns={4}
        keyExtractor={(item) => (item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  item: {
    borderRadius: 45,
    borderWidth: 2,
    marginVertical: 8,
    padding:15,
    marginHorizontal: 8,
  },
  number: {
    color: 'black',
    fontSize: 16,
  },
});