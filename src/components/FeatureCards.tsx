import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Trophy, Lightbulb } from 'lucide-react';

const features = [
  {
    title: "CBSE Curriculum",
    description: "Comprehensive academic program following national standards with a focus on conceptual clarity.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: "bg-holi-pink",
    shadow: "shadow-holi-pink/20"
  },
  {
    title: "Expert Faculty",
    description: "Dedicated educators committed to personalized attention and innovative teaching methodologies.",
    icon: <Users className="w-8 h-8 text-white" />,
    color: "bg-holi-blue",
    shadow: "shadow-holi-blue/20"
  },
  {
    title: "Holistic Growth",
    description: "Equal emphasis on sports, arts, and value-based education for all-round development.",
    icon: <Trophy className="w-8 h-8 text-white" />,
    color: "bg-holi-green",
    shadow: "shadow-holi-green/20"
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art labs, smart classrooms, and extensive sports infrastructure.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    color: "bg-holi-orange",
    shadow: "shadow-holi-orange/20"
  }
];

const FeatureCards = () => {
  return (
    <section className="py-24 bg-white color-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Visakha Valley?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a nurturing environment where students are encouraged to explore their potential and excel in their chosen paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all group`}
            >
              <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg ${feature.shadow}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
