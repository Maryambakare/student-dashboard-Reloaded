export interface Course {
  id: string;
  name: string;
  code: string;
  instructor: string;
  progress: number;
  tone: "sage" | "deep" | "pale";
}

export const courses: Course[] = [
  {
    id: "ux-design",
    name: "Introduction to UX Design",
    code: "DES 210",
    instructor: "Jamie Rivera",
    progress: 72,
    tone: "sage",
  },
  {
    id: "data-structures",
    name: "Data Structures",
    code: "CS 240",
    instructor: "Morgan Chen",
    progress: 48,
    tone: "deep",
  },
  {
    id: "web-development",
    name: "Web Development",
    code: "CS 315",
    instructor: "Taylor Brooks",
    progress: 36,
    tone: "pale",
  },
];
