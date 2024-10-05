import StudentPortalBanner from "@/components/shared/StudentPortalBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { studentData } from "@/data/student";
import CourseCard from "@/components/shared/CourseCard";

const Courses = () => {
  const { courses,droppedCourses } = studentData;
  return (
    <div>
      <div className="m-6">
        <StudentPortalBanner />
      </div>
      <div className="m-6">
        <Tabs defaultValue="current-courses" className="">
          <TabsList>
            <TabsTrigger value="current-courses">Current Courses</TabsTrigger>
            {/* <TabsTrigger value="finished-courses">Finished Courses</TabsTrigger> */}
            <TabsTrigger value="dropped-courses">Dropped Courses</TabsTrigger>
          </TabsList>
          <TabsContent value="current-courses"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {courses?.map((course) => (
              <CourseCard key={course.courseId} course={course} />
            ))}
          </TabsContent>
         
          <TabsContent value="dropped-courses"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {
              droppedCourses?.map((course)=> 
              <CourseCard key={course.courseId} course={course} />)
            }
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;
