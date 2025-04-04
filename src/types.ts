export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
  stack_logo: string;
  link_curso: string;
}

export interface UserCourse {
  courseId: number;
  dateJoined: string;
}

export interface User {
  id: number;
  name: string;
  courses: UserCourse[];
}
