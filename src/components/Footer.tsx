import React from 'react';
import { Github, Twitter, Linkedin, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="footer-main-f1o2o3t4"
      className="bg-[#0A0A0A] border-t border-white/5 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div 
              data-role="logo" 
              className="flex items-center gap-2"
              id="footer-logo-container-l1o2g3o4"
            >
              <img 
                src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/ab4fbcb8-f2e7-46b0-b5f0-ea298f82507d/pending-1777024341161/logo.png" 
                alt="Olaleye Favour Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-[#F9FAFB]">Olaleye Favour</span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Building secure digital environments and pushing the boundaries of offensive security. Developer by day, Red Teamer by passion.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-[#F9FAFB]">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <button onClick={() => document.getElementById('about-section-h7k2m9x1')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#9CA3AF] hover:text-[#22C55E] transition-colors text-left text-sm">About</button>
              <button onClick={() => document.getElementById('skills-section-p3r8t5w2')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#9CA3AF] hover:text-[#22C55E] transition-colors text-left text-sm">Skills</button>
              <button onClick={() => document.getElementById('projects-section-j9x2k4m1')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#9CA3AF] hover:text-[#22C55E] transition-colors text-left text-sm">Projects</button>
              <button onClick={() => document.getElementById('contact-section-q6w2e8r4')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#9CA3AF] hover:text-[#22C55E] transition-colors text-left text-sm">Contact</button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-[#F9FAFB]">Social Presence</h4>
            <div className="flex gap-4">
              <a href="https://github.com/JoScripts" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-[#F9FAFB] hover:border-[#22C55E] hover:text-[#22C55E] transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-[#F9FAFB] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-[#F9FAFB] hover:border-[#22C55E] hover:text-[#22C55E] transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[#9CA3AF] text-sm">
            &copy; {currentYear} Olaleye Favour. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
             <a 
              href="https://sitejourney.ai" 
              id="footer-credit-badge-z9x8"
              className="px-3 py-1 bg-[#1c4b8e] text-[#ffffff] text-xs font-bold rounded-full transition-opacity hover:opacity-80"
            >
              Made with SiteJourney.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;