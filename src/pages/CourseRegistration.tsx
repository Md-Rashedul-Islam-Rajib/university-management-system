// src/components/CourseRegistration.tsx
import { useState, useEffect } from "react";
import EnrollmentCard from "@/components/shared/EnrollmentCard";
import { coursesData } from "@/data/course";
import { Input } from "@/components/ui/input"; // Import the shadcn Input component
import { Button } from "@/components/ui/button"; // Import the shadcn Button component
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"; 
import { Label } from "@/components/ui/label";
import { CourseReg } from "@/types/interfaces";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormInputs {
  name: string;
  email: string;
  studentId: string;
  courseName: string;
}

// Course Registration Component
const CourseRegistration = () => {
  const [courses] = useState<CourseReg[]>(coursesData); // Initialize courses state with coursesData
  const [filteredCourses, setFilteredCourses] = useState<CourseReg[]>(coursesData); // State to manage filtered courses
  const [searchTerm, setSearchTerm] = useState<string>(""); // State to handle search term
  const [selectedCourse, setSelectedCourse] = useState< string>(''); // State to handle selected course for modal
  console.log(selectedCourse);
  // Handle search input change and filter courses
  useEffect(() => {
    const filtered = courses.filter((course) => {
      // Safely check each property before calling .toLowerCase()
      const courseName = course.courseName
        ? course.courseName.toLowerCase()
        : "";
      const instructor = course.professorName
        ? course.professorName.toLowerCase()
        : "";

      // Check if the search term matches any of the fields
      return (
        courseName.includes(searchTerm.toLowerCase()) ||
        instructor.includes(searchTerm.toLowerCase())
      );
    });
    setFilteredCourses(filtered);
  }, [searchTerm, courses]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
     toast.success(`Enrolled Successfully in ${data.courseName}`);
     reset();
  };

  return (
    <div className="p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Enroll in Courses</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <Input
          type="text"
          placeholder="Search courses by name, description, or instructor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 lg:w-1/3"
        />
      </div>

      <div className="flex justify-center pb-4">
        {/* Enrollment Modal */}
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Enroll Now</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enroll</DialogTitle>
              <DialogDescription>
                Please fill in the details below to complete your enrollment.
              </DialogDescription>
            </DialogHeader>

            {/* Enrollment Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", { required: "Name is required." })}
                className="mb-2"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address.",
                  },
                })}
                className="mb-2"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <Label htmlFor="id">Student Id</Label>
              <Input
                type="text"
                id="id"
                placeholder="Id"
                {...register("studentId", {
                  required: "Student Id is required.",
                })}
                className="mb-2"
              />
              {errors.studentId && (
                <p className="text-red-500">{errors.studentId.message}</p>
              )}

              <Label>Select a Course</Label>
              <Select onValueChange={(value) => setSelectedCourse(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Courses</SelectLabel>
                    {filteredCourses?.map((course) => (
                      <SelectItem
                        key={course.courseId}
                        value={course.courseName}
                      >
                        {course.courseName}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Add the selected course name to the form */}
              <input
                type="hidden"
                value={selectedCourse}
                {...register("courseName", {
                  required: "Please select a course.",
                })}
              />
              {errors.courseName && (
                <p className="text-red-500">{errors.courseName.message}</p>
              )}

              {/* Submit Button */}
              <DialogClose asChild>
                <Button type="submit" variant="default">
                  Submit
                </Button>
              </DialogClose>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <EnrollmentCard
            key={course.courseId}
            course={course}
            // onEnroll={() => setSelectedCourse(course)} // Set the selected course when enrolling
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CourseRegistration;


