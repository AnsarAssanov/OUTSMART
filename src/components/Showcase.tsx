import { motion } from "motion/react";
import { PlayCircle, Target, Sparkles, UserCheck } from "lucide-react";

export default function Showcase() {
  return (
    <section id="platform" className="py-24 px-6 max-w-7xl mx-auto relative z-10 space-y-32">
      
      {/* 1. Platform Dashboard */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
         <motion.div 
           initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
           className="space-y-6"
         >
           <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
             <PlayCircle className="text-indigo-400 w-6 h-6" />
           </div>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Удобная платформа обучения</h2>
           <p className="text-gray-400 text-lg leading-relaxed">
             Всё в одном месте: видеоуроки с качественным продакшеном, интерактивные домашние задания, трекер прогресса, разборы тестов и ваш личный журнал ошибок. Изучайте материал системно, не переключаясь между десятками вкладок.
           </p>
         </motion.div>
         <motion.div 
           initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
           className="glass-panel p-2 md:p-4 rounded-3xl shrink-0"
         >
            {/* Platform Mockup Image */}
            <div className="rounded-2xl border border-white/5 overflow-hidden flex flex-col relative bg-[#0a0a0d] w-full min-h-[300px]">
               <img 
                 src="/platform.png" 
                 alt="OUTSMART Platform Dashboard" 
                 className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
                 }}
               />
               <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                 <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl">
                   <PlayCircle className="w-6 h-6 text-gray-500" />
                 </div>
                 <p className="text-gray-400 text-sm">Пожалуйста, загрузите скриншот платформы в папку public<br/>под именем <code className="text-indigo-400">platform.png</code></p>
               </div>
            </div>
         </motion.div>
      </div>

       {/* 2. Bluebook & AI inside a Bento layout */}
       <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700" />
            <Target className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-2xl font-heading font-bold mb-4">Разборы Bluebook Practice Tests</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">
              Официальные тесты CollegeBoard — главный ключ к успеху. Курс включает подробнейшие видео-разборы каждого вопроса, анализ ловушек экзаменаторов и стратегии экономии времени. Анализируем каждую ошибку.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700" />
            <Sparkles className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-2xl font-heading font-bold mb-4">Умный AI Ассистент</h3>
            <p className="text-gray-400 leading-relaxed mb-6 relative z-10">
              Современный бот-наставник интегрирован прямо в обучающую платформу. Он поможет объяснить сложную концепцию, разобрать ошибку из домашки и создать персональный план повторения.
            </p>
            {/* Fake chat bubble */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="bg-white/10 self-end p-3 rounded-2xl rounded-tr-sm text-sm text-gray-200">
                Can you explain question 14 from Module 2?
              </div>
              <div className="bg-indigo-500/20 border border-indigo-500/30 self-start p-3 rounded-2xl rounded-tl-sm text-sm text-indigo-100 max-w-[90%]">
                <p className="mb-2">Of course! Let's break it down.</p>
                <div className="h-2 w-full bg-white/20 rounded-full mb-1"></div>
                <div className="h-2 w-4/5 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </motion.div>
       </div>

       {/* 3. Constant Feedback */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-panel p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
           <UserCheck className="w-12 h-12 text-blue-400 mx-auto mb-6 relative z-10" />
           <h3 className="text-3xl font-heading font-bold mb-4 relative z-10">Постоянная обратная связь</h3>
           <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
             Вы не будете готовиться вслепую. Мы постоянно анализируем ваши результаты, помогаем с трудными темами и направляем усилия туда, где они дадут наибольший прирост баллов. Экспертная поддержка на каждом шаге.
           </p>
        </motion.div>

    </section>
  );
}
