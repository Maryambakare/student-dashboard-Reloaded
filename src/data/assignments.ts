export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  description: string;
}

export const initialAssignments: Assignment[] = [
  {
    id: "ux-wireframes",
    title: "Finalize your wireframes",
    course: "Introduction to UX Design",
    dueDate: "2026-11-08",
    description: "Polish the main screens for your term project.",
  },
  {
    id: "data-structures-quiz",
    title: "Binary trees practice",
    course: "Data Structures",
    dueDate: "2026-11-11",
    description: "Complete the problem set and show your working.",
  },
  {
    id: "web-development-project",
    title: "Build a responsive landing page",
    course: "Web Development",
    dueDate: "2026-11-14",
    description: "Submit a working page that adapts to mobile screens.",
  },
];
