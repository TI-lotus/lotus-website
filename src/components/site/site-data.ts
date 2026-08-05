export const LOGIN_URL = "https://lotusaccounting.lovable.app/";

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Planos", to: "/planos" },
  { label: "Depoimentos", to: "/depoimentos" },
  { label: "Notícias", to: "/noticias" },
  { label: "Orçamento", to: "/orcamento" },
  { label: "Contato", to: "/contato" },
] as const;

export const contact = {
  address: "QS 1, Torre 3, Sala 1706 — Águas Claras\nBrasília — DF, 71950-770",
  addressShort: "QS 1, Torre 3, Sala 1706 — Águas Claras, Brasília — DF, 71950-770",
  phone: "(61) 98333-9432",
  phoneHref: "tel:+5561983339432",
  whatsapp: "https://wa.me/5561983339432",
  email: "contabilidade@lotuscont.com.br",
  hours: [
    { day: "Segunda-feira", time: "08:00 — 18:00" },
    { day: "Terça-feira", time: "08:00 — 18:00" },
    { day: "Quarta-feira", time: "08:00 — 18:00" },
    { day: "Quinta-feira", time: "08:00 — 18:00" },
    { day: "Sexta-feira", time: "08:00 — 18:00" },
    { day: "Sábado", time: "08:00 — 12:00" },
    { day: "Domingo", time: "Fechado" },
  ],
  hoursShort: "Seg. a sex., 08:00–18:00 · Sáb., 08:00–12:00 · Dom., fechado",
  mapsQuery:
    "https://www.google.com/maps?q=QS%201%20Torre%203%20Sala%201706%20%C3%81guas%20Claras%20Bras%C3%ADlia%20DF%2071950-770&output=embed",
};
