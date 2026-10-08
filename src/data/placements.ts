export interface PlacementTrendYear {
  academicYear: string;
  studentsEligible: number;
  studentsPlaced: number;
  placementRate: number;
  companiesVisited: number;
  medianPackageLPA: number;
  highestPackageLPA: number;
}

export interface DeptPlacementStats {
  department: string;
  placementPercent: number;
  placedCount: number;
  avgPackageLPA: number;
}

export interface SalaryDistributionBand {
  salaryBand: string;
  count: number;
  percentage: number;
}

export const placementDisclaimer = "Demo visualization — replace with official institutional placement records.";

export const placementTrends: PlacementTrendYear[] = [
  {
    academicYear: '2020-21',
    studentsEligible: 360,
    studentsPlaced: 295,
    placementRate: 82,
    companiesVisited: 68,
    medianPackageLPA: 4.2,
    highestPackageLPA: 12.0
  },
  {
    academicYear: '2021-22',
    studentsEligible: 390,
    studentsPlaced: 335,
    placementRate: 86,
    companiesVisited: 76,
    medianPackageLPA: 4.6,
    highestPackageLPA: 14.5
  },
  {
    academicYear: '2022-23',
    studentsEligible: 420,
    studentsPlaced: 370,
    placementRate: 88,
    companiesVisited: 84,
    medianPackageLPA: 5.0,
    highestPackageLPA: 16.2
  },
  {
    academicYear: '2023-24',
    studentsEligible: 450,
    studentsPlaced: 405,
    placementRate: 90,
    companiesVisited: 92,
    medianPackageLPA: 5.4,
    highestPackageLPA: 18.0
  }
];

export const departmentPlacementData: DeptPlacementStats[] = [
  { department: 'CSE', placementPercent: 94, placedCount: 112, avgPackageLPA: 6.2 },
  { department: 'ISE', placementPercent: 92, placedCount: 55, avgPackageLPA: 5.8 },
  { department: 'CSE (AI&ML)', placementPercent: 95, placedCount: 57, avgPackageLPA: 6.5 },
  { department: 'ECE', placementPercent: 88, placedCount: 79, avgPackageLPA: 5.2 },
  { department: 'ME', placementPercent: 80, placedCount: 48, avgPackageLPA: 4.5 },
  { department: 'Civil', placementPercent: 78, placedCount: 46, avgPackageLPA: 4.2 },
  { department: 'Aero', placementPercent: 82, placedCount: 37, avgPackageLPA: 4.8 },
  { department: 'MBA', placementPercent: 91, placedCount: 55, avgPackageLPA: 5.0 },
  { department: 'MCA', placementPercent: 89, placedCount: 40, avgPackageLPA: 5.1 }
];

export const salaryDistributionData: SalaryDistributionBand[] = [
  { salaryBand: '3.5 - 5.0 LPA', count: 180, percentage: 44 },
  { salaryBand: '5.0 - 7.5 LPA', count: 140, percentage: 35 },
  { salaryBand: '7.5 - 10.0 LPA', count: 55, percentage: 14 },
  { salaryBand: '10.0+ LPA', count: 30, percentage: 7 }
];

export const trainingModules = [
  {
    id: 'aptitude',
    title: 'Aptitude & Quantitative Problem Solving',
    description: 'Systematic drill on numerical reasoning, permutations, probability, algebra, and speed arithmetic techniques required for initial screening rounds.',
    hours: '60+ Hours',
    coverage: ['Number Theory', 'Time & Work', 'Probability & Statistics', 'Logical Deductions']
  },
  {
    id: 'logical',
    title: 'Logical Reasoning & Data Interpretation',
    description: 'Analytical puzzle resolution, syllogisms, arrangement problems, data sufficiency, and critical thinking development.',
    hours: '40+ Hours',
    coverage: ['Puzzles & Seating', 'Critical Thinking', 'Syllogism Analysis', 'Data Interpretation']
  },
  {
    id: 'technical',
    title: 'Technical Programming & DSA Bootcamps',
    description: 'Live coding challenges in Python, C++, Java, data structures, algorithm optimization, and system design essentials.',
    hours: '80+ Hours',
    coverage: ['Data Structures & Trees', 'Dynamic Programming', 'SQL & Databases', 'System Design']
  },
  {
    id: 'communication',
    title: 'Corporate Communication & Soft Skills',
    description: 'Professional articulation, active listening, business presentation etiquette, corporate email writing, and accent neutralization.',
    hours: '30+ Hours',
    coverage: ['Business English', 'Presentation Skills', 'Listening Skills', 'Corporate Etiquette']
  },
  {
    id: 'interview',
    title: 'Mock Technical & HR Interviews',
    description: 'One-on-one simulated interview rounds conducted by senior faculty and industry alumni with personalized constructive feedback scorecards.',
    hours: 'Continuous',
    coverage: ['Resume Drill', 'Behavioral HR Questions', 'Live Whiteboard Coding', 'Personal Feedback']
  },
  {
    id: 'gd',
    title: 'Group Discussions & Case Studies',
    description: 'Moderated peer discussion sessions on contemporary technology trends, socio-economic developments, and situational business cases.',
    hours: '25+ Hours',
    coverage: ['Extempore Speaking', 'Argument Construction', 'Group Dynamics', 'Conflict Resolution']
  }
];
