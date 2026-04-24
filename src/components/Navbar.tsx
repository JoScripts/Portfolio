import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about-section-h7k2m9x1' },
    { name: 'Skills', id: 'skills-section-p3r8t5w2' },
    { name: 'Projects', id: 'projects-section-j9x2k4m1' },
    { name: 'Contact', id: 'contact-section-q6w2e8r4' },
  ];

  return (
    <nav 
      id="navbar-root-a1b2c3d4"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            data-role="logo" 
            id="nav-logo-container-k5l6m7n8"
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/ab4fbcb8-f2e7-46b0-b5f0-ea298f82507d/pending-1777024341161/logo.png" 
              alt="Olaleye Favour Logo" 
              className="h-10 w-auto"
              id="nav-logo-img-l9m0n1o2"
            />
            <span 
              id="nav-logo-text-p3q4r5s6"
              className={`text-xl font-bold tracking-tight ${scrolled ? 'text-[#F9FAFB]' : 'text-[#FFFFFF]'} drop-shadow-sm`}
            >
              Olaleye Favour
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.name.toLowerCase()}-t7u8v9w0`}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#22C55E] ${scrolled ? 'text-[#D1D5DB]' : 'text-[#F9FAFB]'} drop-shadow-sm`}
              >
                {link.name}
              </button>
            ))}
            <button
              id="nav-cta-btn-x1y2z3a4"
              onClick={() => scrollTo('contact-section-q6w2e8r4')}
              className="bg-[#22C55E] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#16A34A] transition-all transform hover:scale-105 shadow-lg shadow-green-500/20 text-[#111111]"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle-b5c6d7e8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-[#F9FAFB]' : 'text-[#FFFFFF]'} drop-shadow-sm`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-overlay-f9g0h1i2"
          className="lg:hidden fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-4 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`mobile-nav-link-${link.name.toLowerCase()}-j3k4l5m6`}
              onClick={() => scrollTo(link.id)}
              className="text-2xl font-semibold text-[#F9FAFB] border-b border-white/5 pb-4 text-left drop-shadow-sm"
            >
              {link.name}
            </button>
          ))}
          <button
            id="mobile-nav-cta-n7o8p9q0"
            onClick={() => scrollTo('contact-section-q6w2e8r4')}
            className="bg-[#22C55E] py-4 rounded-xl font-bold text-lg hover:bg-[#16A34A] transition-all text-[#111111]"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;