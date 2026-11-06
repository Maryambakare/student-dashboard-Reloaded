import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const toneStyles = {
  sage: "bg-[#A3BFA8]",
  deep: "bg-[#527A60]",
  pale: "bg-[#D5DFC9]",
};

const progressStyles = {
  sage: "bg-[#A3BFA8]",
  deep: "bg-[#527A60]",
  pale: "bg-[#D5DFC9]",
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="rounded-2xl border border-[#D8E1D2] bg-[#FFFDF7] p-5 shadow-[0_8px_32px_-24px_rgba(53,74,57,0.2)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] text-[#657568] uppercase">
            {course.code}
          </p>
          <h3 className="mt-2 text-base font-bold tracking-tight text-[#354A39]">
            {course.name}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className={`mt-0.5 size-3 shrink-0 rounded-full ${toneStyles[course.tone]}`}
        />
      </div>

      <p className="mt-4 text-sm text-[#657568]">
        Instructor: {course.instructor}
      </p>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs">
          <span className="font-medium text-[#657568]">Course progress</span>
          <span className="font-semibold text-[#354A39]">
            {course.progress}%
          </span>
        </div>
        <div
          aria-label={`${course.name} progress`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={course.progress}
          className="h-2 overflow-hidden rounded-full bg-[#E5EBDD]"
          role="progressbar"
        >
          <div
            className={`h-full rounded-full ${progressStyles[course.tone]}`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}
