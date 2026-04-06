import { StyleSheet, Text, View } from 'react-native';

type CartaoProps = {
  nome: string;
  cargo: string;
  departamento: string;
  ativo: boolean; // ← prop nova
};

export function Cartao({ nome, cargo, departamento, ativo }: CartaoProps) {
  return (
    <View style={styles.cartao}>

      {/* Linha superior: nome + badge lado a lado */}
      <View style={styles.header}>
        <Text style={styles.nome}>{nome}</Text>

        <View style={ativo ? styles.badgeAtivo : styles.badgeInativo}>
          <Text style={ativo ? styles.badgeTextoAtivo : styles.badgeTextoInativo}>
            {ativo ? 'Ativo' : 'Inativo'}
          </Text>
        </View>
      </View>

      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.departamento}>{departamento}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  // linha do nome + badge
  header: {
    flexDirection: 'row',        // nome e badge ficam lado a lado
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },

  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  cargo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  departamento: {
    fontSize: 13,
    color: '#378ADD',
    marginTop: 6,
    fontWeight: '500',
  },

  // badge ATIVO — verde
  badgeAtivo: {
    backgroundColor: '#E1F5EE',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeTextoAtivo: {
    fontSize: 11,
    fontWeight: '600',
    color: '#085041',
  },

  // badge INATIVO — cinza
  badgeInativo: {
    backgroundColor: '#F1EFE8',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeTextoInativo: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B6B66',
  },
});