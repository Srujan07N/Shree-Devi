import React from 'react';
import { motion } from 'motion/react';
import { Microscope, BookOpen, Award, FileCheck, Layers, ExternalLink, Quote } from 'lucide-react';

export const ResearchPage: React.FC = () => {
  const researchCentres = [
    {
      title: 'Computer Science & Engineering Research Centre',
      affiliation: 'VTU Belagavi Recognized',
      areas: ['Distributed Computing', 'Deep Learning & Vision', 'Information Security', 'Cloud Architectures'],
      scholars: 'Doctoral Candidates & M.Sc Active'
    },
    {
      title: 'Electronics & Communication VLSI Centre',
      affiliation: 'VTU Belagavi Recognized',
      areas: ['Low-Power CMOS Design', 'Cadence EDA Simulation', 'Wireless Sensor Networks', 'Antenna Design'],
      scholars: 'Doctoral Candidates & M.Sc Active'
    },
    {
      title: 'Mechanical & Thermal Materials Centre',
      affiliation: 'VTU Belagavi Recognized',
      areas: ['Composite Materials', 'Thermal Dissipation', 'Renewable Energy Systems', 'CFD Modeling'],
      scholars: 'Doctoral Candidates & M.Sc Active'
    },
    {
      title: 'Civil & Construction Technology Centre',
      affiliation: 'VTU Belagavi Recognized',
      areas: ['High Performance Concrete', 'Structural Retrofitting', 'Sustainable Materials', 'Geotechnical Testing'],
      scholars: 'Doctoral Candidates & M.Sc Active'
    }
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Hero */}
      <section className="bg-white text-black py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
            Scholarly Inquiry & Innovation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Research & Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            VTU recognized research centers cultivating doctoral scholarship, student project
            incubation, peer-reviewed publications, and industrial technology development.
          </motion.p>
        </div>
      </section>

      {/* Main Research Centres */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              VTU Recognized Centers
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
              Institutional Research Centres
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Departmental research facilities offering Ph.D and M.Sc (Engineering by Research)
              degrees affiliated to Visvesvaraya Technological University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCentres.map((rc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 bg-neutral-50 border border-neutral-200 hover:border-[#BC0202] rounded-lg space-y-4 shadow-xs transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] px-2.5 py-0.5 rounded">
                    {rc.affiliation}
                  </span>
                  <Microscope className="w-5 h-5 text-[#BC0202]" />
                </div>

                <h3 className="font-display font-bold text-xl text-black">
                  {rc.title}
                </h3>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-neutral-800 block">
                    Specialized Thrust Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {rc.areas.map((a, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-white border border-neutral-300 rounded font-medium text-neutral-800"
                      >
                        • {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-600 font-medium flex items-center justify-between">
                  <span>Enrolment Status: {rc.scholars}</span>
                  <span className="text-[#BC0202] font-semibold">VTU Affiliated</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const AlumniPage: React.FC = () => {
  const alumniStories = [
    {
      name: 'Adarsh Kamath',
      batch: 'Class of 2018 · B.E. CSE',
      role: 'Senior Software Engineer, Microsoft',
      quote:
        'The hands-on coding bootcamps and faculty encouragement at SDIT provided the strong algorithmic foundation required to crack Tier-1 technical interviews.'
    },
    {
      name: 'Prajwal Shetty',
      batch: 'Class of 2019 · B.E. ECE',
      role: 'Staff Hardware Engineer, Cadence',
      quote:
        'Having dedicated Cadence EDA simulation labs on campus gave us direct exposure to industry-standard VLSI workflows during our undergraduate studies.'
    },
    {
      name: 'Shraddha Bhat',
      batch: 'Class of 2021 · MBA',
      role: 'Human Resources Business Partner, Infosys',
      quote:
        'The MBA program at SDIT emphasizes presentation poise, case studies, and corporate communication that smoothed my transition into enterprise management.'
    }
  ];

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
            Global Network
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Alumni Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Connecting thousands of SDIT engineering and management graduates across leading
            technology corporations, research institutes, and entrepreneurial ventures worldwide.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              Success Stories
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
              SDIT Alumni Impact
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Alumni leaders excelling in global product companies and research laboratories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumniStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-neutral-50 border border-neutral-200 hover:border-[#BC0202] rounded-lg p-6 space-y-4 flex flex-col justify-between shadow-xs transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white text-[#BC0202] border border-neutral-300 flex items-center justify-center font-bold text-base shadow-xs">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-black">
                      {story.name}
                    </h3>
                    <div className="text-xs text-[#BC0202] font-semibold">{story.role}</div>
                    <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                      {story.batch}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed italic pt-2 font-normal">
                    "{story.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
