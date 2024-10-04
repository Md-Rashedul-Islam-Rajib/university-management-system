import MainLayout from "@/layouts/MainLayout";
import StudentDashboardLayout from "@/layouts/StudentDashboardLayout";
import CourseRegistration from "@/pages/CourseRegistration";
import FacultyManagement from "@/pages/FacultyManagement";
import StudentDashboard from "@/pages/StudentDashboard";
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
      path: "/student-dashboard",
      element: <StudentDashboardLayout />,
      children: [
        {   path: "",
            element: <StudentDashboard /> 
        },
      ],
    },
  ]);

export default router;
