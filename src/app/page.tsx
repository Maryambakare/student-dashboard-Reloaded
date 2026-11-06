"use client";

import { useState } from "react";
import AssignmentCard from "@/components/assignment-card";
import CourseCard from "@/components/course-card";
import SummaryCard from "@/components/summary-card";
import StudentProfile from "@/components/student-profile";
import { initialAssignments } from "@/data/assignments";
import { courses } from "@/data/courses";
import { student } from "@/data/student";

const navigation = [
  { label: "Overview", href: "#overview", active: true },
  { label: "My courses", href: "#courses", active: false },
  { label: "Assignments", href: "#assignments", active: false },
];

export default function Home() {
  const [completedAssignmentIds, setCompletedAssignmentIds] = useState<
    string[]
  >([]);
  const incompleteAssignments =
    initialAssignments.length - completedAssignmentIds.length;
  const summary = [
    {
      label: "Enrolled Courses",
      value: String(courses.length).padStart(2, "0"),
      description: "Courses this semester",
      tone: "violet" as const,
    },
    {
      label: "Completed Assignments",
      value: String(completedAssignmentIds.length).padStart(2, "0"),
      description: "Nice work—keep it up",
      tone: "green" as const,
      announceChanges: true,
    },
    {
      label: "Pending Assignments",
      value: String(incompleteAssignments).padStart(2, "0"),
      description: "Ready when you are",
      tone: "amber" as const,
      announceChanges: true,
    },
  ];

  function toggleAssignmentCompletion(assignmentId: string) {
    setCompletedAssignmentIds((currentIds) =>
      currentIds.includes(assignmentId)
        ? currentIds.filter((id) => id !== assignmentId)
        : [...currentIds, assignmentId],
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-[#20213b] lg:flex">
      <aside className="border-b border-[#e9eaf1] bg-white lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r">
        <div className="flex flex-col items-stretch gap-4 px-5 py-5 sm:px-8 lg:h-full lg:justify-start lg:gap-0 lg:px-6 lg:py-8">
          <a
            aria-label="Studyspace home"
            className="flex shrink-0 items-center gap-3"
            href="#overview"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#5152a5] text-lg font-bold text-white">
              s
            </span>
            <span className="text-lg font-bold tracking-tight">studyspace</span>
          </a>

          <div className="lg:mt-12">
            <p className="hidden px-3 text-xs font-semibold tracking-[0.16em] text-[#77798e] uppercase lg:mb-3 lg:block">
              Workspace
            </p>
            <nav aria-label="Main navigation">
              <ul className="flex flex-wrap gap-1 lg:flex-col">
                {navigation.map((item) => (
                  <li className="shrink-0" key={item.label}>
                    <a
                      aria-current={item.active ? "page" : undefined}
                      className={`flex min-h-11 items-center whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        item.active
                          ? "bg-[#f0f0fb] text-[#5152a5]"
                          : "text-[#77798e] hover:bg-[#f6f7fb] hover:text-[#20213b]"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="mt-auto hidden rounded-2xl bg-[#f6f7fb] p-4 text-sm leading-6 text-[#77798e] lg:block">
            Small steps add up. Keep showing up for yourself.
          </p>
        </div>
      </aside>

      <main
        className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-10"
        id="overview"
      >
        <div className="mx-auto max-w-[1320px]">
          <header className="mb-9">
            <p className="mb-2 text-sm font-semibold text-[#77798e]">
              YOUR STUDENT DASHBOARD
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back, {student.name.split(" ")[0]}!
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#77798e] sm:text-base">
              Your classes, assignments, and progress all in one place.
            </p>
          </header>

          <StudentProfile />

          <section aria-label="Semester summary" className="mb-9">
            <h2 className="sr-only">Semester summary</h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {summary.map((card) => (
                <SummaryCard key={card.label} {...card} />
              ))}
            </div>
          </section>

          <section aria-labelledby="courses-heading" className="mb-10" id="courses">
            <div className="mb-5">
              <p className="text-sm font-semibold text-[#5152a5]">
                KEEP LEARNING
              </p>
              <h2
                className="mt-1 text-xl font-bold tracking-tight"
                id="courses-heading"
              >
                Your courses
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <CourseCard course={course} key={course.id} />
              ))}
            </div>
          </section>

          <section aria-labelledby="assignments-heading" id="assignments">
            <div className="mb-5">
              <p className="text-sm font-semibold text-[#5152a5]">
                YOUR SEMESTER
              </p>
              <h2
                className="mt-1 text-xl font-bold tracking-tight"
                id="assignments-heading"
              >
                Your assignments
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {initialAssignments.map((assignment) => (
                <AssignmentCard
                  assignment={assignment}
                  completed={completedAssignmentIds.includes(assignment.id)}
                  key={assignment.id}
                  onToggleCompleted={toggleAssignmentCompletion}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
