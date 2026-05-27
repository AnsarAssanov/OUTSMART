import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Curriculum from "./components/Curriculum.tsx";
import Showcase from "./components/Showcase.tsx";
import CallToAction from "./components/CallToAction.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Showcase />
        <CallToAction />
      </main>
    </div>
  );
}
