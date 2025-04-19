import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Google Cybersecurity Certificate',
      issuer: 'Google',
      date: '2023',
      description: 'Completed a comprehensive program covering network security, risk management, threat detection, and incident response.',
      link: 'https://drive.google.com/file/d/1ePaFuojZWoPfDqKXSFh9saOWQ3l770Jr/view?usp=drive_link'
    },
    {
      title: 'Google AI Essentials',
      issuer: 'Google',
      date: '2023',
      description: 'Gained foundational knowledge in AI concepts, machine learning principles, and responsible AI practices.',
      link: 'https://drive.google.com/file/d/1BgiZG4YgtQgGUX_qYxytsThBUgfWVRRK/view?usp=sharing'
    },
    {
      title: 'CISCO Python Essentials 1',
      issuer: 'Cisco',
      date: '2022',
      description: 'Acquired fundamental skills in Python programming, data structures, algorithms, and problem-solving.',
      link: 'https://drive.google.com/file/d/1y-CmKEd3Zo17ZB-dFNwToBPpEQ0CFuW6/view?usp=drive_link'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="certifications" className="bg-slate-50 dark:bg-slate-900 py-8 md:py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            Professional certifications that demonstrate my commitment to continuous learning and skill development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Award size={40} className="text-primary-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{cert.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{cert.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-4">Issued by {cert.issuer}</p>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                >
                  View Certificate <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;