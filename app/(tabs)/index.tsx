// ─────────────────────────────────────────────────────────────────────────────
// app/(tabs)/index.tsx  —  Tela Home
// Tema: dark executive navy + ouro SEABRA
// Conteúdo: ISO/IEC — Certificação e Aplicação em Projetos de TI
// ─────────────────────────────────────────────────────────────────────────────

// ── Imports ───────────────────────────────────────────────────────────────────

import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BlocoAula } from '../../components/BlocoAula';

// ── Componente ────────────────────────────────────────────────────────────────

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

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* HEADER DO MÓDULO                                                       */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <View style={styles.cardModulo}>

        {/* Tag de identificação */}
        <Text style={styles.tagModulo}>GESTÃO DE TI  •  FACULDADE</Text>

        {/* Título principal */}
        <Text style={styles.tituloModulo}>ISO / IEC</Text>

        {/* Subtítulo do módulo */}
        <Text style={styles.subtituloModulo}>
          Certificação e Aplicação{'\n'}em Projetos de TI
        </Text>

        {/* Divisor ouro — separa conteúdo da marca */}
        <View style={styles.dividerGold} />

        {/* Marca SEABRA em ouro — identidade do projeto */}
        <Text style={styles.autorModulo}>SEABRA</Text>
        <Text style={styles.autorSub}>Gestão de TI</Text>

      </View>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 01 — FUNDAMENTOS                                                */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>01 — Fundamentos</Text>

      <BlocoAula
        tipo="destaque"
        titulo="O que são normas ISO/IEC?"
        descricao="ISO (International Organization for Standardization) e IEC (International Electrotechnical Commission) são organismos internacionais que publicam normas técnicas adotadas mundialmente. No contexto de TI, definem boas práticas para segurança, qualidade, governança e gestão de serviços."
      />

      <BlocoAula
        titulo="Por que normas internacionais importam?"
        descricao="Organizações certificadas demonstram maturidade e conformidade com padrões globais. Para projetos de TI, isso significa redução de riscos, melhoria contínua de processos e maior credibilidade junto a clientes e reguladores como a ANPD (LGPD)."
      />

      <BlocoAula
        tipo="definicao"
        titulo="ISO vs. IEC — Diferença e Sinergia"
        descricao="• ISO: foco em sistemas de gestão e processos gerais&#10;• IEC: foco em aspectos técnicos elétricos e eletrônicos&#10;• ISO/IEC: publicações conjuntas que cobrem TI de forma integrada, unindo processo e técnica em um único padrão"
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 02 — SEGURANÇA DA INFORMAÇÃO                                    */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>02 — Segurança da Informação</Text>

      <BlocoAula
        tipo="destaque"
        titulo="ISO/IEC 27001 — Visão Geral"
        descricao="Principal norma para Sistemas de Gestão de Segurança da Informação (SGSI). Define requisitos para estabelecer, implementar, manter e melhorar continuamente a proteção dos dados em qualquer organização, independente do porte ou setor de atuação."
      />

      <BlocoAula
        titulo="O que é o SGSI?"
        descricao="O SGSI é o conjunto de políticas, processos e controles que uma organização usa para gerenciar riscos de segurança. A ISO/IEC 27001 exige que esse sistema passe por auditorias periódicas e ciclos contínuos de melhoria baseados no modelo Plan-Do-Check-Act (PDCA)."
      />

      <BlocoAula
        titulo="ISO/IEC 27001 é importante?"
        descricao="Sim. Um SGSI implementado conforme este padrão é uma ferramenta de gestão de riscos, ciber-resiliência e excelência operacional. Significa que a organização identificou seus ativos de informação, mapeou vulnerabilidades e implementou controles proporcionais aos riscos existentes."
      />

      <BlocoAula
        tipo="definicao"
        titulo="ISO/IEC 27002 — Controles de Segurança"
        descricao="Complementa a 27001 fornecendo um catálogo de controles práticos divididos em quatro categorias:&#10;• Controles organizacionais (políticas, papéis, responsabilidades)&#10;• Controles de pessoas (conscientização, treinamento)&#10;• Controles físicos (acesso a instalações, equipamentos)&#10;• Controles tecnológicos (criptografia, autenticação, backup, logging)"
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 03 — GESTÃO DE SERVIÇOS DE TI                                  */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>03 — Gestão de Serviços de TI</Text>

      <BlocoAula
        tipo="destaque"
        titulo="ISO/IEC 20000 — Gestão de Serviços"
        descricao="Norma para Sistemas de Gestão de Serviços de TI (SGSTI). Define como organizações devem planejar, projetar, transicionar, entregar e melhorar serviços de TI de forma alinhada ao negócio e às necessidades dos clientes. É compatível com o framework ITIL."
      />

      <BlocoAula
        titulo="Principais processos da ISO/IEC 20000"
        descricao="• Gestão de incidentes e problemas&#10;• Gestão de mudanças e releases&#10;• Gestão de nível de serviço (SLA)&#10;• Gestão de capacidade e disponibilidade&#10;• Gestão de continuidade de serviço&#10;• Gestão de relacionamento com cliente e fornecedor"
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 04 — QUALIDADE                                                  */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>04 — Qualidade</Text>

      <BlocoAula
        tipo="destaque"
        titulo="ISO 9001 — Gestão da Qualidade"
        descricao="A norma de qualidade mais adotada no mundo. Define requisitos para que organizações demonstrem capacidade de fornecer produtos e serviços que atendam de forma consistente aos requisitos do cliente e regulatórios aplicáveis, com foco em satisfação e melhoria contínua."
      />

      <BlocoAula
        titulo="ISO 9001 aplicada em projetos de TI"
        descricao="Garante que processos de desenvolvimento, teste, entrega e suporte sejam documentados, padronizados e auditáveis. Reduz retrabalho, melhora a rastreabilidade de requisitos e aumenta a previsibilidade de prazos e custos em projetos de software e infraestrutura."
      />

      <BlocoAula
        tipo="definicao"
        titulo="ISO/IEC 25010 — Qualidade de Software"
        descricao="Define o modelo de qualidade de produtos de software com 8 características principais:&#10;1. Adequação funcional&#10;2. Eficiência de desempenho&#10;3. Compatibilidade&#10;4. Usabilidade&#10;5. Confiabilidade&#10;6. Segurança&#10;7. Manutenibilidade&#10;8. Portabilidade"
      />

      <BlocoAula
        titulo="ISO/IEC 90003 — Engenharia de Software"
        descricao="Guia de aplicação da ISO 9001 especificamente para desenvolvimento e manutenção de software. Orienta equipes na documentação de processos de engenharia de forma compatível com os requisitos de qualidade da ISO 9001, cobrindo ciclo de vida, validação e verificação."
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 05 — GOVERNANÇA DE TI                                           */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>05 — Governança de TI</Text>

      <BlocoAula
        tipo="destaque"
        titulo="ISO/IEC 38500 — Governança de TI"
        descricao="Fornece princípios para que diretores e executivos governem o uso da TI nas organizações. O foco não é técnico, mas estratégico: garante que a TI esteja alinhada às metas do negócio e que as decisões sobre tecnologia sejam tomadas com responsabilidade e transparência."
      />

      <BlocoAula
        tipo="definicao"
        titulo="Os 6 princípios da ISO/IEC 38500"
        descricao="1. Responsabilidade — quem decide, assume accountability&#10;2. Estratégia — TI alinhada aos planos de negócio&#10;3. Aquisição — compras de TI com justificativa clara&#10;4. Desempenho — TI entrega o que o negócio precisa&#10;5. Conformidade — cumprimento de leis e regulamentos&#10;6. Comportamento humano — TI respeita as pessoas"
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 06 — CERTIFICAÇÃO                                               */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>06 — Processo de Certificação</Text>

      <BlocoAula
        tipo="destaque"
        titulo="Como obter uma certificação ISO"
        descricao="1. Diagnóstico inicial — avaliar o estado atual da organização&#10;2. Implementação — aplicar os requisitos da norma escolhida&#10;3. Auditoria interna — validar a conformidade internamente&#10;4. Escolha do organismo certificador (ex: DNV, Bureau Veritas, BSI)&#10;5. Auditoria de certificação em duas fases&#10;6. Emissão do certificado (válido por 3 anos com auditorias de manutenção anuais)"
      />

      <BlocoAula
        titulo="Benefícios para projetos de TI"
        descricao="• Maior credibilidade com clientes e parceiros estratégicos&#10;• Vantagem competitiva em licitações e contratos corporativos&#10;• Redução de incidentes de segurança e falhas operacionais&#10;• Conformidade com LGPD e demais regulamentos&#10;• Cultura documentada de melhoria contínua&#10;• Facilita due diligence em fusões e aquisições"
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* CARD DE NAVEGAÇÃO                                                      */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <View style={styles.cardAcoes}>

        <Text style={styles.tituloAcoes}>APROFUNDE MAIS</Text>

        {/* Botão principal — exemplos práticos */}
        <Pressable style={styles.botaoPrimario} onPress={irParaPratica}>
          <Text style={styles.textoBotaoPrimario}>→  Exemplos Práticos</Text>
        </Pressable>

        {/* Botão secundário — abre modal da rota */}
        <Pressable style={styles.botaoSecundario} onPress={abrirModalDaRota}>
          <Text style={styles.textoBotaoSecundario}>Ver roteiro do módulo</Text>
        </Pressable>

      </View>

    </ScrollView>
  );
}

// ── Estilos ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({

  // Fundo geral — azul noite profundo
  container: {
    flex: 1,
    backgroundColor: '#070d1a',
  },

  // Espaçamento interno do ScrollView
  conteudo: {
    padding: 20,
    paddingBottom: 44,
  },

  // ── Header ──────────────────────────────────────────────────────────────

  cardModulo: {
    backgroundColor: '#0f1f3d',
    borderRadius: 20,
    padding: 28,
    marginBottom: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a3060',
    // Sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    // Sombra Android
    elevation: 10,
  },

  tagModulo: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4a6fa5',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 14,
  },

  tituloModulo: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 6,
  },

  subtituloModulo: {
    fontSize: 15,
    fontWeight: '400',
    color: '#8899aa',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 8,
    marginBottom: 22,
  },

  // Divisor dourado — separa conteúdo da marca
  dividerGold: {
    width: 40,
    height: 2,
    backgroundColor: '#d4af37',
    marginBottom: 16,
    borderRadius: 2,
  },

  // Nome SEABRA em ouro
  autorModulo: {
    fontSize: 20,
    fontWeight: '800',
    color: '#d4af37',
    letterSpacing: 5,
    textTransform: 'uppercase',
  },

  autorSub: {
    fontSize: 11,
    color: '#4a6fa5',
    letterSpacing: 1.5,
    marginTop: 5,
  },

  // ── Labels de seção ─────────────────────────────────────────────────────

  secaoLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#d4af37',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    marginBottom: 12,
    marginTop: 10,
    paddingLeft: 4,
  },

  // ── Card de ações (rodapé) ───────────────────────────────────────────────

  cardAcoes: {
    backgroundColor: '#0f1f3d',
    borderRadius: 18,
    padding: 20,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#1a3060',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  tituloAcoes: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4a6fa5',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    marginBottom: 16,
    textAlign: 'center',
  },

  botaoPrimario: {
    width: '100%',
    backgroundColor: '#1a4fd8',
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  textoBotaoPrimario: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },

  botaoSecundario: {
    width: '100%',
    backgroundColor: '#070d1a',
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1a3060',
  },

  textoBotaoSecundario: {
    color: '#4a6fa5',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },

});
