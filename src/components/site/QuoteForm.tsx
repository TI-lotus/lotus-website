import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./primitives";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo.").max(100),
  empresa: z.string().trim().min(2, "Informe o nome da empresa.").max(120),
  email: z.string().trim().email("Informe um e-mail válido.").max(255),
  telefone: z.string().trim().min(8, "Informe um telefone válido.").max(30),
  segmento: z.string().trim().min(2, "Informe o segmento.").max(120),
  colaboradores: z.string().trim().min(1, "Informe o número de colaboradores.").max(20),
  servicos: z.string().trim().min(2, "Descreva os serviços desejados.").max(300),
  mensagem: z.string().trim().max(1000).optional(),
});

const fields = [
  { name: "nome", label: "Nome completo", type: "text", span: "sm:col-span-1" },
  { name: "empresa", label: "Empresa", type: "text", span: "sm:col-span-1" },
  { name: "email", label: "E-mail", type: "email", span: "sm:col-span-1" },
  { name: "telefone", label: "Telefone", type: "tel", span: "sm:col-span-1" },
  { name: "segmento", label: "Segmento de atuação", type: "text", span: "sm:col-span-1" },
  { name: "colaboradores", label: "Número de colaboradores", type: "text", span: "sm:col-span-1" },
  { name: "servicos", label: "Serviços desejados", type: "text", span: "sm:col-span-2" },
] as const;

const inputClass =
  "w-full rounded-2xl border border-input bg-surface px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-steel focus:ring-4 focus:ring-steel/15";

export function QuoteForm() {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Verifique os dados informados.");
      return;
    }
    toast.success("Solicitação enviada. Entraremos em contato em até 1 dia útil.");
    setValues({});
  };

  return (
    <section id="orcamento" className="surface-soft py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Orçamento"
          title="Solicite um orçamento personalizado"
          description="Conte um pouco sobre a sua empresa e montamos uma proposta alinhada à sua realidade."
        />

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-12"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className={field.span}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    maxLength={300}
                    value={values[field.name] ?? ""}
                    onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="mensagem"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  maxLength={1000}
                  value={values["mensagem"] ?? ""}
                  onChange={(e) => setValues((v) => ({ ...v, mensagem: e.target.value }))}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
            >
              Solicitar meu orçamento
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
