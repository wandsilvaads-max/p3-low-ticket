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

          {/* DIREITA — Imagem do produto */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center relative"
          >
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-64 h-64 bg-orange-500/15 rounded-full blur-[80px]" />
            </div>
            <Image
              src="/hero.png"
              alt="Script Agenda Lotada"
              width={520}
              height={520}
              className="relative z-10 w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
}
