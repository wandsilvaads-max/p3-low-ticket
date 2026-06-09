import { GlowCard } from "@/components/ui/GlowCard";

const CTA_LINK = "https://payfast.greenn.com.br/94835/offer/Bn0Ou3?ch_id=139912";

const bonuses = [
  {
    number: "BÔNUS #1",
    title: "5 Gatilhos de Agendamento Imediato",
    description:
      "Frases prontas para usar quando o cliente diz 'tá caro', 'vou pensar' ou 'já vi mais barato'. As melhores respostas para não perder o agendamento na hora H.",
    value: "R$ 37",
    mockupLines: ["5", "GATILHOS"],
    mockupSub: "DE AGENDAMENTO IMEDIATO",
    accent: "from-[#7B2FBE] to-[#E85D1A]",
  },
  {
    number: "BÔNUS #2",
    title: "Checklist de Atendimento Perfeito",
    description:
      "O que checar antes, durante e depois de cada atendimento via WhatsApp para maximizar a conversão e reduzir no-show.",
    value: "R$ 27",
    mockupLines: ["CHECK", "LIST"],
    mockupSub: "DE ATENDIMENTO PERFEITO",
    accent: "from-[#C4396B] to-[#E85D1A]",
  },
];

function MockupVisual({
  lines,
  sub,
  accent,
}: {
  lines: string[];
  sub: string;
  accent: string;
}) {
  return (
    <div className="relative flex items-center justify-center w-48 shrink-0">
      {/* Card de trás */}
      <div
        className="absolute left-2 top-3 w-28 h-40 rounded-xl"
        style={{
          background: "linear-gradient(145deg, #1a1a1a, #111)",
          border: "1px solid rgba(255,255,255,0.05)",
          transform: "rotate(-6deg)",
        }}
      >
        <div className={`w-full h-2/5 rounded-t-xl bg-gradient-to-br ${accent} opacity-80`} />
      </div>

      {/* Card principal */}
      <div
        className="relative w-32 h-44 rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #1e1e1e, #111)",
          border: "1px solid rgba(249,115,22,0.2)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(249,115,22,0.08)",
          transform: "rotate(2deg)",
        }}
      >
        {/* Topo laranja */}
        <div className={`bg-gradient-to-br ${accent} px-3 py-3 h-2/5`}>
          <p className="text-white/50 text-[8px] font-bold tracking-widest uppercase mb-1">P3 Company</p>
          {lines.map((line, i) => (
            <p key={i} className="text-white font-black text-lg leading-none">{line}</p>
          ))}
        </div>
        {/* Corpo */}
        <div className="px-3 py-3">
          <p className="text-zinc-500 text-[8px] uppercase tracking-wider leading-tight">{sub}</p>
          <div className="mt-2 flex flex-col gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-1.5 bg-zinc-800 rounded-full" style={{ width: `${70 - i * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Bonuses() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <p className="text-zinc-400 text-lg md:text-xl mb-1">
            E TEM MAIS...{" "}
            <span className="p3-text font-bold">2 presentes exclusivos</span>
          </p>
          <p className="text-zinc-300 text-lg md:text-xl">
            para <span className="font-bold">acelerar seus resultados</span>
          </p>
        </div>

        {/* Cards de bônus */}
        <div className="flex flex-col gap-6 mb-10">
          {bonuses.map((bonus) => (
            <GlowCard
              key={bonus.number}
              glowColor="orange"
              customSize
              className="w-full aspect-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-8">
                {/* Mockup visual */}
                <MockupVisual
                  lines={bonus.mockupLines}
                  sub={bonus.mockupSub}
                  accent={bonus.accent}
                />

                {/* Texto */}
                <div className="flex-1 text-center md:text-left">
                  <p className="p3-text font-bold text-sm tracking-widest uppercase mb-2">
                    {bonus.number}
                  </p>
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-3 leading-snug">
                    {bonus.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {bonus.description}
                  </p>
                  <p className="text-zinc-500 text-sm">
                    Valor:{" "}
                    <span className="line-through">{bonus.value}</span>. Hoje:{" "}
                    <span className="text-green-400 font-bold">Incluso</span>
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* CTA abaixo dos bônus */}
        <div className="text-center">
          <a
            href={CTA_LINK}
            className="inline-flex items-center gap-2 p3-gradient text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity"
          >
            Quero lotar minha agenda agora →
          </a>
        </div>
      </div>
    </section>
  );
}
