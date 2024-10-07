import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const StudentDashboardLayout = () => {

  const variants = {
    enter: {
      x: "100%",  // Start off the right side
      opacity: 0, // Start invisible
    },
    center: {
      x: 0,       // Move to the center
      opacity: 1, // Fade in
    },
    exit: {
      x: "-100%", // Move to the left side
      opacity: 0, // Fade out
    },
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex gap-1 mt-16">
        <Sidebar />

        <div className="flex-grow h-[calc(100vh-72px)] pb-20 overflow-y-scroll">
        <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ type: "tween", duration: 0.5 }} // Control the transition timing
          >
          <Outlet />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
