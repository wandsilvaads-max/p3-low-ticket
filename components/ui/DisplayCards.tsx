"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-orange-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-orange-400",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-zinc-800 bg-zinc-900/80 backdrop-blur-sm px-4 py-3 transition-all duration-700",
        "after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[8rem] after:bg-gradient-to-l after:from-[#0a0a0a] after:to-transparent after:content-['']",
        "hover:border-orange-500/30 hover:bg-zinc-900",
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-orange-500/20 p-1">
          {icon}
        </span>
        <p className={cn("text-base font-semibold", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-sm text-white">{description}</p>
      <p className="text-zinc-500 text-xs">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      title: "Agenda Lotada",
      description: "Essa semana: 7 agendamentos novos!",
      date: "Há 2 horas",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-xl before:content-[''] before:bg-zinc-950/60 before:left-0 before:top-0 grayscale hover:grayscale-0 hover:before:opacity-0 before:transition-opacity before:duration-700",
    },
    {
      title: "Follow-up funcionou",
      description: "Cliente que sumiu voltou e fechou",
      date: "Esta semana",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:h-full before:rounded-xl before:content-[''] before:bg-zinc-950/60 before:left-0 before:top-0 grayscale hover:grayscale-0 hover:before:opacity-0 before:transition-opacity before:duration-700",
    },
    {
      title: "3 fechamentos",
      description: "Sem dar desconto nenhuma vez",
      date: "Há 3 dias",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
