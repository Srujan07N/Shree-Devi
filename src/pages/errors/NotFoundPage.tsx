import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft, ShieldAlert } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center bg-white text-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md space-y-5"
      >
        <div className="w-16 h-16 bg-[#FFF0F0] text-[#BC0202] rounded-full flex items-center justify-center font-display font-extrabold text-2xl mx-auto border border-neutral-200 shadow-xs">
          404
        </div>
        <h1 className="font-display font-bold text-3xl text-black">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 font-normal">
          The requested institutional URL does not exist or has been relocated. Please check the
          navigation menu or return to the homepage.
        </p>
        <div className="pt-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-xs"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const UnauthorizedPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center bg-white text-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md space-y-5"
      >
        <div className="w-16 h-16 bg-[#FFF0F0] text-[#BC0202] rounded-full flex items-center justify-center font-display font-extrabold text-2xl mx-auto border border-neutral-200 shadow-xs">
          403
        </div>
        <h1 className="font-display font-bold text-3xl text-black">
          Access Restricted
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 font-normal">
          You do not have the required institutional authorization to access this console. Please
          sign in with the appropriate credentials.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/student/login"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-xs"
            >
              <span>Login Portal</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-neutral-300 text-black hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              <span>Homepage</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
