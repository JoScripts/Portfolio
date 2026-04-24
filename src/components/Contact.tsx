import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SiteJourneyForm from './SiteJourneyForm';

const Contact = () => {
  return (
    <section 
      id="contact-section-q6w2e8r4"
      className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-6">Get In <span className="text-[#22C55E]">Touch</span></h2>
            <p className="text-lg text-[#9CA3AF] mb-12">
              Whether you have a security project in mind, a developer role, or just want to chat about offensive security, feel free to reach out!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#22C55E]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[#F9FAFB] font-bold">Email</h4>
                  <p className="text-[#9CA3AF]">olaleyefavourjo@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#3B82F6]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[#F9FAFB] font-bold">Phone</h4>
                  <p className="text-[#9CA3AF]">09028982938</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#22C55E]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[#F9FAFB] font-bold">Address</h4>
                  <p className="text-[#9CA3AF]">3, Shoremekun Street Aboru Iyana Ipaja</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <SiteJourneyForm formType="contact" successMessage="Message sent securely. I'll get back to you soon!">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#F9FAFB] mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="contact-input-name-z1a2"
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-[#F9FAFB] focus:outline-none focus:border-[#22C55E] transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#F9FAFB] mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="contact-input-email-b3c4"
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-[#F9FAFB] focus:outline-none focus:border-[#22C55E] transition-all"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-bold text-[#F9FAFB] mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="contact-input-subject-d5e6"
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-[#F9FAFB] focus:outline-none focus:border-[#22C55E] transition-all"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-[#F9FAFB] mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="contact-input-message-f7g8"
                  rows={4}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-[#F9FAFB] focus:outline-none focus:border-[#22C55E] transition-all"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                id="contact-submit-btn-h9i0"
                className="w-full bg-[#22C55E] text-[#0A0A0A] font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#16A34A] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={20} />
                SECURE SEND
              </button>
            </SiteJourneyForm>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;