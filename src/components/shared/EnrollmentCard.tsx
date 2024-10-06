import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
import { CourseReg } from "@/types/interfaces";
import { FaBuilding } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { PiCoinFill } from "react-icons/pi";

  interface CardProps {
    course : CourseReg;
  }

const EnrollmentCard:React.FC<CardProps> = ({course}) => {
  return (
    <Card className="w-80 md:w-72 lg:w-80 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-xl font-bold dark:text-white">{course?.courseName}</CardTitle>
                  <CardDescription className="text-sm text-white">
                </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                        <span><IoMdPersonAdd /></span>
                        <h2>{course.professorName}</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <span><PiCoinFill /></span>
                        <h2>{course.credits} Credits</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <span><FaBuilding /></span>
                        <h2>{course.department} Credits</h2>
                    </div>
                </CardContent>
              </Card>
  )
}

export default EnrollmentCard
