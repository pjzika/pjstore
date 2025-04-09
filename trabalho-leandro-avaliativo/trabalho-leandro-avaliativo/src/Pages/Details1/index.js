import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

// Função para obter a largura e altura da tela
const { width, height } = Dimensions.get('window');

const ProductDetailsScreen = ({ route, navigation }) => {
  const { productId } = route.params; // Obtém o ID do produto passado na navegação

  // Produtos fictícios
  const products = [
    {
      id: '1',
      name: 'Moletom Masculino Jesus is King',
      description:
        'O moletom com capuz "JESUS IS KING" é uma peça unissex que une conforto, estilo e fé de maneira marcante. Confeccionado em tecido de alta qualidade, ele oferece um toque macio e aconchegante, perfeito para o uso diário, mantendo você aquecido e confortável em qualquer ocasião.',
      price: 'R$59,90',
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_803254-MLB80750327610_112024-E-moletom-jesus-is-king-unissex-casaco-frio-feminino-masculino.webp',
    },
    {
      id: '2',
      name: 'Camiseta Jesus Saves New',
      description:
        'A camiseta "Jesus Saves New" é mais do que uma peça de roupa; é uma expressão de fé e estilo. Com um design moderno e impactante, ela traz uma mensagem poderosa: "Jesus Salva". Feita com materiais de alta qualidade, esta camiseta oferece conforto e durabilidade, sendo perfeita para o dia a dia ou ocasiões especiais.',
      price: 'R$109,90',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpUoK9Xb5U7zq2vuPvCF8kDURmBfG9tLmzzWJz-MEWhYNdA-qChL4YpCrPnlxzFT26Am7yzbV3V-Cy0fIY5JbIV6rK2LzBNFKx6ZJvrvBMRASavLciQP3UdfvKaePb3KAomoOvca4okA&usqp=CAc',
    },
    {
      id: '3',
      name: 'Bíblia Sagrada Coração Redimido Capa Dura Palavras de Jesus em Vermelho',
      description:
        'A NVI (Nova Versão Internacional) é uma popular tradução da Bíblia em português, desenvolvida para tornar os textos bíblicos acessíveis aos leitores contemporâneos. Uma das características distintivas da NVI é o uso de uma linguagem contemporânea, evitando termos ou expressões arcaicas, tornando assim o texto mais claro e acessível às pessoas de hoje.',
      price: 'R$49,90',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIRMBSJpFO53DeS-MUxueYprU7R1Y7xNtj0uq0opsffuSn_qzSSt5w5EzpKMKyvOq0pMQBYwf-_E3_GBpQ1pIPtaPmXvN_i76kTxTubU4rKwKN_ZDcrIxbp8sIqqZ3rYZEEQl6ZhPjyg&usqp=CAc',
    },
  ];

  // Busca o produto baseado no productId
  const product = products.find(p => p.id === productId);

  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/fotos-gratis/parede-de-estudio-gradiente-de-ouro-amarelo-abstrato-de-luxo-bem-como-uso-como-plano-de-fundo-layout-banner-e-apresentacao-do-produto_1258-63556.jpg',
      }} // Imagem de fundo suave
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        {/* Nome da loja */}
        <View style={styles.storeNameContainer}>
          <Text style={styles.storeName}>Pjstore</Text>
        </View>

        {/* Imagem do Produto */}
        <Image source={{ uri: product?.image }} style={styles.productImage} />

        {/* Nome do Produto */}
        <Text style={styles.productName}>{product?.name}</Text>

        {/* Descrição do Produto */}
        <Text style={styles.productDescription}>{product?.description}</Text>

        {/* Preço do Produto */}
        <Text style={styles.productPrice}>{product?.price}</Text>

        {/* Botão de Navegação para Produtos */}
        <View style={styles.ctaSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Products')} // Navega para a lista de produtos
          >
            <Text style={styles.buttonText}>Ver mais produtos</Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 Pjstore | Todos os direitos reservados</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // A imagem de fundo vai cobrir toda a tela
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo levemente transparente para destacar o conteúdo
  },
  storeNameContainer: {
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  storeName: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontStyle: 'italic',
    fontFamily: 'Times New Roman',
  },
  productImage: {
    width: '100%',
    height: height * 0.4, // Ajuste de altura da imagem do produto
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#4e73df',
    textAlign: 'center',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: width * 0.05,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 20,
  },
  productPrice: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaSection: {
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  button: {
    backgroundColor: '#4e73df',
    paddingVertical: 10,
    paddingHorizontal: width * 0.1,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#4e73df',
    paddingVertical: height * 0.02,
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  footerText: {
    color: '#fff',
    fontSize: width * 0.035,
  },
});

export default ProductDetailsScreen;
