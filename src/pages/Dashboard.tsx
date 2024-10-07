import DailyNotice from "@/components/shared/DailyNotice";
import StudentCard from "@/components/shared/StudentDetails";
import StudentPortalBanner from "@/components/shared/StudentPortalBanner";
import { motion } from "framer-motion";

const Dashboard = () => {
  const variants = {
    enter: {
      x: "100%", // Start off the right side
      opacity: 0, // Start invisible
    },
    center: {
      x: 0, // Move to the center
      opacity: 1, // Fade in
    },
    exit: {
      x: "-100%", // Move to the left side
      opacity: 0, // Fade out
    },
  };
  return (
    <div>
      <div className="m-6">
        <StudentPortalBanner />
      </div>
      <div className="grid gap-2 md:gap-4 grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ type: "tween", duration: 0.5 }} // Control the transition timing
        >
          <StudentCard />
        </motion.div>
        <motion.div
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ type: "tween", duration: 1 }} // Control the transition timing
        >
          <DailyNotice />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
