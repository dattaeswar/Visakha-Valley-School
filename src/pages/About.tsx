import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, Target, Users, Landmark } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" 
            alt="School Building" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Our School
          </motion.h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            A tradition of excellence, a future of innovation. Discover the legacy of Visakha Valley School.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our History</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 1968, Visakha Valley School was established with the vision of providing world-class education 
                to the children of Visakhapatnam. Over the decades, we have grown from a small institution to a 
                premier CBSE school, consistently producing toppers and leaders in various fields.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our campus, spread across lush greenery, provides the perfect backdrop for intellectual and 
                physical growth. We take pride in our alumni who are making significant contributions globally.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Classroom" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <div className="bg-secondary p-6 rounded-2xl text-white">
                  <div className="text-3xl font-bold mb-1">55+</div>
                  <div className="text-sm opacity-80">Years of Excellence</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-primary p-6 rounded-2xl text-white">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-80">Board Results</div>
                </div>
                <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" alt="Campus" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-blue-50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be a center of excellence in education, fostering global citizens with strong moral values 
                and intellectual prowess.
              </p>
            </div>
            <div className="p-10 bg-emerald-50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide a holistic learning environment that encourages curiosity, creativity, and 
                critical thinking in every student.
              </p>
            </div>
            <div className="p-10 bg-amber-50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrity, Respect, Excellence, and Compassion form the core pillars of our educational philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-primary p-12 flex flex-col items-center justify-center text-white text-center">
              <div className="w-48 h-48 rounded-full border-4 border-secondary overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1976&auto=format&fit=crop" 
                  alt="Principal" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold">Dr. S. Ramakrishna</h3>
              <p className="text-secondary font-medium">Principal</p>
            </div>
            <div className="lg:w-2/3 p-12 md:p-16">
              <h2 className="text-3xl font-bold text-primary mb-8">Principal's Message</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed italic">
                <p>
                  "Welcome to Visakha Valley School. As we navigate through the 21st century, education has 
                  evolved beyond textbooks and classrooms. Our focus is on nurturing the unique talents of 
                  each child and preparing them for the challenges of a globalized world."
                </p>
                <p>
                  "We believe that every student has the potential to achieve greatness. Our dedicated faculty 
                  works tirelessly to create an environment where students feel safe to explore, fail, and 
                  eventually succeed. We invite you to be a part of our journey towards excellence."
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_Hancock_signature.svg/1200px-John_Hancock_signature.svg.png" alt="Signature" className="h-12 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
