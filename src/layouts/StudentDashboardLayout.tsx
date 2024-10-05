import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { Outlet } from "react-router-dom";

const StudentDashboardLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex gap-1 mt-16">
        <Sidebar />

        <div className="flex-grow h-[calc(100vh-72px)] pb-20 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
