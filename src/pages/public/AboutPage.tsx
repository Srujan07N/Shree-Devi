import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, MapPin, Building2, BookOpen, Target, Eye } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero Banner - White background with black text */}
      <section className="bg-white text-black py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
            Institutional Profile
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            About Shree Devi Institute of Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-3xl leading-relaxed font-normal"
          >
            Established in 2006 by Shree Devi Education Trust, SDIT has evolved into a premier
            destination for technology education, research inquiry, and entrepreneurial
            leadership in coastal Karnataka.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Institutional Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-4"
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-black leading-tight">
                Nurturing Technical Excellence in Kenjar, Mangaluru
              </h2>
              <div className="h-1 w-12 bg-[#BC0202]"></div>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                Shree Devi Institute of Technology is situated on a picturesque 12+ acre campus in
                Kenjar, near the Mangaluru International Airport. Designed to inspire scholarly
                curiosity, the institute integrates modern academic blocks, advanced engineering
                laboratories, an extensive digital library, and vibrant student recreational zones.
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                All undergraduate engineering programs and postgraduate degrees are affiliated to
                Visvesvaraya Technological University (VTU), Belagavi, and duly approved by the All
                India Council for Technical Education (AICTE), Government of India. The pedagogical
                framework fosters both foundational engineering mathematics and current computing
                paradigms, empowering students to adapt smoothly into global technological roles.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Managed by Shree Devi Education Trust</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Affiliated to VTU Belagavi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Approved by AICTE New Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>12+ Acre Scenic Kenjar Campus</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-neutral-50 p-8 rounded-lg border border-[#E5E5E5] space-y-6 shadow-xs"
            >
              <h3 className="font-display font-bold text-lg text-black">
                Key Institutional Milestones
              </h3>
              <div className="space-y-4 text-xs">
                <div className="border-l-3 border-[#BC0202] pl-3">
                  <div className="font-mono font-bold text-black text-sm">2006</div>
                  <div className="text-neutral-700 font-normal">
                    Establishment of SDIT with core engineering disciplines under Shree Devi Education Trust.
                  </div>
                </div>
                <div className="border-l-3 border-[#BC0202] pl-3">
                  <div className="font-mono font-bold text-black text-sm">2007 - 2008</div>
                  <div className="text-neutral-700 font-normal">
                    Introduction of MBA, MCA, and expansion of Information Science programs.
                  </div>
                </div>
                <div className="border-l-3 border-[#BC0202] pl-3">
                  <div className="font-mono font-bold text-black text-sm">2011</div>
                  <div className="text-neutral-700 font-normal">
                    Introduction of Aeronautical Engineering, fostering aerospace education in coastal Karnataka.
                  </div>
                </div>
                <div className="border-l-3 border-[#BC0202] pl-3">
                  <div className="font-mono font-bold text-black text-sm">2021 - Present</div>
                  <div className="text-neutral-700 font-normal">
                    Launch of B.E. in AI & Machine Learning, Artificial Intelligence & Data Science, and modern R&D clusters.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-neutral-50 border border-[#E5E5E5] rounded-lg p-8 space-y-4 shadow-xs"
            >
              <div className="w-10 h-10 rounded bg-[#FFF0F0] text-[#BC0202] flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-black">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                To establish Shree Devi Institute of Technology as a center of technical and managerial
                excellence that empowers students with holistic values, technological leadership, and
                social accountability to address global engineering challenges.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-neutral-50 border border-[#E5E5E5] rounded-lg p-8 space-y-4 shadow-xs"
            >
              <div className="w-10 h-10 rounded bg-[#FFF0F0] text-[#BC0202] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-black">
                Our Mission
              </h3>
              <ul className="text-xs sm:text-sm text-neutral-700 space-y-2 leading-relaxed font-normal">
                <li>
                  • To impart rigorous technical education anchored in VTU academic schemes and contemporary industry requirements.
                </li>
                <li>
                  • To create an inspiring academic environment with cutting-edge laboratories, computing facilities, and digital knowledge assets.
                </li>
                <li>
                  • To inculcate research-oriented curiosity, ethical judgment, and continuous lifelong professional development.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 bg-neutral-50 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
                Governance
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
                Leadership & Trust Management
              </h2>
            </div>
            <Link
              to="/leadership"
              className="text-xs font-bold text-[#BC0202] hover:underline"
            >
              View Full Leadership Council →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-neutral-200 rounded-lg p-6 space-y-3 shadow-xs"
            >
              <span className="text-xs font-mono text-[#BC0202] uppercase tracking-wider font-bold">
                Founder & Chairman
              </span>
              <h3 className="font-display font-bold text-lg text-black">
                Sri A. Sadananda Shetty
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                Visionary educational philanthropist behind Shree Devi Education Trust, committed to
                broadening higher educational opportunities across coastal Karnataka since the
                trust's inception.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-neutral-200 rounded-lg p-6 space-y-3 shadow-xs"
            >
              <span className="text-xs font-mono text-[#BC0202] uppercase tracking-wider font-bold">
                Principal & Academic Head
              </span>
              <h3 className="font-display font-bold text-lg text-black">
                Dr. K. E. Prakash
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                Distinguished academician steering institutional quality, VTU curriculum compliance,
                faculty research initiatives, and national accreditation standards at SDIT.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const LeadershipPage: React.FC = () => {
  return (
    <div className="w-full bg-white text-black">
      <section className="bg-white text-black py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
            Trust & Governance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Institutional Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            The governing council of Shree Devi Education Trust and executive leadership of SDIT
            guiding our mission toward educational and technological excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-neutral-50 border border-[#E5E5E5] rounded-lg p-8 space-y-4 shadow-xs"
            >
              <div className="w-12 h-12 rounded bg-black text-white flex items-center justify-center font-bold text-lg">
                SS
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#BC0202] font-bold">
                  Chairman, Shree Devi Education Trust
                </span>
                <h3 className="font-display font-bold text-2xl text-black mt-1">
                  Sri A. Sadananda Shetty
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                "Our aim has always been to provide world-class education rooted in strong moral
                values. Shree Devi Institute of Technology stands as a testament to our ongoing
                dedication to build capable engineers and leaders who make a tangible difference in
                industry and society."
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-neutral-50 border border-[#E5E5E5] rounded-lg p-8 space-y-4 shadow-xs"
            >
              <div className="w-12 h-12 rounded bg-black text-white flex items-center justify-center font-bold text-lg">
                KP
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#BC0202] font-bold">
                  Principal, SDIT
                </span>
                <h3 className="font-display font-bold text-2xl text-black mt-1">
                  Dr. K. E. Prakash
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                "Technical education today is about adaptability and real-world execution. At SDIT,
                we provide our students with rigorous conceptual grounding in mathematics and
                systems, paired with intensive coding bootcamps and hands-on laboratory exploration."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
