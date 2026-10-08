import React from 'react';
import { motion } from 'motion/react';
import { Home, ShieldCheck, Utensils, Wifi, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

export const HostelPage: React.FC = () => {
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
            Residential Life
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Student Hostels & Accommodation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Safe, comfortable, and hygienic residential accommodations located within the Kenjar
            campus, creating a supportive living and learning environment for students.
          </motion.p>
        </div>
      </section>

      {/* Boys & Girls Hostels */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Boys Hostel */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] px-2.5 py-0.5 rounded">
                  On-Campus Residence
                </span>
                <Home className="w-5 h-5 text-neutral-500" />
              </div>

              <h2 className="font-display font-bold text-2xl text-black">
                Boys Hostel
              </h2>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                Spacious residential wing with choices of double and triple sharing rooms. Located
                within walking distance from academic lecture halls and computational labs.
              </p>

              <div className="pt-4 border-t border-neutral-200 space-y-2 text-xs font-medium text-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Furnished with individual study desks, wardrobes & beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Dedicated mess providing vegetarian and non-vegetarian menus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Round-the-clock security and resident warden supervision</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>High-speed Wi-Fi & solar hot water facilities</span>
                </div>
              </div>
            </motion.div>

            {/* Girls Hostel */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] px-2.5 py-0.5 rounded">
                  On-Campus Residence
                </span>
                <Home className="w-5 h-5 text-neutral-500" />
              </div>

              <h2 className="font-display font-bold text-2xl text-black">
                Girls Hostel
              </h2>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                Secure residential wing with dedicated access controls, resident matrons, and
                support staff providing an uncompromised safe living sanctuary for female students.
              </p>

              <div className="pt-4 border-t border-neutral-200 space-y-2 text-xs font-medium text-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>24/7 CCTV surveillance, biometric security & resident wardens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Hygienic kitchen with nutritional quality monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Quiet common reading rooms and recreation lounge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Medical first-aid & on-call doctor access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hostel Amenities Pillars */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              Living Standards
            </span>
            <h3 className="font-display font-bold text-2xl text-black">
              Hostel Amenities & Living Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 bg-white border border-neutral-200 rounded-lg space-y-2 shadow-xs"
            >
              <Utensils className="w-5 h-5 text-[#BC0202]" />
              <h4 className="font-display font-bold text-sm text-black">
                Food & Dining Mess
              </h4>
              <p className="text-xs text-neutral-600 font-normal">
                Nutritious meal plans prepared in clean industrial kitchens with student mess
                committee feedback.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 bg-white border border-neutral-200 rounded-lg space-y-2 shadow-xs"
            >
              <ShieldCheck className="w-5 h-5 text-[#BC0202]" />
              <h4 className="font-display font-bold text-sm text-black">
                Safety & Security
              </h4>
              <p className="text-xs text-neutral-600 font-normal">
                Gated security checkpoints, CCTV cameras, and strict visitor verification logs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 bg-white border border-neutral-200 rounded-lg space-y-2 shadow-xs"
            >
              <BookOpen className="w-5 h-5 text-[#BC0202]" />
              <h4 className="font-display font-bold text-sm text-black">
                Study Environment
              </h4>
              <p className="text-xs text-neutral-600 font-normal">
                Enforced evening study hours and air-cooled reading rooms for focused exam
                preparation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 bg-white border border-neutral-200 rounded-lg space-y-2 shadow-xs"
            >
              <Clock className="w-5 h-5 text-[#BC0202]" />
              <h4 className="font-display font-bold text-sm text-black">
                Campus Proximity
              </h4>
              <p className="text-xs text-neutral-600 font-normal">
                Zero commute friction with immediate access to libraries, labs, and athletic
                grounds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const StudentLifePage: React.FC = () => {
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
            Vibrant Campus Culture
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Student Life & Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Beyond academics, life at SDIT is energized by technical clubs, competitive hackathons,
            national cultural celebrations, inter-collegiate sports, and community outreach.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 shadow-xs"
            >
              <span className="text-xs font-mono text-[#BC0202] uppercase font-bold">
                Technical Clubs
              </span>
              <h3 className="font-display font-bold text-lg text-black">
                Developer & Robotics Guilds
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                Active student clubs including IEEE Student Branch, Computer Society of India (CSI),
                Aeronautical Flight Society, and Google Developer Groups organizing weekend coding
                sprints and hardware workshops.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 shadow-xs"
            >
              <span className="text-xs font-mono text-[#BC0202] uppercase font-bold">
                Cultural Excellence
              </span>
              <h3 className="font-display font-bold text-lg text-black">
                Sambhrama & Arts Forum
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                Annual cultural fests hosted on the open-air theater stage, music and theater
                societies, debate leagues, and traditional coastal Karnataka festivities.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 shadow-xs"
            >
              <span className="text-xs font-mono text-[#BC0202] uppercase font-bold">
                Community Engagement
              </span>
              <h3 className="font-display font-bold text-lg text-black">
                NSS, Youth Red Cross & Cleanliness
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                Active National Service Scheme (NSS) unit engaged in rural health camps, blood
                donation drives, tree plantation campaigns, and technical literacy sessions for
                nearby schools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
