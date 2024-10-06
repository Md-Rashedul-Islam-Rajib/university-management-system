import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
  
import { Faculty } from '@/types/interfaces';

  interface facultyProps {
    faculty : Faculty;
  }

const FacultyCard:React.FC<facultyProps> = ({faculty}) => {
  return (
    <Card className="w-96 mx-auto bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{faculty.facultyName}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{faculty.designation}</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                  <strong>Subjects: </strong>
                  <span className="font-semibold">
                    {
                        faculty.subjects?.slice(0,3).join(", ")
                    }
                    <span className='hidden lg:block'>{
                        faculty.subjects.length > 3 && 
                        <HoverCard>
                            <HoverCardTrigger>
                        <span className='text-blue-600'>
                            , +{
                                faculty.subjects.length - 3
                            } more
                            </span>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                {faculty.subjects.slice(3).join(", ")}
                            </HoverCardContent>
                            </HoverCard>
                    }</span>
                    <span className='lg:hidden'>{
                        faculty.subjects.length > 3 && 
                        <Popover>
                            <PopoverTrigger>
                        <span className='text-blue-600'>
                            , +{
                                faculty.subjects.length - 3
                            } more
                            </span>
                            </PopoverTrigger>
                            <PopoverContent>
                                {faculty.subjects.slice(3).join(", ")}
                            </PopoverContent>
                            </Popover>
                    }</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                  <strong>Office Hours: </strong>
                    <span className="font-semibold">{faculty.officeHours}</span>
                  </div>
                  <div className="flex items-center gap-4">
                  <strong>Contact: </strong>
                    <span className="font-semibold">{faculty.contactEmail}</span>
                  </div>
                 
                </CardContent>
              </Card>
  )
}

export default FacultyCard
