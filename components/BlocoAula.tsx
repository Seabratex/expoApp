import { StyleSheet, Text, View } from 'react-native';

type BlocoAulaProps = {
  titulo: string;
  descricao: string;
};

export function BlocoAula({ titulo, descricao }: BlocoAulaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#dbe4f0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a5f',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 23,
  },
});