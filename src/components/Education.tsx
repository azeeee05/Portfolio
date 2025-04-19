import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.E Computer Science and Engineering (Cyber Security)',
      institution: 'Karpagam College of Engineering',
      location: 'Coimbatore, India',
      period: 'Nov 2020 - May 2024',
      gpa: '8.2/10',
      achievements: [
        'Completed cybersecurity specialization with focus on network security and intrusion detection',
        'Participated in multiple hackathons and coding competitions',
        'Developed cloud intrusion detection system as capstone project'
      ]
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
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Education</h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300">
          My academic background and qualifications that have prepared me for a career in technology.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <div className="timeline-container">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="card p-6">
                <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <GraduationCap size={20} className="text-primary-500 mr-2" />
                      <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{edu.degree}</h3>
                    </div>
                    <p className="text-lg font-medium mb-1">{edu.institution}</p>
                    <p className="text-slate-600 dark:text-slate-400">{edu.location}</p>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0 text-slate-600 dark:text-slate-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Award size={16} className="text-accent-500 mr-2" />
                  <span className="font-medium">GPA: {edu.gpa}</span>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Achievements & Activities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;