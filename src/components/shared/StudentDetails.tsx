// src/components/StudentCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaIdCard,
  FaBuilding,
  FaCoins,
} from "react-icons/fa";
import { BiCoinStack, BiSolidCoinStack } from "react-icons/bi";
import { studentData } from "@/data/student";
import image from "../../../public/image.png";

const StudentCard: React.FC = () => {
  const {
    studentName: name,
    studentId,
    department,
    // admissionDate,
    currentSemester,
    // expectedGraduationDate
  } = studentData;

  return (
    <Card className="max-w-lg mx-auto bg-blue-700 text-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-2xl hover:-translate-y-1 flex ">
      <CardHeader className="flex flex-col items-center">
        <div className="size-28 border rounded-full grid place-items-center">
          <img src={image} alt="" className="h-24 p-1" />
        </div>
        <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-white">{`ID: ${studentId}`}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 text-sm lg:text-base">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <span>Admission Date</span>
          </div>
          <span className="font-medium">September 1, 2021</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <FaBuilding />
            <span>Department</span>
          </div>
          <span className="font-medium">{department}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <FaCoins />
            <span>Total Credit(s)</span>
          </div>
          <span className="font-medium">164</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <BiSolidCoinStack />
            <span>Credit(s) Completed</span>
          </div>
          <span className="font-medium">128</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <BiCoinStack />
            <span>Remaining Credit(s)</span>
          </div>
          <span className="font-medium">36</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <FaIdCard />
            <span>Current Semester</span>
          </div>
          <span className="font-medium">{currentSemester}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaGraduationCap />
            <span>Expected Graduation In</span>
          </div>
          <span className="font-medium">June 30, 2025</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
