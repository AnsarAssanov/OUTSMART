import { motion } from "motion/react";
import { MonitorPlay, CheckCircle2, MessageSquareText, BookOpen, BrainCircuit, LineChart } from "lucide-react";

export default function Features() {
  const features = [
    { title: "Personal learning platform", desc: "Удобная платформа со всеми видеоуроками и домашкой в одном месте.", icon: <MonitorPlay className="w-6 h-6" /> },
    { title: "Bluebook practice tests breakdowns", desc: "Детальный разбор всех официальных тестов Bluebook с анализом логики CollegeBoard.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "AI assistant bot", desc: "Умный помощник для мгновенных ответов на вопросы 24/7.", icon: <BrainCircuit className="w-6 h-6" /> },
    { title: "Constant feedback & support", desc: "Регулярная обратная связь, чтобы вы точно знали, в каком направлении двигаться.", icon: <MessageSquareText className="w-6 h-6" /> },
    { title: "Structured Math & R/W curriculum", desc: "Пошаговая программа, покрывающая 100% тем, необходимых для SAT.", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Mistake review system", desc: "Система анализа ошибок и отслеживания прогресса для стабильного роста балла.", icon: <LineChart className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Что внутри <span className="text-indigo-400">OUTSMART</span></h2>
        <p className="text-gray-400 text-lg">Комплексный подход для максимального результата.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-8 hover:bg-white/10 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
