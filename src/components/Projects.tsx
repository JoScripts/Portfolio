import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShieldAlert, Cpu, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SecureVault",
      desc: "A C#-based desktop password manager with AES-256 encryption and multi-factor authentication simulation.",
      tech: ["C#", ".NET", "SQL"],
      icon: <ShieldAlert className="text-[#22C55E]" />,
      img: "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwY29tcHV0ZXIlMjBpbnRlcmZhY2UlMjBkaWdpdGFsJTIwdmF1bHR8ZW58MHwwfHx8MTc3NzAyNDQxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "NetScout",
      desc: "Automated Python-based reconnaissance tool for identifying active hosts and open ports on local networks.",
      tech: ["Python", "Scapy", "Linux"],
      icon: <Globe className="text-[#3B82F6]" />,
      img: "https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGlvbnN8ZW58MHwwfHx8MTc3NzAyNDQxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "SecureAPI",
      desc: "A RESTful API built with security-first principles, including rate limiting, JWT auth, and CORS hardening.",
      tech: ["JavaScript", "Node.js", "Express"],
      icon: <Cpu className="text-purple-500" />,
      img: "https://images.unsplash.com/photo-1749581134865-6b8255950548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBjb21wdXRlciUyMGhhcmR3YXJlJTIwZ2xvd2luZyUyMGxpZ2h0c3xlbnwwfDB8fHwxNzc3MDI0NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section 
      id="projects-section-j9x2k4m1"
      className="py-24 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-4">Featured <span className="text-[#3B82F6]">Work</span></h2>
            <p className="text-[#9CA3AF] max-w-xl">Real-world applications of my development and security skills. Check out more on my GitHub.</p>
          </div>
          <a 
            href="https://github.com/JoScripts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#22C55E] font-bold hover:underline group"
          >
            <Github size={20} />
            <span>Visit GitHub</span>
            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              id={`project-card-${idx}-v1w2x3y4`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#3B82F6]/50 transition-all hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-2 bg-[#0A0A0A]/80 backdrop-blur-md rounded-lg border border-white/10">
                  {project.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-3 group-hover:text-[#3B82F6] transition-colors">{project.title}</h3>
                <p className="text-[#9CA3AF] text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tidx) => (
                    <span key={tidx} className="text-[10px] uppercase tracking-widest font-bold text-[#D1D5DB] px-2 py-1 bg-[#0A0A0A] rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;