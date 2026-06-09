const CTA_LINK = "https://payfast.greenn.com.br/94835/offer/Bn0Ou3?ch_id=139912";

const items = [
  { label: "Script Agenda Lotada completo", original: "R$ 97", free: false },
  { label: "Videoaulas passo a passo", original: "R$ 97", free: true },
  { label: "7 Follow-ups Anti-Sumiu", original: "R$ 47", free: true },
  { label: "5 Gatilhos de Agendamento Imediato", original: "R$ 37", free: true },
  { label: "Checklist de Atendimento Perfeito", original: "R$ 27", free: true },
];

const badges = [
  {
    label: "Compra Segura",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: "Acesso Imediato",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    label: "Pagamento Único",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    label: "Sem mensalidades",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
];

export default function Offer() {
  return (
    <section id="oferta" className="relative py-20 md:py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Glow laranja de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-pink-700/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-xl mx-auto px-6">
        {/* Card principal */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Título dentro do card */}
          <div className="px-5 md:px-8 pt-6 md:pt-8 pb-5 md:pb-6 border-b border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide text-center">
              Quanto vale tudo isso
            </h2>
          </div>

          {/* Itens */}
          <div className="divide-y divide-white/[0.06]">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-5 md:px-8 py-4 md:py-5 gap-4"
              >
                <span className="text-zinc-300 text-sm md:text-base">{item.label}</span>
                <div className="shrink-0 text-right">
                  <p className="text-zinc-500 text-xs line-through">{item.original}</p>
                  {item.free ? (
                    <p className="text-green-400 font-bold text-sm">GRÁTIS</p>
                  ) : (
                    <p className="text-zinc-400 font-semibold text-sm">{item.original}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Subtotal riscado */}
          <div className="px-8 py-6 border-t border-white/10 text-center">
            <p className="text-zinc-400 text-base">
              Somando tudo isso você pagaria{" "}
              <span className="text-red-400 line-through font-semibold">R$ 305</span>
              , mas hoje...
            </p>
          </div>

          {/* Preço destaque */}
          <div className="px-5 md:px-8 pb-6 md:pb-8 text-center flex flex-col items-center gap-5">
            <div>
              <p className="text-zinc-400 text-sm uppercase tracking-widest font-semibold mb-1">
                Você paga apenas
              </p>
              <p className="text-white font-black leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 5rem)" }}>
                R$ 29,90
              </p>
            </div>

            <a
              href={CTA_LINK}
              className="w-full max-w-sm inline-flex items-center justify-center gap-2 p3-gradient text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity"
            >
              Quero lotar minha agenda agora →
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-2">
              {badges.map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-1.5 text-zinc-500 text-xs">
                  <span className="text-zinc-400">{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>

            {/* Garantia — dentro do mesmo card */}
            <div className="w-full border-t border-white/10 pt-6 mt-2 flex flex-col md:flex-row items-center gap-5 text-left">
              <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 border-purple-500">
                <span className="p3-text font-black text-3xl leading-none">7</span>
                <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-wider text-center leading-tight">
                  dias de<br />garantia
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed text-center md:text-left">
                Se dentro de 7 dias você achar que o Script Agenda Lotada não
                vale pelo menos 10x o que você pagou, basta enviar um e-mail e
                devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.{" "}
                <span className="text-white font-semibold">
                  O risco é todo nosso. A decisão é sua.
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
