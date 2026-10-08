import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  BookOpen,
  Building2,
  Briefcase,
  Calendar,
  ClipboardList,
  TrendingUp,
  Plus,
  Trash2,
  Search,
  Filter,
  Download
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { initialStudentsData } from '../../../data/students';
import { StudentRecord } from '../../../types';
import { useToast } from '../../../context/ToastContext';

export const AdminOverview: React.FC = () => {
  const enrollmentByDept = [
    { name: 'CSE', students: 480 },
    { name: 'ECE', students: 360 },
    { name: 'AIML', students: 240 },
    { name: 'ISE', students: 240 },
    { name: 'Civil', students: 240 },
    { name: 'Mech', students: 240 },
    { name: 'Aero', students: 180 },
    { name: 'MBA', students: 240 },
    { name: 'MCA', students: 180 }
  ];

  const admissionsFunnelData = [
    { stage: 'Inquiries', count: 1200 },
    { stage: 'Applications', count: 680 },
    { stage: 'Verified', count: 510 },
    { stage: 'Admitted', count: 420 }
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BC0202]"></span>
            <span className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Central Institutional Administration
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 dark:text-white">
            Administrative Operations Console
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
            Shree Devi Institute of Technology · Governing Board & Academic Registrar Overview
          </p>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Total Enrolled</span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            2,400+
          </div>
          <p className="text-[11px] text-neutral-400">UG, PG & Doctoral Scholars</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Faculty Members</span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            150+
          </div>
          <p className="text-[11px] text-neutral-400">Academicians & Researchers</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Programs Offered</span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-[#BC0202] tabular-nums">
            11+
          </div>
          <p className="text-[11px] text-neutral-400">Across 10 Departments</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">2026 Applications</span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            680+
          </div>
          <p className="text-[11px] text-neutral-400">KCET / COMEDK / Management</p>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Department Enrollment Bar Chart */}
        <div className="lg:col-span-7 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Student Enrollment by Department
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentByDept}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} />
                <XAxis dataKey="name" stroke="#888888" fontSize={11} />
                <YAxis stroke="#888888" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111111',
                    borderColor: '#333333',
                    color: '#ffffff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="students" name="Students" fill="#BC0202" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Admissions Funnel */}
        <div className="lg:col-span-5 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            2026 Admissions Funnel
          </h3>
          <div className="space-y-4 pt-2">
            {admissionsFunnelData.map((stage, idx) => (
              <div key={stage.stage} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {stage.stage}
                  </span>
                  <span className="font-bold tabular-nums text-neutral-900 dark:text-white">
                    {stage.count}
                  </span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-[#202020] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#BC0202] h-full rounded-full"
                    style={{ width: `${(stage.count / 1200) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminStudents: React.FC = () => {
  const { showToast } = useToast();
  const [students, setStudents] = useState<StudentRecord[]>(initialStudentsData);
  const [search, setSearch] = useState('');
  const [filterDept, setFilterDept] = useState('All');
  const [isAdding, setIsAdding] = useState(false);

  // New Student Form State
  const [newName, setNewName] = useState('');
  const [newUsn, setNewUsn] = useState('');
  const [newDept, setNewDept] = useState('Computer Science & Engineering');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newSem, setNewSem] = useState('1');

  const filtered = students.filter((s) => {
    const matchesDept = filterDept === 'All' || s.department.includes(filterDept);
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.usn.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleDelete = (id: string, name: string) => {
    setStudents(students.filter((s) => s.id !== id));
    showToast(`Removed student record for ${name}`, 'info');
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newUsn) {
      showToast('Please provide student name and USN', 'warning');
      return;
    }
    const newRecord: StudentRecord = {
      id: `std-${Date.now()}`,
      name: newName,
      usn: newUsn,
      department: newDept,
      program: `B.E. ${newDept}`,
      email: newEmail || `${newUsn.toLowerCase()}@sdit.edu.in`,
      phone: newPhone || '+91 98450 00000',
      semester: parseInt(newSem) || 1,
      cgpa: 8.0,
      attendance: 90,
      status: 'Active',
      admissionYear: 2026,
      placementStatus: 'Registered'
    };
    setStudents([newRecord, ...students]);
    setIsAdding(false);
    setNewName('');
    setNewUsn('');
    setNewEmail('');
    showToast(`Student ${newName} (${newUsn}) enrolled successfully!`, 'success');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Student Information System (SIS)
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Institutional Registry · Total Records: {students.length}
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-4 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Cancel' : 'Enroll New Student'}</span>
        </button>
      </div>

      {/* Add Student Form */}
      {isAdding && (
        <form
          onSubmit={handleAddStudent}
          className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg space-y-4 animate-in fade-in duration-150"
        >
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Enroll Student into VTU Registry
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Varun Hegde"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                USN (University Seat Number) *
              </label>
              <input
                type="text"
                required
                value={newUsn}
                onChange={(e) => setNewUsn(e.target.value)}
                placeholder="4SD26CS001"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Department
              </label>
              <select
                value={newDept}
                onChange={(e) => setNewDept(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              >
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Computer Science & Engineering (AI & ML)">CSE (AI & ML)</option>
                <option value="Information Science & Engineering">Information Science</option>
                <option value="Electronics & Communication Engineering">Electronics & Comm</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Aeronautical Engineering">Aeronautical Engineering</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="varun@sdit.demo"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="+91 98450 11223"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Semester
              </label>
              <input
                type="number"
                min="1"
                max="8"
                value={newSem}
                onChange={(e) => setNewSem(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold rounded uppercase tracking-wider"
            >
              Save Student Record
            </button>
          </div>
        </form>
      )}

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by student name or USN..."
            className="w-full bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 pl-9 text-xs text-neutral-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500">Filter Branch:</span>
          <select
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
          >
            <option value="All">All Branches</option>
            <option value="Computer Science">Computer Science</option>
            <option value="AI">AI / ML</option>
            <option value="Information Science">Information Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Aeronautical">Aeronautical</option>
          </select>
        </div>
      </div>

      {/* Student Table */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">USN</th>
                <th className="p-3.5">Student Name</th>
                <th className="p-3.5">Department</th>
                <th className="p-3.5">Sem</th>
                <th className="p-3.5">CGPA</th>
                <th className="p-3.5">Attendance</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-mono font-bold text-neutral-900 dark:text-white">
                    {s.usn}
                  </td>
                  <td className="p-3.5 font-semibold text-neutral-900 dark:text-white">{s.name}</td>
                  <td className="p-3.5 text-neutral-500 dark:text-neutral-400">{s.department}</td>
                  <td className="p-3.5 tabular-nums">Sem {s.semester}</td>
                  <td className="p-3.5 font-bold tabular-nums text-neutral-900 dark:text-white">
                    {s.cgpa}
                  </td>
                  <td className="p-3.5 tabular-nums">{s.attendance}%</td>
                  <td className="p-3.5">
                    <span className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-[#202020] px-2 py-0.5 rounded">
                      {s.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => handleDelete(s.id, s.name)}
                      className="p-1.5 text-neutral-400 hover:text-[#BC0202] rounded transition-colors"
                      title="Remove record"
                    >
                      <Trash2 className="w-4 h-4" />
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
