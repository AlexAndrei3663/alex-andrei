import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

export default function CarrinhoCompras(props) {
    return (
    <View style={styles.container}>
        <FlatList
        data={props.cartela}
        renderItem={renderItem}
        numColumns={3}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.6,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
    },
});