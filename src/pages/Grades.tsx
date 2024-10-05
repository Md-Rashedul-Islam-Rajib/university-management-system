import StudentPortalBanner from '@/components/shared/StudentPortalBanner'
import { studentData } from "@/data/student";
import CourseCard from '@/components/shared/CourseCard';

const Grades = () => {
    const {droppedCourses } = studentData;
  return (
    <div>
    <div className="m-6">
    <StudentPortalBanner />
    </div>
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {
                droppedCourses?.map((course) => 
                    <CourseCard key={course.courseId} course={course} />)
            }
        </div>

    </div>
  
</div>
  )
}

export default Grades
