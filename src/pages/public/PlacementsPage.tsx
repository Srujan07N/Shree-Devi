import React from 'react';
import { motion } from 'motion/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  Award,
  Briefcase,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle,
  Building2,
  GraduationCap,
  Layers
} from 'lucide-react';
import {
  placementTrends,
  departmentPlacementData,
  salaryDistributionData,
  trainingModules,
  placementDisclaimer
} from '../../data/placements';
import { recruitersData } from '../../data/recruiters';

export const PlacementsPage: React.FC = () => {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero - White background, crisp black text */}
      <section className="bg-white text-black py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
            Career Development & Corporate Relations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            From Campus to Career
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-3xl leading-relaxed font-normal"
          >
            The Training & Placement Department at SDIT drives continuous career readiness
            through intensive coding bootcamps, analytical reasoning workshops, mock technical
            panels, and campus recruitment drives.
          </motion.p>
        </div>
      </section>

      {/* Analytics Disclaimer Notice */}
      <section className="bg-neutral-50 border-b border-[#E5E5E5] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2.5 text-xs text-neutral-800 font-medium">
          <AlertCircle className="w-4 h-4 text-[#BC0202] shrink-0" />
          <span>
            <strong>Institutional Notice:</strong> {placementDisclaimer}
          </span>
        </div>
      </section>

      {/* Placement Trends & Visual Analytics Dashboard */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
                Analytics Dashboard
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-black mt-1">
                Placement Trends & Recruitment Metrics
              </h2>
            </div>
            <span className="text-xs text-neutral-600 font-mono font-medium">
              Academic Cohort History (2020–2024)
            </span>
          </div>

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1 shadow-xs"
            >
              <span className="text-xs text-neutral-600 font-medium">Latest Cohort Rate</span>
              <div className="text-3xl font-display font-extrabold text-black tabular-nums">
                90%
              </div>
              <p className="text-[11px] text-neutral-500 font-normal">Eligible students placed</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1 shadow-xs"
            >
              <span className="text-xs text-neutral-600 font-medium">Highest Package</span>
              <div className="text-3xl font-display font-extrabold text-[#BC0202] tabular-nums">
                18.0 LPA
              </div>
              <p className="text-[11px] text-neutral-500 font-normal">Software Product & Core roles</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1 shadow-xs"
            >
              <span className="text-xs text-neutral-600 font-medium">Median Package</span>
              <div className="text-3xl font-display font-extrabold text-black tabular-nums">
                5.4 LPA
              </div>
              <p className="text-[11px] text-neutral-500 font-normal">Steady upward trajectory</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1 shadow-xs"
            >
              <span className="text-xs text-neutral-600 font-medium">Recruiter Drives</span>
              <div className="text-3xl font-display font-extrabold text-black tabular-nums">
                90+
              </div>
              <p className="text-[11px] text-neutral-500 font-normal">Annual recruiting organizations</p>
            </motion.div>
          </div>

          {/* Interactive Recharts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 1: Placement Rate */}
            <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-4 shadow-xs">
              <h3 className="font-display font-bold text-base text-black">
                Year-on-Year Placement Rate (%)
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={placementTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="academicYear" stroke="#666666" fontSize={11} />
                    <YAxis domain={[70, 100]} stroke="#666666" fontSize={11} unit="%" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderColor: '#e5e5e5',
                        color: '#000000',
                        fontSize: '12px'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="placementRate"
                      name="Placement %"
                      stroke="#BC0202"
                      strokeWidth={3}
                      dot={{ r: 5, fill: '#BC0202' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Department-wise Placement */}
            <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 space-y-4 shadow-xs">
              <h3 className="font-display font-bold text-base text-black">
                Department-wise Placement Percentage
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentPlacementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="department" stroke="#666666" fontSize={10} />
                    <YAxis domain={[0, 100]} stroke="#666666" fontSize={11} unit="%" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderColor: '#e5e5e5',
                        color: '#000000',
                        fontSize: '12px'
                      }}
                    />
                    <Bar
                      dataKey="placementPercent"
                      name="Placed %"
                      fill="#BC0202"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Real Academic Year Records Table */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-black">
              Placement Summary by Academic Cohort
            </h3>
            <div className="overflow-x-auto border border-neutral-200 rounded-lg">
              <table className="w-full text-xs text-left text-neutral-800">
                <thead className="bg-neutral-100 text-black font-bold">
                  <tr>
                    <th className="p-3.5">Academic Year</th>
                    <th className="p-3.5">Students Eligible</th>
                    <th className="p-3.5">Students Placed</th>
                    <th className="p-3.5">Placement %</th>
                    <th className="p-3.5">Median Package</th>
                    <th className="p-3.5">Highest Package</th>
                    <th className="p-3.5">Recruiting Companies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {placementTrends.map((row) => (
                    <tr
                      key={row.academicYear}
                      className="hover:bg-neutral-50 transition-colors"
                    >
                      <td className="p-3.5 font-bold text-black">
                        {row.academicYear}
                      </td>
                      <td className="p-3.5 tabular-nums font-medium">{row.studentsEligible}</td>
                      <td className="p-3.5 tabular-nums font-medium">{row.studentsPlaced}</td>
                      <td className="p-3.5 font-bold text-[#BC0202] tabular-nums">
                        {row.placementRate}%
                      </td>
                      <td className="p-3.5 tabular-nums font-medium">{row.medianPackageLPA} LPA</td>
                      <td className="p-3.5 font-bold text-black tabular-nums">
                        {row.highestPackageLPA} LPA
                      </td>
                      <td className="p-3.5 tabular-nums font-medium">{row.companiesVisited}+</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Showcase */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              Corporate Network
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
              Recruitment Partners & Corporate Recruiters
            </h2>
            <p className="text-xs text-neutral-600 font-normal">
              Verified historical recruiters from official SDIT records. Recruitment participation
              varies across batches and branches.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {recruitersData.map((rec) => (
              <motion.div
                key={rec.id}
                whileHover={{ y: -3, borderColor: '#BC0202' }}
                className="p-5 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between text-center transition-all group shadow-xs"
              >
                <div>
                  <div className="font-display font-bold text-base text-black group-hover:text-[#BC0202] transition-colors">
                    {rec.logoText}
                  </div>
                  <p className="text-[10px] text-neutral-600 mt-1 line-clamp-2 font-normal">
                    {rec.sector}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-neutral-100 text-[10px] font-mono font-medium text-neutral-500">
                  Batches: {rec.batchYears.slice(-2).join(', ')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Training Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              Training & Placement Curriculum
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
              Pre-Placement Career Readiness
            </h2>
            <p className="text-xs text-neutral-600 font-normal">
              A comprehensive multi-tier training syllabus conducted systematically alongside VTU
              semesters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingModules.map((tm) => (
              <motion.div
                key={tm.id}
                whileHover={{ y: -4 }}
                className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] px-2 py-0.5 rounded">
                    {tm.hours}
                  </span>
                  <Briefcase className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="font-display font-bold text-base text-black">
                  {tm.title}
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                  {tm.description}
                </p>
                <div className="pt-2 border-t border-neutral-200">
                  <span className="text-[11px] font-bold text-black block mb-1">
                    Key Coverage:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tm.coverage.map((c, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 bg-white border border-neutral-200 rounded font-medium text-neutral-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
