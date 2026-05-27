import { motion } from "motion/react";
import { Button } from "./Button";
import { ArrowRight, Play, Upload } from "lucide-react";

const FORM_LINK = "https://forms.gle/qGHEJES2sDgBM92g7";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center z-10 w-full pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-indigo-500/30"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-medium text-indigo-200">Премиальный SAT Prep Курс</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Мысли шире.<br />
          <span className="text-gradient">Сдай SAT на максимум.</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Системная подготовка к секциям <strong className="text-white font-medium">Math</strong> и <strong className="text-white font-medium">Reading &amp; Writing</strong>. 
          Закрывайте слабые темы, тренируйтесь на тестах Bluebook и получайте постоянную обратную связь от экспертов.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button href={FORM_LINK} variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
            Подать заявку на курс
          </Button>
          <Button href="#curriculum" variant="outline">
            Программа курса
          </Button>
        </motion.div>

        {/* SAT Score Report Image Block */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl mx-auto glass-panel rounded-3xl aspect-[16/9] sm:aspect-[21/9] flex flex-col items-center justify-center relative overflow-hidden border-white/5 bg-gradient-to-b from-white/5 to-transparent"
        >
            {/* The user can upload their sat-score.png to the public folder */}
            <div className="absolute inset-0 bg-white/[0.02] bg-[length:32px_32px] opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)" }} />
            <img 
              src="/sat-score.png" 
              alt="My SAT Score 1520" 
              className="w-full h-full object-cover relative z-10 opacity-90 hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                // If image is missing, show a fallback layout
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback layout if sat-score.png is missing */}
            <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 z-10 p-6">
                <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mx-auto bg-indigo-500/10 text-indigo-400">
                   <Upload className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2">My SAT Score (1520)</h3>
                   <p className="text-gray-400 max-w-md mx-auto text-sm">Пожалуйста, загрузите ваше фото в папку public под именем sat-score.png</p>
                </div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-6 left-6 z-30">
               <div className="glass-panel px-4 py-2 rounded-full border-white/10 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                 <span className="text-sm font-medium text-white shadow-sm">My Official SAT Score: 1520</span>
               </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
