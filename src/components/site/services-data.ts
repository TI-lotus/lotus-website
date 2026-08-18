import {
  BarChart3,
  Briefcase,
  Calculator,
  LineChart,
  Receipt,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  text: string;
  intro: string;
  deliverables: string[];
  forWho: string;
};

export const services: Service[] = [
  {
    slug: "contabilidade-empresarial",
    icon: Calculator,
    title: "Contabilidade empresarial",
    text: "Escrituração completa, demonstrações confiáveis e obrigações em dia, com rotina organizada e previsível.",
    intro:
      "Cuidamos de toda a escrituração contábil e fiscal da sua empresa, com fechamentos mensais no prazo e demonstrações que suportam decisões, crédito bancário e processos societários.",
    deliverables: [
      "Escrituração contábil e fiscal mensal",
      "Balanço patrimonial e DRE",
      "Apuração de tributos e guias de pagamento",
      "Obrigações acessórias federais, estaduais e municipais",
      "Conciliação bancária e de contas patrimoniais",
    ],
    forWho: "Empresas de todos os portes que precisam de contabilidade confiável e sem atrasos.",
  },
  {
    slug: "planejamento-tributario",
    icon: Receipt,
    title: "Planejamento tributário",
    text: "Análise de regimes e cenários para reduzir carga fiscal dentro da legalidade e com segurança técnica.",
    intro:
      "Comparamos regimes e estruturas possíveis para a sua operação e apresentamos o cenário com menor carga tributária legítima, com memória de cálculo e riscos mapeados.",
    deliverables: [
      "Simulação de Simples Nacional, Lucro Presumido e Lucro Real",
      "Análise do fator R e do peso da folha",
      "Revisão de créditos e benefícios aplicáveis",
      "Estudo de remuneração de sócios",
      "Relatório executivo com recomendação",
    ],
    forWho: "Empresas em crescimento, mudança de faturamento ou reestruturação societária.",
  },
  {
    slug: "consultoria-financeira",
    icon: LineChart,
    title: "Consultoria financeira",
    text: "Estrutura de fluxo de caixa, margens e indicadores para sustentar decisões de investimento e preço.",
    intro:
      "Organizamos a informação financeira da empresa para responder perguntas práticas: qual produto dá lucro, qual preço sustenta a margem e quanto de caixa a operação exige.",
    deliverables: [
      "Estruturação de fluxo de caixa projetado",
      "Análise de margem por produto ou serviço",
      "Cálculo de ponto de equilíbrio",
      "Política de preços e descontos",
      "Acompanhamento periódico de indicadores",
    ],
    forWho: "Gestores que precisam de leitura financeira clara para decidir com segurança.",
  },
  {
    slug: "folha-de-pagamento",
    icon: Users,
    title: "Gestão de folha de pagamento",
    text: "Admissões, encargos e obrigações trabalhistas conduzidos com precisão e total conformidade.",
    intro:
      "Assumimos a rotina de departamento pessoal, do cálculo mensal às obrigações digitais, reduzindo risco trabalhista e retrabalho interno.",
    deliverables: [
      "Admissões, rescisões e férias",
      "Folha mensal, 13º e encargos",
      "Envio de eventos digitais trabalhistas",
      "Controle de benefícios e afastamentos",
      "Apoio em fiscalizações e acordos",
    ],
    forWho: "Empresas com equipe própria que querem folha sem erros e sem passivo.",
  },
  {
    slug: "business-intelligence",
    icon: BarChart3,
    title: "Relatórios de business intelligence",
    text: "Painéis e relatórios gerenciais que traduzem dados contábeis em leitura clara do negócio.",
    intro:
      "Transformamos a base contábil e financeira em painéis atualizados, com os indicadores que o seu negócio realmente usa para decidir.",
    deliverables: [
      "Painel gerencial com atualização mensal",
      "Indicadores de margem, caixa e endividamento",
      "Comparativos mensais e anuais",
      "Leitura escrita dos principais desvios",
      "Estrutura pronta para reuniões de resultado",
    ],
    forWho: "Empresas que já têm dados, mas não têm informação organizada para decidir.",
  },
  {
    slug: "cfo-as-a-service",
    icon: Briefcase,
    title: "CFO as a Service",
    text: "Direção financeira sob demanda para orçamento, projeções e acompanhamento de metas.",
    intro:
      "Um profissional sênior atuando como diretor financeiro da sua empresa, sem o custo de uma contratação em tempo integral.",
    deliverables: [
      "Construção e revisão do orçamento anual",
      "Projeções de resultado e caixa",
      "Reuniões periódicas de resultado com a diretoria",
      "Apoio em captação e negociação bancária",
      "Governança e rotina financeira",
    ],
    forWho: "Empresas em expansão que precisam de direção financeira estratégica.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
