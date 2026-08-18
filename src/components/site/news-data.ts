import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

export type Article = {
  slug: string;
  image: string;
  category: string;
  title: string;
  text: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "reforma-tributaria-o-que-muda",
    image: news1,
    category: "Tributário",
    title: "Reforma tributária: o que muda na rotina das empresas",
    text: "Um guia direto sobre prazos, transição de regimes e os pontos que exigem atenção do time financeiro.",
    body: [
      "A transição para o novo modelo de tributação sobre o consumo altera a forma de calcular, destacar e recuperar impostos. Na prática, o impacto começa antes da vigência plena: contratos, precificação e sistemas de emissão precisam ser revistos com antecedência.",
      "O primeiro passo é mapear as operações da empresa por natureza (venda de mercadoria, prestação de serviço, locação, intermediação) e verificar como cada uma passa a ser tratada. Empresas de serviços com folha relevante e poucos créditos tendem a sentir mais o efeito da mudança.",
      "Recomendamos três frentes de trabalho: revisão cadastral e fiscal dos produtos e serviços, simulação de carga tributária em cenários alternativos e atualização de cláusulas contratuais de reajuste tributário.",
      "Na Lotus, conduzimos essa análise junto ao time financeiro do cliente, com relatórios comparativos que mostram o efeito no preço final e na margem de contribuição.",
    ],
  },
  {
    slug: "planejamento-financeiro-proximo-ciclo",
    image: news2,
    category: "Estratégia",
    title: "Planejamento financeiro para o próximo ciclo de crescimento",
    text: "Como estruturar orçamento, metas e indicadores antes de expandir operação ou equipe.",
    body: [
      "Crescer sem orçamento é ampliar o risco. Antes de contratar, abrir uma nova unidade ou investir em estrutura, o gestor precisa de um plano financeiro que traduza a estratégia em números mensais.",
      "Um bom orçamento parte da receita realista por linha de produto, aplica margens históricas, projeta despesas fixas e variáveis e reserva capital de giro para o ciclo operacional.",
      "Em seguida, defina de três a cinco indicadores de acompanhamento — margem de contribuição, ponto de equilíbrio, ciclo financeiro, EBITDA e caixa livre — e revise-os mensalmente contra o planejado.",
      "O objetivo não é acertar a previsão, mas reagir rápido quando a realidade se afasta dela.",
    ],
  },
  {
    slug: "indicadores-para-acompanhar-mensalmente",
    image: news3,
    category: "Business Intelligence",
    title: "Indicadores que todo gestor deveria acompanhar mensalmente",
    text: "Da margem de contribuição ao ciclo de caixa: os números que revelam a saúde real do negócio.",
    body: [
      "Faturamento sozinho não diz se a empresa vai bem. A leitura útil começa na margem de contribuição, que mostra quanto sobra de cada real vendido depois dos custos variáveis.",
      "Some a isso o ponto de equilíbrio, o ciclo financeiro (prazo médio de recebimento menos o de pagamento, mais estoque) e a geração de caixa operacional.",
      "Esses números devem chegar ao gestor em um painel único, comparados ao mês anterior e ao mesmo período do ano passado, com uma leitura escrita do que mudou.",
      "É exatamente esse pacote que entregamos nos relatórios gerenciais mensais.",
    ],
  },
  {
    slug: "simples-presumido-ou-real",
    image: news2,
    category: "Tributário",
    title: "Simples Nacional, Lucro Presumido ou Real: como comparar",
    text: "Critérios práticos de faturamento, margem e folha para escolher o regime menos oneroso no próximo ano.",
    body: [
      "A escolha do regime tributário é a decisão fiscal de maior impacto no resultado e precisa ser tomada com base em simulação, não em regra de bolso.",
      "Três variáveis explicam a maior parte das diferenças: o faturamento anual, a margem de lucro efetiva e o peso da folha de pagamento sobre a receita.",
      "Empresas de serviços com folha alta frequentemente se beneficiam do Simples pelo fator R; margens baixas com créditos relevantes podem indicar Lucro Real.",
      "Fazemos essa comparação anualmente, com projeção dos doze meses seguintes e o efeito de cada regime no caixa.",
    ],
  },
  {
    slug: "pro-labore-e-distribuicao-de-lucros",
    image: news3,
    category: "Gestão",
    title: "Pró-labore e distribuição de lucros sem risco fiscal",
    text: "Como remunerar sócios de forma eficiente respeitando as exigências da Receita e da Previdência.",
    body: [
      "A remuneração de sócios combina pró-labore, obrigatório para quem trabalha na empresa, e distribuição de lucros, isenta quando há lucro contábil apurado e escrituração regular.",
      "O erro mais comum é distribuir valores sem contabilidade que comprove o lucro, o que expõe a empresa e o sócio a autuação e reclassificação como salário.",
      "A estrutura segura exige escrituração em dia, apuração formal do resultado e registro em ata ou contrato quando aplicável.",
      "Com contabilidade regular, é possível equilibrar carga previdenciária e eficiência tributária de forma legítima.",
    ],
  },
  {
    slug: "calendario-de-obrigacoes",
    image: news1,
    category: "Compliance",
    title: "Calendário de obrigações: prazos que não podem passar",
    text: "Um panorama das entregas mensais e anuais e do que fazer quando um prazo é perdido.",
    body: [
      "Obrigações acessórias perdidas geram multas que, somadas, superam com folga o custo de uma rotina contábil organizada.",
      "No ciclo mensal estão as apurações de tributos, escrituração fiscal, eventos de folha e declarações digitais; no anual, as declarações de rendimentos e ajustes de resultado.",
      "Quando um prazo é perdido, a orientação é entregar espontaneamente o quanto antes: a espontaneidade reduz o valor da penalidade.",
      "Nossos clientes recebem um calendário personalizado com alertas antecipados de cada entrega.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
