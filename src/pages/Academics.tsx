import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Microscope, Laptop, Globe, Calculator, Palette } from 'lucide-react';

const Academics = () => {
  const sections = [
    {
      title: "Pre-Primary (LKG - UKG)",
      desc: "Our pre-primary wing focuses on the 'Play-Way' method, ensuring a joyful transition from home to school. We emphasize sensory development, social skills, and basic literacy.",
      features: ["Activity-based learning", "Thematic curriculum", "Phonetics & Storytelling", "Creative Arts & Music"],
      icon: <Palette className="text-secondary" size={32} />,
      color: "bg-emerald-50"
    },
    {
      title: "Primary School (Grade 1 - 5)",
      desc: "The primary years focus on building strong foundations in language, mathematics, and environmental studies. We encourage curiosity and independent thinking.",
      features: ["Language Proficiency", "Mathematical Logic", "Environmental Awareness", "Physical Education"],
      icon: <BookOpen className="text-primary" size={32} />,
      color: "bg-blue-50"
    },
    {
      title: "Middle School (Grade 6 - 8)",
      desc: "Students are introduced to specialized subjects. The curriculum is designed to develop analytical skills and a deeper understanding of scientific concepts.",
      features: ["Integrated Science", "Social Sciences", "ICT & Coding", "Third Language Options"],
      icon: <Microscope className="text-accent" size={32} />,
      color: "bg-amber-50"
    },
    {
      title: "Senior Secondary (Grade 9 - 12)",
      desc: "We offer Science, Commerce, and Humanities streams. Our program is geared towards CBSE board excellence and competitive exam preparation.",
      features: ["Specialized Streams", "Career Counseling", "Lab Research", "Leadership Programs"],
      icon: <Globe className="text-purple-600" size={32} />,
      color: "bg-purple-50"
    }
  ];

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
            Academic Excellence
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive CBSE curriculum designed to inspire curiosity and foster intellectual growth at every stage.
          </p>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {sections.map((section, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-6">{section.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {section.desc}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={`https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&sig=${i}`} 
                    alt={section.title} 
                    className="rounded-3xl shadow-2xl w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Exams */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                <Calculator size={40} />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Olympiad & Competitive Prep</h2>
              <p className="text-gray-600">
                We provide specialized coaching for NTSE, Olympiads, JEE, and NEET to help our students excel in national-level examinations.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Foundation Courses", desc: "Early preparation for Grade 8-10 students." },
                { title: "Mock Tests", desc: "Regular assessment to build exam temperament." },
                { title: "Expert Mentors", desc: "Guidance from experienced subject matter experts." },
                { title: "Resource Library", desc: "Access to advanced study materials and digital tools." }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:border-accent transition-colors">
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
