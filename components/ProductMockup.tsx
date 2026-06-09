"use client";

import { motion } from "framer-motion";

const modules = [
  { n: "01", t: "Abertura sem queimar o preço" },
  { n: "02", t: "Qualificação com perguntas certas" },
  { n: "03", t: "Condução da negociação" },
  { n: "04", t: "Fechamento e confirmação" },
];

const followUps = [
  "Ligação Telefônica",
  "Mensagem por WhatsApp",
  "Envio de SMS",
  "Compartilhamento de Conteúdo",
  "Mensagem no Direct (Instagram)",
  "Convite para Webinário",
  "Proposta Revisada",
];

const questions = [
  "Você já possui plano de saúde hoje?",
  "O que é mais importante para você em um plano?",
  "Qual foi sua última experiência com plano de saúde?",
  "Quem mais utiliza o plano com você?",
  "Qual o melhor horário para te enviar as opções?",
];

export default function ProductMockup() {
  return (
    <section className="py-16 md:py-28 bg-[#0a0a0a] overflow-hidden">
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
            Ajudou Centenas de Clínicas a{" "}
            <span className="p3-text">Lotar a Agenda</span>
          </h2>
          <p className="text-zinc-500 text-base mt-4 max-w-xl mx-auto">
            Esse roteiro foi desenvolvido a partir da experiência prática com{" "}
            <span className="text-orange-400 font-bold">+500 atendimentos</span> reais no WhatsApp.
          </p>
        </motion.div>

        {/* Mockup de dispositivos */}
        <div className="relative flex items-end justify-center gap-4 md:gap-6 min-h-[420px] md:min-h-[520px]">

          {/* Glow central */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full blur-[120px] opacity-30"
              style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
            />
          </div>

          {/* TABLET — esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10 hidden md:block"
            style={{ perspective: "900px" }}
          >
            <div
              className="w-52 rounded-2xl overflow-hidden"
              style={{
                background: "#111",
                border: "1px solid rgba(249,115,22,0.25)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                transform: "perspective(900px) rotateY(12deg) rotateX(-3deg)",
              }}
            >
              <div className="p3-gradient px-4 py-3">
                <p className="text-white/60 text-[9px] font-bold tracking-widest uppercase">Scripts de Qualificação</p>
                <p className="text-white font-black text-sm leading-tight mt-0.5">Para Vender<br/>Planos de Saúde</p>
              </div>
              <div className="px-4 py-3 flex flex-col gap-2">
                <p className="text-orange-400 text-[9px] font-bold uppercase tracking-wider">Passo 1: Entenda o Perfil</p>
                {["Consultor: 'Olá, tudo bem!'", "Cliente: 'Olá, sim! Sou João...'", "Consultor: 'Ótimo! Para te ajudar melhor...'"].map((l, i) => (
                  <p key={i} className="text-zinc-400 text-[9px] leading-snug border-l-2 border-zinc-700 pl-2">{l}</p>
                ))}
                <p className="text-orange-400 text-[9px] font-bold uppercase tracking-wider mt-1">Passo 2: Identifique as Necessidades</p>
                {["Consultor: 'Você ou alguém da sua família...'", "Cliente: 'Atualmente, não.'", "Consultor: 'Então, o que te motiva...'"].map((l, i) => (
                  <p key={i} className="text-zinc-400 text-[9px] leading-snug border-l-2 border-zinc-700 pl-2">{l}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* NOTEBOOK — centro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.0 }}
            className="relative z-20"
          >
            {/* Tela */}
            <div
              className="w-64 md:w-96 rounded-t-xl overflow-hidden"
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(249,115,22,0.3)",
                borderBottom: "none",
                boxShadow: "0 -10px 60px rgba(249,115,22,0.1), 0 20px 80px rgba(0,0,0,0.9)",
              }}
            >
              {/* Barra superior notebook */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900 border-b border-zinc-800">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="flex-1 mx-3 bg-zinc-800 rounded text-center text-[9px] text-zinc-500 py-0.5">Script Agenda Lotada</div>
              </div>
              {/* Conteúdo */}
              <div className="p-4 md:p-6 flex flex-col items-center gap-3">
                <div className="w-8 h-8 p3-gradient rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <p className="text-white font-black text-lg md:text-2xl text-center leading-tight">Script Anti-Vácuo<br/><span className="p3-text">Agenda Lotada</span></p>
                <div className="w-full flex flex-col gap-2 mt-1">
                  {modules.map((m) => (
                    <div key={m.n} className="flex items-center gap-2 bg-zinc-900 rounded-lg px-3 py-2">
                      <span className="w-5 h-5 p3-gradient rounded text-white font-bold text-[9px] flex items-center justify-center shrink-0">{m.n}</span>
                      <span className="text-zinc-300 text-[10px] md:text-xs">{m.t}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full border-t border-zinc-800 mt-1 pt-3 text-center">
                  <p className="text-zinc-600 text-[9px] line-through">R$ 97,00</p>
                  <p className="text-white font-black text-xl md:text-2xl">R$ 39,90</p>
                  <p className="text-orange-400 text-[9px] font-bold uppercase tracking-widest">Acesso imediato</p>
                </div>
              </div>
            </div>
            {/* Base do notebook */}
            <div
              className="w-64 md:w-96 h-3 rounded-b-xl"
              style={{ background: "linear-gradient(180deg, #1a1a1a, #111)", border: "1px solid rgba(249,115,22,0.15)" }}
            />
          </motion.div>

          {/* CELULAR — direita */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 hidden md:block"
            style={{ perspective: "900px" }}
          >
            <div
              className="w-36 rounded-2xl overflow-hidden"
              style={{
                background: "#111",
                border: "1px solid rgba(249,115,22,0.25)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                transform: "perspective(900px) rotateY(-12deg) rotateX(-3deg)",
              }}
            >
              {/* Notch */}
              <div className="bg-zinc-900 flex justify-center py-1.5">
                <div className="w-10 h-1 rounded-full bg-zinc-700" />
              </div>
              <div className="p3-gradient px-3 py-2">
                <p className="text-white/60 text-[8px] font-bold tracking-widest uppercase">11 Formatos de Follow-up</p>
                <p className="text-white font-black text-[10px] leading-tight mt-0.5">Para Reviver Leads</p>
              </div>
              <div className="px-3 py-3 flex flex-col gap-1.5">
                {followUps.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-orange-400 text-[8px] font-bold shrink-0">{i + 1}.</span>
                    <span className="text-zinc-400 text-[8px] leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD FRENTE-ESQUERDA — perguntas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="absolute bottom-0 left-[2%] md:left-[8%] z-30 hidden md:block"
          >
            <div
              className="w-40 rounded-xl overflow-hidden"
              style={{
                background: "#141414",
                border: "1px solid rgba(249,115,22,0.3)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
              }}
            >
              <div className="p3-gradient px-3 py-2">
                <p className="text-white font-black text-[10px] leading-tight">5 Perguntas que Aceleram o Fechamento</p>
              </div>
              <div className="px-3 py-2 flex flex-col gap-1.5">
                {questions.map((q, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-3 h-3 p3-gradient rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="6" height="6" viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <p className="text-zinc-400 text-[8px] leading-snug">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LIVRO/BASE — decorativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute bottom-0 left-[18%] md:left-[22%] z-10 hidden md:block"
          >
            <div
              className="w-28 h-36 rounded-xl flex flex-col items-center justify-center gap-2"
              style={{
                background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
                border: "1px solid rgba(249,115,22,0.15)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              }}
            >
              <div className="w-10 h-10 p3-gradient rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <p className="text-white font-bold text-[9px] text-center px-2 leading-tight">Script<br/>Agenda Lotada</p>
              <div className="w-6 h-0.5 p3-gradient rounded-full" />
            </div>
          </motion.div>

        </div>

        {/* Rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center text-zinc-600 text-sm mt-10"
        >
          Não é conteúdo teórico. É um processo validado por clínicas que atendem no WhatsApp todos os dias.
        </motion.p>

      </div>
    </section>
  );
}
