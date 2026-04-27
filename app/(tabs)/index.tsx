import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { BlocoAula } from '../../components/BlocoAula';

export default function HomeScreen() {
  const router = useRouter();

  function irParaPratica() {
    router.push('/explore');
  }

  function abrirModalDaRota() {
    router.push('/modal');
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <View style={styles.cardPrincipal}>
        <Text style={styles.emoji}>📱</Text>

        <Text style={styles.titulo}>Interface interativa de um aplicativo mobile</Text>

        <Text style={styles.subtitulo}>
          Antes de programar, precisamos planejar a interface, a navegação e a experiência do usuário.
        </Text>

        <Pressable style={styles.botaoPrimario} onPress={irParaPratica}>
          <Text style={styles.textoBotaoPrimario}>Ver exemplos práticos</Text>
        </Pressable>

        <Pressable style={styles.botaoSecundario} onPress={abrirModalDaRota}>
          <Text style={styles.textoBotaoSecundario}>Abrir modal da rota</Text>
        </Pressable>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf2ff',
  },
  conteudo: {
    padding: 20,
    paddingBottom: 32,
  },
  cardPrincipal: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  emoji: {
    fontSize: 46,
    marginBottom: 14,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a5f',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  botaoPrimario: {
    width: '100%',
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  textoBotaoPrimario: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoSecundario: {
    width: '100%',
    backgroundColor: '#dbeafe',
    paddingVertical: 14,
    borderRadius: 12,
  },
  textoBotaoSecundario: {
    color: '#1d4ed8',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});