import React, { useState } from 'react';
import { Save, CheckCircle2, FileText, Globe, Bell, Phone } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useToast } from '../../../context/ToastContext';

export const AdminCMS: React.FC = () => {
  const { showToast } = useToast();

  const [heroHeading, setHeroHeading] = useState('Empowering Minds. Engineering the Future.');
  const [heroSubheading, setHeroSubheading] = useState(
    'Shree Devi Institute of Technology, Kenjar, Mangaluru — nurturing technical excellence, innovation, leadership and professional growth.'
  );
  const [admissionTicker, setAdmissionTicker] = useState('Admissions Open for Academic Year 2026-27: Engineering, MBA & MCA Programs');
  const [emergencyAlert, setEmergencyAlert] = useState('');
  const [contactPhone, setContactPhone] = useState('+91 824 2254104 / +91 824 2254102');
  const [contactEmail, setContactEmail] = useState('info@sdc.ac.in');

  const handleSaveCMS = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Website CMS configuration saved and live cache updated!', 'success');
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          Institutional Website CMS Console
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Manage dynamic copy across public website sections: Hero, Announcements Ticker, Contact details.
        </p>
      </div>

      <form onSubmit={handleSaveCMS} className="space-y-6">
        {/* Hero Section Copy */}
        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-white pb-2 border-b border-neutral-100 dark:border-[#202020]">
            <Globe className="w-4 h-4 text-[#BC0202]" />
            <h3 className="font-display font-bold text-base">Hero Section Content</h3>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Main Hero Heading
            </label>
            <input
              type="text"
              value={heroHeading}
              onChange={(e) => setHeroHeading(e.target.value)}
              className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Hero Subheading
            </label>
            <textarea
              rows={3}
              value={heroSubheading}
              onChange={(e) => setHeroSubheading(e.target.value)}
              className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
            ></textarea>
          </div>
        </div>

        {/* Ticker & Announcements */}
        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-white pb-2 border-b border-neutral-100 dark:border-[#202020]">
            <Bell className="w-4 h-4 text-[#BC0202]" />
            <h3 className="font-display font-bold text-base">Ticker & Urgent Notices</h3>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Admission Campaign Headline
            </label>
            <input
              type="text"
              value={admissionTicker}
              onChange={(e) => setAdmissionTicker(e.target.value)}
              className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Emergency Weather / Exam Alert (Leave blank if inactive)
            </label>
            <input
              type="text"
              value={emergencyAlert}
              onChange={(e) => setEmergencyAlert(e.target.value)}
              placeholder="e.g. All VTU semester examinations scheduled for Monday are postponed"
              className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
            />
          </div>
        </div>

        {/* Contact Coordinates */}
        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-white pb-2 border-b border-neutral-100 dark:border-[#202020]">
            <Phone className="w-4 h-4 text-[#BC0202]" />
            <h3 className="font-display font-bold text-base">Contact Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Official Campus Phone
              </label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Official Email
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 shadow-md"
          >
            <Save className="w-4 h-4" />
            <span>Publish CMS Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export const AdminAnalytics: React.FC = () => {
  const placementBandData = [
    { name: '3.5 - 5.0 LPA', students: 180 },
    { name: '5.0 - 7.5 LPA', students: 140 },
    { name: '7.5 - 10.0 LPA', students: 55 },
    { name: '10.0+ LPA', students: 30 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
          Institutional Analytics & Statistical Reports
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Longitudinal insights covering student intake, placement salary bands, and department metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4">
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Salary Package Distribution (Placed Cohort)
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={placementBandData}>
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
                <Bar dataKey="students" name="Students Placed" fill="#BC0202" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg p-6 space-y-4 flex flex-col justify-between">
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Quality Assurance Indicators (IQAC)
          </h3>
          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between py-2 border-b border-neutral-100 dark:border-[#202020]">
              <span className="text-neutral-500">Student-to-Faculty Ratio (SFR)</span>
              <span className="font-bold font-mono text-neutral-900 dark:text-white">1 : 16</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-neutral-100 dark:border-[#202020]">
              <span className="text-neutral-500">Faculty with Ph.D Qualification</span>
              <span className="font-bold font-mono text-[#BC0202]">38%</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-neutral-100 dark:border-[#202020]">
              <span className="text-neutral-500">Curriculum Compliance Scheme</span>
              <span className="font-bold text-neutral-900 dark:text-white">VTU CBCS (2022)</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-neutral-100 dark:border-[#202020]">
              <span className="text-neutral-500">Campus Internet Bandwidth</span>
              <span className="font-bold font-mono text-neutral-900 dark:text-white">1 Gbps Leased</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
