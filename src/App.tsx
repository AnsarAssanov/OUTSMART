import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Curriculum from "./components/Curriculum";
import Showcase from "./components/Showcase";
import CallToAction from "./components/CallToAction";

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
