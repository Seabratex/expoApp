// Importa componentes do React Native
// Pressable: botão customizável (melhor que Button para estilizar)
// StyleSheet: cria estilos organizados (tipo CSS)
// Text: exibe textos na tela
// View: container (equivalente a uma <div>)
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Define a função principal da tela
// Essa é a tela Home do aplicativo
export default function HomeScreen() {

  // Função que será chamada quando o botão for pressionado
  function handlePress() {
    // Exibe um alerta simples na tela
    alert('Vamos começar a aprender React Native!');
  }

  return (
    // Container principal da tela
    // Ele ocupa toda a tela e centraliza o conteúdo
    <View style={styles.container}>

      {/* Primeiro card (principal) */}
      <View style={styles.cardPrincipal}>

        {/* Emoji usado como ícone visual */}
        <Text style={styles.emoji}>📱</Text>

        {/* Título principal da tela */}
        <Text style={styles.titulo}>React Native com Expo</Text>

        {/* Texto explicativo (subtítulo) */}
        <Text style={styles.subtitulo}>
          Aprenda a criar interfaces mobile modernas de forma prática.
        </Text>

        {/* Botão customizado */}
        <Pressable style={styles.botao} onPress={handlePress}>
          {/* Texto dentro do botão */}
          <Text style={styles.textoBotao}>Iniciar Aula</Text>
        </Pressable>

      </View>

      {/* Segundo card (informações adicionais) */}
      <View style={styles.cardInfo}>

        {/* Título da seção */}
        <Text style={styles.tituloInfo}>O que veremos</Text>

        {/* Lista de conteúdos */}
        <Text style={styles.item}>• Componentes</Text>
        <Text style={styles.item}>• Estilos</Text>
        <Text style={styles.item}>• Navegação</Text>
        <Text style={styles.item}>• Interação com o usuário</Text>

      </View>

    </View>
  );
}

// Criação dos estilos usando StyleSheet
const styles = StyleSheet.create({

  // Estilo do container principal da tela
  container: {
    flex: 1, // ocupa toda a altura da tela
    backgroundColor: '#eaf2ff', // cor de fundo azul claro
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center', // centraliza horizontalmente
    padding: 24, // espaço interno
  },

  // Estilo do card principal
  cardPrincipal: {
    width: '100%', // ocupa toda a largura disponível
    maxWidth: 360, // limita largura máxima (melhor para telas grandes)
    backgroundColor: '#ffffff', // fundo branco
    borderRadius: 20, // bordas arredondadas
    padding: 24, // espaço interno
    alignItems: 'center', // centraliza conteúdo interno
    marginBottom: 18, // espaço abaixo do card

    // Sombra (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    // Sombra (Android)
    elevation: 4,
  },

  // Estilo do segundo card (informações)
  cardInfo: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,

    // Sombra mais leve
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  // Estilo do emoji
  emoji: {
    fontSize: 48, // tamanho grande
    marginBottom: 16, // espaço abaixo
  },

  // Estilo do título principal
  titulo: {
    fontSize: 28, // tamanho grande
    fontWeight: 'bold', // negrito
    color: '#1e3a5f', // cor azul escura
    marginBottom: 12, // espaço abaixo
    textAlign: 'center', // centraliza texto
  },

  // Estilo do subtítulo
  subtitulo: {
    fontSize: 16, // tamanho médio
    color: '#4b5563', // cinza
    textAlign: 'center', // centralizado
    lineHeight: 24, // espaçamento entre linhas
    marginBottom: 24, // espaço abaixo
  },

  // Estilo do botão
  botao: {
    width: '100%', // ocupa toda largura do card
    backgroundColor: '#2563eb', // azul
    paddingVertical: 14, // altura do botão
    borderRadius: 12, // bordas arredondadas
  },

  // Estilo do texto do botão
  textoBotao: {
    color: '#ffffff', // branco
    textAlign: 'center', // centralizado
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Título da seção inferior
  tituloInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a5f',
    marginBottom: 12,
  },

  // Itens da lista
  item: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 8,
  },

});