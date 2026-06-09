const cycleSteps = [
  { pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", label: "1. Cliente entra em contato" },
  { pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2", label: "2. Recepcionista manda o preço" },
  { pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", label: "3. Cliente pede tempo para pensar" },
  { pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2", label: "4. Cliente some. Agenda com buracos." },
];

export default function Problem() {
  return (
    <section className="relative py-12 md:py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* ESQUERDA — Diagrama do ciclo */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-60 h-60 md:w-72 md:h-72">
              {/* Círculo de fundo */}
              <div className="absolute inset-6 rounded-full border-2 border-purple-500/20" />
              <div className="absolute inset-12 rounded-full border border-purple-500/10" />

              {/* Seta circular decorativa */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 288">
                <defs>
                  <linearGradient id="p3grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7B2FBE" />
                    <stop offset="50%" stopColor="#C4396B" />
                    <stop offset="100%" stopColor="#E85D1A" />
                  </linearGradient>
                  <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#C4396B" />
                  </marker>
                </defs>
                <circle
                  cx="144" cy="144" r="90"
                  fill="none"
                  stroke="url(#p3grad)"
                  strokeWidth="3"
                  strokeDasharray="420 60"
                  strokeLinecap="round"
                  markerEnd="url(#arrowhead)"
                  opacity="0.6"
                />
              </svg>

              {/* Labels do ciclo */}
              {cycleSteps.map((s, i) => (
                <div
                  key={i}
                  className={`absolute ${s.pos} w-32 text-center`}
                >
                  <span className="text-zinc-400 text-[11px] leading-tight bg-[#0d0d0d] px-1 block">
                    {s.label}
                  </span>
                </div>
              ))}

              {/* Centro */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="p3-text text-xs font-bold uppercase tracking-widest">ciclo</p>
                  <p className="text-zinc-600 text-xs">que não vende</p>
                </div>
              </div>
            </div>
          </div>

          {/* DIREITA — Texto */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-tight mb-6">
              SEU ATENDIMENTO<br />
              VIROU UMA{" "}
              <span className="text-zinc-400">SEQUÊNCIA</span> DE<br />
              MENSAGENS QUE<br />
              <span className="p3-text">NÃO VENDEM?</span>
            </h2>

            <div className="space-y-3">
              {[
                "Cliente pergunta o preço → recepcionista manda a tabela → ele some.",
                "Cliente diz 'vou pensar' → você espera → nunca mais aparece.",
                "Cliente marca horário → no dia, não aparece. Agenda cheia de buracos.",
                "Cada atendente conduz diferente. Nenhum padrão. Nenhuma previsibilidade.",
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="p3-text font-bold mt-0.5 shrink-0">✕</span>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <p className="text-zinc-300 text-sm leading-relaxed">
                O problema <em className="text-white not-italic font-semibold">não é o preço</em>.
                Não é o procedimento. Não é o cliente. É a falta de um{" "}
                <span className="p3-text font-semibold">processo de atendimento validado</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
