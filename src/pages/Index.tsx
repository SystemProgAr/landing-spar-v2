import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Process from "@/components/Process";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
