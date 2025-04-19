import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-white cursor-pointer"
            >
              Azeemkhan N
            </Link>
            <p className="mt-2 text-slate-400 max-w-md">
              Full Stack Developer specializing in creating innovative web solutions with modern technologies.
            </p>
          </div>

          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/azeeee05"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-700 hover:bg-primary-500 rounded-full transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/azeemkhann/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-700 hover:bg-primary-500 rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:azeemazm31@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-700 hover:bg-primary-500 rounded-full transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Azeemkhan N. All rights reserved.
          </p>
         
        </div>
      </div>

      <motion.div
        className="fixed bottom-24 right-6 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg cursor-pointer transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;