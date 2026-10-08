import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ArrowUpRight, GraduationCap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { CommandSearch } from './CommandSearch';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Placements', path: '/placements' },
    { name: 'Campus', path: '/campus' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Research', path: '/research' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      >
        {/* Top Professional Bar - White background, crisp black text */}
        <div className="bg-[#FAFAFA] text-black text-[12px] border-b border-[#E5E5E5] transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-semibold tracking-wide text-black flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
                Shree Devi Institute of Technology
              </span>
              <span className="hidden sm:inline text-neutral-400">·</span>
              <span className="hidden sm:inline text-neutral-600 font-medium">Kenjar, Mangaluru · Estd. 2006</span>
            </div>

            <div className="flex items-center gap-4 text-neutral-800 font-medium">
              <Link to="/careers" className="hover:text-[#BC0202] transition-colors">
                Careers
              </Link>
              <span className="text-neutral-300">|</span>
              <Link to="/contact" className="hover:text-[#BC0202] transition-colors">
                Contact
              </Link>
              <span className="text-neutral-300">|</span>
              <div className="flex items-center gap-2">
                <Link
                  to="/student/login"
                  className="hover:text-[#BC0202] text-black transition-colors font-semibold"
                >
                  Student Login
                </Link>
                <span className="text-neutral-300">/</span>
                <Link
                  to="/faculty/login"
                  className="hover:text-[#BC0202] text-black transition-colors font-semibold"
                >
                  Faculty
                </Link>
                <span className="text-neutral-300">/</span>
                <Link
                  to="/admin/login"
                  className="hover:text-[#BC0202] text-black transition-colors font-semibold"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar - Pure white background, bold black text */}
        <nav
          className={`transition-all duration-200 ${
            isScrolled
              ? 'bg-white/98 backdrop-blur-md border-b border-neutral-200 text-black shadow-xs py-3'
              : 'bg-white/95 backdrop-blur-xs border-b border-neutral-200 text-black py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#BC0202] text-white font-display font-extrabold text-xl flex items-center justify-center rounded-sm tracking-tight shadow-sm"
              >
                SDIT
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-black leading-tight">
                  Shree Devi
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-600 group-hover:text-black transition-colors">
                  Institute of Technology
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - Black Text with Red Hover */}
            <div className="hidden lg:flex items-center gap-5 text-sm font-semibold">
              {navLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors py-1 text-[13px] tracking-wide relative ${
                    isCurrent(link.path)
                      ? 'text-black font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#BC0202]'
                      : 'text-neutral-800 hover:text-[#BC0202]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative group py-1">
                <span className="text-neutral-800 hover:text-[#BC0202] text-[13px] cursor-pointer flex items-center gap-1 font-semibold">
                  More
                  <span className="text-[10px]">▼</span>
                </span>
                <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white border border-neutral-200 rounded-md shadow-lg py-2 z-50">
                  {navLinks.slice(8).map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-4 py-2 text-xs text-neutral-800 hover:text-[#BC0202] hover:bg-neutral-50 transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="border-t border-neutral-100 my-1"></div>
                  <Link
                    to="/facilities"
                    className="block px-4 py-2 text-xs text-neutral-800 hover:text-[#BC0202] hover:bg-neutral-50 transition-colors font-medium"
                  >
                    Campus Facilities
                  </Link>
                  <Link
                    to="/hostel"
                    className="block px-4 py-2 text-xs text-neutral-800 hover:text-[#BC0202] hover:bg-neutral-50 transition-colors font-medium"
                  >
                    Hostels
                  </Link>
                  <Link
                    to="/alumni"
                    className="block px-4 py-2 text-xs text-neutral-800 hover:text-[#BC0202] hover:bg-neutral-50 transition-colors font-medium"
                  >
                    Alumni Network
                  </Link>
                  <Link
                    to="/gallery"
                    className="block px-4 py-2 text-xs text-neutral-800 hover:text-[#BC0202] hover:bg-neutral-50 transition-colors font-medium"
                  >
                    Campus Gallery
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Action Tools */}
            <div className="flex items-center gap-3">
              {/* Search Trigger */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className="p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-md transition-colors"
                title="Search institutional portal (Ctrl+K)"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </motion.button>


              {/* User Logged In Quick Badge or Apply Now CTA */}
              {currentUser ? (
                <Link
                  to={`/${currentUser.role}/dashboard`}
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-neutral-100 text-black border border-neutral-300 hover:border-[#BC0202] text-xs font-semibold transition-all"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#BC0202]" />
                  <span>My Dashboard</span>
                </Link>
              ) : (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#BC0202] text-white hover:bg-[#8F0000] text-xs font-bold tracking-wide uppercase transition-all shadow-sm"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-800 hover:text-black rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-b border-neutral-200 text-black px-4 pt-3 pb-6 space-y-2 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-100">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 text-sm rounded font-medium ${
                      isCurrent(link.path)
                        ? 'bg-neutral-100 text-[#BC0202] font-bold'
                        : 'text-neutral-800 hover:text-black hover:bg-neutral-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/admissions"
                  className="w-full text-center py-2.5 bg-[#BC0202] text-white text-xs font-bold uppercase rounded tracking-wider shadow-sm"
                >
                  Apply for Admission 2026
                </Link>
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs font-semibold">
                  <Link to="/student/login" className="py-2 bg-neutral-100 text-black rounded border border-neutral-200">
                    Student
                  </Link>
                  <Link to="/faculty/login" className="py-2 bg-neutral-100 text-black rounded border border-neutral-200">
                    Faculty
                  </Link>
                  <Link to="/admin/login" className="py-2 bg-neutral-100 text-black rounded border border-neutral-200">
                    Admin
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Global Command Search Modal */}
      <CommandSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
