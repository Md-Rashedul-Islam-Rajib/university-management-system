import FacultyCard from "@/components/shared/FacultyCard";
import { facultyList } from "@/data/faculty"


const FacultyManagement = () => {
  const faculties = facultyList;
  return (
    <div className="pt-24 pb-16 md:mx-4">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
          faculties?.map((faculty)=>
          <FacultyCard key={faculty.facultyId} faculty={faculty} />
          )
        }
      </div>
    </div>
  )
}

export default FacultyManagement
