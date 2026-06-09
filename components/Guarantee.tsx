export default function Guarantee() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 px-8 py-10 flex flex-col md:flex-row items-center gap-8">

          {/* Glow laranja sutil no canto */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />

          {/* Badge número */}
          <div className="shrink-0 flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 border-orange-500 bg-transparent relative z-10">
            <span className="text-orange-500 font-black text-5xl leading-none">7</span>
            <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest leading-tight text-center">
              dias de<br />garantia
            </span>
          </div>

          {/* Texto */}
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-white font-extrabold text-2xl mb-3">
              Garantia incondicional de 7 dias
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Se dentro de 7 dias você achar que o Script Agenda Lotada não
              vale pelo menos 10x o que você pagou, basta enviar um e-mail e
              devolvemos 100% do seu investimento. Sem perguntas, sem
              burocracia.{" "}
              <span className="text-white font-bold">
                O risco é todo nosso. A decisão é sua.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
