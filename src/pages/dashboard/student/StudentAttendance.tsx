import React from 'react';
import { Clock, CheckCircle2, AlertTriangle, AlertCircle, BarChart3 } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { studentCoursesList } from '../../../data/dashboard';

export const StudentAttendance: React.FC = () => {
  const attendanceChartData = studentCoursesList.map((c) => ({
    code: c.code,
    attendance: c.attendancePercent,
    target: 85
  }));

  const totalClasses = studentCoursesList.reduce((acc, c) => acc + c.totalClasses, 0);
  const totalAttended = studentCoursesList.reduce((acc, c) => acc + c.classesAttended, 0);
  const overallPercent = ((totalAttended / totalClasses) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          Course-wise Attendance Tracking
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          VTU Academic Mandate: Minimum 85% attendance required in each subject to be eligible for
          semester-end examinations.
        </p>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Cumulative Attendance</span>
          <div className="text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            {overallPercent}%
          </div>
          <p className="text-[11px] text-neutral-400">
            {totalAttended} of {totalClasses} classes attended
          </p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Exam Eligibility</span>
          <div className="text-3xl font-display font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <span>Eligible</span>
            <CheckCircle2 className="w-5 h-5 text-[#BC0202]" />
          </div>
          <p className="text-[11px] text-neutral-400">All subjects above 85%</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Leaves Availed</span>
          <div className="text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            {totalClasses - totalAttended} Classes
          </div>
          <p className="text-[11px] text-neutral-400">Approved medical & sports leaves</p>
        </div>
      </div>

      {/* Visual Chart */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
        <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
          Subject-wise Attendance Distribution
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attendanceChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} />
              <XAxis dataKey="code" stroke="#888888" fontSize={11} />
              <YAxis domain={[50, 100]} stroke="#888888" fontSize={11} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111111',
                  borderColor: '#333333',
                  color: '#ffffff',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="attendance" name="Attendance %" fill="#BC0202" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Subject Detailed Table */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-neutral-200 dark:border-[#202020] font-display font-bold text-sm text-neutral-900 dark:text-white">
          Course Breakdown
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">Code</th>
                <th className="p-3.5">Course Name</th>
                <th className="p-3.5">Faculty</th>
                <th className="p-3.5">Attended / Total</th>
                <th className="p-3.5">Percentage</th>
                <th className="p-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {studentCoursesList.map((c) => (
                <tr key={c.code} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-mono font-bold text-neutral-900 dark:text-white">
                    {c.code}
                  </td>
                  <td className="p-3.5 font-semibold text-neutral-900 dark:text-white">{c.name}</td>
                  <td className="p-3.5 text-neutral-500 dark:text-neutral-400">{c.faculty}</td>
                  <td className="p-3.5 tabular-nums">
                    {c.classesAttended} / {c.totalClasses}
                  </td>
                  <td className="p-3.5 font-bold tabular-nums text-neutral-900 dark:text-white">
                    {c.attendancePercent}%
                  </td>
                  <td className="p-3.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#BC0202] bg-[#FFF0F0] dark:bg-[#201010] px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" />
                      Eligible
                    </span>
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

export const StudentCourses: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          My Enrolled Courses
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          7th Semester B.E. Computer Science & Engineering · VTU CBCS Scheme
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studentCoursesList.map((c) => (
          <div
            key={c.code}
            className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-[#BC0202] bg-[#FFF0F0] dark:bg-[#201010] px-2 py-0.5 rounded">
                  {c.code}
                </span>
                <span className="text-neutral-500 font-medium">{c.credits} Credits</span>
              </div>

              <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white">
                {c.name}
              </h3>

              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                Instructor: <strong className="text-neutral-800 dark:text-neutral-200">{c.faculty}</strong>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-[#202020] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-neutral-400 block text-[11px]">Attendance</span>
                <span className="font-bold text-neutral-900 dark:text-white text-sm tabular-nums">
                  {c.attendancePercent}%
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px]">Internal Marks</span>
                <span className="font-bold text-[#BC0202] text-sm tabular-nums">
                  {c.internalMarks} / {c.maxInternalMarks}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
