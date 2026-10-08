import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Clock,
  BookOpen,
  Award,
  Calendar,
  ClipboardList,
  Briefcase,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { useAuth } from '../../../context/AuthContext';
import { studentCoursesList, assignmentsList } from '../../../data/dashboard';

export const StudentOverview: React.FC = () => {
  const { currentUser } = useAuth();

  const performanceHistory = [
    { sem: 'Sem 1', sgpa: 8.4 },
    { sem: 'Sem 2', sgpa: 8.6 },
    { sem: 'Sem 3', sgpa: 8.5 },
    { sem: 'Sem 4', sgpa: 8.9 },
    { sem: 'Sem 5', sgpa: 8.8 },
    { sem: 'Sem 6', sgpa: 9.1 }
  ];

  return (
    <div className="space-y-8 bg-neutral-50 text-black">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BC0202]"></span>
            <span className="font-mono text-xs font-bold text-neutral-600 uppercase tracking-wider">
              Semester 7 · B.E. Computer Science & Engineering
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-black">
            Welcome back, {currentUser?.name || 'Aravind S. Rao'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            USN: <span className="font-mono font-bold text-black">{currentUser?.usn || '4SD23CS042'}</span> · Academic Year 2026-27
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/student/timetable"
              className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-xs font-bold text-black rounded border border-neutral-300 transition-colors"
            >
              Today's Schedule
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/student/assignments"
              className="px-4 py-2.5 bg-[#BC0202] hover:bg-[#8F0000] text-xs font-bold text-white rounded transition-colors shadow-xs"
            >
              Submit Assignments
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white border border-neutral-200 p-5 rounded-lg space-y-1 shadow-xs"
        >
          <div className="flex items-center justify-between text-xs text-neutral-600 font-semibold">
            <span>Overall Attendance</span>
            <Clock className="w-4 h-4 text-[#BC0202]" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-black tabular-nums">
            92.4%
          </div>
          <p className="text-[11px] text-neutral-500 font-normal">Above minimum VTU 85% rule</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white border border-neutral-200 p-5 rounded-lg space-y-1 shadow-xs"
        >
          <div className="flex items-center justify-between text-xs text-neutral-600 font-semibold">
            <span>Cumulative CGPA</span>
            <Award className="w-4 h-4 text-[#BC0202]" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-black tabular-nums">
            8.75
          </div>
          <p className="text-[11px] text-neutral-500 font-normal">Rank 4 in Department</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white border border-neutral-200 p-5 rounded-lg space-y-1 shadow-xs"
        >
          <div className="flex items-center justify-between text-xs text-neutral-600 font-semibold">
            <span>Pending Submissions</span>
            <ClipboardList className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#BC0202] tabular-nums">
            1 Due
          </div>
          <p className="text-[11px] text-neutral-500 font-normal">AI & Machine Learning Lab</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white border border-neutral-200 p-5 rounded-lg space-y-1 shadow-xs"
        >
          <div className="flex items-center justify-between text-xs text-neutral-600 font-semibold">
            <span>Placement Readiness</span>
            <Briefcase className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-extrabold text-black">
            Eligible
          </div>
          <p className="text-[11px] text-neutral-500 font-normal">4 Active Campus Drives</p>
        </motion.div>
      </div>

      {/* Main Grid: Performance Chart & Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Academic Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7 bg-white border border-neutral-200 rounded-lg p-6 space-y-4 shadow-xs"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-black">
              Semester SGPA Progression
            </h3>
            <span className="text-xs text-neutral-500 font-medium">VTU CBCS Grading</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="sem" stroke="#666666" fontSize={11} />
                <YAxis domain={[6.0, 10.0]} stroke="#666666" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e5e5e5',
                    color: '#000000',
                    fontSize: '12px',
                    borderRadius: '6px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="sgpa" name="SGPA" fill="#BC0202" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Current Semester Courses Quick List */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="lg:col-span-5 bg-white border border-neutral-200 rounded-lg p-6 space-y-4 shadow-xs"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-black">
              Enrolled Courses (Sem 7)
            </h3>
            <Link to="/student/courses" className="text-xs text-[#BC0202] font-bold hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {studentCoursesList.slice(0, 4).map((course) => (
              <div
                key={course.code}
                className="p-3 bg-neutral-50 rounded border border-neutral-200 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-black">
                    {course.code} · {course.name}
                  </div>
                  <div className="text-neutral-600 mt-0.5 font-medium">
                    Faculty: {course.faculty}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-bold text-black tabular-nums">
                    {course.attendancePercent}%
                  </div>
                  <div className="text-[10px] text-neutral-500 font-medium">Attendance</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
