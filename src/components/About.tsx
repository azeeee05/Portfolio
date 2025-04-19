import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Laptop, Server, Database, FileCode2, BookOpen, Brain } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const cards = [
    {
      icon: <Laptop size={32} className="text-primary-500" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React.js, Tailwind CSS, and Material UI.',
    },
    {
      icon: <Server size={32} className="text-primary-500" />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js and Express.js.',
    },
    {
      icon: <Database size={32} className="text-primary-500" />,
      title: 'Database Management',
      description: 'Working with MongoDB and SQL databases for efficient data storage and retrieval.',
    },
    {
      icon: <FileCode2 size={32} className="text-primary-500" />,
      title: 'API Development',
      description: 'Designing and implementing REST APIs and FAST APIs for seamless integration.',
    },
    {
      icon: <BookOpen size={32} className="text-primary-500" />,
      title: 'Cybersecurity',
      description: 'Applying cybersecurity principles to create secure applications and systems.',
    },
    {
      icon: <Brain size={32} className="text-primary-500" />,
      title: 'AI Integration',
      description: 'Implementing AI solutions and chatbots to enhance application functionality.',
    },
  ];

  return (
    <section id="about" className="bg-slate-100 dark:bg-slate-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            I'm a Full Stack Developer with a focus on creating innovative solutions using modern web technologies.
            My combination of technical skills and problem-solving abilities allows me to build efficient,
            user-friendly applications.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="card p-6 hover:bg-primary-50 dark:hover:bg-primary-900/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;