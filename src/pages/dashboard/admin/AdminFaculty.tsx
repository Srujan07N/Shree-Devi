import React, { useState } from 'react';
import { initialAdmissionsData } from '../../../data/students';
import { facultyData } from '../../../data/faculty';
import { AdmissionApplication, FacultyMember } from '../../../types';
import { Plus, Trash2, CheckCircle2, XCircle, Clock, ShieldCheck, Mail } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export const AdminFaculty: React.FC = () => {
  const { showToast } = useToast();
  const [facultyList, setFacultyList] = useState<FacultyMember[]>(facultyData);
  const [isAdding, setIsAdding] = useState(false);

  const [name, setName] = useState('');
  const [dept, setDept] = useState('Computer Science & Engineering');
  const [designation, setDesignation] = useState('Assistant Professor');
  const [qualification, setQualification] = useState('M.Tech, (Ph.D)');
  const [specialization, setSpecialization] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !specialization) {
      showToast('Please enter faculty name and specialization', 'warning');
      return;
    }
    const newFac: FacultyMember = {
      id: `fac-${Date.now()}`,
      name,
      designation,
      department: dept,
      qualification,
      specialization,
      experienceYears: 5,
      email: email || `${name.toLowerCase().replace(/[^a-z]/g, '')}@sdc.ac.in`,
      publicationsCount: 4,
      researchInterests: [specialization],
      bio: `${name} has joined the Department of ${dept} as ${designation}.`
    };
    setFacultyList([newFac, ...facultyList]);
    setIsAdding(false);
    setName('');
    setSpecialization('');
    showToast(`Faculty member ${name} appointed successfully!`, 'success');
  };

  const handleRemove = (id: string, fName: string) => {
    setFacultyList(facultyList.filter((f) => f.id !== id));
    showToast(`Removed faculty record for ${fName}`, 'info');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Faculty Directory Management
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Total Appointed Faculty: {facultyList.length} Members across all Departments
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-4 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Cancel' : 'Appoint New Faculty'}</span>
        </button>
      </div>

      {isAdding && (
        <form
          onSubmit={handleAdd}
          className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg space-y-4 animate-in fade-in duration-150"
        >
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Appoint New Faculty Member
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Faculty Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. Kavitha Rai"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Department
              </label>
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              >
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Computer Science & Engineering (AI & ML)">CSE (AI & ML)</option>
                <option value="Information Science & Engineering">Information Science</option>
                <option value="Electronics & Communication Engineering">Electronics & Communication</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Aeronautical Engineering">Aeronautical Engineering</option>
                <option value="Department of Business Administration">Business Administration (MBA)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Designation
              </label>
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              >
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Professor">Professor</option>
                <option value="Professor & Head of Department">Professor & HOD</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Specialization *
              </label>
              <input
                type="text"
                required
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="e.g. Computer Networks & IoT"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Qualifications
              </label>
              <input
                type="text"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                placeholder="Ph.D, M.Tech, B.E."
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Official Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="faculty@sdc.ac.in"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold rounded uppercase tracking-wider"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      )}

      {/* Faculty Table */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">Name</th>
                <th className="p-3.5">Designation</th>
                <th className="p-3.5">Department</th>
                <th className="p-3.5">Specialization</th>
                <th className="p-3.5">Publications</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {facultyList.map((f) => (
                <tr key={f.id} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-semibold text-neutral-900 dark:text-white">{f.name}</td>
                  <td className="p-3.5">{f.designation}</td>
                  <td className="p-3.5 text-neutral-500 dark:text-neutral-400">{f.department}</td>
                  <td className="p-3.5">{f.specialization}</td>
                  <td className="p-3.5 tabular-nums">{f.publicationsCount} Papers</td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => handleRemove(f.id, f.name)}
                      className="p-1.5 text-neutral-400 hover:text-[#BC0202] rounded"
                      title="Remove faculty"
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

export const AdminAdmissions: React.FC = () => {
  const { showToast } = useToast();
  const [applications, setApplications] = useState<AdmissionApplication[]>(initialAdmissionsData);

  const updateStatus = (id: string, newStatus: AdmissionApplication['status']) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
    showToast(`Application #${id} status updated to: ${newStatus}`, 'success');
  };

  const statusCounts = {
    total: applications.length,
    approved: applications.filter((a) => a.status === 'Approved').length,
    pending: applications.filter((a) => a.status === 'Pending').length,
    review: applications.filter((a) => a.status === 'Under Review').length
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          Admissions Management Funnel
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Review candidate eligibility, document verification status, and issue provisional seats.
        </p>
      </div>

      {/* KPI Stat Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg">
          <span className="text-[11px] text-neutral-400">Total Applications</span>
          <div className="text-2xl font-display font-bold text-neutral-900 dark:text-white mt-1 tabular-nums">
            {statusCounts.total}
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg">
          <span className="text-[11px] text-neutral-400">Approved Seats</span>
          <div className="text-2xl font-display font-bold text-[#BC0202] mt-1 tabular-nums">
            {statusCounts.approved}
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg">
          <span className="text-[11px] text-neutral-400">Under Review</span>
          <div className="text-2xl font-display font-bold text-neutral-800 dark:text-neutral-200 mt-1 tabular-nums">
            {statusCounts.review}
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg">
          <span className="text-[11px] text-neutral-400">Pending Verification</span>
          <div className="text-2xl font-display font-bold text-neutral-500 mt-1 tabular-nums">
            {statusCounts.pending}
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">ID</th>
                <th className="p-3.5">Applicant Name</th>
                <th className="p-3.5">Program Choice</th>
                <th className="p-3.5">Exam Rank / %</th>
                <th className="p-3.5">Applied Date</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-mono font-bold text-neutral-900 dark:text-white">
                    {app.id}
                  </td>
                  <td className="p-3.5 font-semibold text-neutral-900 dark:text-white">
                    {app.applicantName}
                  </td>
                  <td className="p-3.5 text-neutral-500 dark:text-neutral-400">
                    {app.programChoice}
                  </td>
                  <td className="p-3.5">
                    <div>{app.qualifyingExam}</div>
                    <div className="text-[10px] text-neutral-400">{app.percentageOrRank}</div>
                  </td>
                  <td className="p-3.5 font-mono">{app.appliedDate}</td>
                  <td className="p-3.5">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                        app.status === 'Approved'
                          ? 'bg-[#BC0202] text-white'
                          : app.status === 'Under Review'
                          ? 'bg-neutral-200 text-neutral-800 dark:bg-[#202020] dark:text-neutral-200'
                          : 'bg-neutral-100 text-neutral-600 dark:bg-[#1A1A1A] dark:text-neutral-400'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-right space-x-1">
                    <button
                      onClick={() => updateStatus(app.id, 'Approved')}
                      className="px-2 py-1 bg-neutral-900 hover:bg-black text-white text-[11px] rounded"
                      title="Approve admission"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(app.id, 'Waitlisted')}
                      className="px-2 py-1 border border-neutral-300 dark:border-[#333333] hover:border-neutral-500 text-[11px] rounded"
                      title="Waitlist"
                    >
                      Waitlist
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
