import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Layers, Briefcase, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const categories = ['All', 'Campus', 'Laboratories', 'Events', 'Cultural', 'Sports', 'Academics'];

  const galleryItems = [
    { title: 'Main Campus Academic Block', category: 'Campus', tag: 'Kenjar Campus', desc: 'Central administrative and academic pavilion with lush coastal palm gardens.' },
    { title: 'Advanced Computing & AI Lab', category: 'Laboratories', tag: 'High-Perf Computing', desc: 'Dual-monitor high-compute systems equipped for deep learning and simulations.' },
    { title: 'Subsonic Wind Tunnel Facility', category: 'Laboratories', tag: 'Aeronautical Dept', desc: 'Aerodynamic test chamber for airflow modeling and wing performance studies.' },
    { title: 'Invento National Technical Symposium', category: 'Events', tag: 'Annual Tech Fest', desc: 'Flagship national college conclave with hackathons, paper presentations, and robotics.' },
    { title: 'Sambhrama Open Air Theatre Fest', category: 'Cultural', tag: 'Cultural Evening', desc: 'Annual cultural festival spotlighting classical and contemporary student arts.' },
    { title: 'Inter-Collegiate Athletics Championship', category: 'Sports', tag: 'Athletics Ground', desc: 'Standard 400m track and sports arena hosting VTU regional tournaments.' },
    { title: 'Digital Knowledge Resource Centre', category: 'Academics', tag: 'Central Library', desc: 'Air-conditioned digital library hosting 30,000+ volumes and IEEE e-journals.' },
    { title: 'Cadence VLSI Microelectronics Lab', category: 'Laboratories', tag: 'ECE Department', desc: 'Industry-standard Cadence EDA tools for IC layout and semiconductor design.' },
    { title: 'Annual Convocation Ceremony', category: 'Events', tag: 'Graduation Day', desc: 'Graduation convocation conferring VTU bachelor and master degrees.' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

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
            Visual Archive
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Campus Media Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Snapshots of academic pursuits, state-of-the-art laboratory infrastructure, cultural
            expressions, and campus life at Kenjar.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-neutral-200">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#BC0202] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden hover:border-[#BC0202] transition-colors shadow-xs"
              >
                {/* Visual Graphic Tile */}
                <div className="w-full h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex flex-col justify-between p-5 relative border-b border-neutral-200">
                  <div className="flex items-center justify-between text-xs z-10">
                    <span className="font-mono text-[#BC0202] text-xs font-bold bg-white px-2 py-0.5 rounded shadow-xs">
                      {item.tag}
                    </span>
                    <Camera className="w-4 h-4 text-neutral-500" />
                  </div>
                  <div className="z-10">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-black text-base leading-snug group-hover:text-[#BC0202] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                  <span className="text-[11px] text-[#BC0202] font-bold inline-flex items-center gap-1">
                    <span>Enlarge Photograph</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black border border-neutral-300 rounded-xl max-w-xl w-full p-6 space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="font-mono text-xs font-bold text-[#BC0202]">
                  {selectedImage.tag} · {selectedImage.category}
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-neutral-500 hover:text-black font-bold text-sm"
                >
                  ✕ Close
                </button>
              </div>

              <div className="w-full h-64 bg-neutral-100 rounded-lg border border-neutral-200 flex flex-col items-center justify-center p-6 text-center">
                <Camera className="w-12 h-12 text-[#BC0202] mb-3" />
                <h4 className="font-display font-bold text-lg text-black">{selectedImage.title}</h4>
                <p className="text-xs text-neutral-600 max-w-md mt-2">{selectedImage.desc}</p>
                <span className="text-[11px] text-neutral-500 mt-3 font-mono">
                  SDIT Kenjar, Mangaluru Campus Archive
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const CareersPage: React.FC = () => {
  const currentOpenings = [
    {
      title: 'Assistant Professor / Associate Professor – AI & ML',
      department: 'Computer Science & Engineering (AI & ML)',
      qualification: 'Ph.D or M.Tech in CSE / AI / Data Science with First Class',
      experience: '2 - 5 Years Academic / Research Experience',
      type: 'Full-Time'
    },
    {
      title: 'Assistant Professor – Electronics & VLSI',
      department: 'Electronics & Communication Engineering',
      qualification: 'M.Tech / Ph.D in VLSI Design or Embedded Systems',
      experience: '1 - 3 Years Academic Experience',
      type: 'Full-Time'
    },
    {
      title: 'Lab Instructor – Aeronautical Systems',
      department: 'Aeronautical Engineering',
      qualification: 'B.E. or Diploma in Aeronautical / Mechanical Engineering',
      experience: 'Wind tunnel or UAV lab familiarity preferred',
      type: 'Full-Time'
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
            Join Our Faculty & Staff
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Careers at SDIT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Be part of a dedicated academic and research team advancing technology education in
            coastal Karnataka under Shree Devi Education Trust.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-black">
              Current Openings
            </h2>
            <div className="space-y-4">
              {currentOpenings.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 shadow-xs hover:border-[#BC0202] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-base text-black">
                      {job.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-[#BC0202] bg-[#FFF0F0] px-2.5 py-0.5 rounded self-start sm:self-auto">
                      {job.type}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-700 space-y-1 font-medium">
                    <div>Department: <span className="text-black font-semibold">{job.department}</span></div>
                    <div>Required Qualification: <span className="text-black font-semibold">{job.qualification}</span></div>
                    <div>Experience: <span className="text-black font-semibold">{job.experience}</span></div>
                  </div>
                  <div className="pt-2 text-xs text-neutral-600 border-t border-neutral-200">
                    Send resume with credentials to{' '}
                    <strong className="text-black font-bold">hr@sdc.ac.in</strong> or{' '}
                    <strong className="text-black font-bold">principal@sdc.ac.in</strong>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
