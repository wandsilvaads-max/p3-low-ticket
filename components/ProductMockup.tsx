"use client";

import { motion } from "framer-motion";

const followUps = [
  "Follow-up da Conexão",
  "Follow-up de Valor",
  "Follow-up da Prova Social",
  "Follow-up da Urgência",
  "Follow-up da Personalização",
  "Follow-up da Objeção",
  "Follow-up de Confirmação",
  "Follow-up da Escassez",
  "Follow-up de Reciprocidade",
  "Follow-up da Reativação",
];

const questions = [
  "Você já pensou em como seria se sentir ainda melhor?",
  "Qual seu maior incômodo hoje e o que faz buscar isso?",
  "O que você já tentou antes sem sucesso?",
  "Qual o resultado ideal que você espera alcançar?",
  "Qual seu melhor horário para vir na avaliação?",
];

const objections = [
  { title: "Está caro:", text: "Entendo. Por isso oferecemos condições especiais para o seu perfil." },
  { title: "Não tenho tempo:", text: "Nossos protocolos são rápidos e cabem na sua rotina." },
  { title: "Vou pensar:", text: "Posso te reservar um horário e você decide com calma." },
  { title: "Já fiz antes e não funcionou:", text: "Nossos protocolos são personalizados para resultados reais." },
  { title: "Preciso de garantia:", text: "Aqui na clínica, seu resultado é acompanhado do início ao fim." },
];

export default function ProductMockup() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">o que você recebe</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Tudo que você precisa para{" "}
            <span className="p3-text">lotar sua agenda</span>
          </h2>
          <p className="text-zinc-500 text-base mt-4 max-w-xl mx-auto">
            Protocolo completo desenvolvido a partir de{" "}
            <span className="text-orange-400 font-bold">+500 atendimentos</span> reais no WhatsApp de clínicas de estética.
          </p>
        </motion.div>

        {/* MOCKUP */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">

          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[400px] rounded-full blur-[140px] opacity-20"
              style={{ background: "radial-gradient(circle, #f97316 0%, #7c3aed 60%, transparent 100%)" }}
            />
          </div>

          {/* TABLET — esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative z-10 hidden md:flex items-end"
          >
            <div
              className="w-48 rounded-2xl overflow-hidden"
              style={{
                background: "#111",
                border: "1px solid rgba(249,115,22,0.3)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 30px rgba(249,115,22,0.08)",
                transform: "perspective(1000px) rotateY(8deg) rotateX(-2deg)",
              }}
            >
              <div className="p3-gradient px-4 py-3 flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div>
                  <p className="text-white/70 text-[8px] font-bold uppercase tracking-wider">Scripts de Qualificação</p>
                  <p className="text-white font-black text-xs leading-tight">Para Gerar e Agendar Consultas</p>
                </div>
              </div>
              <div className="px-4 py-3 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-4 h-4 p3-gradient rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-[7px] font-bold">①</span>
                  </div>
                  <p className="text-orange-400 text-[8px] font-bold uppercase tracking-wider">Abertura e Conexão</p>
                </div>
                {[
                  "Consultor: Olá, tudo bem? 👋",
                  "Passo te ajudar a conquistar seus objetivos.",
                  "Cliente: Olá! Preciso de ajuda...",
                ].map((l, i) => (
                  <p key={i} className="text-zinc-400 text-[8px] leading-snug pl-2 border-l border-zinc-700">{l}</p>
                ))}
                <div className="flex items-center gap-1.5 mt-1 mb-1">
                  <div className="w-4 h-4 p3-gradient rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-[7px] font-bold">②</span>
                  </div>
                  <p className="text-orange-400 text-[8px] font-bold uppercase tracking-wider">Identificação e Necessidade</p>
                </div>
                {[
                  "Consultor: Perfeito! Para indicar o melhor plano, me conta...",
                  "Cliente: Tenho algumas dúvidas sobre tratamento...",
                ].map((l, i) => (
                  <p key={i} className="text-zinc-400 text-[8px] leading-snug pl-2 border-l border-zinc-700">{l}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LIVRO — centro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.0 }}
            className="relative z-20 flex flex-col items-center"
          >
            {/* Badge validado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-8 -left-6 md:-left-10 z-30"
            >
              <div className="w-20 h-20 rounded-full border-2 border-orange-500 bg-[#0a0a0a] flex flex-col items-center justify-center text-center p-2 shadow-lg shadow-orange-500/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mb-0.5"><path d="M20 6L9 17l-5-5" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="text-white font-black text-[7px] leading-tight uppercase">Validado em<br/>Clínicas de<br/>Estética</p>
                <div className="flex gap-0.5 mt-1">
                  {[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full p3-gradient" />)}
                </div>
              </div>
            </motion.div>

            {/* Livro */}
            <div
              className="relative w-52 md:w-64 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
                border: "1px solid rgba(249,115,22,0.35)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.9), 0 0 60px rgba(249,115,22,0.15), -8px 0 0 #f97316",
              }}
            >
              {/* Lombada laranja */}
              <div className="absolute left-0 top-0 bottom-0 w-2 p3-gradient" />

              <div className="pl-5 pr-5 pt-6 pb-6 flex flex-col items-center gap-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 p3-gradient rounded-lg flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div>
                    <p className="text-white/50 text-[8px] uppercase tracking-widest">P3 Company</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Script</p>
                  <p className="text-white font-black text-3xl md:text-4xl leading-none tracking-tight">AGENDA</p>
                  <p className="p3-text font-black text-3xl md:text-4xl leading-none tracking-tight">LOTADA</p>
                </div>

                <p className="text-zinc-400 text-[10px] text-center leading-snug max-w-[160px]">
                  O método para transformar mensagens em{" "}
                  <span className="text-orange-400 font-semibold">consultas agendadas</span> todos os dias.
                </p>

                <div className="w-full border-t border-zinc-800 pt-3 text-center">
                  <p className="text-zinc-500 text-[9px] uppercase tracking-widest">Para Clínicas de Estética</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CELULAR — direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 hidden md:flex items-end"
          >
            <div
              className="w-36 rounded-3xl overflow-hidden"
              style={{
                background: "#111",
                border: "1px solid rgba(249,115,22,0.3)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 30px rgba(249,115,22,0.08)",
                transform: "perspective(1000px) rotateY(-8deg) rotateX(-2deg)",
              }}
            >
              {/* Notch */}
              <div className="bg-zinc-900 flex justify-center py-2">
                <div className="w-12 h-1 rounded-full bg-zinc-700" />
              </div>
              <div className="p3-gradient px-3 py-2 flex items-center gap-1.5">
                <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div>
                  <p className="text-white/70 text-[7px] font-bold uppercase">11 Técnicas de Follow-up</p>
                  <p className="text-white font-black text-[9px] leading-tight">Para Nunca Mais<br/>Perder Leads</p>
                </div>
              </div>
              <div className="px-3 py-3 flex flex-col gap-1.5">
                {followUps.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-orange-400 text-[7px] font-bold shrink-0 w-3">{i + 1}.</span>
                    <span className="text-zinc-300 text-[7px] leading-snug">{f}</span>
                  </div>
                ))}
              </div>
              {/* Base */}
              <div className="flex justify-center pb-2">
                <div className="w-10 h-1 rounded-full bg-zinc-700" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* LIVRO ABERTO — embaixo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 md:mt-6 max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl overflow-hidden grid grid-cols-2"
            style={{
              background: "#111",
              border: "1px solid rgba(249,115,22,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
            }}
          >
            {/* Página esquerda — perguntas */}
            <div className="px-5 py-5 border-r border-zinc-800">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-4 h-4 p3-gradient rounded flex items-center justify-center shrink-0">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </div>
                <p className="text-white font-black text-[10px] uppercase leading-tight">5 Perguntas que Aceleram o Fechamento</p>
              </div>
              <div className="flex flex-col gap-2">
                {questions.map((q, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 p3-gradient rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="7" height="7" viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <p className="text-zinc-400 text-[9px] leading-snug">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Página direita — objeções */}
            <div className="px-5 py-5">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-4 h-4 p3-gradient rounded flex items-center justify-center shrink-0">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="white" strokeWidth="2"/><path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </div>
                <p className="text-white font-black text-[10px] uppercase leading-tight">5 Objeções que Aceleram o Fechamento</p>
              </div>
              <div className="flex flex-col gap-2">
                {objections.map((o, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-4 h-4 p3-gradient rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="7" height="7" viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <p className="text-zinc-400 text-[9px] leading-snug">
                      <span className="text-orange-400 font-bold">{o.title}</span>{" "}{o.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
