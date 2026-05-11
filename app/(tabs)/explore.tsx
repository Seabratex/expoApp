// useState é um hook do React que cria variáveis reativas
// Quando o valor muda, a tela re-renderiza automaticamente mostrando o novo estado
import { useState } from 'react';

// Importa os componentes do React Native usados nessa tela:
// ActivityIndicator → ícone animado de carregamento (spinner)
// Modal             → exibe conteúdo por cima da tela atual (sem trocar de rota)
// Pressable         → área clicável, como um botão customizável
// ScrollView        → permite rolagem do conteúdo quando ele ultrapassa a tela
// StyleSheet        → organiza estilos em um único objeto
// Text              → exibe textos na tela
// View              → container para agrupar elementos (como uma "div" no HTML)
import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// SafeAreaView vem de um pacote separado (react-native-safe-area-context)
// O SafeAreaView do react-native está depreciado — este aqui é o correto e atualizado
// Ele protege o conteúdo das áreas sensíveis da tela (notch, câmera, barra de status)
import { SafeAreaView } from 'react-native-safe-area-context';

// Componente da tela "Prática"
export default function ExploreScreen() {

  // Estado que controla se o Modal está visível ou não
  // false = modal fechado | true = modal aberto
  const [modalVisible, setModalVisible] = useState(false);

  // Estado que controla se o indicador de carregamento está ativo
  // false = não está carregando | true = está carregando
  const [carregando, setCarregando] = useState(false);

  // Função que simula um carregamento de 2,5 segundos
  function simularCarregamento() {
    setCarregando(true); // ativa o spinner imediatamente

    // setTimeout executa uma função após um tempo (em milissegundos)
    // 2500ms = 2,5 segundos
    setTimeout(() => {
      setCarregando(false); // desativa o spinner depois de 2,5 segundos
    }, 2500);
  }

  return (
    // ─────────────────────────────────────────────────────────────────
    // SafeAreaView vs ScrollView — qual a diferença?
    //
    // SafeAreaView → protege o conteúdo das áreas recortadas do celular
    //                (notch, câmera, barra de status, barra de gestos)
    //                Não adiciona rolagem — apenas cria margens seguras
    //
    // ScrollView   → permite que o conteúdo role verticalmente (ou horizontalmente)
    //                quando ele for maior do que a altura visível da tela
    //                Não protege das áreas recortadas por si só
    //
    // Resultado: usamos os dois juntos — SafeAreaView por fora protege as bordas,
    // ScrollView por dentro deixa o conteúdo rodar dentro dessa área segura
    // ─────────────────────────────────────────────────────────────────
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>

        {/* Título da tela */}
        <Text style={styles.titulo}>Exemplos práticos da aula</Text>

        {/* Subtítulo descritivo */}
        <Text style={styles.subtitulo}>
          Esta tela demonstra, na prática, alguns componentes importantes para interfaces mobile.
        </Text>

        {/* ── CARD 1: View ───────────────────────────────────────────── */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>View como container</Text>
          <Text style={styles.cardTexto}>
            A View organiza os elementos em blocos. É o container principal usado para estruturar a interface.
          </Text>

          {/* Exemplo visual: duas Views lado a lado usando flexDirection: 'row' */}
          <View style={styles.exemploLinha}>

            {/* Bloco azul escuro */}
            <View style={styles.caixaAzul}>
              <Text style={styles.textoCaixa}>Bloco 1</Text>
            </View>

            {/* Bloco azul claro */}
            <View style={styles.caixaClara}>
              <Text style={styles.textoCaixaEscuro}>Bloco 2</Text>
            </View>

          </View>
        </View>

        {/* ── CARD 2: ScrollView + SafeAreaView ──────────────────────── */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>ScrollView + SafeAreaView</Text>
          <Text style={styles.cardTexto}>
            O ScrollView permite rolagem quando houver muito conteúdo na tela.{'\n\n'}
            O SafeAreaView protege o conteúdo de ser cortado nas bordas do celular (notch, câmera frontal, barra de status).{'\n\n'}
            Eles se complementam: SafeAreaView cuida das bordas, ScrollView cuida da rolagem.
          </Text>
        </View>

        {/* ── CARD 3: Modal ──────────────────────────────────────────── */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Modal</Text>
          <Text style={styles.cardTexto}>
            O Modal exibe conteúdo por cima da tela atual, sem trocar de rota.{'\n\n'}
            É diferente do modal de rota (modal.tsx): aquele é uma tela separada
            aberta via router.push(). Este aqui é um componente que aparece
            diretamente na mesma tela, controlado pelo estado (useState).
          </Text>

          {/* Botão que muda o estado modalVisible para true, abrindo o Modal */}
          <Pressable style={styles.botaoAzul} onPress={() => setModalVisible(true)}>
            <Text style={styles.textoBotao}>Abrir modal</Text>
          </Pressable>
        </View>

        {/* ── CARD 4: ActivityIndicator ──────────────────────────────── */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>ActivityIndicator</Text>
          <Text style={styles.cardTexto}>
            O ActivityIndicator é o spinner de carregamento nativo do React Native.{'\n\n'}
            Serve para indicar ao usuário que uma operação está em andamento
            (buscar dados de uma API, salvar informações, etc.), evitando a
            sensação de que o app travou.
          </Text>

          {/* Botão que chama simularCarregamento() */}
          <Pressable style={styles.botaoVerde} onPress={simularCarregamento}>
            <Text style={styles.textoBotao}>Simular carregamento</Text>
          </Pressable>

          {/* Renderização condicional: só aparece quando "carregando" for true */}
          {carregando && (
            <View style={styles.areaLoading}>
              {/* Spinner animado — size define o tamanho, color define a cor */}
              <ActivityIndicator size="large" color="#2563eb" />
              <Text style={styles.textoLoading}>Carregando informações...</Text>
            </View>
          )}
        </View>

        {/* ── CARD 5: Boas práticas ──────────────────────────────────── */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Boas práticas</Text>
          <Text style={styles.cardTexto}>
            Evite colocar componentes visuais de forma inadequada, como Image dentro de Text. Prefira usar View para estruturar melhor o layout.
          </Text>
        </View>

      </ScrollView>

      {/* ── MODAL ────────────────────────────────────────────────────── */}
      {/* O Modal fica fora do ScrollView para sobrepor toda a tela */}
      <Modal
        animationType="slide"    // animação de entrada: "slide" sobe de baixo para cima
        transparent={true}       // fundo transparente (permite ver a tela por baixo)
        visible={modalVisible}   // controlado pelo estado: true = visível, false = oculto
        onRequestClose={() => setModalVisible(false)} // fecha ao pressionar voltar no Android
      >
        {/* Overlay escurecido por cima da tela */}
        <View style={styles.overlay}>

          {/* Caixa branca do modal */}
          <View style={styles.modalBox}>

            <Text style={styles.modalTitulo}>Exemplo de Modal</Text>

            <Text style={styles.modalTexto}>
              Esse modal demonstra como exibir conteúdo sobre a tela atual sem trocar de rota.
            </Text>

            {/* Botão que muda modalVisible para false, fechando o Modal */}
            <Pressable style={styles.botaoFechar} onPress={() => setModalVisible(false)}>
              <Text style={styles.textoBotao}>Fechar modal</Text>
            </Pressable>

          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

// Estilos da tela
const styles = StyleSheet.create({

  // Estilo do SafeAreaView (container externo que protege das bordas)
  safeArea: {
    flex: 1,
    backgroundColor: '#fff4e6', // fundo laranja bem claro
  },

  // Estilo do ScrollView (container com rolagem)
  container: {
    flex: 1,
    backgroundColor: '#fff4e6',
  },

  // Espaçamento do conteúdo interno
  conteudo: {
    padding: 20,
    paddingBottom: 36,
  },

  // Título da tela
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7c2d12',   // laranja escuro
    marginBottom: 10,
  },

  // Subtítulo
  subtitulo: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
    marginBottom: 20,
  },

  // Card genérico de cada seção
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    // Sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    // Sombra Android
    elevation: 2,
  },

  // Título dentro de cada card
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },

  // Texto descritivo dentro de cada card
  cardTexto: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 22,
    marginBottom: 14,
  },

  // Linha com dois blocos lado a lado (demonstração de flexDirection: 'row')
  exemploLinha: {
    flexDirection: 'row', // organiza os filhos na horizontal
    gap: 12,              // espaço entre os blocos
  },

  // Bloco azul escuro
  caixaAzul: {
    flex: 1,              // cada caixa ocupa metade do espaço disponível
    backgroundColor: '#2563eb',
    borderRadius: 12,
    padding: 16,
  },

  // Bloco azul claro
  caixaClara: {
    flex: 1,
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 16,
  },

  // Texto do bloco azul escuro (branco para contrastar)
  textoCaixa: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Texto do bloco azul claro (azul escuro para contrastar)
  textoCaixaEscuro: {
    color: '#1d4ed8',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Botão azul (usado no card do Modal)
  botaoAzul: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
  },

  // Botão verde (usado no card do ActivityIndicator)
  botaoVerde: {
    backgroundColor: '#059669',
    paddingVertical: 14,
    borderRadius: 12,
  },

  // Texto padrão dos botões
  textoBotao: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Área do spinner de carregamento
  areaLoading: {
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Texto abaixo do spinner
  textoLoading: {
    marginTop: 10,
    fontSize: 14,
    color: '#374151',
  },

  // Fundo escurecido do Modal (overlay semitransparente)
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // preto com 35% de opacidade
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  // Caixa branca dentro do Modal
  modalBox: {
    width: '100%',
    maxWidth: 360,       // limita a largura em telas grandes
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 22,
  },

  // Título dentro do Modal
  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a5f',
    marginBottom: 12,
  },

  // Texto descritivo dentro do Modal
  modalTexto: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 22,
    marginBottom: 18,
  },

  // Botão de fechar o Modal (vermelho)
  botaoFechar: {
    backgroundColor: '#ef4444',
    paddingVertical: 14,
    borderRadius: 12,
  },
});
