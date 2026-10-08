import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight, CheckCircle2, Search, Filter } from 'lucide-react';
import { programsData } from '../../data/programs';

export const ProgramsPage: React.FC = () => {
  const [filterDegree, setFilterDegree] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const degrees = ['All', 'B.E.', 'M.Tech', 'MBA', 'MCA', 'Ph.D'];

  const filteredPrograms = programsData.filter((prog) => {
    const matchesDegree = filterDegree === 'All' || prog.degree === filterDegree;
    const matchesSearch =
      prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDegree && matchesSearch;
  });

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
            Academic Catalog
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Academic Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Discover comprehensive undergraduate, postgraduate, and doctoral degree programs
            affiliated to VTU Belagavi and approved by AICTE New Delhi.
          </motion.p>
        </div>
      </section>

      {/* Filter and Programs List */}
      <section className="py-12 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            {/* Degree Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-md">
              {degrees.map((deg) => (
                <button
                  key={deg}
                  onClick={() => setFilterDegree(deg)}
                  className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${
                    filterDegree === deg
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-700 hover:text-black hover:bg-neutral-200'
                  }`}
                >
                  {deg === 'All' ? 'All Degrees' : deg}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search program or keyword..."
                className="w-full bg-neutral-50 border border-neutral-300 rounded text-xs py-2 pl-9 pr-3 text-black focus:outline-hidden focus:border-[#BC0202]"
              />
            </div>
          </div>

          {/* Grid of Programs with Motion Lift */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-neutral-50 border border-neutral-200 hover:border-[#BC0202] rounded-lg p-6 flex flex-col justify-between transition-all group shadow-xs hover:shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#BC0202] bg-[#FFF0F0] px-2 py-0.5 rounded">
                      {prog.degree} · {prog.code}
                    </span>
                    <span className="text-neutral-600 font-medium">{prog.duration}</span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-black group-hover:text-[#BC0202] transition-colors leading-snug">
                      {prog.name}
                    </h3>
                    <p className="text-xs text-neutral-600 font-medium mt-1">
                      {prog.department}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-700 line-clamp-3 leading-relaxed font-normal">
                    {prog.overview}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-neutral-800 block">
                      Core Laboratories:
                    </span>
                    <div className="text-[11px] text-neutral-600 line-clamp-2">
                      {prog.labs.slice(0, 2).join(' · ')}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                  <Link
                    to={`/admissions`}
                    className="text-xs text-neutral-600 hover:text-black font-semibold"
                  >
                    Eligibility
                  </Link>
                  <Link
                    to={`/programs/${prog.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BC0202] hover:text-[#8F0000] transition-colors"
                  >
                    <span>View Curriculum & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16 text-sm text-neutral-500">
              No programs found matching your selected criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
