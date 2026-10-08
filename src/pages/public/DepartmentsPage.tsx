import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Building2, Users, Mail, BookOpen, Cpu, Award } from 'lucide-react';
import { departmentsData } from '../../data/departments';

export const DepartmentsPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>(departmentsData[0].id);

  const activeDept = departmentsData.find((d) => d.id === selectedDept) || departmentsData[0];

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
            Academic Divisions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Departments Directory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Explore academic departments across computer sciences, emerging AI, electronics,
            aerospace, civil, mechanical, and business administration.
          </motion.p>
        </div>
      </section>

      {/* Main Directory Interface */}
      <section className="py-12 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Department Navigation List */}
            <div className="lg:col-span-4 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold block px-3 py-2">
                All Departments ({departmentsData.length})
              </span>
              <div className="space-y-1">
                {departmentsData.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDept(dept.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                      selectedDept === dept.id
                        ? 'bg-black text-white shadow-xs'
                        : 'text-neutral-800 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{dept.name}</span>
                    <span className="font-mono text-[11px] opacity-80">{dept.shortName}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Department Detailed View */}
            <motion.div
              key={activeDept.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-8 bg-neutral-50 border border-neutral-200 rounded-lg p-6 sm:p-8 space-y-8 shadow-xs"
            >
              {/* Header */}
              <div className="border-b border-neutral-200 pb-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#BC0202] font-bold">
                    Estd. {activeDept.established}
                  </span>
                  <span className="text-neutral-600 font-medium">{activeDept.facultyCount} Faculty Members</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
                  {activeDept.name}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {activeDept.description}
                </p>
              </div>

              {/* HOD & Quick Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white rounded border border-neutral-200 space-y-1 shadow-2xs">
                  <span className="text-neutral-500 font-mono text-[10px] uppercase font-bold">
                    Head of Department
                  </span>
                  <div className="font-bold text-black text-sm">
                    {activeDept.hodName}
                  </div>
                  <div className="text-neutral-600 font-normal">
                    {activeDept.hodQualification}
                  </div>
                </div>

                <div className="p-4 bg-white rounded border border-neutral-200 space-y-1 shadow-2xs">
                  <span className="text-neutral-500 font-mono text-[10px] uppercase font-bold">
                    Department Communication
                  </span>
                  <div className="font-bold text-black text-sm flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#BC0202]" />
                    <span>{activeDept.contactEmail}</span>
                  </div>
                  <div className="text-neutral-600 font-normal">
                    Office Hours: Mon–Sat (09:00 AM – 04:30 PM)
                  </div>
                </div>
              </div>

              {/* Programs Offered */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-base text-black">
                  Degree Programs Offered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeDept.programsOffered.map((p, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white border border-neutral-300 rounded text-xs font-semibold text-neutral-800"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Laboratories */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-base text-black">
                  Key Laboratories & Infrastructure
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDept.keyLabs.map((lab, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded border border-neutral-200 text-xs text-neutral-800 font-medium flex items-center gap-2"
                    >
                      <Cpu className="w-4 h-4 text-[#BC0202] shrink-0" />
                      <span>{lab}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Areas */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-base text-black">
                  Core Research Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeDept.researchAreas.map((res, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs bg-white border border-neutral-200 rounded font-medium text-neutral-800"
                    >
                      • {res}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display font-bold text-base text-black">
                  Department Achievements
                </h3>
                <ul className="space-y-2 text-xs text-neutral-700 font-normal">
                  {activeDept.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#BC0202] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
