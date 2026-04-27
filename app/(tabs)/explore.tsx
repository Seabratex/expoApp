import { useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function ExploreScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [carregando, setCarregando] = useState(false);

  function simularCarregamento() {
    setCarregando(true);

    setTimeout(() => {
      setCarregando(false);
    }, 2500);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
        <Text style={styles.titulo}>Exemplos práticos da aula</Text>

        <Text style={styles.subtitulo}>
          Esta tela demonstra, na prática, alguns componentes importantes para interfaces mobile.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>View como container</Text>
          <Text style={styles.cardTexto}>
            A View organiza os elementos em blocos. É o container principal usado para estruturar a interface.
          </Text>

          <View style={styles.exemploLinha}>
            <View style={styles.caixaAzul}>
              <Text style={styles.textoCaixa}>Bloco 1</Text>
            </View>

            <View style={styles.caixaClara}>
              <Text style={styles.textoCaixaEscuro}>Bloco 2</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>ScrollView + SafeAreaView</Text>
          <Text style={styles.cardTexto}>
            O ScrollView permite rolagem quando houver muito conteúdo. O SafeAreaView ajuda a proteger o conteúdo contra cortes em áreas sensíveis da tela.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Modal</Text>
          <Text style={styles.cardTexto}>
            O modal exibe conteúdo por cima da tela, sem precisar navegar para outra página.
          </Text>

          <Pressable style={styles.botaoAzul} onPress={() => setModalVisible(true)}>
            <Text style={styles.textoBotao}>Abrir modal</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>ActivityIndicator</Text>
          <Text style={styles.cardTexto}>
            O loading mostra ao usuário que alguma operação está em andamento e evita a sensação de travamento.
          </Text>

          <Pressable style={styles.botaoVerde} onPress={simularCarregamento}>
            <Text style={styles.textoBotao}>Simular carregamento</Text>
          </Pressable>

          {carregando && (
            <View style={styles.areaLoading}>
              <ActivityIndicator size="large" color="#2563eb" />
              <Text style={styles.textoLoading}>Carregando informações...</Text>
            </View>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Boas práticas</Text>
          <Text style={styles.cardTexto}>
            Evite colocar componentes visuais de forma inadequada, como Image dentro de Text. Prefira usar View para estruturar melhor o layout.
          </Text>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitulo}>Exemplo de Modal</Text>

            <Text style={styles.modalTexto}>
              Esse modal demonstra como exibir conteúdo sobre a tela atual sem trocar de rota.
            </Text>

            <Pressable style={styles.botaoFechar} onPress={() => setModalVisible(false)}>
              <Text style={styles.textoBotao}>Fechar modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff4e6',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff4e6',
  },
  conteudo: {
    padding: 20,
    paddingBottom: 36,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7c2d12',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  cardTexto: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 22,
    marginBottom: 14,
  },
  exemploLinha: {
    flexDirection: 'row',
    gap: 12,
  },
  caixaAzul: {
    flex: 1,
    backgroundColor: '#2563eb',
    borderRadius: 12,
    padding: 16,
  },
  caixaClara: {
    flex: 1,
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 16,
  },
  textoCaixa: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoCaixaEscuro: {
    color: '#1d4ed8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botaoAzul: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
  },
  botaoVerde: {
    backgroundColor: '#059669',
    paddingVertical: 14,
    borderRadius: 12,
  },
  textoBotao: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  areaLoading: {
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoLoading: {
    marginTop: 10,
    fontSize: 14,
    color: '#374151',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalBox: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 22,
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a5f',
    marginBottom: 12,
  },
  modalTexto: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 22,
    marginBottom: 18,
  },
  botaoFechar: {
    backgroundColor: '#ef4444',
    paddingVertical: 14,
    borderRadius: 12,
  },
});