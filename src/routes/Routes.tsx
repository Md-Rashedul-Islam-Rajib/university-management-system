import MainLayout from "@/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/student-dashboard",
        element: <h1>Student Dashboard</h1>,
      },
      {
        path: "/faculty-management",
        element: <h1>Faculty</h1>,
      },
      {
        path: "/course-registration",
        element: <h1>course</h1>,
      },
    ],
  },
]);

export default router;
