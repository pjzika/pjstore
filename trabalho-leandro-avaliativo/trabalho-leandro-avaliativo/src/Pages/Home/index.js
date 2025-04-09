import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Button, Dimensions } from 'react-native';

// Função para obter a largura e altura da tela
const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
  // Função para navegar para a página de produtos
  const handleNavigateToProducts = () => {
    navigation.navigate('Products'); // 'Products' é o nome da sua tela de produtos no Drawer Navigator
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/fotos-gratis/parede-de-estudio-gradiente-de-ouro-amarelo-abstrato-de-luxo-bem-como-uso-como-plano-de-fundo-layout-banner-e-apresentacao-do-produto_1258-63556.jpg' }} // Imagem de fundo suave
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        {/* Nome da loja */}
        <View style={styles.storeNameContainer}>
          <Text style={styles.storeName}>Pjstore</Text>
        </View>

        {/* Seção de Saudação */}
        <View style={styles.greetingCard}>
          <Text style={styles.greetingText}>
            Bem-vindo à Pjstore! A loja cristã para você que deseja expressar sua fé com estilo.
          </Text>
        </View>

        {/* Imagem de Destaque */}
        <View style={styles.mainSection}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/90/75/a0/9075a0208ab5b983881a7ee26659f605.jpg' }} // Imagem principal com tema cristão
            style={styles.mainImage}
          />
          <Text style={styles.mainText}>Espalhe a Fé com Estilo</Text>
          <Text style={styles.subtitle}>Explore nossa coleção de produtos cristãos e modernos.</Text>
        </View>

        {/* Seção de Produtos */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaText}>Explore Nossos Produtos</Text>
          <Text style={styles.ctaSubtitle}>Roupas, acessórios e muito mais, todos inspirados pela fé cristã.</Text>
          <TouchableOpacity onPress={handleNavigateToProducts} style={styles.button}>
            <Text style={styles.buttonText}>Ver Produtos</Text>
          </TouchableOpacity>
        </View>

        {/* Seção de Benefícios/Informações */}
        <View style={styles.benefitsSection}>
          <Text style={styles.benefitsTitle}>Por que escolher a Pjstore?</Text>
          <Text style={styles.benefitsText}>
            Produtos de alta qualidade, com um design cristão moderno. Roupas e acessórios que refletem sua fé.
          </Text>
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
  greetingCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo levemente transparente para a saudação
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.03,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // Sombra no Android
  },
  greetingText: {
    fontSize: width * 0.05,
    color: '#4e73df',
    textAlign: 'center',
  },
  mainSection: {
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  mainImage: {
    width: '100%',
    height: height * 0.35,
    borderRadius: 10,
    marginBottom: 20,
  },
  mainText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#4e73df',
    marginTop: 20,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: '#888',
    marginTop: 10,
    textAlign: 'center',
  },
  ctaSection: {
    alignItems: 'center',
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  ctaText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#4e73df',
    marginBottom: 10,
  },
  ctaSubtitle: {
    fontSize: width * 0.04,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4e73df',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  benefitsSection: {
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
  },
  benefitsTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#4e73df',
    marginBottom: 10,
  },
  benefitsText: {
    fontSize: width * 0.04,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
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

export default Home;
