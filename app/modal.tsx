// Importa o Link do Expo Router — usado para navegar entre telas de forma declarativa (via JSX)
// É diferente do useRouter (que navega via código/função)
import { Link } from 'expo-router';

// Importa o StyleSheet para criar os estilos da tela
import { StyleSheet } from 'react-native';

// ThemedText é um componente de texto que adapta a cor automaticamente ao tema (claro/escuro)
import { ThemedText } from '@/components/themed-text';

// ThemedView é um container (View) que adapta a cor de fundo automaticamente ao tema
import { ThemedView } from '@/components/themed-view';

// Essa tela é aberta como um MODAL DE ROTA pelo Expo Router
// Diferente do componente <Modal> do React Native (que aparece por cima da mesma tela),
// esse modal é uma tela separada acessada via navegação, ex: router.push('/modal')
export default function ModalScreen() {
  return (

    // ThemedView como container principal da tela
    <ThemedView style={styles.container}>

      {/* Texto de título — o "type" define o estilo pré-configurado do ThemedText */}
      <ThemedText type="title">Este é um modal</ThemedText>

      {/* Link para voltar à tela inicial
          "dismissTo" fecha o modal e volta para a rota "/" sem empilhar no histórico */}
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Ir para a tela inicial</ThemedText>
      </Link>

    </ThemedView>
  );
}

// Estilos da tela
const styles = StyleSheet.create({

  // Container principal centralizado
  container: {
    flex: 1,              // ocupa toda a tela
    alignItems: 'center',    // centraliza horizontalmente
    justifyContent: 'center', // centraliza verticalmente
    padding: 20,          // espaçamento interno
  },

  // Estilo do link de retorno
  link: {
    marginTop: 15,       // espaço acima do link
    paddingVertical: 15, // área de toque maior (facilita clicar)
  },
});
