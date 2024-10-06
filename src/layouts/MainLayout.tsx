import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen py-20">
      <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
