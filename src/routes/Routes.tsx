import MainLayout from "@/layouts/MainLayout";
import StudentDashboardLayout from "@/layouts/StudentDashboardLayout";
import CourseRegistration from "@/pages/CourseRegistration";
import Courses from "@/pages/Courses";
import Dashboard from "@/pages/Dashboard";
import Events from "@/pages/Events";
import FacultyManagement from "@/pages/FacultyManagement";
import Grades from "@/pages/Grades";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, // General layout for pages without sidebar
      children: [
        {   path: "/",
            element: <Navigate to="/student-dashboard" replace /> 
        },
        {   path: "/faculty-management",
            element: <FacultyManagement /> 
        },
        {   path: "/course-registration",
            element: <CourseRegistration /> 
        },
      ],
    },
    {
      path: "student-dashboard",
      element: <StudentDashboardLayout />,
      children: [
        {   path: "dashboard",
            element: <Dashboard /> 
        },
        {
          path: "courses",
          element: <Courses />
        },
        {
          path: "grades",
          element: <Grades />
        },
        {
          path: "events",
          element: <Events />
        }
      ],
    },
  ]);

export default router;
