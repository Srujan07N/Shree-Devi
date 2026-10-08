import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Mail, ArrowRight, ShieldCheck, GraduationCap, Users, CheckCircle2 } from 'lucide-react';
import { useAuth, DEMO_CREDENTIALS } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { UserRole } from '../../types';

interface LoginPageProps {
  initialRole?: UserRole;
}

export const LoginPage: React.FC<LoginPageProps> = ({ initialRole = 'student' }) => {
  const [role, setRole] = useState<UserRole>(initialRole);
  const [email, setEmail] = useState(DEMO_CREDENTIALS[initialRole].email);
  const [password, setPassword] = useState(DEMO_CREDENTIALS[initialRole].password);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/admin/')) {
      handleSelectRole('admin');
    } else if (location.pathname.includes('/faculty/')) {
      handleSelectRole('faculty');
    } else {
      handleSelectRole('student');
    }
  }, [location.pathname]);

  const handleSelectRole = (newRole: UserRole) => {
    setRole(newRole);
    setEmail(DEMO_CREDENTIALS[newRole].email);
    setPassword(DEMO_CREDENTIALS[newRole].password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await login(email, role);
      if (res.success) {
        showToast(`Welcome back to SDIT ${role.toUpperCase()} Portal!`, 'success');
        navigate(`/${role}/dashboard`, { replace: true });
      } else {
        showToast(res.message || 'Login failed', 'error');
      }
    } catch {
      showToast('An error occurred during authentication', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center py-12 sm:px-6 lg:px-8 border-b border-neutral-200">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3"
      >
        <Link to="/" className="inline-flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 bg-[#BC0202] text-white font-display font-extrabold text-xl flex items-center justify-center rounded-sm shadow-sm"
          >
            SDIT
          </motion.div>
          <div className="text-left">
            <div className="font-display font-bold text-lg text-black leading-tight">Shree Devi</div>
            <div className="text-[10px] tracking-wider uppercase text-neutral-600 font-semibold">
              Institute of Technology
            </div>
          </div>
        </Link>
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-black tracking-tight">
          Digital Campus ERP Portal
        </h1>
        <p className="text-xs text-neutral-600 font-normal">
          Sign in to access your role-specific institutional console
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4"
      >
        <div className="bg-white border border-neutral-300 py-8 px-6 sm:px-8 rounded-xl shadow-lg space-y-6">
          {/* Role Tabs */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-neutral-100 rounded-lg text-xs font-semibold">
            <button
              type="button"
              onClick={() => handleSelectRole('student')}
              className={`py-2 rounded transition-colors flex items-center justify-center gap-1.5 ${
                role === 'student'
                  ? 'bg-[#BC0202] text-white font-bold shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Student</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectRole('faculty')}
              className={`py-2 rounded transition-colors flex items-center justify-center gap-1.5 ${
                role === 'faculty'
                  ? 'bg-[#BC0202] text-white font-bold shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Faculty</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectRole('admin')}
              className={`py-2 rounded transition-colors flex items-center justify-center gap-1.5 ${
                role === 'admin'
                  ? 'bg-[#BC0202] text-white font-bold shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
          </div>

          {/* Quick 1-Click Demo Auto-fill Helper */}
          <div className="p-3 bg-neutral-50 rounded border border-neutral-200 text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-neutral-600 font-medium">Demo Account Credentials:</span>
              <button
                type="button"
                onClick={() => {
                  setEmail(DEMO_CREDENTIALS[role].email);
                  setPassword(DEMO_CREDENTIALS[role].password);
                  showToast('Filled default demo credentials', 'info');
                }}
                className="text-[11px] font-bold text-[#BC0202] hover:underline"
              >
                Auto-fill
              </button>
            </div>
            <div className="font-mono text-[11px] text-black font-semibold">
              {DEMO_CREDENTIALS[role].email} / {DEMO_CREDENTIALS[role].password}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-800 mb-1">
                Institutional Email / USN
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. student@sdit.demo"
                  className="w-full bg-white border border-neutral-300 rounded px-3 py-2 pl-9 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-800 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white border border-neutral-300 rounded px-3 py-2 pl-9 text-xs text-black focus:outline-hidden focus:border-[#BC0202] transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-600">
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-neutral-300 text-[#BC0202] focus:ring-0"
                />
                <span>Remember session</span>
              </label>
              <span className="text-neutral-600 hover:text-[#BC0202] cursor-pointer font-medium">
                Forgot password?
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              <span>{isLoading ? 'Verifying...' : `Sign in to ${role} console`}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </form>

          <div className="pt-2 border-t border-neutral-200 text-center text-xs text-neutral-600 font-medium">
            <Link to="/" className="hover:text-[#BC0202] transition-colors">
              ← Return to SDIT Public Website
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
