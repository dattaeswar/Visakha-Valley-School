import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Laptop, Library, Trophy, Bus, Tv } from 'lucide-react';

const facilities = [
  {
    title: "Science Labs",
    description: "Well-equipped Physics, Chemistry, and Biology labs for hands-on practical learning.",
    icon: <Microscope className="w-10 h-10 text-holi-pink" />,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop"
  },
  {
    title: "Computer Labs",
    description: "High-speed internet and modern systems to foster digital literacy and coding skills.",
    icon: <Laptop className="w-10 h-10 text-holi-blue" />,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Digital Library",
    description: "A vast collection of books, journals, and digital resources for research and reading.",
    icon: <Library className="w-10 h-10 text-holi-green" />,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Sports Complex",
    description: "Extensive grounds for cricket, football, basketball, and indoor sports facilities.",
    icon: <Trophy className="w-10 h-10 text-holi-orange" />,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop"
  },
  {
    title: "Transportation",
    description: "Safe and reliable bus service covering all major parts of the city.",
    icon: <Bus className="w-10 h-10 text-holi-purple" />,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop"
  },
  {
    title: "Smart Classrooms",
    description: "Interactive boards and multimedia tools to make learning engaging and visual.",
    icon: <Tv className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
  }
];

const FacilitiesGrid = () => {
  return (
    <section className="py-24 bg-gray-50 color-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">World-Class Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our campus is designed to provide students with the best resources to support their academic and extracurricular pursuits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  {React.cloneElement(facility.icon as React.ReactElement, { size: 24 })}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGrid;
