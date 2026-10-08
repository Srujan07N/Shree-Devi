import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Mail, BookOpen, Award, User, X } from 'lucide-react';
import { facultyData } from '../../data/faculty';
import { FacultyMember } from '../../types';

export const FacultyPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProfile, setActiveProfile] = useState<FacultyMember | null>(null);

  const departments = [
    'All',
    'Computer Science & Engineering',
    'Computer Science & Engineering (AI & ML)',
    'Electronics & Communication Engineering',
    'Information Science & Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Aeronautical Engineering',
    'Department of Business Administration'
  ];

  const filteredFaculty = facultyData.filter((fac) => {
    const matchesDept = selectedDept === 'All' || fac.department === selectedDept;
    const matchesSearch =
      fac.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.designation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

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
            Academic Scholars & Mentors
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Faculty Directory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Our accomplished faculty members blend decades of pedagogical mastery, doctoral
            research, indexed publications, and active student project mentorship.
          </motion.p>
        </div>
      </section>

      {/* Directory & Controls */}
      <section className="py-12 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty name, specialization..."
                className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 pl-9 text-xs text-black placeholder:text-neutral-500 focus:outline-hidden focus:border-[#BC0202] transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 text-xs font-medium">
              <span className="text-neutral-500 text-xs shrink-0">Filter Dept:</span>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202]"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((fac, idx) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-neutral-50 border border-neutral-200 hover:border-[#BC0202] rounded-lg p-6 flex flex-col justify-between transition-colors shadow-xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-neutral-700 shrink-0 font-bold text-lg group-hover:border-[#BC0202] group-hover:text-[#BC0202] transition-colors shadow-xs">
                      {fac.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-black group-hover:text-[#BC0202] transition-colors">
                        {fac.name}
                      </h3>
                      <p className="text-xs text-[#BC0202] font-semibold">{fac.designation}</p>
                      <p className="text-[11px] text-neutral-600 font-mono mt-0.5">
                        {fac.qualification}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-neutral-200 text-xs">
                    <div>
                      <span className="text-neutral-500 font-medium">Department: </span>
                      <span className="text-neutral-800 font-semibold">{fac.department}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 font-medium">Specialization: </span>
                      <span className="text-neutral-800 font-semibold">{fac.specialization}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 font-medium">Experience: </span>
                      <span className="text-neutral-800 font-semibold">{fac.experienceYears}+ Years</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <a
                    href={`mailto:${fac.email}`}
                    className="text-neutral-600 hover:text-black flex items-center gap-1 font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#BC0202]" />
                    <span>{fac.email}</span>
                  </a>
                  <button
                    onClick={() => setActiveProfile(fac)}
                    className="text-xs font-bold text-[#BC0202] hover:underline"
                  >
                    View Profile →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="py-16 text-center text-sm text-neutral-600">
              No faculty members found matching your search criteria.
            </div>
          )}
        </div>
      </section>

      {/* Profile Detail Modal */}
      <AnimatePresence>
        {activeProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
            onClick={() => setActiveProfile(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black border border-neutral-300 rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveProfile(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center font-bold text-xl text-[#BC0202] shrink-0">
                  {activeProfile.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-black">
                    {activeProfile.name}
                  </h3>
                  <p className="text-xs font-bold text-[#BC0202]">{activeProfile.designation}</p>
                  <p className="text-xs text-neutral-600 font-mono mt-0.5">
                    {activeProfile.qualification}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs border-t border-b border-neutral-200 py-4">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Department</span>
                  <span className="font-semibold text-black">{activeProfile.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Academic Experience</span>
                  <span className="font-semibold text-black">{activeProfile.experienceYears} Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Publications & Patents</span>
                  <span className="font-semibold text-black">{activeProfile.publicationsCount} Indexed Papers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Email Address</span>
                  <span className="font-semibold text-[#BC0202]">{activeProfile.email}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-black mb-2">
                  Research Specialization
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                  {activeProfile.specialization}. Mentoring undergraduate capstone projects and
                  VTU-recognized doctoral research initiatives.
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveProfile(null)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300 rounded text-xs font-bold transition-colors"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
