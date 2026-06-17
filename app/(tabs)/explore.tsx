// ─────────────────────────────────────────────────────────────────────────────
// app/(tabs)/explore.tsx  —  Tela de Aprofundamento
// Conteúdo: Diretrizes de Segurança, Gestão de Riscos,
//           Gestão de Incidentes e Conscientização
// ─────────────────────────────────────────────────────────────────────────────

import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BlocoAula } from '../../components/BlocoAula';

export default function ExploreScreen() {

  const router = useRouter();

  return (

    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* HEADER                                                                 */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <View style={styles.cardHeader}>
        <Text style={styles.tagHeader}>ISO / IEC  •  APROFUNDAMENTO</Text>
        <Text style={styles.tituloHeader}>Diretrizes &{'\n'}Gestão</Text>
        <View style={styles.dividerGold} />
        <Text style={styles.autorHeader}>SEABRA®</Text>
        <Text style={styles.autorSub}>Gestão de TI</Text>
      </View>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 01 — DIRETRIZES DE POLÍTICA DE SEGURANÇA                       */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>01 — Diretrizes de Política de Segurança</Text>

      <BlocoAula
        tipo="destaque"
        titulo="Tratamento da Informação"
        descricao="Estabelece mecanismos e controles sobre como os dados devem ser coletados, processados, armazenados e compartilhados. Define práticas para garantir a confidencialidade, integridade, disponibilidade e autenticidade das informações, incluindo diretrizes para a classificação de dados sensíveis."
      />

      <BlocoAula
        titulo="Segurança Física"
        descricao="Medidas para proteger fisicamente os ativos de informação: restrições de acesso a locais críticos, monitoramento por sistemas de segurança, controles de entrada e saída, e medidas para prevenir danos causados por fatores ambientais como incêndios e inundações."
      />

      <BlocoAula
        titulo="Gestão de Ativos"
        descricao="Determina como os recursos de TI devem ser inventariados, rastreados, protegidos e descartados ao final de sua vida útil. O objetivo é otimizar a utilização dos recursos e minimizar os riscos associados a ativos desatualizados ou sem controle."
      />

      <BlocoAula
        titulo="Gestão do Uso de Recursos Digitais"
        descricao="Regula o uso das tecnologias disponíveis: internet, e-mail, redes sociais e computação em nuvem. Define quais atividades são permitidas, restringidas ou proibidas para garantir produtividade e minimizar riscos de segurança e uso inadequado."
      />

      <BlocoAula
        tipo="definicao"
        titulo="Controles de Acesso"
        descricao="Estabelece como as identidades digitais são gerenciadas e como usuários obtêm acesso a sistemas e informações. Aborda três pilares:&#10;• Autenticação — verificar quem é o usuário&#10;• Autorização — definir o que o usuário pode acessar&#10;• Privilégio mínimo — conceder apenas o acesso necessário para a função"
      />

      <BlocoAula
        titulo="Gestão de Continuidade"
        descricao="Orienta como a organização deve se preparar para manter operações em caso de interrupções — ataques cibernéticos, desastres naturais ou falhas de infraestrutura. Inclui a elaboração de Planos de Recuperação de Desastres (DRP) e Planos de Continuidade de Negócios (BCP)."
      />

      <BlocoAula
        titulo="Auditoria e Conformidade"
        descricao="Estabelece como a organização monitora e avalia a conformidade com suas políticas de segurança da informação. Inclui auditorias regulares para verificar a adesão às diretrizes estabelecidas e às regulamentações aplicáveis, como a LGPD e normas ISO."
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 02 — GESTÃO DE RISCOS                                          */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>02 — Gestão de Riscos</Text>

      <BlocoAula
        tipo="destaque"
        titulo="O que é Risco?"
        descricao="No sentido amplo, é a possibilidade de ocorrência de um evento que pode impactar o cumprimento dos objetivos. Pode ser mensurado em termos de impacto (quão grave seria o dano) e de probabilidade (quão provável é que ocorra)."
      />

      <BlocoAula
        tipo="definicao"
        titulo="Risco de Segurança da Informação"
        descricao="Risco potencial associado à exploração de uma ou mais vulnerabilidades de ativos de informação por parte de ameaças, com impacto negativo no negócio da organização. Combina três elementos: ativo + vulnerabilidade + ameaça."
      />

      <BlocoAula
        titulo="Identificação de Riscos"
        descricao="Processo de localizar, listar e caracterizar elementos de risco. Responde à pergunta: quais são os riscos existentes? É o primeiro passo da gestão de riscos e define o escopo de todo o processo seguinte."
      />

      <BlocoAula
        titulo="Avaliação de Riscos"
        descricao="Processo de comparar o risco estimado com critérios de risco predefinidos para determinar sua importância. Classifica os riscos por nível de criticidade — definindo quais precisam de ação imediata e quais podem ser monitorados."
      />

      <BlocoAula
        tipo="definicao"
        titulo="Formas de Tratamento do Risco"
        descricao="• Mitigação — implementar controles para reduzir probabilidade ou impacto&#10;• Aceitação — classificar como aceitável quando o custo de mitigação supera o risco&#10;• Transferência — compartilhar o ônus com outra entidade (ex: seguro, contrato com terceiros)&#10;• Eliminação — descontinuar a atividade que gera o risco"
      />

      <BlocoAula
        titulo="Análise de Custo–Benefício"
        descricao="Antes de implementar medidas de mitigação, a organização avalia se os custos associados superam os benefícios esperados em termos de redução de risco. Se o custo de controle for maior que o impacto do risco, a aceitação pode ser a decisão mais racional."
      />

      <BlocoAula
        titulo="Monitoramento Contínuo dos Riscos"
        descricao="A gestão de riscos não é um evento único — é um processo contínuo. Demanda um método para acompanhar a eficácia das ações de mitigação implementadas e identificar mudanças no perfil de riscos ao longo do tempo, à medida que o ambiente e as ameaças evoluem."
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 03 — GESTÃO DE INCIDENTES                                      */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>03 — Gestão de Incidentes</Text>

      <BlocoAula
        tipo="destaque"
        titulo="Gestão de Incidentes de Segurança"
        descricao="Processo que integra atividades de gestão de riscos, continuidade do negócio, tratamento de incidentes, conformidade, segurança cibernética, física e lógica aos processos estratégicos, operacionais e táticos da organização. Vai além da TI — envolve toda a estrutura institucional."
      />

      <BlocoAula
        tipo="definicao"
        titulo="O que é um Incidente?"
        descricao="Interrupção não planejada ou redução da qualidade de um serviço. Mais especificamente: ocorrência que permitiu, ou pode permitir, acesso não autorizado, interrupção de operações, destruição, dano, deleção de informação protegida, ou apropriação e publicação indevida de dados de algum ativo crítico."
      />

      <BlocoAula
        tipo="definicao"
        titulo="Incidente Cibernético"
        descricao="Ocorrência que pode comprometer, real ou potencialmente, a disponibilidade, integridade, confidencialidade ou autenticidade de um sistema de informação. Tipos comuns:&#10;• Tentativas de acesso não autorizado a sistemas ou dados&#10;• Uso não autorizado de sistemas para processamento ou armazenamento&#10;• Mudanças não autorizadas em firmware, hardware ou software&#10;• Ataques de negação de serviço (DDoS)&#10;⚠ Um incidente cibernético não significa necessariamente que as informações já estão comprometidas — significa que estão ameaçadas."
      />

      <BlocoAula
        titulo="Gestão de Incidentes Cibernéticos"
        descricao="Processo que realiza ações sobre qualquer evento adverso relacionado à Segurança Cibernética dos sistemas ou da infraestrutura de computação. Define procedimentos de identificação, contenção, erradicação, recuperação e análise pós-incidente (lições aprendidas)."
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SEÇÃO 04 — CONSCIENTIZAÇÃO E CAPACITAÇÃO                             */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <Text style={styles.secaoLabel}>04 — Conscientização e Capacitação</Text>

      <BlocoAula
        tipo="destaque"
        titulo="Por que conscientização importa?"
        descricao="As ações de sensibilização, conscientização e capacitação instrumentalizam os colaboradores no contexto da Segurança Cibernética. Fomentam uma cultura de segurança com comportamentos alinhados às boas práticas — pois o fator humano é a principal vulnerabilidade explorada por atacantes."
      />

      <BlocoAula
        titulo="Seminários, Palestras e Workshops"
        descricao="Realizar eventos periódicos para colaboradores sobre ameaças comuns, boas práticas e medidas de prevenção. O objetivo é manter a equipe atualizada sobre o cenário de ameaças e o papel de cada pessoa na proteção da organização."
      />

      <BlocoAula
        titulo="Simulações de Phishing"
        descricao="Enviar e-mails simulados de phishing para colaboradores para avaliar a capacidade de identificar mensagens maliciosas. Os resultados embasam treinamentos adicionais e mostram quais perfis de usuários precisam de mais atenção."
      />

      <BlocoAula
        titulo="Engenharia Social e Senhas Fortes"
        descricao="• Engenharia social: simular situações para ensinar colaboradores a reconhecer manipulação e fraude&#10;• Senhas fortes: oferecer orientações sobre criação e gerenciamento de senhas únicas e complexas, incluindo o uso de gerenciadores de senhas"
      />

      <BlocoAula
        titulo="Exercícios de Resposta a Incidentes"
        descricao="Realizar simulações de incidentes cibernéticos para treinar equipes sobre como responder a ataques e mitigar impactos. Esses exercícios revelam falhas nos processos antes que um incidente real aconteça, reduzindo tempo de resposta e impacto."
      />

      <BlocoAula
        titulo="Dispositivos Móveis e Teletrabalho"
        descricao="• Dispositivos móveis: orientações para uso seguro de smartphones e tablets, incluindo redes Wi-Fi públicas e apps confiáveis&#10;• Teletrabalho: boas práticas para trabalho remoto, conexão VPN, e compartilhamento seguro de dados e informações corporativas"
      />

      <BlocoAula
        titulo="Segurança para Desenvolvedores"
        descricao="Educar desenvolvedores sobre práticas seguras de codificação para eliminar vulnerabilidades em software. Inclui treinamentos sobre testes de segurança em aplicativos antes de colocá-los em produção — fundamental para projetos de TI."
      />

      <BlocoAula
        tipo="definicao"
        titulo="Programa Contínuo de Treinamento"
        descricao="A conscientização não é um evento único. Um programa contínuo de treinamento em Segurança Cibernética garante que todos os colaboradores fiquem atualizados e preparados para lidar com a dinâmica das ameaças. Segurança é cultura — não apenas tecnologia."
      />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* CARD DE NAVEGAÇÃO                                                      */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      <View style={styles.cardAcoes}>
        <Text style={styles.tituloAcoes}>MÓDULO PRINCIPAL</Text>
        <Pressable
          style={styles.botaoPrimario}
          onPress={() => router.push('/')}
        >
          <Text style={styles.textoBotaoPrimario}>← Voltar às Normas ISO/IEC</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}

// ── Estilos ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#070d1a',
  },

  conteudo: {
    padding: 20,
    paddingBottom: 44,
  },

  // ── Header ──────────────────────────────────────────────────────────────

  cardHeader: {
    backgroundColor: '#0f1f3d',
    borderRadius: 20,
    padding: 28,
    marginBottom: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a3060',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },

  tagHeader: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4a6fa5',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 14,
  },

  tituloHeader: {
    fontSize: 40,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 2,
    lineHeight: 46,
  },

  dividerGold: {
    width: 40,
    height: 2,
    backgroundColor: '#d4af37',
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 2,
  },

  autorHeader: {
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

  // ── Card de ações ────────────────────────────────────────────────────────

  cardAcoes: {
    backgroundColor: '#0f1f3d',
    borderRadius: 18,
    padding: 20,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#1a3060',
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
  },

  textoBotaoPrimario: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },

});
