export type UserRole = 'admin' | 'faculty' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  usn?: string;
  department?: string;
  designation?: string;
  semester?: number;
  phone?: string;
}

export interface Program {
  id: string;
  name: string;
  code: string;
  degree: 'B.E.' | 'M.Tech' | 'MBA' | 'MCA' | 'Ph.D';
  department: string;
  duration: string;
  intake?: string;
  affiliation: string;
  overview: string;
  highlights: string[];
  eligibility: string;
  careers: string[];
  curriculumOverview: string[];
  labs: string[];
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  hodName: string;
  hodQualification: string;
  facultyCount: number;
  studentCount?: number;
  established: number;
  description: string;
  programsOffered: string[];
  keyLabs: string[];
  researchAreas: string[];
  achievements: string[];
  contactEmail: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  specialization: string;
  experienceYears: number;
  email: string;
  phone?: string;
  publicationsCount: number;
  researchInterests: string[];
  bio: string;
}

export interface Recruiter {
  id: string;
  name: string;
  sector: string;
  tier: 'Tier 1' | 'Core' | 'Product' | 'Services';
  logoText: string;
  batchYears: string[];
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Hackathon' | 'Workshop' | 'Placement Drive';
  date: string;
  time: string;
  venue: string;
  department: string;
  description: string;
  organizer: string;
  registrationOpen: boolean;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Academic' | 'Admissions' | 'Placements' | 'Events' | 'Examinations' | 'Achievements';
  date: string;
  author: string;
  summary: string;
  content: string;
  readTime: string;
  published: boolean;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Academic' | 'Amenities' | 'Recreation' | 'Residential';
  description: string;
  highlights: string[];
  specs: string;
}

export interface StudentRecord {
  id: string;
  usn: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  program: string;
  semester: number;
  cgpa: number;
  attendance: number;
  status: 'Active' | 'On Leave' | 'Graduated';
  admissionYear: number;
  placementStatus: 'Placed' | 'In Process' | 'Seeking Higher Studies' | 'Registered';
}

export interface AdmissionApplication {
  id: string;
  applicantName: string;
  email: string;
  phone: string;
  programChoice: string;
  qualifyingExam: string;
  percentageOrRank: string;
  status: 'Pending' | 'Under Review' | 'Approved' | 'Waitlisted' | 'Rejected';
  appliedDate: string;
  documentsVerified: boolean;
}
