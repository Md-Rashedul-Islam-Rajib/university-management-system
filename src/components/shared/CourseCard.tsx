import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
import { CourseFinished, CourseReg } from '@/types/interfaces';


interface CardProps {
    course: CourseReg | CourseFinished;
}

const CourseCard:React.FC<CardProps> = ({course}) => {
  return (
    <Card className="w-80 md:w-72 lg:w-80 mx-auto bg-emerald-600 text-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-xl font-bold">{course?.courseName}</CardTitle>
                  <CardDescription className="text-sm text-white">{course?.courseId}</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-4">
                  <h2>Professor : </h2>
                  <span className="font-semibold">{course?.professorName}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                  <h3>Email : </h3>
                    <span className="font-semibold">{course?.professorEmail}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                  <h3>Credit(s) : </h3>
                  <span className="font-semibold">{course?.credits}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                  <h3>Duration : </h3>
                  <span className="font-semibold">{course?.duration}</span>
                  </div>
                  {course?.grade && <div className="flex items-center justify-between gap-4">
                  <h3>Grade : </h3>
                  <span className="font-semibold">{course?.grade}</span>
                  </div>}
                </CardContent>
              </Card>
  )
}

export default CourseCard
