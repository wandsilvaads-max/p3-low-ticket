import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Bonuses from "@/components/Bonuses";
import SocialProof from "@/components/SocialProof";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <Bonuses />
      <SocialProof />
      <Offer />
      <Footer />
    </main>
  );
}
