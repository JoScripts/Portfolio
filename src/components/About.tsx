import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <GraduationCap className="text-[#22C55E]" />,
      title: "Education",
      desc: "Currently pursuing studies at Mountain Top University."
    },
    {
      icon: <Target className="text-[#3B82F6]" />,
      title: "Focus",
      desc: "Cybersecurity & Software Development with an emphasis on offensive tactics."
    },
    {
      icon: <Award className="text-[#22C55E]" />,
      title: "Ambition",
      desc: "Aspiring to become a world-class Red Team Specialist and Bug Bounty Hunter."
    }
  ];

  return (
    <section 
      id="about-section-h7k2m9x1"
      className="py-24 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGRldmVsb3BlciUyMGN5YmVyc2VjdXJpdHklMjBtYWxlJTIwdGVjaCUyMGFlc3RoZXRpY3xlbnwwfDB8fHwxNzc3MDI0NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Olaleye Favour Portfolio Headshot" 
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#22C55E]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#3B82F6]/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              id="about-heading-e1f2g3h4"
              className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-6"
            >
              About <span className="text-[#22C55E]">Me</span>
            </h2>
            <p 
              id="about-desc-i5j6k7l8"
              className="text-lg text-[#9CA3AF] mb-10 leading-relaxed"
            >
              I am a motivated developer and cybersecurity learner passionate about offensive security, bug bounty, and secure system design. My journey began with a curiosity for how things work under the hood, which evolved into a deep interest in vulnerability research and ethical hacking.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  id={`about-feature-${index}-m9n0o1p2`}
                  className="flex gap-4 p-5 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#22C55E]/30 transition-all"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#F9FAFB] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#9CA3AF]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;Contact