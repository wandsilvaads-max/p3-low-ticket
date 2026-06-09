"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { GridPattern } from "@/components/ui/GridPattern";
import Image from "next/image";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function HeroGeometric() {
  const CTA_LINK = "#oferta";

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a]">
      <GridPattern
        width={40}
        height={40}
        className="stroke-white/[0.04] fill-transparent"
      />

      {/* Vignette — escuro nas pontas */}
      <div className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, #0a0a0a 100%)",
        }}
      />

      {/* Top bar — full width fora do container */}
      <div className="relative z-20 p3-gradient text-white text-center text-[10px] md:text-xs font-bold py-2 px-2 tracking-wider md:tracking-widest uppercase w-full leading-snug">
        Para clínicas de estética que perdem clientes todo dia no WhatsApp
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6">

        {/* Logo */}
        <div className="py-5 md:py-7">
          <Image src="/logo-p3.png" alt="P3 Company" width={160} height={80} className="h-14 md:h-16 w-auto" style={{ mixBlendMode: "lighten", filter: "brightness(1.4) contrast(1.1)" }} />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 pb-10 md:pb-20">
          {/* ESQUERDA */}
          <div className="flex-1 w-full">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2 mb-7"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
                <Circle className="h-2 w-2 fill-purple-400" />
                <span className="text-xs text-purple-300 font-bold tracking-wide">OFERTA ESPECIAL</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Circle className="h-2 w-2 fill-zinc-500" />
                <span className="text-xs text-zinc-400 tracking-wide">GARANTIA DE 7 DIAS</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5 text-white"
            >
              O script que transforma{" "}
              <span className="p3-text">orçamento pedido</span>{" "}
              em{" "}
              <span className="p3-text">agenda lotada</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-zinc-400 text-base leading-relaxed mb-3 max-w-lg">
                Protocolo de atendimento validado para recepcionistas e donas de
                clínica que querem parar de perder clientes no WhatsApp.{" "}
                <span className="p3-text font-semibold">
                  Aplicação imediata. Resultado no próximo atendimento.
                </span>
              </p>
              <p className="text-zinc-600 italic text-sm mb-8 max-w-lg">
                O que muitas recepcionistas levam meses para aprender, você
                poderá aplicar nos seus atendimentos ainda hoje.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
              <a
                href={CTA_LINK}
                className="inline-flex items-center gap-2 p3-gradient text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity"
              >
                Quero lotar minha agenda agora →
              </a>
              <p className="mt-3 text-zinc-600 text-sm">
                <span className="line-through">De R$ 97,00</span>{" "}
                <span className="text-white font-bold">por R$ 29,90</span>
              </p>
            </motion.div>
          </div>

          {/* DIREITA — Card do produto animado */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center relative"
          >
            <style>{`
              @keyframes float-card {
                0%, 100% { transform: perspective(900px) rotateY(-8deg) rotateX(4deg) translateY(0px); }
                50%       { transform: perspective(900px) rotateY(-8deg) rotateX(4deg) translateY(-14px); }
              }
              .card-float-hero { animation: float-card 5s ease-in-out infinite; }
            `}</style>

            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-64 h-64 bg-orange-500/15 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10">
              {/* Card de trás */}
              <div
                className="absolute top-4 right-[-20px] w-64 h-[calc(100%-8px)] rounded-2xl"
                style={{
                  background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  transform: "perspective(900px) rotateY(-4deg) rotateX(2deg)",
                }}
              />

              {/* Card principal */}
              <div
                className="card-float-hero relative w-56 md:w-80 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #1e1e1e, #111)",
                  border: "1px solid rgba(249,115,22,0.30)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.8), 0 0 50px rgba(249,115,22,0.12)",
                }}
              >
                {/* Topo laranja */}
                <div className="p3-gradient px-6 py-6">
                  <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-2">P3 Company</p>
                  <p className="text-white font-black text-2xl md:text-3xl leading-none">SCRIPT</p>
                  <p className="text-white font-black text-2xl md:text-3xl leading-none">AGENDA LOTADA</p>
                  <p className="text-white/60 text-xs tracking-widest uppercase mt-2">Para Clínicas de Estética</p>
                </div>

                {/* Módulos */}
                <div className="px-6 py-5 flex flex-col gap-3">
                  {[
                    { n: "01", t: "Abertura sem queimar o preço" },
                    { n: "02", t: "Qualificação com perguntas certas" },
                    { n: "03", t: "Condução da negociação" },
                    { n: "04", t: "Fechamento e confirmação" },
                  ].map((m) => (
                    <div key={m.n} className="flex items-center gap-3">
                      <span className="w-6 h-6 p3-gradient rounded text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                        {m.n}
                      </span>
                      <span className="text-zinc-300 text-sm">{m.t}</span>
                    </div>
                  ))}

                  <div className="border-t border-zinc-800 my-2" />

                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-center">
                    <p className="text-zinc-600 text-xs line-through">R$ 97,00</p>
                    <p className="text-white font-black text-3xl">R$ 29,90</p>
                    <p className="p3-text text-[10px] font-bold uppercase tracking-widest mt-1">Acesso imediato</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
}
