import React from 'react';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import FacilitiesGrid from '../components/FacilitiesGrid';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* About Section Preview */}
      <section className="py-24 bg-white overflow-hidden color-splash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                  alt="Students learning" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-holi-pink/20 rounded-2xl -z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-holi-blue/30 rounded-full -z-0 hidden md:block"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-holi-pink uppercase tracking-widest mb-4">About Our School</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">A Legacy of Academic Excellence and Personal Growth</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Visakha Valley School, established in 1968, has been a pioneer in quality education in Visakhapatnam. 
                Our mission is to provide a comprehensive learning experience that balances rigorous academics with 
                vibrant extracurricular activities.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "CBSE Affiliated English Medium School",
                  "Co-educational from LKG to Grade 12",
                  "Focus on Value-based Education",
                  "State-of-the-art Infrastructure"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-secondary" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group">
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureCards />

      {/* Academics Overview */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Academic Programs</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tailored learning paths for every stage of a student's journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Pre-Primary", desc: "Foundation years focusing on play-way and activity-based learning.", icon: "🎨" },
              { title: "Primary", desc: "Building strong fundamentals in core subjects and creative arts.", icon: "📚" },
              { title: "Middle School", desc: "Developing analytical thinking and independent learning skills.", icon: "🔬" },
              { title: "Senior Secondary", desc: "Specialized streams for higher education and career readiness.", icon: "🎓" }
            ].map((program, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-4xl mb-6">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{program.desc}</p>
                <Link to="/academics" className="text-secondary text-sm font-semibold hover:underline">Explore Curriculum</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FacilitiesGrid />

      {/* Achievement Stats */}
      <section className="py-20 bg-gradient-to-r from-holi-pink to-holi-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { label: "Students", value: "2500+" },
              { label: "Teachers", value: "120+" },
              { label: "Years of Legacy", value: "55+" },
              { label: "Board Results", value: "100%" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Life at Visakha Valley</h2>
              <p className="text-gray-600 max-w-xl">
                Glimpses of our vibrant campus life, events, and student achievements.
              </p>
            </div>
            <Link to="/gallery" className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
              View All Photos
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-xl overflow-hidden shadow-lg"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-holi-blue to-holi-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Join Our Community?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Admissions are now open for the academic year 2026-27. Secure your child's future today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions" className="px-10 py-4 bg-white text-secondary font-bold rounded-xl hover:bg-gray-100 transition-all">
              Apply Now
            </Link>
            <Link to="/contact" className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
