import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-scroll';

// Particle animation
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    const particlesArray: any[] = [];
    const numberOfParticles = Math.floor(window.innerWidth / 15);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray.length = 0;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-50"
    />
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <ParticleBackground />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800 dark:text-white">
              Hi, I'm{' '}
              <span className="text-primary-500 dark:text-primary-400">
                Azeemkhan
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-14">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Frontend Specialist',
                  1000,
                  'Backend Engineer',
                  1000,
                  'AI Enthusiast',
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-secondary-600 dark:text-secondary-400"
              />
            </div>
            <p className="text-lg md:text-xl mb-8 text-slate-700 dark:text-slate-300 max-w-2xl">
              Enthusiastic Computer Science graduate with a passion for full-stack development. 
              Proficient in frontend and backend technologies, eager to contribute innovative 
              solutions in a dynamic work environment.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a 
                href="mailto:azeemazm31@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={18} /> Get in Touch
              </motion.a>
              <motion.a 
                href="https://github.com/azeeee05" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2"
              >
                <Github size={18} /> GitHub
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <Phone size={16} className="text-primary-500" />
                <span>+91 9363695233</span>
              </div>
              <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <Mail size={16} className="text-primary-500" />
                <span>azeemazm31@gmail.com</span>
              </div>
              <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <MapPin size={16} className="text-primary-500" />
                <span>Bangalore, India</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/azeemkhann/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={16} className="text-primary-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary-500 rounded-3xl blur-2xl opacity-20 transform -rotate-6"></div>
              <div className="absolute inset-0 bg-secondary-500 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
              <div className="card p-6 md:p-8 rounded-3xl relative bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 overflow-hidden flex items-center justify-center text-4xl font-bold text-white">
                    AN
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Azeemkhan N</h2>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">Full Stack Developer</p>
                  <div className="w-full border-t border-slate-200 dark:border-slate-700 my-4"></div>
                  <div className="grid grid-cols-2 gap-4 w-full text-center">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Experience</p>
                      <p className="font-semibold">1+ Year</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Projects</p>
                      <p className="font-semibold">2+</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Technologies</p>
                      <p className="font-semibold">10+</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Certifications</p>
                      <p className="font-semibold">3+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={30} className="text-primary-500 dark:text-primary-400" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;