export interface CourseFinished {
	courseId: string;
	courseName: string;
	professorName: string;
	professorEmail: string;
	grade?: string;
	semester: string;
	credits: number;
	duration: string;
}

export interface CourseReg {
	courseId: string;
	courseName: string;
	professorName: string;
	professorEmail: string;
	credits: number;
	department: string;
	capacity: number;
	enrolled: number;
	duration: string;
}

export interface Event {
	eventId: string;
	title: string;
	date: Date;
	description: string;
}

export interface StudentData {
	studentName: string;
	studentId: string;
	studentEmail: string;
	studentImage: string;
	admissionDate: Date;
	currentSemester: string;
	expectedGraduationDate: Date;
	courses: CourseReg[] | CourseFinished[];
	finishedCourses: CourseFinished[];
	upcomingEvents: Event[];
}