// Importa componentes do React Native
// StyleSheet: usado para criar estilos organizados (como CSS)
// Text: usado para exibir textos na tela
// View: usado como container (equivalente a uma "div" no HTML)
import { StyleSheet, Text, View } from 'react-native';

// Define o tipo das propriedades que o componente vai receber
// Isso é TypeScript garantindo que os dados tenham o formato correto
type CartaoProps = {
  nome: string;          // nome da pessoa (texto)
  cargo: string;         // cargo da pessoa (texto)
  departamento: string;  // departamento da pessoa (texto)
  ativo: boolean;        // status da pessoa (true = ativo, false = inativo)
};

// Criação do componente Cartao
// Ele recebe as propriedades definidas acima
export function Cartao({ nome, cargo, departamento, ativo }: CartaoProps) {
  return (
    // View principal do cartão (container geral)
    <View style={styles.cartao}>

      {/* Linha superior: nome + badge de status */}
      <View style={styles.header}>

        {/* Exibe o nome recebido como propriedade */}
        <Text style={styles.nome}>{nome}</Text>

        {/* View do badge (etiqueta de status)
            Se ativo for true, usa estilo verde
            Se for false, usa estilo cinza */}
        <View style={ativo ? styles.badgeAtivo : styles.badgeInativo}>

          {/* Texto dentro do badge
              Também muda conforme o status */}
          <Text style={ativo ? styles.badgeTextoAtivo : styles.badgeTextoInativo}>
            {/* Condição:
                Se ativo = true → mostra "Ativo"
                Se ativo = false → mostra "Inativo" */}
            {ativo ? 'Ativo' : 'Inativo'}
          </Text>

        </View>
      </View>

      {/* Exibe o cargo da pessoa */}
      <Text style={styles.cargo}>{cargo}</Text>

      {/* Exibe o departamento da pessoa */}
      <Text style={styles.departamento}>{departamento}</Text>

    </View>
  );
}

// Criação dos estilos do componente
const styles = StyleSheet.create({

  // Estilo do container principal (cartão)
  cartao: {
    backgroundColor: '#fff',      // fundo branco
    borderRadius: 12,             // bordas arredondadas
    padding: 16,                  // espaçamento interno
    marginBottom: 12,             // espaço abaixo do cartão
    borderWidth: 1,               // largura da borda
    borderColor: '#e0e0e0',       // cor da borda
  },

  // Estilo da linha superior (nome + badge)
  header: {
    flexDirection: 'row',           // organiza elementos na horizontal
    justifyContent: 'space-between', // separa nome e badge nas extremidades
    alignItems: 'center',           // alinha verticalmente no centro
    marginBottom: 4,                // espaço abaixo da linha
  },

  // Estilo do nome
  nome: {
    fontSize: 16,        // tamanho da fonte
    fontWeight: '600',   // peso da fonte (semi-negrito)
    color: '#1a1a1a',    // cor do texto
  },

  // Estilo do cargo
  cargo: {
    fontSize: 14,        // fonte menor que o nome
    color: '#666',       // cor cinza
    marginTop: 4,        // espaço acima
  },

  // Estilo do departamento
  departamento: {
    fontSize: 13,        // fonte ainda menor
    color: '#378ADD',    // cor azul
    marginTop: 6,        // espaço acima
    fontWeight: '500',   // leve destaque
  },

  // Estilo do badge quando ATIVO (verde)
  badgeAtivo: {
    backgroundColor: '#E1F5EE', // fundo verde claro
    borderRadius: 20,           // formato arredondado
    paddingHorizontal: 10,      // espaço lateral interno
    paddingVertical: 3,         // espaço vertical interno
  },

  // Estilo do texto do badge ATIVO
  badgeTextoAtivo: {
    fontSize: 11,        // fonte pequena
    fontWeight: '600',   // semi-negrito
    color: '#085041',    // verde escuro
  },

  // Estilo do badge quando INATIVO (cinza)
  badgeInativo: {
    backgroundColor: '#F1EFE8', // fundo cinza claro
    borderRadius: 20,           // arredondado
    paddingHorizontal: 10,
    paddingVertical: 3,
  },

  // Estilo do texto do badge INATIVO
  badgeTextoInativo: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B6B66', // cinza escuro
  },

});