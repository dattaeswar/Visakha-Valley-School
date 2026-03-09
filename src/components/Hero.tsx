import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
          alt="School Campus"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary font-medium text-sm mb-6 backdrop-blur-sm">
            Excellence in Education Since 1968
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Nurturing Minds, <br />
            <span className="text-accent drop-shadow-lg">Shaping Futures.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl">
            Visakha Valley School provides a holistic learning environment that fosters academic excellence, 
            creative expression, and character development for the leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/admissions"
              className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-semibold flex items-center justify-center transition-all group"
            >
              Admissions 2026-27
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-semibold backdrop-blur-sm transition-all text-center"
            >
              Explore Campus
            </Link>
          </div>
        </motion.div>

        {/* Legacy Animated Logo/Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            delay: 3.5,
            type: "spring",
            stiffness: 100
          }}
          className="relative hidden lg:block"
        >
          <div className="w-64 h-64 rounded-full border-4 border-white/20 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 border-4 border-dashed border-accent/30 rounded-full"
            />
            <div className="text-6xl font-black text-white mb-1">55+</div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Years of Legacy</div>
            
            {/* Holi splashes in badge */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-holi-pink rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-holi-blue rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
