import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageSquare, X, Send } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const FloatingActions: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryPhone, setEnquiryPhone] = useState('');
  const [enquiryCourse, setEnquiryCourse] = useState('B.E. Computer Science');
  const { showToast } = useToast();

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryName || !enquiryPhone) {
      showToast('Please enter your name and phone number', 'warning');
      return;
    }
    showToast(`Thank you, ${enquiryName}! Our admission counselor will contact you shortly.`, 'success');
    setEnquiryOpen(false);
    setEnquiryName('');
    setEnquiryPhone('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
        {/* Quick Enquiry Floating Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setEnquiryOpen(true)}
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-[#BC0202] text-white rounded-full shadow-lg hover:bg-[#8F0000] transition-colors text-xs font-bold tracking-wide uppercase"
          aria-label="Quick Admission Enquiry"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">Enquire Now</span>
        </motion.button>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="pointer-events-auto p-3 bg-white text-black border border-neutral-300 rounded-full shadow-md hover:bg-[#BC0202] hover:text-white hover:border-[#BC0202] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Quick Enquiry Modal */}
      <AnimatePresence>
        {enquiryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
            onClick={() => setEnquiryOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black border border-neutral-300 rounded-xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative"
            >
              <button
                onClick={() => setEnquiryOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#BC0202]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
                  Admissions 2026-27
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-black mb-2">
                Quick Admission Enquiry
              </h3>
              <p className="text-xs text-neutral-600 mb-6">
                Connect with SDIT admissions counselor for seat availability, eligibility, and scholarship counseling.
              </p>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={enquiryName}
                    onChange={(e) => setEnquiryName(e.target.value)}
                    placeholder="e.g. Rahul Shenoy"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={enquiryPhone}
                    onChange={(e) => setEnquiryPhone(e.target.value)}
                    placeholder="+91 98450 XXXXX"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Program of Interest</label>
                  <select
                    value={enquiryCourse}
                    onChange={(e) => setEnquiryCourse(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                  >
                    <option value="B.E. Computer Science">B.E. Computer Science & Engineering</option>
                    <option value="B.E. AI & Machine Learning">B.E. CSE (AI & ML)</option>
                    <option value="B.E. AI & Data Science">B.E. AI & Data Science</option>
                    <option value="B.E. Information Science">B.E. Information Science & Engg</option>
                    <option value="B.E. Electronics & Communication">B.E. Electronics & Communication</option>
                    <option value="B.E. Aeronautical">B.E. Aeronautical Engineering</option>
                    <option value="B.E. Mechanical">B.E. Mechanical Engineering</option>
                    <option value="B.E. Civil">B.E. Civil Engineering</option>
                    <option value="MBA">Master of Business Administration (MBA)</option>
                    <option value="MCA">Master of Computer Applications (MCA)</option>
                    <option value="M.Tech Construction Tech">M.Tech Construction Technology</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-black transition-colors"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-5 py-2.5 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-bold rounded tracking-wider uppercase transition-colors inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
