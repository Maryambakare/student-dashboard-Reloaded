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

type AssignmentFilter = "all" | "pending" | "completed";
type AssignmentSortOrder = "soonest" | "latest";

const assignmentFilters: { label: string; value: AssignmentFilter }[] = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Completed", value: "completed" },
];

const assignmentSortOrders: {
  label: string;
  value: AssignmentSortOrder;
}[] = [
  { label: "Due soonest", value: "soonest" },
  { label: "Due latest", value: "latest" },
];

export default function Home() {
  const [completedAssignmentIds, setCompletedAssignmentIds] = useState<
    string[]
  >([]);
  const [assignmentFilter, setAssignmentFilter] =
    useState<AssignmentFilter>("all");
  const [assignmentSortOrder, setAssignmentSortOrder] =
    useState<AssignmentSortOrder>("soonest");
  const filteredAssignments = initialAssignments.filter((assignment) => {
    const isCompleted = completedAssignmentIds.includes(assignment.id);
    return (
      assignmentFilter === "all" ||
      (assignmentFilter === "completed" && isCompleted) ||
      (assignmentFilter === "pending" && !isCompleted)
    );
  });
  const sortedAssignments = [...filteredAssignments].sort((first, second) => {
    const dueDateDifference =
      Date.parse(first.dueDate) - Date.parse(second.dueDate);
    return assignmentSortOrder === "soonest"
      ? dueDateDifference
      : -dueDateDifference;
  });
  const incompleteAssignments =
    initialAssignments.length - completedAssignmentIds.length;
  const summary = [
    {
      label: "Enrolled Courses",
      value: String(courses.length).padStart(2, "0"),
      description: "Courses this semester",
      tone: "sage" as const,
    },
    {
      label: "Completed Assignments",
      value: String(completedAssignmentIds.length).padStart(2, "0"),
      description: "Nice work—keep it up",
      tone: "deep" as const,
      announceChanges: true,
    },
    {
      label: "Pending Assignments",
      value: String(incompleteAssignments).padStart(2, "0"),
      description: "Ready when you are",
      tone: "pale" as const,
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
    <div className="min-h-screen bg-[#F8F4E9] text-[#354A39] lg:flex">
      <aside className="border-b border-[#D8E1D2] bg-[#FFFDF7] lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r">
        <div className="flex flex-col items-stretch gap-4 px-5 py-5 sm:px-8 lg:h-full lg:justify-start lg:gap-0 lg:px-6 lg:py-8">
          <a
            aria-label="Studyspace home"
            className="flex shrink-0 items-center gap-3"
            href="#overview"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#527A60] text-lg font-bold text-white">
              s
            </span>
            <span className="text-lg font-bold tracking-tight">studyspace</span>
          </a>

          <div className="lg:mt-12">
            <p className="hidden px-3 text-xs font-semibold tracking-[0.16em] text-[#657568] uppercase lg:mb-3 lg:block">
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
                          ? "bg-[#E5EBDD] text-[#527A60]"
                          : "text-[#657568] hover:bg-[#F8F4E9] hover:text-[#354A39]"
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

          <p className="mt-auto hidden rounded-2xl bg-[#E5EBDD] p-4 text-sm leading-6 text-[#657568] lg:block">
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
            <p className="mb-2 text-sm font-semibold text-[#657568]">
              YOUR STUDENT DASHBOARD
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back, {student.name.split(" ")[0]}!
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#657568] sm:text-base">
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
              <p className="text-sm font-semibold text-[#527A60]">
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
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#527A60]">
                  YOUR SEMESTER
                </p>
                <h2
                  className="mt-1 text-xl font-bold tracking-tight"
                  id="assignments-heading"
                >
                  Your assignments
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div
                  aria-label="Filter assignments by status"
                  className="flex flex-wrap gap-2"
                  role="group"
                >
                  {assignmentFilters.map((filter) => (
                    <button
                      aria-pressed={assignmentFilter === filter.value}
                      className={`min-h-11 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                        assignmentFilter === filter.value
                          ? "bg-[#527A60] text-white"
                          : "border border-[#D8E1D2] bg-[#FFFDF7] text-[#657568] hover:bg-[#E5EBDD] hover:text-[#354A39]"
                      }`}
                      key={filter.value}
                      onClick={() => setAssignmentFilter(filter.value)}
                      type="button"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
                <label className="flex min-h-11 items-center gap-2 text-sm font-medium text-[#657568]">
                  Sort
                  <select
                    className="min-h-11 rounded-xl border border-[#D8E1D2] bg-[#FFFDF7] px-3 text-sm font-semibold text-[#354A39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#527A60]"
                    onChange={(event) => {
                      const value = event.currentTarget.value;
                      if (value === "soonest" || value === "latest") {
                        setAssignmentSortOrder(value);
                      }
                    }}
                    value={assignmentSortOrder}
                  >
                    {assignmentSortOrders.map((order) => (
                      <option key={order.value} value={order.value}>
                        {order.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            {sortedAssignments.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {sortedAssignments.map((assignment) => (
                  <AssignmentCard
                    assignment={assignment}
                    completed={completedAssignmentIds.includes(assignment.id)}
                    key={assignment.id}
                    onToggleCompleted={toggleAssignmentCompletion}
                  />
                ))}
              </div>
            ) : (
              <p
                className="rounded-2xl border border-dashed border-[#D8E1D2] bg-[#FFFDF7] px-5 py-8 text-center text-sm text-[#657568]"
                role="status"
              >
                No {assignmentFilter} assignments right now.
              </p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
