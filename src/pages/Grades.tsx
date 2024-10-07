import StudentPortalBanner from '@/components/shared/StudentPortalBanner'
import { studentData } from "@/data/student";
import CourseCard from '@/components/shared/CourseCard';
import { motion } from "framer-motion";

const Grades = () => {
    const {finishedCourses } = studentData;
    const variants = {
      enter: {
        x: "100%",  
        opacity: 0, 
      },
      center: {
        x: 0,       
        opacity: 1, 
      },
      exit: {
        x: "-100%", 
        opacity: 0, 
      },
    };
  return (
    <div>
    <div className="m-6">
    <StudentPortalBanner />
    </div>
    <div>
    <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ type: "tween", duration: 0.5 }} 
          >
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                finishedCourses?.map((course) => 
                    <CourseCard key={course.courseId} course={course} />)
            }
        </div>
        </motion.div>
    </div>
  
</div>
  )
}

export default Grades
