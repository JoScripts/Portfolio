import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Terminal, Network, Cpu, Database } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      icon: <Code size={24} className="text-[#22C55E]" />,
      skills: ["C#", "JavaScript", "Python", "HTML/CSS"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield size={24} className="text-[#3B82F6]" />,
      skills: ["Networking Basics", "Reconnaissance", "Ethical Hacking", "Web Security"]
    },
    {
      title: "Tools & OS",
      icon: <Terminal size={24} className="text-orange-500" />,
      skills: ["Linux (Kali/Ubuntu)", "Git", "VS Code", "Nmap"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="skills-section-p3r8t5w2"
      className="py-24 md:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-4">Technical <span className="text-[#22C55E]">Arsenal</span></h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">A collection of tools and technologies I use to build, break, and secure applications.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          id="skills-grid-a1b2c3d4"
        >
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              id={`skill-card-${idx}-e5f6g7h8`}
              className="bg-[#141414] p-8 rounded-2xl border border-white/5 hover:border-[#22C55E]/50 transition-all group"
            >
              <div className="w-16 h-16 bg-[#0A0A0A] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-[#F9FAFB] mb-6 uppercase tracking-wider">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-[#0A0A0A] text-xs font-semibold text-[#D1D5DB] border border-white/10 group-hover:border-[#22C55E]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;