import React from 'react';
import {
  Users,
  BookOpen,
  Calendar,
  Clock,
  AlertTriangle,
  Award,
  CheckCircle2,
  BarChart3
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

export const FacultyOverview: React.FC = () => {
  const { currentUser } = useAuth();

  const classPerformanceData = [
    { class: 'CS-7A (AIML)', avgInternal: 44.5, passPercent: 98 },
    { class: 'CS-5B (Algorithms)', avgInternal: 41.2, passPercent: 92 },
    { class: 'CS-3A (DS)', avgInternal: 39.8, passPercent: 88 }
  ];

  const todaysSchedule = [
    { time: '09:00 - 10:00 AM', subject: 'Artificial Intelligence & ML', code: '21CS71', room: 'LH-302', count: '64 Students' },
    { time: '11:15 - 01:15 PM', subject: 'Machine Learning Lab (Batch A)', code: '21CSL76', room: 'AI Lab 2', count: '32 Students' },
    { time: '02:00 - 03:00 PM', subject: 'Department Academic Council', code: 'MEET', room: 'HOD Chamber', count: 'Faculty Committee' }
  ];

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BC0202]"></span>
            <span className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              {currentUser?.designation || 'Professor & HOD'} · {currentUser?.department || 'CSE (AI & ML)'}
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 dark:text-white">
            Welcome, {currentUser?.name || 'Dr. Anand Shenoy'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
            Faculty Academics & Continuous Internal Evaluation (CIE) Console · VTU Scheme
          </p>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Enrolled Students</span>
            <Users className="w-4 h-4 text-[#BC0202]" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            184
          </div>
          <p className="text-[11px] text-neutral-400">Across 3 theory & lab courses</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Assigned Courses</span>
            <BookOpen className="w-4 h-4 text-[#BC0202]" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            3 Courses
          </div>
          <p className="text-[11px] text-neutral-400">Odd Semester 2026</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Pending Evaluations</span>
            <Clock className="w-4 h-4 text-[#BC0202]" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-[#BC0202] tabular-nums">
            18 Papers
          </div>
          <p className="text-[11px] text-neutral-400">Assignment 2 Submissions</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Average Attendance</span>
            <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            91.2%
          </div>
          <p className="text-[11px] text-neutral-400">Healthy departmental record</p>
        </div>
      </div>

      {/* Schedule & Performance Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Today's Classes */}
        <div className="lg:col-span-5 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Today's Teaching Schedule
          </h3>
          <div className="space-y-3">
            {todaysSchedule.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-neutral-50 dark:bg-[#181818] rounded border border-neutral-200 dark:border-[#262626] space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#BC0202] font-semibold">{item.code}</span>
                  <span className="text-neutral-400 font-mono text-[11px]">{item.time}</span>
                </div>
                <div className="font-bold text-neutral-900 dark:text-white text-xs">
                  {item.subject}
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                  <span>Room: {item.room}</span>
                  <span>{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Marks Average Chart */}
        <div className="lg:col-span-7 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
              Course CIE Marks Averages
            </h3>
            <span className="text-xs text-neutral-400">Max Marks: 50</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={classPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} />
                <XAxis dataKey="class" stroke="#888888" fontSize={11} />
                <YAxis domain={[0, 50]} stroke="#888888" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111111',
                    borderColor: '#333333',
                    color: '#ffffff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="avgInternal" name="Average Internal Marks" fill="#BC0202" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FacultyAttendance: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = React.useState('21CS71 - Artificial Intelligence & ML');
  const [selectedDate, setSelectedDate] = React.useState('2026-10-07');
  const [attendanceRecords, setAttendanceRecords] = React.useState([
    { usn: '4SD23CS001', name: 'Aakash Hegde', status: 'Present' },
    { usn: '4SD23CS008', name: 'Ananya Sharma', status: 'Present' },
    { usn: '4SD23CS019', name: 'Deepak Rao', status: 'Absent' },
    { usn: '4SD23CS025', name: 'Kavya Shenoy', status: 'Present' },
    { usn: '4SD23CS042', name: 'Aravind S. Rao', status: 'Present' },
    { usn: '4SD23CS055', name: 'Pooja Kamath', status: 'Present' },
    { usn: '4SD23CS072', name: 'Rohan Bhat', status: 'Leave' }
  ]);

  const toggleStatus = (usn: string) => {
    setAttendanceRecords((prev) =>
      prev.map((rec) => {
        if (rec.usn !== usn) return rec;
        const next = rec.status === 'Present' ? 'Absent' : rec.status === 'Absent' ? 'Leave' : 'Present';
        return { ...rec, status: next };
      })
    );
  };

  const handleSaveAttendance = () => {
    alert('Attendance saved successfully for ' + selectedCourse + ' on ' + selectedDate);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          Daily Attendance Management
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Mark student roll call attendance. Updates propagate to student ERP dashboards in real time.
        </p>
      </div>

      {/* Selectors Bar */}
      <div className="p-4 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Course / Subject
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
          >
            <option>21CS71 - Artificial Intelligence & ML</option>
            <option>21CSL76 - Machine Learning Laboratory</option>
            <option>21CSP77 - Major Project Review</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Session Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSaveAttendance}
            className="w-full py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            Save Attendance
          </button>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-neutral-200 dark:border-[#202020] flex items-center justify-between text-xs">
          <span className="font-bold text-neutral-900 dark:text-white">
            Class Roll List (Click button to cycle: Present / Absent / Leave)
          </span>
          <span className="text-neutral-400">Total: {attendanceRecords.length} Students</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">USN</th>
                <th className="p-3.5">Student Name</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {attendanceRecords.map((rec) => (
                <tr key={rec.usn} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-mono font-bold text-neutral-900 dark:text-white">
                    {rec.usn}
                  </td>
                  <td className="p-3.5 font-semibold text-neutral-900 dark:text-white">{rec.name}</td>
                  <td className="p-3.5">
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-semibold ${
                        rec.status === 'Present'
                          ? 'bg-neutral-900 text-white dark:bg-[#1F1F1F]'
                          : rec.status === 'Absent'
                          ? 'bg-[#BC0202] text-white'
                          : 'bg-neutral-200 dark:bg-[#2A2A2A] text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {rec.status}
                    </span>
                  </td>
                  <td className="p-3.5">
                    <button
                      onClick={() => toggleStatus(rec.usn)}
                      className="px-2.5 py-1 text-xs border border-neutral-300 dark:border-[#333333] rounded hover:border-[#BC0202] text-neutral-700 dark:text-neutral-300 transition-colors"
                    >
                      Toggle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
