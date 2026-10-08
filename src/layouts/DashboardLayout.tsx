import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Building2,
  BookOpen,
  Calendar,
  Briefcase,
  FileText,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  Clock,
  Award,
  ClipboardList,
  CheckSquare,
  Home,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export const DashboardLayout: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { showToast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const role = currentUser?.role || 'student';

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully', 'info');
    navigate(`/${role}/login`);
  };

  // Student Navigation Links
  const studentNav = [
    { name: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
    { name: 'Attendance', path: '/student/attendance', icon: Clock },
    { name: 'My Courses', path: '/student/courses', icon: BookOpen },
    { name: 'Weekly Timetable', path: '/student/timetable', icon: Calendar },
    { name: 'Assignments', path: '/student/assignments', icon: ClipboardList },
    { name: 'Examinations & Results', path: '/student/exams', icon: Award },
    { name: 'Placements & Jobs', path: '/student/placements', icon: Briefcase },
    { name: 'My Profile', path: '/student/profile', icon: Users }
  ];

  // Faculty Navigation Links
  const facultyNav = [
    { name: 'Dashboard', path: '/faculty/dashboard', icon: LayoutDashboard },
    { name: 'My Courses & Classes', path: '/faculty/courses', icon: BookOpen },
    { name: 'Student Directory', path: '/faculty/students', icon: Users },
    { name: 'Mark Attendance', path: '/faculty/attendance', icon: Clock },
    { name: 'Assignments & Review', path: '/faculty/assignments', icon: ClipboardList },
    { name: 'Internal Marks Entry', path: '/faculty/marks', icon: CheckSquare },
    { name: 'Profile & Research', path: '/faculty/profile', icon: Award }
  ];

  // Admin Navigation Links
  const adminNav = [
    { name: 'Executive Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Student Admissions', path: '/admin/admissions', icon: FileText },
    { name: 'Students Registry', path: '/admin/students', icon: Users },
    { name: 'Faculty Directory', path: '/admin/faculty', icon: GraduationCap },
    { name: 'Academic Departments', path: '/admin/departments', icon: Building2 },
    { name: 'Placement Analytics', path: '/admin/placements', icon: Briefcase },
    { name: 'Events & Conclaves', path: '/admin/events', icon: Calendar },
    { name: 'Institutional Analytics', path: '/admin/analytics', icon: BarChart3 },
    { name: 'CMS & Bulletin', path: '/admin/cms', icon: BookOpen }
  ];

  const currentNavItems =
    role === 'admin' ? adminNav : role === 'faculty' ? facultyNav : studentNav;

  const roleBadgeLabel =
    role === 'admin'
      ? 'Administrator'
      : role === 'faculty'
      ? 'Faculty Member'
      : 'Student Portal';

  const mockNotifications = [
    {
      id: '1',
      title: 'Odd Semester Exams Notification',
      time: '2 hours ago',
      unread: true
    },
    {
      id: '2',
      title: 'Campus Drive: Infosys Registration Open',
      time: 'Yesterday',
      unread: true
    },
    {
      id: '3',
      title: 'Invento 2026 Technical Fest Call for Papers',
      time: '3 days ago',
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row">
      {/* Mobile Top Header - Pure white with black text */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white text-black border-b border-neutral-200">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded text-neutral-700 hover:text-black"
            aria-label="Toggle navigation menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-[#BC0202] text-white font-bold text-xs flex items-center justify-center rounded-xs">
              SD
            </span>
            <span className="font-semibold text-sm text-black">SDIT Portal</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/" className="text-xs text-neutral-600 hover:text-black px-2 py-1 font-medium">
            Site
          </Link>
          <button onClick={handleLogout} className="p-1.5 text-neutral-600 hover:text-[#BC0202]">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sidebar for Desktop & Mobile Overlay - White background, crisp black text */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen z-50 w-64 bg-white border-r border-neutral-200 text-black flex flex-col transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#BC0202] text-white font-display font-extrabold text-sm flex items-center justify-center rounded-xs shadow-xs">
              SDIT
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-tight leading-none text-black">
                SDIT ERP
              </div>
              <div className="text-[10px] text-neutral-500 tracking-wider uppercase mt-1 font-semibold">
                {roleBadgeLabel}
              </div>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-neutral-500 hover:text-black p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* User Quick Info */}
        <div className="p-3.5 mx-3 my-3 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-[#BC0202] font-bold text-xs shrink-0 shadow-xs">
            {currentUser?.name?.charAt(0) || 'U'}
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-bold text-black truncate">
              {currentUser?.name || 'Authorized User'}
            </div>
            <div className="text-[11px] text-neutral-600 truncate font-medium">
              {currentUser?.usn || currentUser?.department || currentUser?.email}
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {currentNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <motion.div key={item.name} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#BC0202] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                  <span className="truncate">{item.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Sidebar Footer Actions */}
        <div className="p-3 border-t border-neutral-200 space-y-1 bg-neutral-50">
          <Link
            to="/"
            className="flex items-center gap-2.5 px-3 py-2 rounded text-xs text-neutral-700 hover:text-black hover:bg-neutral-200 transition-colors font-medium"
          >
            <Home className="w-4 h-4 text-neutral-500" />
            <span>Public Website</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded text-xs text-[#BC0202] hover:bg-rose-50 transition-colors font-bold text-left"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 bg-neutral-50">
        {/* Workspace Top Bar - White with black text */}
        <header className="sticky top-0 z-30 bg-white border-b border-neutral-200 h-16 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-base text-black capitalize">
              {location.pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-xs font-mono text-neutral-600 font-medium">
              Academic Session 2026-27 · Odd Sem
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-md relative transition-colors"
                aria-label="View notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#BC0202]"></span>
              </motion.button>

              <AnimatePresence>
                {notificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 bg-white border border-neutral-200 rounded-lg shadow-xl py-2 z-50 text-xs"
                  >
                    <div className="px-4 py-2 border-b border-neutral-100 flex items-center justify-between">
                      <span className="font-bold text-black">Notifications</span>
                      <span className="text-[10px] text-[#BC0202] font-semibold cursor-pointer">
                        Mark all read
                      </span>
                    </div>
                    <div className="divide-y divide-neutral-100 max-h-64 overflow-y-auto">
                      {mockNotifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-3 hover:bg-neutral-50 cursor-pointer ${
                            notif.unread ? 'bg-neutral-50/70' : ''
                          }`}
                        >
                          <div className="font-semibold text-black">{notif.title}</div>
                          <div className="text-[10px] text-neutral-500 mt-0.5">{notif.time}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Profile Pill */}
            <div className="hidden sm:flex items-center gap-2.5 pl-4 border-l border-neutral-200 text-xs font-semibold text-black">
              <span>{currentUser?.name?.split(' ')[0]}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-neutral-100 text-neutral-700 border border-neutral-200">
                {role}
              </span>
            </div>
          </div>
        </header>

        {/* Dashboard Dynamic View Body */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
