export interface StudentCourse {
  code: string;
  name: string;
  credits: number;
  faculty: string;
  attendancePercent: number;
  classesAttended: number;
  totalClasses: number;
  internalMarks: number; // out of 50
  maxInternalMarks: number;
}

export interface TimetableSlot {
  day: string;
  time: string;
  subject: string;
  code: string;
  faculty: string;
  room: string;
  isLab?: boolean;
}

export interface AssignmentItem {
  id: string;
  title: string;
  courseCode: string;
  courseName: string;
  faculty: string;
  dueDate: string;
  maxMarks: number;
  status: 'Upcoming' | 'Submitted' | 'Graded' | 'Overdue';
  grade?: string;
  submissionDate?: string;
}

export interface ExamResultItem {
  courseCode: string;
  courseName: string;
  credits: number;
  internalMarks: number;
  externalMarks: number;
  totalMarks: number;
  grade: string;
  gradePoints: number;
}

export interface StudyMaterialItem {
  id: string;
  title: string;
  courseCode: string;
  courseName: string;
  category: 'Notes' | 'PDF' | 'Lab Manual' | 'Previous Paper';
  fileSize: string;
  uploadedBy: string;
  date: string;
}

export const studentCoursesList: StudentCourse[] = [
  {
    code: '21CS71',
    name: 'Artificial Intelligence & Machine Learning',
    credits: 4,
    faculty: 'Dr. Anand Shenoy',
    attendancePercent: 92,
    classesAttended: 46,
    totalClasses: 50,
    internalMarks: 46,
    maxInternalMarks: 50
  },
  {
    code: '21CS72',
    name: 'Cloud Computing & Distributed Frameworks',
    credits: 4,
    faculty: 'Dr. Ramesh Kumar',
    attendancePercent: 90,
    classesAttended: 45,
    totalClasses: 50,
    internalMarks: 44,
    maxInternalMarks: 50
  },
  {
    code: '21CS73',
    name: 'Cybersecurity & Cryptographic Protocols',
    credits: 3,
    faculty: 'Prof. Rajesh Karkera',
    attendancePercent: 88,
    classesAttended: 37,
    totalClasses: 42,
    internalMarks: 42,
    maxInternalMarks: 50
  },
  {
    code: '21CS74',
    name: 'Full-Stack Software Architecture',
    credits: 3,
    faculty: 'Dr. Shwetha Kamath',
    attendancePercent: 94,
    classesAttended: 45,
    totalClasses: 48,
    internalMarks: 47,
    maxInternalMarks: 50
  },
  {
    code: '21CSL76',
    name: 'Machine Learning Laboratory',
    credits: 2,
    faculty: 'Dr. Anand Shenoy',
    attendancePercent: 96,
    classesAttended: 24,
    totalClasses: 25,
    internalMarks: 48,
    maxInternalMarks: 50
  },
  {
    code: '21CSP77',
    name: 'Major Capstone Project Phase - I',
    credits: 2,
    faculty: 'Project Review Committee',
    attendancePercent: 95,
    classesAttended: 19,
    totalClasses: 20,
    internalMarks: 49,
    maxInternalMarks: 50
  }
];

export const weeklyTimetable: TimetableSlot[] = [
  { day: 'Monday', time: '09:00 - 10:00 AM', subject: 'Artificial Intelligence & ML', code: '21CS71', faculty: 'Dr. Anand Shenoy', room: 'LH-302' },
  { day: 'Monday', time: '10:00 - 11:00 AM', subject: 'Cloud Computing', code: '21CS72', faculty: 'Dr. Ramesh Kumar', room: 'LH-302' },
  { day: 'Monday', time: '11:15 - 01:15 PM', subject: 'Machine Learning Lab (Batch A)', code: '21CSL76', faculty: 'Dr. Anand Shenoy', room: 'AI Lab 2', isLab: true },
  { day: 'Monday', time: '02:00 - 03:00 PM', subject: 'Cybersecurity Protocols', code: '21CS73', faculty: 'Prof. Rajesh Karkera', room: 'LH-302' },

  { day: 'Tuesday', time: '09:00 - 10:00 AM', subject: 'Full-Stack Architecture', code: '21CS74', faculty: 'Dr. Shwetha Kamath', room: 'LH-302' },
  { day: 'Tuesday', time: '10:00 - 11:00 AM', subject: 'Artificial Intelligence & ML', code: '21CS71', faculty: 'Dr. Anand Shenoy', room: 'LH-302' },
  { day: 'Tuesday', time: '11:15 - 12:15 PM', subject: 'Cloud Computing', code: '21CS72', faculty: 'Dr. Ramesh Kumar', room: 'LH-302' },
  { day: 'Tuesday', time: '02:00 - 04:00 PM', subject: 'Capstone Project Review', code: '21CSP77', faculty: 'Review Panel', room: 'Incubation Lab', isLab: true },

  { day: 'Wednesday', time: '09:00 - 10:00 AM', subject: 'Cybersecurity Protocols', code: '21CS73', faculty: 'Prof. Rajesh Karkera', room: 'LH-302' },
  { day: 'Wednesday', time: '10:00 - 11:00 AM', subject: 'Full-Stack Architecture', code: '21CS74', faculty: 'Dr. Shwetha Kamath', room: 'LH-302' },
  { day: 'Wednesday', time: '11:15 - 01:15 PM', subject: 'Full Stack Coding Lab', code: '21CSL77', faculty: 'Prof. Rajesh Karkera', room: 'Computing Lab 4', isLab: true },
  { day: 'Wednesday', time: '02:00 - 03:00 PM', subject: 'Aptitude & Placement Session', code: 'PLACE', faculty: 'Placement Mentor', room: 'Seminar Hall 1' },

  { day: 'Thursday', time: '09:00 - 10:00 AM', subject: 'Cloud Computing', code: '21CS72', faculty: 'Dr. Ramesh Kumar', room: 'LH-302' },
  { day: 'Thursday', time: '10:00 - 11:00 AM', subject: 'Artificial Intelligence & ML', code: '21CS71', faculty: 'Dr. Anand Shenoy', room: 'LH-302' },
  { day: 'Thursday', time: '11:15 - 12:15 PM', subject: 'Cybersecurity Protocols', code: '21CS73', faculty: 'Prof. Rajesh Karkera', room: 'LH-302' },
  { day: 'Thursday', time: '02:00 - 04:00 PM', subject: 'Technical Seminar Series', code: '21CSS78', faculty: 'Dept Coordinators', room: 'Auditorium' },

  { day: 'Friday', time: '09:00 - 10:00 AM', subject: 'Full-Stack Architecture', code: '21CS74', faculty: 'Dr. Shwetha Kamath', room: 'LH-302' },
  { day: 'Friday', time: '10:00 - 11:00 AM', subject: 'Artificial Intelligence & ML', code: '21CS71', faculty: 'Dr. Anand Shenoy', room: 'LH-302' },
  { day: 'Friday', time: '11:15 - 01:15 PM', subject: 'Industry Case Study & GD', code: 'IND-CS', faculty: 'Placement Faculty', room: 'GD Studio' },

  { day: 'Saturday', time: '09:00 - 10:00 AM', subject: 'Cloud Computing Lab & Review', code: '21CS72', faculty: 'Dr. Ramesh Kumar', room: 'Cloud Lab', isLab: true },
  { day: 'Saturday', time: '10:00 - 12:00 PM', subject: 'Student Clubs & Hack Sessions', code: 'CLUB', faculty: 'Club Leads', room: 'Central Lounge' }
];

export const assignmentsList: AssignmentItem[] = [
  {
    id: 'asg-1',
    title: 'Deep Residual Network Implementation in PyTorch',
    courseCode: '21CS71',
    courseName: 'Artificial Intelligence & Machine Learning',
    faculty: 'Dr. Anand Shenoy',
    dueDate: '2026-10-18',
    maxMarks: 25,
    status: 'Upcoming'
  },
  {
    id: 'asg-2',
    title: 'Container Orchestration with Docker & Kubernetes Minikube',
    courseCode: '21CS72',
    courseName: 'Cloud Computing & Distributed Frameworks',
    faculty: 'Dr. Ramesh Kumar',
    dueDate: '2026-10-12',
    maxMarks: 20,
    status: 'Submitted',
    submissionDate: '2026-10-09'
  },
  {
    id: 'asg-3',
    title: 'Cryptographic Hash Analysis & RSA Key Generation',
    courseCode: '21CS73',
    courseName: 'Cybersecurity & Cryptographic Protocols',
    faculty: 'Prof. Rajesh Karkera',
    dueDate: '2026-09-28',
    maxMarks: 20,
    status: 'Graded',
    grade: '19/20',
    submissionDate: '2026-09-26'
  },
  {
    id: 'asg-4',
    title: 'React & TypeScript State Synchronization Blueprint',
    courseCode: '21CS74',
    courseName: 'Full-Stack Software Architecture',
    faculty: 'Dr. Shwetha Kamath',
    dueDate: '2026-09-20',
    maxMarks: 25,
    status: 'Graded',
    grade: '24/25',
    submissionDate: '2026-09-18'
  }
];

export const semesterExamResults: ExamResultItem[] = [
  { courseCode: '21CS61', courseName: 'System Software & Compilers', credits: 4, internalMarks: 45, externalMarks: 48, totalMarks: 93, grade: 'S', gradePoints: 10 },
  { courseCode: '21CS62', courseName: 'Computer Graphics & Visualization', credits: 4, internalMarks: 43, externalMarks: 44, totalMarks: 87, grade: 'A', gradePoints: 9 },
  { courseCode: '21CS63', courseName: 'Mobile Application Development', credits: 3, internalMarks: 46, externalMarks: 46, totalMarks: 92, grade: 'S', gradePoints: 10 },
  { courseCode: '21CS64', courseName: 'Data Mining & Business Analytics', credits: 3, internalMarks: 42, externalMarks: 41, totalMarks: 83, grade: 'A', gradePoints: 9 },
  { courseCode: '21CSL66', courseName: 'Mobile Development Lab', credits: 2, internalMarks: 48, externalMarks: 47, totalMarks: 95, grade: 'S', gradePoints: 10 },
  { courseCode: '21CSL67', courseName: 'Compilers Laboratory', credits: 2, internalMarks: 45, externalMarks: 46, totalMarks: 91, grade: 'S', gradePoints: 10 }
];

export const studyMaterialsList: StudyMaterialItem[] = [
  { id: 'mat-1', title: 'Module 1-3 Lecture Notes on Deep Convolutional Networks', courseCode: '21CS71', courseName: 'AI & ML', category: 'Notes', fileSize: '4.8 MB', uploadedBy: 'Dr. Anand Shenoy', date: '2026-09-15' },
  { id: 'mat-2', title: 'Kubernetes Architecture & Cluster Deployment Manual', courseCode: '21CS72', courseName: 'Cloud Computing', category: 'PDF', fileSize: '6.2 MB', uploadedBy: 'Dr. Ramesh Kumar', date: '2026-09-20' },
  { id: 'mat-3', title: 'Network Security & Public Key Infrastructure Reference', courseCode: '21CS73', courseName: 'Cybersecurity', category: 'PDF', fileSize: '3.1 MB', uploadedBy: 'Prof. Rajesh Karkera', date: '2026-09-22' },
  { id: 'mat-4', title: 'Machine Learning VTU Lab Exercises and Python Starters', courseCode: '21CSL76', courseName: 'ML Lab', category: 'Lab Manual', fileSize: '2.5 MB', uploadedBy: 'Dr. Anand Shenoy', date: '2026-08-30' },
  { id: 'mat-5', title: 'VTU Question Bank & Solved Papers (2022-2025)', courseCode: '21CS71', courseName: 'AI & ML', category: 'Previous Paper', fileSize: '8.4 MB', uploadedBy: 'Academic Department', date: '2026-08-10' }
];

export const studentPlacementJobs = [
  {
    id: 'job-1',
    company: 'Infosys',
    role: 'Specialist Programmer (Power Programmer)',
    packageLPA: '9.5 LPA',
    location: 'Bengaluru / Mangaluru',
    deadline: '2026-10-25',
    eligibility: 'CGPA >= 7.5, No Active Backlogs',
    status: 'Eligible',
    applied: true,
    driveDate: '2026-11-05'
  },
  {
    id: 'job-2',
    company: 'Cadence Design Systems',
    role: 'Software Engineer - EDA Tools',
    packageLPA: '14.0 LPA',
    location: 'Bengaluru / Noida',
    deadline: '2026-10-30',
    eligibility: 'CGPA >= 8.0, CSE/ECE',
    status: 'Eligible',
    applied: false,
    driveDate: '2026-11-12'
  },
  {
    id: 'job-3',
    company: 'SLK Software',
    role: 'Associate Software Developer',
    packageLPA: '5.2 LPA',
    location: 'Bengaluru',
    deadline: '2026-11-02',
    eligibility: 'CGPA >= 6.5',
    status: 'Eligible',
    applied: false,
    driveDate: '2026-11-15'
  },
  {
    id: 'job-4',
    company: 'Tech Mahindra',
    role: 'Graduate Software Trainee',
    packageLPA: '4.8 LPA',
    location: 'Bengaluru / Pune',
    deadline: '2026-11-08',
    eligibility: 'CGPA >= 6.0',
    status: 'Eligible',
    applied: false,
    driveDate: '2026-11-20'
  }
];
