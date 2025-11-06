import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Family Law Practice Berlin. All rights reserved.
          </p>
          <p className="text-xs opacity-75 mt-2">
            Legal services provided in accordance with German law
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
