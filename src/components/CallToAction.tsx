import { motion } from "motion/react";
import { Button } from "./Button";
import { ArrowRight, FileText } from "lucide-react";

const FORM_LINK = "https://forms.gle/qGHEJES2sDgBM92g7";

export function CallToAction() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-8 md:p-16 text-center relative overflow-hidden rounded-[2rem] border-indigo-500/30"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
        
        <div className="mb-10 relative z-10">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 text-indigo-400">
             <FileText className="w-8 h-8" />
           </div>
           
           <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-6 text-white">
             Хватит угадывать. <br />
             <span className="text-gradient-accent">Начни OUTSMARTить SAT.</span>
           </h2>
           
           <div className="max-w-2xl mx-auto space-y-4">
             <p className="text-gray-300 text-lg md:text-xl">
               Курс OUTSMART доступен исключительно по заявкам.
             </p>
             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
               Это позволяет нам заранее понять ваш текущий уровень, сильные и слабые стороны,
               чтобы рекомендовать оптимальный путь подготовки и обеспечить высокое качество обратной связи каждому студенту.
             </p>
           </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Button href={FORM_LINK} variant="primary" className="w-full sm:w-auto !px-8 !py-4 text-lg" icon={<ArrowRight className="w-5 h-5"/>}>
            Подать заявку на OUTSMART
          </Button>
          <Button href="#curriculum" variant="outline" className="w-full sm:w-auto !px-8 !py-4 text-lg">
            Программа курса
          </Button>
        </div>
      </motion.div>
      
      <footer className="mt-24 text-center text-gray-600 text-sm flex flex-col gap-2">
        <p>© {new Date().getFullYear()} OUTSMART Prep. All rights reserved.</p>
        <p>SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this product.</p>
      </footer>
    </section>
  );
}
