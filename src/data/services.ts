export const SERVICES = [
  {
    id: 'vistoria-imoveis',
    title: 'Vistoria de Imóveis',
    description: 'Avaliação técnica para identificar problemas construtivos em imóveis residenciais e comerciais.',
    detail: 'Realizamos uma inspeção minuciosa do imóvel, identificando patologias construtivas como fissuras, infiltrações, problemas elétricos e hidráulicos, vícios ocultos e desvios de norma. Ideal antes de comprar, alugar ou realizar qualquer intervenção.',
    includes: [
      'Inspeção visual completa de todas as áreas',
      'Registro fotográfico detalhado',
      'Laudo técnico com classificação das anomalias',
      'Recomendações de correção e priorização',
      'Assinatura do engenheiro responsável',
    ],
  },
  {
    id: 'laudo-tecnico',
    title: 'Laudo Técnico',
    description: 'Elaboração de laudos técnicos com análise detalhada de patologias e não conformidades.',
    detail: 'Documentos técnicos com validade jurídica, elaborados por engenheiro habilitado, descrevendo as condições da edificação, causas das anomalias e recomendações técnicas fundamentadas em normas ABNT vigentes.',
    includes: [
      'Análise técnica embasada em normas ABNT',
      'Mapeamento de patologias com localização exata',
      'Diagnóstico das causas e mecanismos de degradação',
      'Prescrição de intervenções corretivas',
      'Validade jurídica — ART inclusa',
    ],
  },
  {
    id: 'vistoria-entrega',
    title: 'Vistoria de Entrega de Apartamento',
    description: 'Inspeção completa antes do recebimento do imóvel pela construtora.',
    detail: 'Acompanhamos você no momento mais crítico: a entrega das chaves. Verificamos cada detalhe do imóvel antes da assinatura, garantindo que a construtora corrija tudo que não está em conformidade com o contrato e com as normas técnicas.',
    includes: [
      'Verificação de todas as instalações elétricas e hidráulicas',
      'Conferência de esquadrias, revestimentos e pintura',
      'Teste de funcionamento de todos os equipamentos',
      'Confronto com o memorial descritivo do contrato',
      'Relatório com lista de pendências para a construtora',
    ],
  },
  {
    id: 'consultoria-reforma',
    title: 'Consultoria para Reforma',
    description: 'Orientação técnica para reformas e adequações, garantindo segurança, funcionalidade e economia.',
    detail: 'Antes de iniciar qualquer obra, conte com orientação técnica especializada. Analisamos a viabilidade estrutural, verificamos a necessidade de projetos e alvarás, e orientamos a execução para evitar retrabalhos, gastos desnecessários e riscos à segurança.',
    includes: [
      'Análise de viabilidade estrutural da reforma',
      'Verificação de necessidade de projetos e alvarás',
      'Compatibilização das intervenções com a edificação existente',
      'Orientação sobre materiais e técnicas adequadas',
      'Acompanhamento inicial para evitar erros de execução',
    ],
  },
  {
    id: 'acompanhamento-obras',
    title: 'Acompanhamento de Obras e Reformas',
    description: 'Acompanhamento técnico da execução para garantir qualidade, prazo e conformidade.',
    detail: 'Presença técnica constante ou periódica na obra para fiscalizar a execução dos serviços, garantir que os projetos estejam sendo respeitados, controlar a qualidade dos materiais aplicados e validar cada etapa antes de liberar o pagamento do empreiteiro.',
    includes: [
      'Visitas técnicas periódicas com relatório de progresso',
      'Fiscalização da conformidade com projetos e normas',
      'Controle de qualidade de materiais e serviços',
      'Mediação técnica entre cliente e empreiteiro',
      'Liberação técnica de cada etapa da obra',
    ],
  },
  {
    id: 'inspecao-predial',
    title: 'Inspeção Predial',
    description: 'Análise das condições de conservação da edificação com relatório técnico e recomendações.',
    detail: 'Avaliação completa das condições de conservação, manutenção e segurança de edificações, conforme a NBR 16.747. Atendemos condomínios residenciais e comerciais que precisam do laudo para fins legais, seguros ou para planejamento de manutenção preventiva.',
    includes: [
      'Inspeção conforme NBR 16.747',
      'Avaliação de todos os sistemas da edificação',
      'Classificação de risco das anomalias (baixo, médio, alto, crítico)',
      'Plano de manutenção preventiva e corretiva',
      'Laudo com ART para fins legais e de seguro',
    ],
  },
] as const

export type ServiceId = typeof SERVICES[number]['id']

export const CONTACT = {
  phone: '(27) 99999-9999',
  phoneHref: 'tel:+5527999999999',
  whatsapp: 'https://wa.me/5527999999999',
  whatsappMsg: 'https://wa.me/5527999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.',
  email: 'contato@darte.eng.br',
  region: 'Vitória e região',
  instagram: 'https://instagram.com/darteengenharia',
} as const
