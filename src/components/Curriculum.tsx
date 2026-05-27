import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { mathModules, rwModules } from "../data/curriculumData";

function AccordionItem({ title, desc }: { title: string, desc: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-4 md:px-6 hover:bg-white/[0.02] transition-colors text-left"
      >
        <span className="font-heading font-medium text-lg md:text-xl text-gray-200">
           {title}
        </span>
        <motion.div
           animate={{ rotate: isOpen ? 180 : 0 }}
           transition={{ duration: 0.2 }}
           className="text-gray-500 flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-6 pb-6 text-gray-400 leading-relaxed pt-2">
              {desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Интерактивная программа</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Каждый модуль спроектирован так, чтобы закрыть все пробелы в знаниях и дать вам стратегии, которые действительно работают на SAT.</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Math Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel overflow-hidden"
        >
          <div className="bg-indigo-500/10 border-b border-indigo-500/20 p-6 md:p-8">
             <h3 className="text-2xl font-heading font-bold text-white">Math Modules</h3>
             <p className="text-indigo-200/80 text-sm mt-1">15 целевых модулей для пробития потолка в математике.</p>
          </div>
          <div>
            {mathModules.map((mod, i) => (
              <AccordionItem key={`math-${i}`} title={mod.title} desc={mod.desc} />
            ))}
          </div>
        </motion.div>

        {/* R&W Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel overflow-hidden"
        >
          <div className="bg-purple-500/10 border-b border-purple-500/20 p-6 md:p-8">
             <h3 className="text-2xl font-heading font-bold text-white">Reading &amp; Writing Modules</h3>
             <p className="text-purple-200/80 text-sm mt-1">24 модуля для полного понимания грамматики и логики текстов.</p>
          </div>
          <div>
            {rwModules.map((mod, i) => (
              <AccordionItem key={`rw-${i}`} title={mod.title} desc={mod.desc} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
