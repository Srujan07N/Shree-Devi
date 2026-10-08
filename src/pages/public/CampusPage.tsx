import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Building2, Trees, Wifi, Shield, Bus, Coffee, BookOpen, Trophy } from 'lucide-react';
import { facilitiesData } from '../../data/facilities';

export const CampusPage: React.FC = () => {
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
            Infrastructure & Environment
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            The SDIT Campus Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Spanning over 12 acres of lush coastal terrain in Kenjar, Mangaluru, providing an
            inspiring environment designed for focused scholarship, innovation, and community life.
          </motion.p>
        </div>
      </section>

      {/* Campus Environment Showcase */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              Living & Learning
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
              An Environment Designed to Learn, Connect & Grow
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Harmonizing architectural utility with coastal greenery, modern research blocks, and
              dynamic student social arenas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded bg-[#FFF0F0] text-[#BC0202] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-black">
                Academic Blocks
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                Dedicated instructional complexes equipped with multimedia lecture galleries,
                specialized engineering labs, and seminar rooms.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded bg-[#FFF0F0] text-[#BC0202] flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-black">
                Digital Campus
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                1 Gbps fiber backbone providing high-speed secure Wi-Fi access across all academic,
                library, and residential hostel blocks.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded bg-[#FFF0F0] text-[#BC0202] flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-black">
                Campus Transit
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                Comprehensive fleet of institutional buses operating across prime routes in
                Mangaluru, Surathkal, Moodbidri, and Bantwal.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded bg-[#FFF0F0] text-[#BC0202] flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-black">
                Dining & Food Court
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                Hygienic multi-cuisine cafeteria providing fresh South and North Indian meals,
                snacks, and beverages in a spacious dining hall.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
                Key Amenities
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
                Institutional Infrastructure
              </h2>
            </div>
            <Link to="/facilities" className="text-xs font-bold text-[#BC0202] hover:underline">
              View Detailed Facilities Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesData.slice(0, 6).map((fac) => (
              <motion.div
                key={fac.id}
                whileHover={{ y: -4 }}
                className="bg-white border border-neutral-200 rounded-lg p-6 space-y-3 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#BC0202] font-bold">{fac.category}</span>
                    <span className="text-neutral-500 font-medium">{fac.specs}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-black">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    {fac.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 text-[11px] text-neutral-600 font-medium">
                  {fac.highlights[0]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const FacilitiesPage: React.FC = () => {
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
            Campus Assets
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Campus Facilities & Amenities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Detailed specifications of academic, recreational, residential, and computational
            infrastructure supporting student excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilitiesData.map((fac) => (
              <motion.div
                key={fac.id}
                whileHover={{ y: -3 }}
                className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 sm:p-8 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#BC0202] bg-[#FFF0F0] px-2.5 py-0.5 rounded">
                    {fac.category}
                  </span>
                  <span className="text-neutral-600 font-medium">
                    {fac.specs}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-black">
                  {fac.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {fac.description}
                </p>

                <div className="pt-3 border-t border-neutral-200 space-y-2">
                  <span className="text-xs font-bold text-black block">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700 font-normal">
                    {fac.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#BC0202] font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
