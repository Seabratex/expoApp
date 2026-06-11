// ─────────────────────────────────────────────────────────────────────────────
// components/BlocoAula.tsx
// Componente reutilizável para exibir blocos de conteúdo educativo.
//
// Props:
//   titulo    — rótulo em caixa alta no topo do card
//   descricao — corpo de texto explicativo
//   tipo      — define a cor da barra lateral:
//               'padrao'   → cinza azulado (conteúdo comum)
//               'destaque' → ouro (#d4af37) — conceito principal da seção
//               'definicao'→ azul elétrico (#1a6bff) — definição técnica
// ─────────────────────────────────────────────────────────────────────────────

import { StyleSheet, Text, View } from 'react-native';

// ── Tipos ────────────────────────────────────────────────────────────────────

type TipoBloco = 'padrao' | 'destaque' | 'definicao';

type Props = {
  titulo: string;
  descricao: string;
  tipo?: TipoBloco;  // opcional — padrão é 'padrao'
};

// ── Componente ────────────────────────────────────────────────────────────────

export function BlocoAula({ titulo, descricao, tipo = 'padrao' }: Props) {

  // Determina as cores com base no tipo do bloco
  const corBarra =
    tipo === 'destaque'  ? '#d4af37' :   // ouro — conceito principal
    tipo === 'definicao' ? '#1a6bff' :   // azul — definição técnica
                           '#1e3a5f';    // navy — conteúdo comum

  const corTitulo =
    tipo === 'destaque'  ? '#d4af37' :   // ouro
    tipo === 'definicao' ? '#60a5fa' :   // azul claro
                           '#4a6fa5';    // azul médio

  return (
    <View style={styles.card}>

      {/* Barra lateral colorida — assinatura visual do componente */}
      <View style={[styles.barra, { backgroundColor: corBarra }]} />

      {/* Conteúdo textual */}
      <View style={styles.conteudo}>
        <Text style={[styles.titulo, { color: corTitulo }]}>
          {titulo}
        </Text>
        <Text style={styles.descricao}>
          {descricao}
        </Text>
      </View>

    </View>
  );
}

// ── Estilos ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({

  // Card externo — dark navy com sombra
  card: {
    flexDirection: 'row',
    backgroundColor: '#0f1f3d',
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1a3060',
    // Sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    // Sombra Android
    elevation: 5,
  },

  // Barra lateral — 4px, colorida por tipo
  barra: {
    width: 4,
  },

  // Área de texto à direita da barra
  conteudo: {
    flex: 1,
    padding: 16,
  },

  // Rótulo da seção — caixa alta, pequeno, colorido por tipo
  titulo: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  // Corpo do texto — cinza claro, legível no fundo escuro
  descricao: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 22,
  },

});
