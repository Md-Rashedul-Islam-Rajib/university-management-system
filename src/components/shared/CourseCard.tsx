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
    <Card className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{course?.courseName}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{course?.courseId}</CardDescription>
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
                </CardContent>
              </Card>
  )
}

export default CourseCard
