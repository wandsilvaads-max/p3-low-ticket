import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Image src="/logo-p3.png" alt="P3 Company" width={60} height={30} className="h-6 w-auto opacity-60" />
          <p>Copyright © 2026 P3 Company — Todos os direitos reservados</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-400 transition-colors">Termos de uso</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Política de privacidade</a>
        </div>
      </div>
    </footer>
  );
}
