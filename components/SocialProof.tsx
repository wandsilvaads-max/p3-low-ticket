import { Marquee } from "@/components/ui/Marquee";
import { Sparkles } from "lucide-react";

const feedbacks = [
  { title: "Agenda Lotada", description: "Essa semana: 7 agendamentos novos!", date: "Há 2 horas" },
  { title: "Follow-up funcionou", description: "Cliente que sumiu voltou e fechou", date: "Esta semana" },
  { title: "Zero no-show hoje", description: "Script de confirmação funcionou 100%", date: "Ontem" },
  { title: "3 fechamentos", description: "Sem dar desconto nenhuma vez", date: "Há 3 dias" },
  { title: "Recepcionista aplicou", description: "Primeiro dia usando — já agendou 4", date: "Há 5 dias" },
  { title: "WhatsApp convertendo", description: "Taxa de agendamento subiu muito", date: "Esta semana" },
  { title: "Script simples", description: "Fácil de ensinar para a equipe toda", date: "Há 1 semana" },
  { title: "Resultado imediato", description: "Apliquei hoje, agendei ainda hoje", date: "Há 4 dias" },
];

function FeedbackCard({ title, description, date }: { title: string; description: string; date: string }) {
  return (
    <div className="w-64 shrink-0 rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-4 flex flex-col gap-2 mx-2">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-purple-500/20 p-1">
          <Sparkles className="size-3 p3-text" />
        </span>
        <p className="p3-text text-sm font-semibold">{title}</p>
      </div>
      <p className="text-white text-sm leading-snug">{description}</p>
      <p className="text-zinc-500 text-xs">{date}</p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="text-center">
          <p className="p3-text text-sm font-bold uppercase tracking-widest mb-3">
            Resultados de quem já usa
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Clínicas usando o script{" "}
            <span className="p3-text">lotam a agenda</span> ainda na
            primeira semana.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Não é conteúdo teórico. É um processo de vendas validado por
            centenas de clínicas que atendem no WhatsApp todos os dias.
          </p>
        </div>
      </div>

      {/* Marquee linha 1 — esquerda para direita */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <Marquee pauseOnHover repeat={3} className="[--duration:35s]">
          {feedbacks.map((f, i) => (
            <FeedbackCard key={i} {...f} />
          ))}
        </Marquee>
      </div>

      {/* Marquee linha 2 — direita para esquerda */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <Marquee reverse pauseOnHover repeat={3} className="[--duration:30s]">
          {[...feedbacks].reverse().map((f, i) => (
            <FeedbackCard key={i} {...f} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
