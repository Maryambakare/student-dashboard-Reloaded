export interface Course {
  id: string;
  name: string;
  code: string;
  instructor: string;
  progress: number;
  tone: "violet" | "green" | "amber";
}

export const courses: Course[] = [
  {
    id: "ux-design",
    name: "Introduction to UX Design",
    code: "DES 210",
    instructor: "Jamie Rivera",
    progress: 72,
    tone: "violet",
  },
  {
    id: "data-structures",
    name: "Data Structures",
    code: "CS 240",
    instructor: "Morgan Chen",
    progress: 48,
    tone: "green",
  },
  {
    id: "web-development",
    name: "Web Development",
    code: "CS 315",
    instructor: "Taylor Brooks",
    progress: 36,
    tone: "amber",
  },
];
