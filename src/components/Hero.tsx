import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Code, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero-section-a7k2m9x1"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Image and Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1547190027-9156686aa2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwYWJzdHJhY3QlMjBtYXRyaXglMjBiaW5hcnklMjBjb2RlJTIwZGFyayUyMGdyZWVuJTIwYmxhY2t8ZW58MHwwfHx8MTc3NzAyNDQxM3ww&ixlib=rb-4.1.0&q=80&w=1080')",
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#0A0A0A]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-xs font-bold text-[#22C55E] tracking-widest uppercase">Open for Opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
          id="hero-title-r3s4t5u6"
        >
          <span className="text-[#F9FAFB]">Olaleye </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#3B82F6]" style={{ WebkitBackgroundClip: 'text' }}>Favour</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-[#D1D5DB] max-w-3xl mx-auto mb-10 leading-relaxed"
          id="hero-tagline-v7w8x9y0"
        >
          Cybersecurity Enthusiast <span className="text-[#22C55E]">|</span> Developer <span className="text-[#3B82F6]">|</span> Future Red Teamer
          <br />
          <span className="text-base md:text-xl font-light opacity-80 mt-2 block">
            I build secure systems and explore offensive security to stay ahead of threats.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            id="hero-cta-projects-z1a2b3c4"
            onClick={() => document.getElementById('projects-section-j9x2k4m1')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#22C55E] text-[#0A0A0A] font-bold rounded-xl hover:bg-[#16A34A] transition-all shadow-xl shadow-green-500/10 transform hover:-translate-y-1"
          >
            View Projects
          </button>
          <button
            id="hero-cta-contact-d5e6f7g8"
            onClick={() => document.getElementById('contact-section-q6w2e8r4')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#141414] text-[#F9FAFB] border border-white/10 font-bold rounded-xl hover:bg-[#1A1A1A] transition-all transform hover:-translate-y-1"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Floating Icons Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-[20%] left-[10%] text-[#22C55E]"
          >
            <Shield size={40} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-[70%] left-[80%] text-[#3B82F6]"
          >
            <Code size={48} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute top-[30%] left-[85%] text-[#22C55E]"
          >
            <Lock size={32} />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-[#D1D5DB]" size={32} />
      </div>
    </section>
  );
};

export default Hero;