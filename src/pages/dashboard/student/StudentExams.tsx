import React from 'react';
import { semesterExamResults, studentPlacementJobs } from '../../../data/dashboard';
import { Award, Briefcase, CheckCircle2, Download, ExternalLink } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export const StudentExams: React.FC = () => {
  const { showToast } = useToast();

  const handleDownloadHallTicket = () => {
    showToast('Downloading VTU Examination Hall Ticket (Odd Semester 2026)...', 'info');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Examinations & Academic Results
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            VTU Belagavi Examination Portal · Semester 6 Grade Card & Internal Marks
          </p>
        </div>

        <button
          onClick={handleDownloadHallTicket}
          className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 self-start sm:self-auto"
        >
          <Download className="w-4 h-4 text-[#BC0202]" />
          <span>Download Hall Ticket</span>
        </button>
      </div>

      {/* SGPA Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Previous Sem SGPA</span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            9.12
          </div>
          <p className="text-[11px] text-neutral-400">Semester 6</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Cumulative CGPA</span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-[#BC0202] tabular-nums">
            8.75
          </div>
          <p className="text-[11px] text-neutral-400">Across 144 credits</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Earned Credits</span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            144 / 175
          </div>
          <p className="text-[11px] text-neutral-400">On Track for Graduation</p>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] p-5 rounded-lg space-y-1">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Active Backlogs</span>
          <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white tabular-nums">
            0
          </div>
          <p className="text-[11px] text-neutral-400">Clean Academic History</p>
        </div>
      </div>

      {/* Grade Card Table */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-neutral-200 dark:border-[#202020] font-display font-bold text-sm text-neutral-900 dark:text-white">
          Semester 6 Grade Card Statement
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">Code</th>
                <th className="p-3.5">Subject</th>
                <th className="p-3.5">Credits</th>
                <th className="p-3.5">CIE (Internal)</th>
                <th className="p-3.5">SEE (External)</th>
                <th className="p-3.5">Total</th>
                <th className="p-3.5">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {semesterExamResults.map((r) => (
                <tr key={r.courseCode} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-mono font-bold text-neutral-900 dark:text-white">
                    {r.courseCode}
                  </td>
                  <td className="p-3.5 font-semibold text-neutral-900 dark:text-white">
                    {r.courseName}
                  </td>
                  <td className="p-3.5 tabular-nums">{r.credits}</td>
                  <td className="p-3.5 tabular-nums">{r.internalMarks}</td>
                  <td className="p-3.5 tabular-nums">{r.externalMarks}</td>
                  <td className="p-3.5 tabular-nums font-bold text-neutral-900 dark:text-white">
                    {r.totalMarks}
                  </td>
                  <td className="p-3.5">
                    <span className="font-mono font-bold text-[#BC0202] bg-[#FFF0F0] dark:bg-[#201010] px-2 py-0.5 rounded">
                      {r.grade}
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

export const StudentPlacements: React.FC = () => {
  const { showToast } = useToast();
  const [appliedJobs, setAppliedJobs] = React.useState<string[]>(['job-1']);

  const handleApply = (jobId: string, company: string) => {
    if (appliedJobs.includes(jobId)) {
      showToast(`Already registered for ${company} campus drive`, 'info');
      return;
    }
    setAppliedJobs([...appliedJobs, jobId]);
    showToast(`Application submitted for ${company} campus recruitment drive!`, 'success');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          Student Placement & Drives Portal
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Registered Campus Recruitment Drives · Eligibility Status: Eligible (CGPA: 8.75)
        </p>
      </div>

      <div className="space-y-4">
        {studentPlacementJobs.map((job) => {
          const isApplied = appliedJobs.includes(job.id);
          return (
            <div
              key={job.id}
              className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base text-neutral-900 dark:text-white">
                    {job.company}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] dark:bg-[#201010] px-2 py-0.5 rounded">
                    {job.packageLPA}
                  </span>
                </div>

                <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {job.role}
                </div>

                <div className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                  <div>Location: {job.location} · Drive Date: {job.driveDate}</div>
                  <div>Eligibility: {job.eligibility}</div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleApply(job.id, job.company)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                    isApplied
                      ? 'bg-neutral-800 text-white cursor-default'
                      : 'bg-[#BC0202] hover:bg-[#8F0000] text-white shadow-xs'
                  }`}
                >
                  {isApplied ? 'Application Sent ✓' : 'Register for Drive'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
