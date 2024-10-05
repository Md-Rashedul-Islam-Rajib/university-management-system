// src/components/StudentCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FaGraduationCap, FaCalendarAlt, FaIdCard } from "react-icons/fa";
import { studentData } from "@/data/student";
import image from "../../../public/image.png";

const StudentCard: React.FC = () => {
  const {
    studentName: name,
    studentId,
    // admissionDate,
    currentSemester,
    // expectedGraduationDate
  } = studentData;

  return (
    <Card className="max-w-sm mx-auto bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-2xl hover:-translate-y-1">
      <CardHeader className="flex flex-col items-center">
        <div>
          <img src={image} alt="" className="size-28 p-1 border rounded-full" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{`ID: ${studentId}`}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Admission Date
            </span>
          </div>
          <span className="font-medium text-gray-900 dark:text-white">
            September 1, 2021
          </span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FaIdCard className="text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Current Semester
            </span>
          </div>
          <span className="font-medium text-gray-900 dark:text-white">
            {currentSemester}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Expected Graduation Date
            </span>
          </div>
          <span className="font-medium text-gray-900 dark:text-white">
            June 30, 2025
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
