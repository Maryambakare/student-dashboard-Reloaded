import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const toneStyles = {
  violet: "bg-[#6868bd]",
  green: "bg-[#62a780]",
  amber: "bg-[#e1aa54]",
};

const progressStyles = {
  violet: "bg-[#6868bd]",
  green: "bg-[#62a780]",
  amber: "bg-[#e1aa54]",
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="rounded-2xl border border-[#e9eaf1] bg-white p-5 shadow-[0_8px_32px_-24px_rgba(33,34,65,0.2)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] text-[#77798e] uppercase">
            {course.code}
          </p>
          <h3 className="mt-2 text-base font-bold tracking-tight text-[#20213b]">
            {course.name}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className={`mt-0.5 size-3 shrink-0 rounded-full ${toneStyles[course.tone]}`}
        />
      </div>

      <p className="mt-4 text-sm text-[#77798e]">
        Instructor: {course.instructor}
      </p>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs">
          <span className="font-medium text-[#77798e]">Course progress</span>
          <span className="font-semibold text-[#363751]">
            {course.progress}%
          </span>
        </div>
        <div
          aria-label={`${course.name} progress`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={course.progress}
          className="h-2 overflow-hidden rounded-full bg-[#f0f0f5]"
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
