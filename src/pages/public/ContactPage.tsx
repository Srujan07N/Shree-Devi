import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Building2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [enquiryType, setEnquiryType] = useState<'General' | 'Admissions' | 'Placements'>('General');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showToast('Please fill all mandatory fields', 'warning');
      return;
    }
    showToast(`Thank you, ${name}! Your enquiry has been received. Our team will get back to you.`, 'success');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Banner - White background with crisp black text */}
      <section className="bg-white text-black py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Contact SDIT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Reach out to our administrative offices, admissions desk, or placement department at
            our Kenjar, Mangaluru campus.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase text-[#BC0202] font-bold">
                  Campus Headquarters
                </span>
                <h2 className="font-display font-bold text-2xl text-black">
                  Shree Devi Institute of Technology
                </h2>
                <div className="h-1 w-12 bg-[#BC0202]"></div>

                <div className="space-y-4 text-xs text-neutral-700 pt-2 font-medium">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#BC0202] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black">Campus Location:</strong>
                      <span>Airport Road, Kenjar, Mangalore – 574142, Karnataka, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#BC0202] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black">Phone Helplines:</strong>
                      <span>+91 824 2254104 / +91 824 2254102</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#BC0202] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black">Official Email:</strong>
                      <span>info@sdc.ac.in / admissions@sdc.ac.in</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#BC0202] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black">Office Timings:</strong>
                      <span>Monday to Friday: 09:00 AM – 04:30 PM</span>
                      <span className="block text-neutral-600">Saturday: 09:00 AM – 01:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Location Card */}
              <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-black font-semibold text-xs">
                  <Building2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Transit Connectivity to Kenjar</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                  SDIT is conveniently located 3 km from Mangaluru International Airport (IXE) along
                  the Kenjar road, and 12 km from Mangaluru Central Railway Station with dedicated
                  college bus routes servicing all major hubs.
                </p>
              </div>

              {/* Trust Information */}
              <div className="p-6 bg-white rounded-lg border border-neutral-200 space-y-2 shadow-xs">
                <span className="text-[11px] font-mono uppercase text-[#BC0202] font-bold">
                  Trust Management
                </span>
                <h4 className="font-display font-bold text-sm text-black">
                  Shree Devi Education Trust
                </h4>
                <p className="text-xs text-neutral-700 font-normal">
                  Main Administrative Office: Maina Towers, Ballalbagh, Mangalore – 575003.
                </p>
              </div>
            </motion.div>

            {/* Right: Interactive Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
                <div>
                  <h3 className="font-display font-bold text-xl text-black">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 font-normal">
                    Select inquiry department and submit your message for direct routing to the concerned dean or officer.
                  </p>
                </div>

                {/* Tab selector */}
                <div className="flex p-1 bg-white border border-neutral-300 rounded-lg text-xs font-semibold max-w-fit">
                  <button
                    type="button"
                    onClick={() => setEnquiryType('General')}
                    className={`px-4 py-2 rounded transition-colors ${
                      enquiryType === 'General'
                        ? 'bg-[#BC0202] text-white shadow-xs'
                        : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    General Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setEnquiryType('Admissions')}
                    className={`px-4 py-2 rounded transition-colors ${
                      enquiryType === 'Admissions'
                        ? 'bg-[#BC0202] text-white shadow-xs'
                        : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    Admissions Desk
                  </button>
                  <button
                    type="button"
                    onClick={() => setEnquiryType('Placements')}
                    className={`px-4 py-2 rounded transition-colors ${
                      enquiryType === 'Placements'
                        ? 'bg-[#BC0202] text-white shadow-xs'
                        : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    Placement Cell
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sumanth Shetty"
                        className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98450 XXXXX"
                      className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Message / Query Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please provide details regarding your inquiry, program questions, or campus visit..."
                      className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
