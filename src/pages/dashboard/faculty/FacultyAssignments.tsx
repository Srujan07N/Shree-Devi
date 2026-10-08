import React, { useState } from 'react';
import { Plus, CheckSquare, ClipboardList, Trash2, Calendar } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export const FacultyAssignments: React.FC = () => {
  const { showToast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('21CS71 - Artificial Intelligence & ML');
  const [dueDate, setDueDate] = useState('2026-10-25');
  const [maxMarks, setMaxMarks] = useState('25');

  const [assignments, setAssignments] = useState([
    {
      id: '1',
      title: 'Deep Residual Network Implementation in PyTorch',
      subject: '21CS71 - Artificial Intelligence & ML',
      dueDate: '2026-10-18',
      maxMarks: 25,
      submissions: 58,
      totalStudents: 64
    },
    {
      id: '2',
      title: 'Heuristic Search & A* Algorithm Complexity Analysis',
      subject: '21CS71 - Artificial Intelligence & ML',
      dueDate: '2026-10-10',
      maxMarks: 20,
      submissions: 64,
      totalStudents: 64
    }
  ]);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      showToast('Please enter an assignment title', 'warning');
      return;
    }
    const newAsg = {
      id: Date.now().toString(),
      title,
      subject,
      dueDate,
      maxMarks: parseInt(maxMarks) || 25,
      submissions: 0,
      totalStudents: 64
    };
    setAssignments([newAsg, ...assignments]);
    setIsCreating(false);
    setTitle('');
    showToast(`Assignment "${title}" posted for students!`, 'success');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Assignment Management & Grading
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Create academic tasks, review student repository submissions, and record marks.
          </p>
        </div>

        <button
          onClick={() => setIsCreating(!isCreating)}
          className="px-4 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>{isCreating ? 'Cancel' : 'Create New Assignment'}</span>
        </button>
      </div>

      {/* Creation Modal / Form */}
      {isCreating && (
        <form
          onSubmit={handleCreate}
          className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg space-y-4 animate-in fade-in duration-150"
        >
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Create Assignment Task
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Assignment Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Minimax Game Tree Implementation"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Course
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              >
                <option>21CS71 - Artificial Intelligence & ML</option>
                <option>21CSL76 - Machine Learning Lab</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Maximum CIE Marks
              </label>
              <input
                type="number"
                value={maxMarks}
                onChange={(e) => setMaxMarks(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold rounded uppercase tracking-wider"
            >
              Publish Assignment
            </button>
          </div>
        </form>
      )}

      {/* Assignment List */}
      <div className="space-y-4">
        {assignments.map((asg) => (
          <div
            key={asg.id}
            className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] dark:bg-[#201010] px-2 py-0.5 rounded">
                {asg.subject}
              </span>
              <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                {asg.title}
              </h3>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                Due Date: <span className="font-mono text-neutral-800 dark:text-neutral-200">{asg.dueDate}</span> · Max Marks: {asg.maxMarks}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right text-xs">
                <div className="font-bold text-neutral-900 dark:text-white tabular-nums">
                  {asg.submissions} / {asg.totalStudents} Submissions
                </div>
                <div className="text-[11px] text-neutral-400">Received</div>
              </div>

              <button
                onClick={() => showToast(`Opening submissions gradebook for "${asg.title}"...`, 'info')}
                className="px-4 py-2 border border-neutral-300 dark:border-[#333333] hover:border-[#BC0202] text-xs font-semibold rounded text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                Grade Submissions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FacultyMarks: React.FC = () => {
  const { showToast } = useToast();
  const [marksData, setMarksData] = useState([
    { usn: '4SD23CS001', name: 'Aakash Hegde', test1: 22, test2: 24, asg: 24, total: 46 },
    { usn: '4SD23CS008', name: 'Ananya Sharma', test1: 20, test2: 21, asg: 22, total: 42 },
    { usn: '4SD23CS019', name: 'Deepak Rao', test1: 18, test2: 19, asg: 20, total: 38 },
    { usn: '4SD23CS042', name: 'Aravind S. Rao', test1: 24, test2: 25, asg: 25, total: 49 },
    { usn: '4SD23CS055', name: 'Pooja Kamath', test1: 23, test2: 24, asg: 24, total: 47 }
  ]);

  const handleExport = () => {
    showToast('Exported CIE Marks Statement (CSV format)', 'success');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Continuous Internal Evaluation (CIE) Marks
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            21CS71 - Artificial Intelligence & ML · Internal Assessment 1, 2 & Assignment Scores
          </p>
        </div>

        <button
          onClick={handleExport}
          className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors self-start sm:self-auto"
        >
          Export Marks Statement
        </button>
      </div>

      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">USN</th>
                <th className="p-3.5">Student Name</th>
                <th className="p-3.5">IA-1 (25)</th>
                <th className="p-3.5">IA-2 (25)</th>
                <th className="p-3.5">Assignment (25)</th>
                <th className="p-3.5">CIE Total (50)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {marksData.map((m) => (
                <tr key={m.usn} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-mono font-bold text-neutral-900 dark:text-white">
                    {m.usn}
                  </td>
                  <td className="p-3.5 font-semibold text-neutral-900 dark:text-white">{m.name}</td>
                  <td className="p-3.5 tabular-nums">{m.test1}</td>
                  <td className="p-3.5 tabular-nums">{m.test2}</td>
                  <td className="p-3.5 tabular-nums">{m.asg}</td>
                  <td className="p-3.5 font-bold text-[#BC0202] tabular-nums">{m.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const FacultyStudents: React.FC = () => {
  const [search, setSearch] = useState('');
  const students = [
    { usn: '4SD23CS001', name: 'Aakash Hegde', sem: 7, cgpa: 8.4, attendance: 90, status: 'Active' },
    { usn: '4SD23CS008', name: 'Ananya Sharma', sem: 7, cgpa: 8.6, attendance: 94, status: 'Active' },
    { usn: '4SD23CS019', name: 'Deepak Rao', sem: 7, cgpa: 7.8, attendance: 82, status: 'Active' },
    { usn: '4SD23CS042', name: 'Aravind S. Rao', sem: 7, cgpa: 8.75, attendance: 92, status: 'Active' },
    { usn: '4SD23CS055', name: 'Pooja Kamath', sem: 7, cgpa: 9.1, attendance: 95, status: 'Active' }
  ];

  const filtered = students.filter(
    (s) => s.name.toLowerCase().includes(search.toLowerCase()) || s.usn.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Class Student Directory
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Department of Computer Science & Engineering · Class 7A
          </p>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter by USN or Name..."
          className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#2E2E2E] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
        />
      </div>

      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">USN</th>
                <th className="p-3.5">Student Name</th>
                <th className="p-3.5">Semester</th>
                <th className="p-3.5">CGPA</th>
                <th className="p-3.5">Attendance</th>
                <th className="p-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {filtered.map((s) => (
                <tr key={s.usn} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-mono font-bold text-neutral-900 dark:text-white">
                    {s.usn}
                  </td>
                  <td className="p-3.5 font-semibold text-neutral-900 dark:text-white">{s.name}</td>
                  <td className="p-3.5">Sem {s.sem}</td>
                  <td className="p-3.5 font-semibold tabular-nums">{s.cgpa}</td>
                  <td className="p-3.5 tabular-nums">{s.attendance}%</td>
                  <td className="p-3.5">
                    <span className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
                      {s.status}
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
