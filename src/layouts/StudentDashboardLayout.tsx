import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { Outlet } from "react-router-dom";

const StudentDashboardLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex gap-1 mt-16 h-[calc(100vh-72px)]">
        <Sidebar />

        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
