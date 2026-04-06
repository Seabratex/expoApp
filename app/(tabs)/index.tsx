// ─── IMPORTS ────────────────────────────────────────────────
// StyleSheet: cria objetos de estilo otimizados (como o CSS do React Native)
// Text: único componente para exibir texto — nunca texto solto no JSX
// View: container de layout — equivale à <div> do HTML
import { StyleSheet, Text, View } from 'react-native';

// ─── COMPONENTE ─────────────────────────────────────────────
// export default = esta função é A tela principal deste arquivo.
// O Expo Router usa isso para saber o que renderizar quando o usuário
// navega para a rota "/" (aba Home)
export default function HomeScreen() {
  return (
    // View com o estilo "container" definido lá embaixo no StyleSheet
    // Ela ocupa a tela toda e centraliza o conteúdo
    <View style={styles.container}>

      {/* Texto grande — título da tela */}
      <Text style={styles.titulo}>Olá, mundo!</Text>

      {/* Texto menor — subtítulo */}
      <Text style={styles.subtitulo}>Estou na tela Home</Text>

    </View>
  );
}

// ─── ESTILOS ────────────────────────────────────────────────
// StyleSheet.create valida os estilos em tempo de desenvolvimento
// e os otimiza para a ponte JavaScript → nativo
const styles = StyleSheet.create({

  container: {
    flex: 1,              // ocupa TODO o espaço disponível na tela
    backgroundColor: '#e8f0ff', // fundo azul bem clarinho
    justifyContent: 'center',   // centraliza filhos no eixo VERTICAL
    alignItems: 'center',       // centraliza filhos no eixo HORIZONTAL
    padding: 24,          // respiro interno em todos os lados (em dp, não px)
  },

  titulo: {
    fontSize: 30,         // tamanho da fonte em dp (density-independent pixels)
    fontWeight: 'bold',   // negrito
    marginBottom: 12,     // espaço ABAIXO do título, separando do subtítulo
  },

  subtitulo: {
    fontSize: 18,         // menor que o título para criar hierarquia visual
    // sem color definida = herda a cor padrão do sistema (preto/branco)
  },

});