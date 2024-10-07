// src/components/EnrollForm.tsx
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"; // Import React Hook Form
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select"; 
import { Button } from "@/components/ui/button"; 
import {
//   Toast,
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

// import { Course } from "@/types/interfaces"; // Type definition for Course
import { studentData } from "@/data/student";
 // Example data file



interface RegistrationFormInputs {
  studentName: string;
  studentEmail: string;
  studentId: string;
  courseId: string[];
}

const EnrollForm: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string | unknown>([]);
  const { studentName, studentEmail, studentId } = studentData; // Sample student data
  const { toast } = useToast(); // Custom hook to trigger toast notifications
console.log(selectedCourses)
  // Initialize form with React Hook Form
  const form = useForm<RegistrationFormInputs>({
    defaultValues: {
      studentName,
      studentEmail,
      studentId,
      courseId : []
    },
  });

  // Function to handle form submission
  const handleCourseEnrollment: SubmitHandler<RegistrationFormInputs> = (
    regInfo
  ) => {
    
    toast({
      title: "Enrollment Successful"
    });

    // Remove selected courses from the list of available courses
    
    form.reset(); // Reset form fields
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-lg mx-auto">
      {/* Toast Provider */}
      <ToastProvider>
        {/* Enrollment Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCourseEnrollment)}>
            {/* Student Name */}
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Student Email */}
            <FormField
              control={form.control}
              name="studentEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Student ID */}
            <FormField
              control={form.control}
              name="studentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your student ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Course Selection */}
            <FormField
              control={form.control}
              name="courseId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Courses </FormLabel>
                  <FormControl>
                    <Select
                    //   multiple
                      value={''}
                      onValueChange={(value) => {
                        setSelectedCourses(value);
                        field.onChange(value);
                      }}
                    >
                      {/* Populate select options dynamically */}
                      
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="mt-4">
              Enroll Now
            </Button>
          </form>
        </Form>

        {/* Toast Viewport (container for toast notifications) */}
        <ToastViewport />
      </ToastProvider>
    </div>
  );
};

export default EnrollForm;
