import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const TerminalSection = () => {
  const [text, setText] = useState('');
  const fullText = "> whoami\nOlaleye Favour\n> skills\nC#, JavaScript, Python, Cybersecurity Basics, Linux\n> goals\nBecoming a Red Team Expert";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="terminal-section-t1u2v3w4"
      className="py-20 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden border border-white/10 shadow-2xl"
          id="terminal-window-a5b6c7d8"
        >
          {/* Title Bar */}
          <div className="bg-[#141414] px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex items-center gap-2 text-[#9CA3AF] text-sm font-mono">
              <TerminalIcon size={14} />
              <span>favour@kali: ~</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Body */}
          <div className="bg-[#0A0A0A] p-6 min-h-[300px] font-mono text-sm md:text-base whitespace-pre-line">
            <span className="text-[#22C55E]" id="terminal-content-x9y0z1a2">
              {text}
              <span className="terminal-cursor text-[#F9FAFB] ml-1" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;