import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Award, CheckCircle2, Save, Edit3 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../context/ToastContext';

export const StudentProfile: React.FC = () => {
  const { currentUser } = useAuth();
  const { showToast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState('+91 98450 12345');
  const [address, setAddress] = useState('Flat 402, Coastal Residency, Kenjar, Mangaluru – 574142');
  const [emergencyContact, setEmergencyContact] = useState('Suresh Rao (Father): +91 94481 99887');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    showToast('Profile information updated successfully', 'success');
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Student Academic Profile
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Official institutional student information recorded under VTU registry.
          </p>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-neutral-100 dark:bg-[#1C1C1C] hover:bg-neutral-200 dark:hover:bg-[#252525] text-xs font-semibold text-neutral-800 dark:text-neutral-200 rounded border border-neutral-300 dark:border-[#333333] transition-colors inline-flex items-center gap-1.5"
        >
          <Edit3 className="w-3.5 h-3.5 text-[#BC0202]" />
          <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 sm:p-8 space-y-6">
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-neutral-200 dark:border-[#202020]">
          <div className="w-20 h-20 rounded-full bg-[#111111] text-white flex items-center justify-center font-display font-bold text-3xl border border-[#333333] shrink-0">
            {currentUser?.name?.charAt(0) || 'A'}
          </div>
          <div className="space-y-1">
            <h2 className="font-display font-bold text-xl text-neutral-900 dark:text-white">
              {currentUser?.name || 'Aravind S. Rao'}
            </h2>
            <div className="text-xs font-mono text-[#BC0202] font-semibold">
              USN: {currentUser?.usn || '4SD23CS042'}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              Department of Computer Science & Engineering · Semester 7
            </div>
          </div>
        </div>

        {/* Academic Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-3 bg-neutral-50 dark:bg-[#181818] rounded border border-neutral-200 dark:border-[#242424]">
            <span className="text-neutral-400 block text-[10px] uppercase font-mono">
              Admission Year
            </span>
            <div className="font-bold text-neutral-900 dark:text-white mt-0.5">2023</div>
          </div>
          <div className="p-3 bg-neutral-50 dark:bg-[#181818] rounded border border-neutral-200 dark:border-[#242424]">
            <span className="text-neutral-400 block text-[10px] uppercase font-mono">Quota</span>
            <div className="font-bold text-neutral-900 dark:text-white mt-0.5">KCET Quota</div>
          </div>
          <div className="p-3 bg-neutral-50 dark:bg-[#181818] rounded border border-neutral-200 dark:border-[#242424]">
            <span className="text-neutral-400 block text-[10px] uppercase font-mono">CGPA</span>
            <div className="font-bold text-[#BC0202] mt-0.5 tabular-nums">8.75</div>
          </div>
          <div className="p-3 bg-neutral-50 dark:bg-[#181818] rounded border border-neutral-200 dark:border-[#242424]">
            <span className="text-neutral-400 block text-[10px] uppercase font-mono">Status</span>
            <div className="font-bold text-neutral-900 dark:text-white mt-0.5">Active Student</div>
          </div>
        </div>

        {/* Form Details */}
        <form onSubmit={handleSave} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Institutional Email
              </label>
              <input
                type="email"
                disabled
                value={currentUser?.email || 'student@sdit.demo'}
                className="w-full bg-neutral-100 dark:bg-[#161616] border border-neutral-200 dark:border-[#262626] rounded px-3 py-2 text-xs text-neutral-500 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                disabled={!isEditing}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full rounded px-3 py-2 text-xs border ${
                  isEditing
                    ? 'bg-white dark:bg-[#181818] border-[#BC0202] text-neutral-900 dark:text-white'
                    : 'bg-neutral-100 dark:bg-[#161616] border-neutral-200 dark:border-[#262626] text-neutral-500'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Residential Address
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full rounded px-3 py-2 text-xs border ${
                isEditing
                  ? 'bg-white dark:bg-[#181818] border-[#BC0202] text-neutral-900 dark:text-white'
                  : 'bg-neutral-100 dark:bg-[#161616] border-neutral-200 dark:border-[#262626] text-neutral-500'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Emergency Contact
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              className={`w-full rounded px-3 py-2 text-xs border ${
                isEditing
                  ? 'bg-white dark:bg-[#181818] border-[#BC0202] text-neutral-900 dark:text-white'
                  : 'bg-neutral-100 dark:bg-[#161616] border-neutral-200 dark:border-[#262626] text-neutral-500'
              }`}
            />
          </div>

          {isEditing && (
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-1.5 shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
