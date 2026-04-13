// Importa componentes básicos
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Importa o componente Cartao que você criou
import { Cartao } from '../../components/cartao';

// Tela chamada Usuarios
export default function UsuariosScreen() {

  return (
    // ScrollView permite rolar a tela (importante para listas)
    <ScrollView style={styles.container}>

      {/* Título da tela */}
      <Text style={styles.titulo}>Lista de Usuários</Text>

      {/* Container dos cartões */}
      <View style={styles.lista}>

        {/* Usando o componente Cartao várias vezes */}

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

// Estilos da tela
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    padding: 16,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  lista: {
    // container dos cartões
  },

});