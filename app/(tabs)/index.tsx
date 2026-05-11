// useRouter é um hook do Expo Router que permite navegar entre telas via código (funções)
// É diferente do <Link> que navega de forma declarativa (via JSX)
import { useRouter } from 'expo-router';

// Importa os componentes visuais do React Native que usaremos nessa tela:
// Pressable   → botão que detecta toques (mais flexível que o Button padrão)
// ScrollView  → permite rolagem quando o conteúdo ultrapassa a altura da tela
// StyleSheet  → organiza os estilos em um único objeto (como CSS)
// Text        → exibe textos na tela
// View        → container para organizar e agrupar elementos (como uma "div" no HTML)
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Importa o componente BlocoAula que criamos para exibir blocos educativos
// Reutilizamos esse componente várias vezes com props diferentes
import { BlocoAula } from '../../components/BlocoAula';

// Componente da tela Home (tela inicial do app)
export default function HomeScreen() {

  // Cria o objeto de navegação para podermos trocar de tela via funções
  const router = useRouter();

  // Função que navega para a tela "Prática" (explore.tsx)
  function irParaPratica() {
    router.push('/explore'); // empurra a rota /explore para a pilha de navegação
  }

  // Função que abre o modal de rota (modal.tsx)
  function abrirModalDaRota() {
    router.push('/modal'); // abre a tela modal.tsx como sobreposição
  }

  // O return define o que será exibido na tela
  return (

    // ScrollView permite que o conteúdo role caso seja maior que a tela
    // style → estilo externo (fundo, ocupação de tela)
    // contentContainerStyle → estilo do conteúdo interno (padding, alinhamento)
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>

      {/* Card principal de apresentação da tela */}
      <View style={styles.cardPrincipal}>

        {/* Emoji decorativo */}
        <Text style={styles.emoji}>📱</Text>

        {/* Título principal da tela */}
        <Text style={styles.titulo}>Interface interativa de um aplicativo mobile</Text>

        {/* Subtítulo explicativo */}
        <Text style={styles.subtitulo}>
          Antes de programar, precisamos planejar a interface, a navegação e a experiência do usuário.
        </Text>

        {/* Botão primário — chama a função irParaPratica ao ser pressionado */}
        <Pressable style={styles.botaoPrimario} onPress={irParaPratica}>
          <Text style={styles.textoBotaoPrimario}>Ver exemplos práticos</Text>
        </Pressable>

        {/* Botão secundário — abre o modal de rota */}
        <Pressable style={styles.botaoSecundario} onPress={abrirModalDaRota}>
          <Text style={styles.textoBotaoSecundario}>Abrir modal da rota</Text>
        </Pressable>

      </View>

      {/* Blocos educativos — componente reutilizável que recebe "titulo" e "descricao" como props */}

      <BlocoAula
        titulo="1. Planejamento da interface"
        descricao="Antes da codificação, definimos funcionalidades, telas, navegação e disposição visual dos elementos. Isso ajuda a organizar o projeto e melhorar a experiência do usuário."
      />

      <BlocoAula
        titulo="2. Componentização"
        descricao="Elementos repetidos, como headers, botões, cards e menus, devem ser transformados em componentes reutilizáveis. Isso deixa o código mais limpo, organizado e fácil de manter."
      />

      <BlocoAula
        titulo="3. Organização com View"
        descricao="A View funciona como container principal, semelhante a uma div no HTML. Ela ajuda a organizar blocos visuais e a distribuir melhor os elementos na tela."
      />

      <BlocoAula
        titulo="4. Cuidados com boas práticas"
        descricao="Não é recomendado aninhar Image dentro de Text. O ideal é usar View para estruturar os elementos visuais, deixando o layout mais correto e semântico."
      />

      <BlocoAula
        titulo="5. Recursos da aula"
        descricao="Nesta aula vamos trabalhar com ScrollView, SafeAreaView, Modal, Pressable e ActivityIndicator para construir interfaces mais completas e interativas."
      />

    </ScrollView>
  );
}

// Todos os estilos da tela organizados com StyleSheet.create
const styles = StyleSheet.create({

  // Estilo do ScrollView (container externo)
  container: {
    flex: 1,                   // ocupa toda a altura disponível da tela
    backgroundColor: '#eaf2ff', // fundo azul bem claro
  },

  // Estilo do conteúdo interno do ScrollView
  conteudo: {
    padding: 20,       // espaçamento interno em todos os lados
    paddingBottom: 32, // espaço extra embaixo para não cortar o último bloco
  },

  // Estilo do card principal de apresentação
  cardPrincipal: {
    backgroundColor: '#ffffff', // fundo branco
    borderRadius: 22,           // bordas bem arredondadas
    padding: 24,                // espaçamento interno
    marginBottom: 20,           // espaço abaixo do card
    alignItems: 'center',       // centraliza os filhos horizontalmente
    // Sombra para iOS
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    // Sombra para Android
    elevation: 4,
  },

  // Estilo do emoji
  emoji: {
    fontSize: 46,      // tamanho grande para destaque
    marginBottom: 14,  // espaço abaixo do emoji
  },

  // Estilo do título principal
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a5f',    // azul escuro
    textAlign: 'center', // centraliza o texto
    marginBottom: 12,
  },

  // Estilo do subtítulo
  subtitulo: {
    fontSize: 16,
    color: '#4b5563',    // cinza médio
    textAlign: 'center',
    lineHeight: 24,      // altura da linha (melhora a leitura)
    marginBottom: 24,
  },

  // Estilo do botão primário (azul sólido)
  botaoPrimario: {
    width: '100%',           // largura total do container pai
    backgroundColor: '#2563eb', // azul forte
    paddingVertical: 14,     // espaçamento vertical interno
    borderRadius: 12,
    marginBottom: 12,        // espaço entre os dois botões
  },

  // Estilo do texto dentro do botão primário
  textoBotaoPrimario: {
    color: '#ffffff',    // texto branco
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Estilo do botão secundário (azul claro)
  botaoSecundario: {
    width: '100%',
    backgroundColor: '#dbeafe', // azul bem claro
    paddingVertical: 14,
    borderRadius: 12,
  },

  // Estilo do texto dentro do botão secundário
  textoBotaoSecundario: {
    color: '#1d4ed8',    // azul médio
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
