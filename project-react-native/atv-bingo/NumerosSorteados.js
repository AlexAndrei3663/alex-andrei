import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
  
  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.number}>{item.number<10 ? "0"+String(item.number) : item.number}</Text>
    </View>
  );

export default function NumerosSorteados(props) {
    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    
    return (
    <View style={styles.container}>
        <FlatList
        data={props.numerosSorteados}
        renderItem={renderItem}
        numColumns={5}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#000',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    number: {
        color: '#fff',
        fontSize: 10,
    },
});