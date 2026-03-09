import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, FileText, Calendar, UserCheck, Info } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const Admissions = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-secondary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Admissions 2026-27
          </motion.h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join our community of learners. Follow our simple step-by-step process to secure your child's future at Visakha Valley School.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Admission Process</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enquiry", desc: "Submit an online enquiry or visit the school campus for information.", icon: <Info /> },
              { step: "02", title: "Registration", desc: "Fill out the registration form and submit required documents.", icon: <FileText /> },
              { step: "03", title: "Interaction", desc: "Student interaction and parent meeting with the admission committee.", icon: <UserCheck /> },
              { step: "04", title: "Confirmation", desc: "Payment of fees and completion of admission formalities.", icon: <Calendar /> }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-5xl font-black text-secondary/10 absolute top-4 right-4">{item.step}</div>
                <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
                <CheckCircle2 className="mr-3 text-secondary" />
                Age Eligibility
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="py-4 font-bold text-gray-900">Grade</th>
                      <th className="py-4 font-bold text-gray-900">Minimum Age</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-50">
                      <td className="py-4">LKG</td>
                      <td className="py-4">3 Years + as on March 31st</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-4">UKG</td>
                      <td className="py-4">4 Years + as on March 31st</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-4">Grade 1</td>
                      <td className="py-4">5 Years + as on March 31st</td>
                    </tr>
                    <tr>
                      <td className="py-4">Grade 2-10</td>
                      <td className="py-4">Based on previous school TC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
                <FileText className="mr-3 text-secondary" />
                Required Documents
              </h3>
              <ul className="space-y-4">
                {[
                  "Birth Certificate (Original & Photocopy)",
                  "Recent Passport size photographs (4)",
                  "Previous School Progress Report",
                  "Transfer Certificate (Original)",
                  "Aadhar Card of Student and Parents",
                  "Caste Certificate (if applicable)",
                  "Address Proof (Electricity bill/Aadhar)"
                ].map((doc, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    </div>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Online Form UI Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary p-12 rounded-3xl text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Application</h2>
            <p className="text-gray-300 mb-10">
              Ready to begin? Click the button below to fill out the online registration form. 
              Our admissions team will contact you within 48 hours.
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
            >
              Online Registration Form
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isFormOpen && (
          <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Admissions;
