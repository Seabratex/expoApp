import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Cartao } from '../../components/Cartao';

export default function UsuariosScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.titulo}>Lista de Usuários</Text>

      <View style={styles.lista}>
        <Cartao
          nome="João Silva"
          cargo="Desenvolvedor"
          departamento="Tecnologia"
          ativo={true}
        />

        <Cartao
          nome="Maria Souza"
          cargo="Designer"
          departamento="UX/UI"
          ativo={false}
        />

        <Cartao
          nome="Carlos Lima"
          cargo="Analista"
          departamento="Financeiro"
          ativo={true}
        />

        <Cartao
          nome="Ana Costa"
          cargo="Gerente"
          departamento="RH"
          ativo={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
  },
  conteudo: {
    padding: 16,
    paddingBottom: 28,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a5f',
    marginBottom: 16,
  },
  lista: {},
});