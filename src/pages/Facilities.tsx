import React from 'react';
import FacilitiesGrid from '../components/FacilitiesGrid';
import { motion } from 'motion/react';

const Facilities = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Campus Facilities
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our state-of-the-art infrastructure is designed to provide an enriching environment for academic and personal growth.
          </p>
        </div>
      </section>

      <FacilitiesGrid />

      {/* Detailed Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Sports & Physical Education</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Visakha Valley, we believe a healthy body houses a healthy mind. Our sports infrastructure 
                includes professional-grade courts and fields for various disciplines.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Cricket Ground", "Football Field", "Basketball Court", "Tennis Courts", "Indoor Badminton", "Swimming Pool"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" 
                alt="Sports" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:flex lg:flex-row-reverse gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Innovation & Technology</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We integrate technology into every aspect of learning. Our smart classrooms and computer labs 
                ensure that students are future-ready.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary">High-Speed Campus Wi-Fi</h4>
                  <p className="text-sm text-gray-600">Seamless connectivity for research and digital learning.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary">Robotics Lab</h4>
                  <p className="text-sm text-gray-600">Hands-on experience with automation and engineering.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary">Multimedia Center</h4>
                  <p className="text-sm text-gray-600">Equipped for content creation and presentation skills.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                alt="Technology" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Facilities;
