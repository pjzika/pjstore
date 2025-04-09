import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

// Tamanho da tela para usarmos em estilos responsivos
const { width } = Dimensions.get('window');

const products = [
  {
    id: '1',
    name: 'Moletom Masculino Jesus is King',
    description: 'Clique no saiba mais para mais detalhes.',
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_803254-MLB80750327610_112024-E-moletom-jesus-is-king-unissex-casaco-frio-feminino-masculino.webp'
  },
  {
    id: '2',
    name: 'Camiseta Jesus Saves New',
    description: 'Clique no saiba mais para mais detalhes.',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpUoK9Xb5U7zq2vuPvCF8kDURmBfG9tLmzzWJz-MEWhYNdA-qChL4YpCrPnlxzFT26Am7yzbV3V-Cy0fIY5JbIV6rK2LzBNFKx6ZJvrvBMRASavLciQP3UdfvKaePb3KAomoOvca4okA&usqp=CAc'
  },
  {
    id: '3',
    name: 'Bíblia Sagrada Coração Redimido Capa Dura Palavras de Jesus em Vermelho',
    description: 'Clique no saiba mais para mais detalhes.',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIRMBSJpFO53DeS-MUxueYprU7R1Y7xNtj0uq0opsffuSn_qzSSt5w5EzpKMKyvOq0pMQBYwf-_E3_GBpQ1pIPtaPmXvN_i76kTxTubU4rKwKN_ZDcrIxbp8sIqqZ3rYZEEQl6ZhPjyg&usqp=CAc'
  }
];

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            {/* Imagem do produto */}
            <Image source={{ uri: item.image }} style={styles.productImage} />
            
            {/* Nome do produto */}
            <Text style={styles.productName}>{item.name}</Text>

            {/* Descrição do produto */}
            <Text style={styles.productDescription}>{item.description}</Text>

            {/* Botão Saiba Mais */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Detalhes Produto', { productId: item.id })}
            >
              <Text style={styles.buttonText}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f4f4', // Cor de fundo mais clara
  },
  productItem: {
    backgroundColor: '#fff', // Fundo branco para destacar cada item
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4e73df', // Cor do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductsScreen;
