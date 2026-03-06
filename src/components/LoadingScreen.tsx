import React from "react";
import { motion } from "motion/react";

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-stone-50 flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Animated Rings */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["20%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-24 h-24 border-2 border-brand-olive/20 rounded-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            borderRadius: ["50%", "20%", "50%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0 w-24 h-24 border-2 border-brand-olive rounded-3xl"
        />
      </div>

      <div className="mt-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-serif text-2xl text-brand-olive mb-2"
        >
          Chapada Tour
        </motion.h2>
        <motion.div className="flex gap-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-1.5 h-1.5 bg-brand-olive rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Background Text Accent */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden">
        <motion.p
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-300 whitespace-nowrap"
        >
          Explorando o Inexplorado
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
