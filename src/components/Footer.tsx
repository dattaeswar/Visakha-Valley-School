import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-holi-purple text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold tracking-tight">VISAKHA VALLEY</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students to achieve excellence in academics, sports, and character development since 1968.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Our School</Link></li>
              <li><Link to="/academics" className="hover:text-secondary transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-secondary transition-colors">Admissions Process</Link></li>
              <li><Link to="/facilities" className="hover:text-secondary transition-colors">Campus Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Parent Login</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">CBSE Curriculum</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">School Calendar</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>Visakha Valley Road, Visakhapatnam, Andhra Pradesh 530040</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+91 77319 94359</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>info@visakhavalleyschool.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Visakha Valley School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
