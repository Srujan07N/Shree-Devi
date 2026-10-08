import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from '../layouts/PublicLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { ProtectedRoute } from './ProtectedRoute';

// Public Pages
import { HomePage } from '../pages/public/HomePage';
import { AboutPage, LeadershipPage } from '../pages/public/AboutPage';
import { ProgramsPage } from '../pages/public/ProgramsPage';
import { ProgramDetailPage } from '../pages/public/ProgramDetailPage';
import { DepartmentsPage } from '../pages/public/DepartmentsPage';
import { AdmissionsPage } from '../pages/public/AdmissionsPage';
import { PlacementsPage } from '../pages/public/PlacementsPage';
import { CampusPage, FacilitiesPage } from '../pages/public/CampusPage';
import { HostelPage, StudentLifePage } from '../pages/public/HostelPage';
import { EventsPage } from '../pages/public/EventsPage';
import { NewsPage } from '../pages/public/NewsPage';
import { FacultyPage } from '../pages/public/FacultyPage';
import { ResearchPage, AlumniPage } from '../pages/public/ResearchPage';
import { GalleryPage, CareersPage } from '../pages/public/GalleryPage';
import { ContactPage } from '../pages/public/ContactPage';

// Auth
import { LoginPage } from '../pages/auth/LoginPage';

// Student Dashboard Views
import { StudentOverview } from '../pages/dashboard/student/StudentOverview';
import { StudentAttendance, StudentCourses } from '../pages/dashboard/student/StudentAttendance';
import { StudentTimetable, StudentAssignments } from '../pages/dashboard/student/StudentTimetable';
import { StudentExams, StudentPlacements } from '../pages/dashboard/student/StudentExams';
import { StudentProfile } from '../pages/dashboard/student/StudentProfile';

// Faculty Dashboard Views
import { FacultyOverview, FacultyAttendance } from '../pages/dashboard/faculty/FacultyOverview';
import {
  FacultyAssignments,
  FacultyMarks,
  FacultyStudents
} from '../pages/dashboard/faculty/FacultyAssignments';

// Admin Dashboard Views
import { AdminOverview, AdminStudents } from '../pages/dashboard/admin/AdminOverview';
import { AdminFaculty, AdminAdmissions } from '../pages/dashboard/admin/AdminFaculty';
import { AdminPlacements, AdminEvents } from '../pages/dashboard/admin/AdminPlacements';
import { AdminCMS, AdminAnalytics } from '../pages/dashboard/admin/AdminCMS';

// Errors
import { NotFoundPage, UnauthorizedPage } from '../pages/errors/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* 1. PUBLIC INSTITUTIONAL PAGES */}
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="leadership" element={<LeadershipPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="programs/:id" element={<ProgramDetailPage />} />
        <Route path="departments" element={<DepartmentsPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="placements" element={<PlacementsPage />} />
        <Route path="campus" element={<CampusPage />} />
        <Route path="facilities" element={<FacilitiesPage />} />
        <Route path="hostel" element={<HostelPage />} />
        <Route path="student-life" element={<StudentLifePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="faculty" element={<FacultyPage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="alumni" element={<AlumniPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* 2. AUTHENTICATION PORTALS */}
      <Route path="student/login" element={<LoginPage initialRole="student" />} />
      <Route path="faculty/login" element={<LoginPage initialRole="faculty" />} />
      <Route path="admin/login" element={<LoginPage initialRole="admin" />} />

      {/* 3. STUDENT DASHBOARD */}
      <Route
        path="student"
        element={
          <ProtectedRoute allowedRole="student">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<StudentOverview />} />
        <Route path="attendance" element={<StudentAttendance />} />
        <Route path="courses" element={<StudentCourses />} />
        <Route path="timetable" element={<StudentTimetable />} />
        <Route path="assignments" element={<StudentAssignments />} />
        <Route path="exams" element={<StudentExams />} />
        <Route path="placements" element={<StudentPlacements />} />
        <Route path="profile" element={<StudentProfile />} />
      </Route>

      {/* 4. FACULTY DASHBOARD */}
      <Route
        path="faculty"
        element={
          <ProtectedRoute allowedRole="faculty">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<FacultyOverview />} />
        <Route path="attendance" element={<FacultyAttendance />} />
        <Route path="courses" element={<FacultyOverview />} />
        <Route path="students" element={<FacultyStudents />} />
        <Route path="assignments" element={<FacultyAssignments />} />
        <Route path="marks" element={<FacultyMarks />} />
        <Route path="profile" element={<FacultyOverview />} />
      </Route>

      {/* 5. ADMIN DASHBOARD */}
      <Route
        path="admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminOverview />} />
        <Route path="students" element={<AdminStudents />} />
        <Route path="faculty" element={<AdminFaculty />} />
        <Route path="admissions" element={<AdminAdmissions />} />
        <Route path="placements" element={<AdminPlacements />} />
        <Route path="events" element={<AdminEvents />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="cms" element={<AdminCMS />} />
      </Route>
    </Routes>
  );
};
