const deliverables = [
  "Script completo do primeiro contato ao fechamento",
  "3 perguntas estratégicas de qualificação",
  "Modelo de abertura profissional",
  "Videoaulas demonstrando o atendimento passo a passo",
  "7 mensagens de follow-up Anti-Sumiu",
];

const steps = [
  {
    number: "01",
    title: "Acesse o material de imediato",
    description: "Após a compra, você tem acesso ao script e a todas as videoaulas completas. Sem espera.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Aplique no próximo atendimento",
    description: "Use a sequência certa de perguntas para conduzir o cliente da dúvida ao agendamento sem parecer forçado.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Lote sua agenda esta semana",
    description: "Com o protocolo aplicado em cada conversa, os agendamentos passam a ser previsíveis e consistentes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section className="py-12 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-10 md:gap-16">

        {/* BLOCO 1 — O que está incluso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-5">
              Um roteiro pronto.{" "}
              <span className="p3-text">Você copia e usa ainda hoje.</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              O <strong className="text-zinc-300">Script Agenda Lotada</strong> é um protocolo
              de atendimento desenvolvido para clínicas de estética que querem transformar
              o WhatsApp em máquina de agendamento — com consistência, independente de
              quem está na recepção.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800 rounded-xl px-5 py-4"
              >
                <span className="w-8 h-8 p3-gradient rounded-lg flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="text-zinc-200 text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divisória */}
        <div className="border-t border-zinc-800/60" />

        {/* BLOCO 2 — Como funciona */}
        <div>
          <div className="text-center mb-10">
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">como funciona</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              3 passos.{" "}
              <span className="p3-text">Do acesso ao resultado.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col justify-between min-h-[320px] md:min-h-[420px] rounded-2xl p-5 md:p-7 gap-5 md:gap-6 overflow-hidden"
                style={{ background: "#141414", border: "1px solid #2a1a3a" }}
              >
                {/* Glow roxo no canto superior direito */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(123,47,190,0.35) 0%, transparent 70%)" }}
                />
                {/* Topo */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 p3-gradient rounded-2xl flex items-center justify-center shrink-0">
                      <div className="scale-125">{step.icon}</div>
                    </div>
                    <span className="text-zinc-700 font-bold text-base tracking-widest">{step.number}</span>
                  </div>
                  <div className="border-t border-zinc-800/80" />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white font-bold text-xl leading-snug">{step.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {/* Rodapé */}
                <span className="inline-block border border-zinc-800 text-zinc-600 text-xs px-4 py-1.5 rounded-full w-fit">
                  Script Agenda Lotada
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-zinc-600 text-sm mt-8">
            Não é conteúdo teórico. É um processo validado por clínicas que atendem no WhatsApp todos os dias.
          </p>
        </div>

      </div>
    </section>
  );
}
