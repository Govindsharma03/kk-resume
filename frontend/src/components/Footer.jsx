import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-purple-400'
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:text-purple-400'
    },
    {
      icon: <Phone size={20} />,
      href: `tel:${personalInfo.phone}`,
      label: 'Phone',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <footer className="relative bg-black border-t border-purple-500/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Kaushiki Kumari</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aspiring AI Engineer passionate about building intelligent applications
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-lg text-gray-400 ${link.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center space-x-2">
                <Mail size={16} className="text-purple-400" />
                <span>{personalInfo.email}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} className="text-purple-400" />
                <span>{personalInfo.phone}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Kaushiki Kumari. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Built with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and React</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
