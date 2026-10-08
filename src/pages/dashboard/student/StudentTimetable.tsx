import React, { useState } from 'react';
import { weeklyTimetable, assignmentsList } from '../../../data/dashboard';
import { Calendar, Clock, MapPin, UploadCloud, CheckCircle2, FileText } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export const StudentTimetable: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const slotsForDay = weeklyTimetable.filter((s) => s.day === selectedDay);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          Weekly Academic Timetable
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          7th Semester B.E. Computer Science & Engineering · Classroom LH-302
        </p>
      </div>

      {/* Day Picker */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-200 dark:bg-[#161616] rounded-md max-w-fit">
        {days.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDay(d)}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
              selectedDay === d
                ? 'bg-black text-white dark:bg-[#BC0202] dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Daily Schedule List */}
      <div className="space-y-3">
        {slotsForDay.map((slot, idx) => (
          <div
            key={idx}
            className="p-5 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] dark:bg-[#201010] px-2 py-0.5 rounded">
                  {slot.code}
                </span>
                {slot.isLab && (
                  <span className="text-[10px] font-mono uppercase bg-neutral-900 text-white dark:bg-[#2A2A2A] px-1.5 py-0.5 rounded">
                    Lab Session
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                {slot.subject}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Instructor: {slot.faculty}
              </p>
            </div>

            <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center text-xs text-neutral-500 gap-1 border-t sm:border-t-0 pt-2 sm:pt-0 border-neutral-100 dark:border-[#1E1E1E]">
              <div className="flex items-center gap-1.5 font-mono text-neutral-700 dark:text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-[#BC0202]" />
                <span>{slot.time}</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{slot.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const StudentAssignments: React.FC = () => {
  const { showToast } = useToast();
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Submitted' | 'Graded'>('All');
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  const filteredAssignments = assignmentsList.filter((a) => {
    if (filter === 'All') return true;
    return a.status === filter;
  });

  const handleSimulateUpload = (asgTitle: string) => {
    showToast(`File uploaded successfully for "${asgTitle}". Submission timestamp logged.`, 'success');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          Coursework & Assignments
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Review assignment problem statements, submission deadlines, and instructor evaluations.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-neutral-200 dark:bg-[#161616] rounded-md max-w-fit">
        {(['All', 'Upcoming', 'Submitted', 'Graded'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
              filter === tab
                ? 'bg-black text-white dark:bg-[#BC0202] dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredAssignments.map((asg) => (
          <div
            key={asg.id}
            className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] dark:bg-[#201010] px-2 py-0.5 rounded">
                  {asg.courseCode} · {asg.courseName}
                </span>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    asg.status === 'Graded'
                      ? 'bg-neutral-100 text-neutral-800 dark:bg-[#202020] dark:text-neutral-200'
                      : asg.status === 'Submitted'
                      ? 'bg-neutral-100 text-neutral-700 dark:bg-[#1E1E1E] dark:text-neutral-300'
                      : 'bg-[#FFF0F0] text-[#BC0202] dark:bg-[#251010] dark:text-[#E52525]'
                  }`}
                >
                  {asg.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                {asg.title}
              </h3>

              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                Assigned by {asg.faculty} · Due: <span className="font-mono text-neutral-800 dark:text-neutral-200">{asg.dueDate}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {asg.status === 'Graded' && (
                <div className="text-right">
                  <div className="font-display font-bold text-lg text-neutral-900 dark:text-white tabular-nums">
                    {asg.grade}
                  </div>
                  <div className="text-[10px] text-neutral-400">Evaluated</div>
                </div>
              )}

              {asg.status === 'Upcoming' && (
                <button
                  onClick={() => handleSimulateUpload(asg.title)}
                  className="px-4 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Upload Solution</span>
                </button>
              )}

              {asg.status === 'Submitted' && (
                <div className="text-xs text-neutral-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#BC0202]" />
                  <span>Submitted on {asg.submissionDate}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
