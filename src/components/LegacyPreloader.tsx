import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LegacyPreloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Holi Splash Backgrounds */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute w-[600px] h-[600px] bg-holi-pink rounded-full blur-[100px] -top-20 -left-20"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute w-[600px] h-[600px] bg-holi-blue rounded-full blur-[100px] -bottom-20 -right-20"
          />

          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5 
              }}
              className="mb-4"
            >
              <span className="text-8xl md:text-9xl font-black text-primary tracking-tighter inline-block">
                55
                <motion.span
                  initial={{ rotate: -20, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-accent inline-block ml-2"
                >
                  +
                </motion.span>
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-[0.3em]">
                Years of Legacy
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-holi-pink via-holi-blue to-holi-orange mx-auto rounded-full" />
            </motion.div>

            {/* Animated Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                }}
                transition={{ 
                  duration: 2,
                  delay: 1 + (i * 0.1),
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className={`absolute top-1/2 left-1/2 w-4 h-4 rounded-full blur-sm ${
                  ['bg-holi-pink', 'bg-holi-blue', 'bg-holi-green', 'bg-holi-orange'][i % 4]
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegacyPreloader;
