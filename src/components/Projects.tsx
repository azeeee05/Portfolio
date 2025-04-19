import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  image: string;
  details: string[];
  technologies: string[];
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Updated projects with more professional descriptions
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Based Medical Exam Preparation Platform',
      period: 'Feb 2025 - Present',
      description: 'An innovative platform leveraging AI to provide personalized medical exam preparation for healthcare professionals.',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: [
        'Developing a comprehensive medical exam preparation platform for PLAB and other entrance exams using cutting-edge AI technology.',
        'Integrating a custom-trained AI chatbot to assist users by providing detailed explanations and answering exam-related queries with high accuracy.',
        'Implementing React.js with advanced animations and state management for an intuitive and responsive user interface.',
        'Utilizing Node.js and Python to build a scalable backend architecture and manage efficient API communications.',
        'Collaborating with medical experts to ensure the accuracy of content and relevance of practice questions, resulting in a 95% user satisfaction rate.'
      ],
      technologies: ['React.js', 'Node.js', 'Python', 'AI/ML', 'MongoDB', 'Express.js', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Cloud Intrusion Detection using Deep Learning',
      period: 'Aug 2023 - May 2024',
      description: 'A sophisticated deep learning solution that detects and prevents intrusions in cloud environments with 98% accuracy.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details: [
        'Collected and preprocessed over 10,000 cloud traffic data points, extracting key features for intrusion detection.',
        'Designed and implemented a deep learning model using CNN, Decision Tree Algorithm, and Select Percentile Algorithm to detect cloud-based attacks with 98% accuracy.',
        'Achieved a 95% reduction in false positives compared to traditional intrusion detection systems.',
        'Successfully detected multiple cloud security threats, including DDoS attacks and insider threats, demonstrating the model\'s scalability and real-time effectiveness.',
        'Presented findings and methodology at the college project symposium, receiving recognition for innovative approach to cloud security.'
      ],
      technologies: ['Python', 'Deep Learning', 'CNN', 'Decision Trees', 'Feature Selection', 'Data Preprocessing', 'Cloud Security']
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="projects" className="bg-slate-100 dark:bg-slate-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            A showcase of my recent projects, demonstrating my technical expertise and innovative problem-solving approach.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="project-card overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div 
                className="relative h-56 overflow-hidden"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center text-white text-sm mb-2 bg-primary-500/80 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} className="mr-2" />
                    <span>{project.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal - Enhanced */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-slate-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              >
                <div className="relative p-6">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors z-10"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>

                  <div 
                    className="w-full h-56 rounded-lg mb-6 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${selectedProject.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="flex items-center text-white text-sm mb-2 bg-primary-500/80 px-3 py-1 rounded-full w-fit">
                        <Calendar size={14} className="mr-2" />
                        <span>{selectedProject.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">{selectedProject.title}</h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white">Project Details</h4>
                    <ul className="list-disc pl-5 space-y-3 text-slate-700 dark:text-slate-300">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;