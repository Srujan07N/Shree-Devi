import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  GraduationCap,
  Layers,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Users
} from 'lucide-react';
import { programsData } from '../../data/programs';
import { recruitersData } from '../../data/recruiters';
import { eventsData } from '../../data/events';
import { newsData } from '../../data/news';

export const HomePage: React.FC = () => {
  const featuredPrograms = programsData.slice(0, 6);
  const topRecruiters = recruitersData.slice(0, 10);
  const latestEvents = eventsData.slice(0, 3);
  const latestNews = newsData.slice(0, 3);

  const stats = [
    { label: 'Established', value: '2006', note: 'Shree Devi Education Trust' },
    { label: 'Campus Area', value: '12+ Acres', note: 'Scenic Coastal Kenjar Campus' },
    { label: 'Academic Programs', value: '11+', note: 'UG, PG & Doctoral Centers' },
    { label: 'Industry Connected', value: 'Top Tech', note: 'Tier-1 Recruiter Pipeline' }
  ];

  const whyFeatures = [
    {
      title: 'Academic Excellence',
      description:
        'Curriculum affiliated to VTU Belagavi and approved by AICTE, taught with computational depth, experiential lab projects, and continuous assessment.',
      icon: Award
    },
    {
      title: 'Industry Exposure',
      description:
        'Structured pre-placement training, regular industry conclaves, hackathons, guest lectures, and semester-long corporate internships.',
      icon: TrendingUp
    },
    {
      title: 'Modern Infrastructure',
      description:
        'Advanced GPU & computing labs, Cadence VLSI suite, wind tunnel aerodynamic test rigs, open air theatre, and digital knowledge repository.',
      icon: Cpu
    },
    {
      title: 'Experienced Faculty',
      description:
        'Accomplished doctoral academicians and research supervisors with significant publication output and dedicated student mentorship.',
      icon: Users
    },
    {
      title: 'Career Readiness',
      description:
        'Dedicated Training and Placement department delivering 100+ hours of aptitude, soft skills, full-stack coding, and mock interview coaching.',
      icon: BriefcaseIcon
    },
    {
      title: 'Holistic Development',
      description:
        'Vibrant student council, national technical symposium Invento, cultural extravaganza Sambhrama, sports tournaments, and community outreach.',
      icon: Compass
    }
  ];

  function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" strokeWidth="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <div className="w-full bg-white text-black">
      {/* 1. CINEMATIC HERO SECTION - White background, crisp black text, motion animations */}
      <section className="relative min-h-[90vh] flex items-center bg-white text-black overflow-hidden border-b border-[#E5E5E5]">
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#000000 1px, transparent 1px), linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
            backgroundSize: '40px 40px, 80px 80px, 80px 80px'
          }}
        ></div>

        {/* Soft light crimson ambient bloom */}
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#BC0202]/5 via-rose-50/50 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-8 space-y-8"
            >
              {/* Trust Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-semibold tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-[#BC0202] animate-pulse"></span>
                <span className="text-black">
                  Affiliated to VTU Belagavi · Approved by AICTE, New Delhi
                </span>
              </motion.div>

              {/* Main Headline - Bold Black */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-black leading-[1.08]"
                >
                  Empowering Minds.{' '}
                  <span className="block text-[#BC0202]">
                    Engineering the Future.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base sm:text-lg text-neutral-800 font-normal max-w-2xl leading-relaxed"
                >
                  Shree Devi Institute of Technology, Kenjar, Mangaluru — nurturing technical
                  excellence, innovation, leadership, and professional growth across modern
                  engineering and management disciplines since 2006.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/programs"
                    className="px-6 py-3.5 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xs transition-all shadow-sm inline-flex items-center gap-2"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/admissions"
                    className="px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300 hover:border-black text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xs transition-all inline-flex items-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4 text-[#BC0202]" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ x: 3 }}>
                  <Link
                    to="/campus"
                    className="px-4 py-3.5 text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Discover Campus →
                  </Link>
                </motion.div>
              </motion.div>

              {/* Verified Trust Badges */}
              <div className="pt-8 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202] shrink-0" />
                  <span>Established 2006</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202] shrink-0" />
                  <span>VTU Affiliated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202] shrink-0" />
                  <span>AICTE Recognized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202] shrink-0" />
                  <span>Industry-Focused</span>
                </div>
              </div>
            </motion.div>

            {/* Right Campus Highlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="relative bg-white border border-neutral-200 rounded-lg p-6 space-y-6 shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <span className="text-xs font-mono uppercase text-[#BC0202] font-bold tracking-wider">
                    Campus Highlights
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-600">Kenjar, Mangaluru</span>
                </div>

                {/* Graphic Feature Box */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="w-full h-48 bg-neutral-50 rounded border border-neutral-200 p-5 flex flex-col justify-between relative overflow-hidden group shadow-xs"
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-bold text-neutral-800">
                      Engineering & Management
                    </span>
                    <Building2 className="w-5 h-5 text-[#BC0202]" />
                  </div>

                  <div className="z-10 space-y-1">
                    <div className="font-display font-bold text-lg text-black">
                      12+ Acre Tech Campus
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                      Located near Mangaluru International Airport with scenic green surroundings
                      and advanced R&D hubs.
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-100">
                    <span className="text-neutral-600 font-medium">Campus Location</span>
                    <span className="text-black font-semibold">Kenjar, Mangaluru – 574142</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-100">
                    <span className="text-neutral-600 font-medium">Governing Body</span>
                    <span className="text-black font-semibold">Shree Devi Education Trust</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-100">
                    <span className="text-neutral-600 font-medium">Digital Portals</span>
                    <span className="text-[#BC0202] font-bold">Student / Faculty / Admin</span>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/about"
                    className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-black bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded transition-colors block"
                  >
                    View Institutional Profile
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED QUICK STATISTICS - White background, black numbers, red accent */}
      <section className="bg-white text-black border-b border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-l-3 border-[#BC0202] pl-4 space-y-1"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-black tabular-nums">
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  {s.label}
                </div>
                <p className="text-[11px] text-neutral-600 font-medium">{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION - White background, black text */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#BC0202]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
                About SDIT
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-black leading-tight">
                Where Knowledge Meets Opportunity
              </h2>
              <div className="h-1 w-16 bg-[#BC0202]"></div>
              <p className="text-sm text-neutral-700 leading-relaxed pt-2 font-normal">
                Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru was established in 2006
                under the aegis of Shree Devi Education Trust. SDIT is committed to delivering
                transformative engineering and management education with a strong emphasis on
                foundational rigor, innovation, ethical leadership, and industry alignment.
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                The institution offers undergraduate B.E. programs across core and emerging computing
                disciplines, postgraduate M.Tech in Construction Technology, MBA, MCA, and VTU
                recognized research centers.
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#BC0202] hover:text-[#8F0000] transition-colors"
                >
                  <span>Learn More About SDIT</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2 shadow-xs"
                >
                  <div className="w-8 h-8 rounded bg-white text-[#BC0202] flex items-center justify-center font-bold text-sm shadow-xs border border-neutral-200">
                    01
                  </div>
                  <h3 className="font-display font-bold text-base text-black">
                    Affiliation & Approvals
                  </h3>
                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    Affiliated to Visvesvaraya Technological University (VTU), Belagavi, and approved
                    by the All India Council for Technical Education (AICTE), New Delhi.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2 shadow-xs"
                >
                  <div className="w-8 h-8 rounded bg-white text-[#BC0202] flex items-center justify-center font-bold text-sm shadow-xs border border-neutral-200">
                    02
                  </div>
                  <h3 className="font-display font-bold text-base text-black">
                    Diverse Disciplines
                  </h3>
                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    Encompassing Computer Science, AI & Machine Learning, Data Science, Electronics,
                    Aeronautical, Civil, Mechanical, MBA, and MCA.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2 shadow-xs"
                >
                  <div className="w-8 h-8 rounded bg-white text-[#BC0202] flex items-center justify-center font-bold text-sm shadow-xs border border-neutral-200">
                    03
                  </div>
                  <h3 className="font-display font-bold text-base text-black">
                    Location Advantage
                  </h3>
                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    Sprawling campus situated at Kenjar along Airport Road, offering serene coastal
                    study surroundings with convenient transit connectivity.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2 shadow-xs"
                >
                  <div className="w-8 h-8 rounded bg-white text-[#BC0202] flex items-center justify-center font-bold text-sm shadow-xs border border-neutral-200">
                    04
                  </div>
                  <h3 className="font-display font-bold text-base text-black">
                    Industry Engagement
                  </h3>
                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    Comprehensive pre-placement coaching covering quantitative aptitude, mock
                    interviews, full-stack programming, and soft skill communication.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHY SDIT SECTION (6 CARDS) - White cards with motion lift */}
      <section className="py-20 bg-neutral-50 text-black border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              Institutional Strengths
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-black">
              Why Choose SDIT?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 font-normal">
              A balanced ecosystem fostering technical mastery, analytical inquiry, and career
              enablement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white border border-neutral-200 hover:border-[#BC0202] rounded-lg p-6 transition-all duration-200 group flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded bg-[#FFF0F0] text-[#BC0202] flex items-center justify-center transition-transform group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-black">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-[#BC0202] font-bold uppercase tracking-wider">
                    <span>Learn Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROGRAMS SECTION - White background, black headings */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
                Academic Offerings
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-black">
                Undergraduate & Postgraduate Programs
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 max-w-xl font-normal">
                Industry-aligned curricula affiliated to VTU Belagavi, balancing deep theoretical
                foundations with hands-on computational studio work.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/programs"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-black hover:bg-[#BC0202] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors self-start md:self-auto shadow-xs"
              >
                <span>View All 11+ Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrograms.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 flex flex-col justify-between hover:border-[#BC0202] transition-colors group shadow-xs hover:shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#BC0202] bg-[#FFF0F0] px-2 py-0.5 rounded">
                      {prog.degree}
                    </span>
                    <span className="text-neutral-600 font-medium">{prog.duration}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-black group-hover:text-[#BC0202] transition-colors leading-snug">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-neutral-700 line-clamp-3 leading-relaxed font-normal">
                    {prog.overview}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-600">
                    {prog.department.split('&')[0]}
                  </span>
                  <Link
                    to={`/programs/${prog.id}`}
                    className="text-xs font-bold text-[#BC0202] hover:text-[#8F0000] inline-flex items-center gap-1"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLACEMENT & RECRUITER WALL - White background, black typography */}
      <section className="py-20 bg-neutral-50 text-black border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              Career Readiness
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-black">
              From Campus to Career
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 font-normal">
              Historical campus recruiting partners from official SDIT records including premier
              technology leaders and consulting powerhouses.
            </p>
          </div>

          {/* Recruiter Logo Grid - White Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {topRecruiters.map((rec, idx) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -3, borderColor: '#BC0202' }}
                className="bg-white border border-neutral-200 rounded p-4 flex flex-col items-center justify-center text-center transition-all group shadow-xs hover:shadow-sm"
              >
                <div className="font-display font-bold text-base text-black group-hover:text-[#BC0202] transition-colors">
                  {rec.logoText}
                </div>
                <div className="text-[10px] text-neutral-600 mt-1 truncate max-w-full font-medium">
                  {rec.sector}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                to="/placements"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-xs"
              >
                <span>Explore Placement Analytics & Training</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. EVENTS & NEWS GRID - White background */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Events Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#BC0202]" />
                  <h3 className="font-display font-bold text-xl text-black">
                    Upcoming Events
                  </h3>
                </div>
                <Link
                  to="/events"
                  className="text-xs text-[#BC0202] font-bold hover:underline"
                >
                  View All Events →
                </Link>
              </div>

              <div className="space-y-4">
                {latestEvents.map((evt, idx) => (
                  <motion.div
                    key={evt.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2 hover:border-[#BC0202] transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[#BC0202] font-bold">
                        {evt.category}
                      </span>
                      <span className="text-neutral-600 font-medium">{evt.date}</span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-black">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-neutral-700 line-clamp-2 font-normal">
                      {evt.description}
                    </p>
                    <div className="text-[11px] text-neutral-600 pt-1 flex items-center gap-1 font-medium">
                      <MapPin className="w-3 h-3 text-[#BC0202]" />
                      <span>{evt.venue}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* News Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#BC0202]" />
                  <h3 className="font-display font-bold text-xl text-black">
                    Announcements & News
                  </h3>
                </div>
                <Link
                  to="/news"
                  className="text-xs text-[#BC0202] font-bold hover:underline"
                >
                  All Notices →
                </Link>
              </div>

              <div className="space-y-4">
                {latestNews.map((news, idx) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2 hover:border-[#BC0202] transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[#BC0202] font-bold">
                        {news.category}
                      </span>
                      <span className="text-neutral-600 font-medium">{news.date}</span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-black">
                      {news.title}
                    </h4>
                    <p className="text-xs text-neutral-700 line-clamp-2 font-normal">
                      {news.summary}
                    </p>
                    <div className="text-[11px] text-neutral-600 pt-1 flex items-center justify-between font-medium">
                      <span>By {news.author}</span>
                      <span>{news.readTime}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ADMISSION INVITATION CTA */}
      <section className="py-20 bg-[#BC0202] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-white/90 font-bold">
            Admissions Open 2026-27
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Begin Your Engineering Journey at SDIT
          </h2>
          <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed font-normal">
            Apply online for Undergraduate Engineering, Master of Business Administration, Master of
            Computer Applications, or M.Tech Construction Technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/admissions"
                className="px-8 py-3.5 bg-black text-white hover:bg-neutral-900 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-md"
              >
                Start Online Application
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-white text-black hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-md"
              >
                Contact Admissions Office
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
