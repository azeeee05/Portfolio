import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  const allSkills: Skill[] = [
    // Programming Languages
    { name: 'JavaScript', level: 85, category: 'language' },
    { name: 'Python', level: 80, category: 'language' },
    { name: 'SQL', level: 75, category: 'language' },
    { name: 'TypeScript', level: 70, category: 'language' },
    
    // Frontend
    { name: 'HTML', level: 90, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    { name: 'React.js', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'Material UI', level: 75, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express.js', level: 75, category: 'backend' },
    { name: 'REST APIs', level: 85, category: 'backend' },
    { name: 'FAST APIs', level: 70, category: 'backend' },
    
    // Database
    { name: 'MongoDB', level: 85, category: 'database' },
    { name: 'MySQL', level: 85, category: 'database' },
    { name: 'Postgre SQL', level: 90, category: 'database' },
    
    // Tools & Others
    { name: 'Git', level: 85, category: 'tool' },
    { name: 'GitHub', level: 85, category: 'tool' },
    { name: 'Cybersecurity', level: 70, category: 'other' },
    { name: 'AI Integration', level: 65, category: 'other' },
  ];

  useEffect(() => {
    if (inView) {
      const filteredSkills = selectedCategory === 'all'
        ? allSkills
        : allSkills.filter(skill => skill.category === selectedCategory);
      
      setAnimatedSkills(filteredSkills);
    } else {
      setAnimatedSkills([]);
    }
  }, [inView, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'language', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tool', name: 'Tools' },
    { id: 'other', name: 'Others' },
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Technical Skills</h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300">
          I've developed a diverse set of technical skills throughout my education and career.
          Here's a comprehensive overview of my capabilities.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
              selectedCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {animatedSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-primary-500 dark:text-primary-400">{skill.level}%</span>
            </div>
            <div className={`progress-bar ${inView ? 'dark:progress-bar-dark' : ''}`}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: inView ? `${skill.level}%` : '0%' }}
                transition={{ duration: 1, delay: 0.1 * index }}
                className="progress-bar-fill bg-gradient-to-r from-primary-500 to-secondary-500"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;