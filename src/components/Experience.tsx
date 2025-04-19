import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Maskan Technologies',
      location: 'Bangalore, India',
      period: 'Feb 2025 - Present',
      description: [
        'Contributing to the development and maintenance of scalable web applications using React.js, Node.js, SQL for the medical exam project.',
        'Collaborating with cross-functional teams to enhance application efficiency, debug issues, and implement new features to improve user experience and AI chatbot performance.',
        'Working on both frontend and backend components of the medical exam preparation platform.'
      ],
      tech: ['React.js', 'Node.js', 'SQL', 'Express.js', 'Tailwind CSS', 'AI Integration']
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
    <section id="experience" className="bg-slate-50 dark:bg-slate-900 py-8 md:py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            My professional journey as a developer, showcasing my roles and responsibilities.
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
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="card p-6">
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{job.title}</h3>
                      <p className="text-lg font-medium mb-1">{job.company}</p>
                      <p className="text-slate-600 dark:text-slate-400">{job.location}</p>
                    </div>
                    <div className="flex items-center mt-2 sm:mt-0 text-slate-600 dark:text-slate-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Responsibilities:</h4>
                    <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-700 dark:text-slate-300">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;