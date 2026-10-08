import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Award, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black border-t border-[#E5E5E5]">
      {/* Upper Institutional Banner - White with clean hairline border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 bg-[#BC0202] text-white flex items-center justify-center font-display font-extrabold text-2xl rounded-sm shadow-xs"
            >
              SDIT
            </motion.div>
            <div>
              <h3 className="font-display font-bold text-lg text-black leading-tight">
                Shree Devi Institute of Technology
              </h3>
              <p className="text-xs text-neutral-600 font-medium">
                Managed by Shree Devi Education Trust · Estd. 2006
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-700 font-semibold md:justify-center">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#BC0202]" />
              <span>VTU Affiliated</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#BC0202]" />
              <span>AICTE Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#BC0202]" />
              <span>11+ Programs</span>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-end gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/admissions"
                className="px-4 py-2 bg-[#BC0202] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#8F0000] transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Admissions 2026</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
            <Link
              to="/contact"
              className="px-4 py-2 bg-neutral-100 text-black text-xs font-semibold rounded-sm border border-neutral-300 hover:border-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links - Black Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About & Trust */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-extrabold tracking-wider uppercase text-black">
              About the Institute
            </h4>
            <p className="text-xs text-neutral-700 leading-relaxed max-w-md font-normal">
              Established in 2006, Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru is dedicated to nurturing technical acumen, analytical excellence, and leadership ethics. Offering undergraduate, postgraduate, and doctoral programs affiliated to Visvesvaraya Technological University (VTU), Belagavi.
            </p>
            <div className="pt-2 space-y-2 text-xs text-neutral-800 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BC0202] shrink-0 mt-0.5" />
                <span>Airport Road, Kenjar, Mangalore – 574142, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BC0202] shrink-0" />
                <span>+91 824 2254104 / +91 824 2254102</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BC0202] shrink-0" />
                <span>info@sdc.ac.in</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-extrabold tracking-wider uppercase text-black">
              Undergraduate
            </h4>
            <ul className="space-y-2 text-xs text-neutral-700 font-medium">
              <li>
                <Link to="/programs/cse" className="hover:text-[#BC0202] transition-colors">
                  Computer Science & Engg
                </Link>
              </li>
              <li>
                <Link to="/programs/cse-aiml" className="hover:text-[#BC0202] transition-colors">
                  CSE (AI & Machine Learning)
                </Link>
              </li>
              <li>
                <Link to="/programs/aids" className="hover:text-[#BC0202] transition-colors">
                  AI & Data Science
                </Link>
              </li>
              <li>
                <Link to="/programs/ise" className="hover:text-[#BC0202] transition-colors">
                  Information Science & Engg
                </Link>
              </li>
              <li>
                <Link to="/programs/ece" className="hover:text-[#BC0202] transition-colors">
                  Electronics & Communication
                </Link>
              </li>
              <li>
                <Link to="/programs/ae" className="hover:text-[#BC0202] transition-colors">
                  Aeronautical Engineering
                </Link>
              </li>
              <li>
                <Link to="/programs/me" className="hover:text-[#BC0202] transition-colors">
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link to="/programs/cv" className="hover:text-[#BC0202] transition-colors">
                  Civil Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Postgraduate & Campus */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-extrabold tracking-wider uppercase text-black">
              Postgraduate & Campus
            </h4>
            <ul className="space-y-2 text-xs text-neutral-700 font-medium">
              <li>
                <Link to="/programs/mba" className="hover:text-[#BC0202] transition-colors">
                  MBA (Business Administration)
                </Link>
              </li>
              <li>
                <Link to="/programs/mca" className="hover:text-[#BC0202] transition-colors">
                  MCA (Computer Applications)
                </Link>
              </li>
              <li>
                <Link to="/programs/mtech-ct" className="hover:text-[#BC0202] transition-colors">
                  M.Tech (Construction Tech)
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-[#BC0202] transition-colors">
                  Ph.D & Research Centres
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-[#BC0202] transition-colors">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/hostel" className="hover:text-[#BC0202] transition-colors">
                  Hostel Accommodation
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#BC0202] transition-colors">
                  Campus Media Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Career */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-extrabold tracking-wider uppercase text-black">
              Portals & Placement
            </h4>
            <ul className="space-y-2 text-xs text-neutral-700 font-medium">
              <li>
                <Link to="/placements" className="hover:text-[#BC0202] transition-colors">
                  Placement & Training
                </Link>
              </li>
              <li>
                <Link to="/student/login" className="hover:text-[#BC0202] text-black font-semibold transition-colors">
                  Student ERP Portal
                </Link>
              </li>
              <li>
                <Link to="/faculty/login" className="hover:text-[#BC0202] text-black font-semibold transition-colors">
                  Faculty Academics Portal
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="hover:text-[#BC0202] text-black font-semibold transition-colors">
                  Administrative Console
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="hover:text-[#BC0202] transition-colors">
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#BC0202] transition-colors">
                  Conclaves & Hackathons
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#BC0202] transition-colors">
                  Careers at SDIT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - White & hairline top border */}
      <div className="bg-[#FAFAFA] border-t border-[#E5E5E5] py-6 text-xs text-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-medium">
          <div>
            © {new Date().getFullYear()} Shree Devi Institute of Technology (SDIT), Kenjar. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-black font-semibold">VTU Affiliated · AICTE Recognized</span>
            <span>·</span>
            <Link to="/about" className="hover:text-[#BC0202] transition-colors">
              Trust Governance
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-[#BC0202] transition-colors">
              Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
