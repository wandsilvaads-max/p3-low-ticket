"use client";

import { useEffect, useRef } from "react";

export default function ProductCard3D() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(900px) rotateY(${dx * 12}deg) rotateX(${-dy * 8}deg) scale(1.03)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(900px) rotateY(-8deg) rotateX(4deg) scale(1)`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Glow embaixo */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-16 bg-orange-500/40 blur-3xl rounded-full pointer-events-none" />

      {/* Card principal */}
      <div
        ref={cardRef}
        className="relative w-72 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-200 ease-out cursor-pointer"
        style={{
          transform: "perspective(900px) rotateY(-8deg) rotateX(4deg)",
          background: "linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)",
          border: "1px solid rgba(249,115,22,0.3)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(249,115,22,0.15)",
        }}
      >
        {/* Topo laranja */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-4">
          <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-1">
            P3 Company
          </p>
          <p className="text-white font-black text-2xl leading-none tracking-tight">
            SCRIPT
          </p>
          <p className="text-white font-black text-2xl leading-none tracking-tight">
            AGENDA LOTADA
          </p>
          <p className="text-white/70 text-xs tracking-widest uppercase mt-1">
            Para Clínicas de Estética
          </p>
        </div>

        {/* Corpo do card */}
        <div className="px-5 py-4 flex flex-col gap-3">
          {/* Módulos */}
          {[
            { n: "01", label: "Abertura sem queimar o preço" },
            { n: "02", label: "Qualificação com perguntas certas" },
            { n: "03", label: "Condução da negociação" },
            { n: "04", label: "Fechamento e confirmação" },
          ].map((m) => (
            <div key={m.n} className="flex items-center gap-3">
              <span className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                {m.n}
              </span>
              <span className="text-zinc-300 text-xs">{m.label}</span>
            </div>
          ))}

          {/* Divider */}
          <div className="border-t border-zinc-800 my-1" />

          {/* Bônus */}
          <div className="flex flex-col gap-2">
            <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">
              + Bônus inclusos
            </p>
            {[
              "5 Gatilhos de Agendamento Imediato",
              "Checklist de Atendimento Perfeito",
              "7 Follow-ups Anti-Sumiu",
            ].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <span className="text-orange-500 text-xs">✓</span>
                <span className="text-zinc-400 text-xs">{b}</span>
              </div>
            ))}
          </div>

          {/* Preço */}
          <div className="mt-2 bg-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3 text-center">
            <p className="text-zinc-500 text-xs line-through">R$ 97,00</p>
            <p className="text-white font-black text-2xl">R$ 39,90</p>
            <p className="text-orange-400 text-[10px] font-semibold uppercase tracking-widest">
              Acesso imediato
            </p>
          </div>
        </div>

        {/* Reflexo sutil no topo */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Sombra lateral */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-48 rounded-full pointer-events-none"
        style={{
          background: "rgba(0,0,0,0.5)",
          filter: "blur(8px)",
          transform: "translateY(-50%) skewY(15deg)",
        }}
      />
    </div>
  );
}
