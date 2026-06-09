const steps = [
  {
    number: "01",
    title: "Acesse o Script Agenda Lotada de imediato",
    description:
      "Após a compra, você tem acesso ao script e a todas as aulas completas.",
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
    title: "Entenda a melhor forma de conduzir suas conversas",
    description:
      "Use a sequência certa de perguntas estratégicas para extrair a necessidade real e a urgência do cliente sem parecer um interrogatório.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Comece a aplicar nos próximos atendimentos",
    description:
      "Use o script nas próximas conversas com clientes e veja os agendamentos aumentarem.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
];

export default function Steps() {
  return (
    <section className="py-20 md:py-28 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
            Tudo pronto para você{" "}
            <span className="text-orange-500">copiar e usar ainda hoje</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 gap-5"
            >
              {/* Topo: ícone + número */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <span className="text-zinc-700 font-bold text-sm tracking-widest">
                  {step.number}
                </span>
              </div>

              {/* Divisória */}
              <div className="border-t border-zinc-800" />

              {/* Conteúdo */}
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-white font-bold text-lg leading-snug">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tag rodapé */}
              <div className="mt-auto">
                <span className="inline-block border border-zinc-700 text-zinc-500 text-xs px-3 py-1 rounded-full">
                  Script Agenda Lotada
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <p className="text-center text-zinc-500 text-sm mt-10 max-w-lg mx-auto">
          Não é conteúdo teórico. É um processo de vendas validado por clínicas
          que atendem no WhatsApp todos os dias.
        </p>

      </div>
    </section>
  );
}
