import StudentPortalBanner from "@/components/shared/StudentPortalBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { studentData } from "@/data/student";
import CourseCard from "@/components/shared/CourseCard";
import { motion } from "framer-motion";

const Courses = () => {
  const { courses,droppedCourses } = studentData;

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
      <div className="m-6">
      <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ type: "tween", duration: 0.5 }} // Control the transition timing
          >
        <Tabs defaultValue="current-courses" className="">
          <TabsList>
            <TabsTrigger value="current-courses">Current Courses</TabsTrigger>
            {/* <TabsTrigger value="finished-courses">Finished Courses</TabsTrigger> */}
            <TabsTrigger value="dropped-courses">Dropped Courses</TabsTrigger>
          </TabsList>
          <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ type: "tween", duration: 1 }} // Control the transition timing
          >

          <TabsContent value="current-courses"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {courses?.map((course) => (
              <CourseCard key={course.courseId} course={course} />
            ))}
          </TabsContent>
            </motion.div>
         
          <TabsContent value="dropped-courses"
          className="grid grid-cols-1 lg:grid-cols-3"
          >
            {
              droppedCourses?.map((course)=> 
              <CourseCard key={course.courseId} course={course} />)
            }
          </TabsContent>
        </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
