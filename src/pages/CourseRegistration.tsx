import EnrollmentCard from "@/components/shared/EnrollmentCard";
import { coursesData } from "@/data/course"


const CourseRegistration = () => {

  const courses = coursesData;

  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          courses?.map((course)=> 
          <EnrollmentCard key={course.courseId} course={course} />

          )
        }
      </div>

    </div>
  )
}

export default CourseRegistration
