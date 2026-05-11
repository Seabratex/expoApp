// Importa os componentes necessários do React Native
// StyleSheet → para criar os estilos do componente
// Text       → para exibir textos na tela
// View       → container que agrupa os elementos do bloco
import { StyleSheet, Text, View } from 'react-native';

// Define o tipo das propriedades (props) que o componente vai receber
// Usando TypeScript para garantir que os dados passados sejam sempre textos
type BlocoAulaProps = {
  titulo: string;   // título do bloco (ex: "1. Planejamento da interface")
  descricao: string; // texto explicativo do bloco
};

// Componente BlocoAula — exibe um card com título e descrição
// Recebe as props via desestruturação: { titulo, descricao }
// "export" permite que outras telas importem e usem esse componente
export function BlocoAula({ titulo, descricao }: BlocoAulaProps) {
  return (

    // View é o container do card (agrupa título e descrição)
    <View style={styles.card}>

      {/* Exibe o título recebido via prop */}
      <Text style={styles.titulo}>{titulo}</Text>

      {/* Exibe a descrição recebida via prop */}
      <Text style={styles.descricao}>{descricao}</Text>

    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({

  // Estilo do card (container principal)
  card: {
    backgroundColor: '#ffffff', // fundo branco
    borderRadius: 16,            // bordas arredondadas
    padding: 18,                 // espaçamento interno
    marginBottom: 14,            // espaço abaixo de cada bloco
    borderWidth: 1,              // espessura da borda
    borderColor: '#dbe4f0',      // cor da borda (azul bem claro)
    // Sombra para iOS
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    // Sombra para Android
    elevation: 2,
  },

  // Estilo do título
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a5f',   // azul escuro
    marginBottom: 8,    // espaço entre o título e a descrição
  },

  // Estilo da descrição
  descricao: {
    fontSize: 15,
    color: '#4b5563',  // cinza médio
    lineHeight: 23,    // altura da linha (melhora a legibilidade do texto)
  },
});
