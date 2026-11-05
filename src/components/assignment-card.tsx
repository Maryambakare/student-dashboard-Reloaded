import type { Assignment } from "@/data/assignments";

interface AssignmentCardProps {
  assignment: Assignment;
  completed: boolean;
  onToggleCompleted: (assignmentId: string) => void;
}

export default function AssignmentCard({
  assignment,
  completed,
  onToggleCompleted,
}: AssignmentCardProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl border bg-white p-5 shadow-[0_8px_32px_-24px_rgba(33,34,65,0.2)] transition-colors sm:p-6 ${
        completed ? "border-[#cfe6d7]" : "border-[#e9eaf1]"
      }`}
    >
      <div className="flex flex-1 items-start gap-3">
        <span
          aria-hidden="true"
          className={`mt-1.5 size-2 shrink-0 rounded-full ${
            completed ? "bg-[#62a780]" : "bg-[#a2a3cb]"
          }`}
        />
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.08em] text-[#77798e] uppercase">
            {assignment.course}
          </p>
          <h3 className="mt-2 text-base font-bold leading-6 tracking-tight text-[#20213b]">
            {assignment.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#77798e]">
            {assignment.description}
          </p>
        </div>
      </div>
      <p className="mt-5 border-t border-[#e9eaf1] pt-4 text-xs font-semibold text-[#ad7625]">
        {assignment.dueLabel} ·{" "}
        <time dateTime={assignment.dueDate}>
          {new Date(`${assignment.dueDate}T12:00:00`).toLocaleDateString(
            "en-US",
            { day: "numeric", month: "short" },
          )}
        </time>
      </p>
      <button
        aria-pressed={completed}
        className={`mt-4 min-h-11 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
          completed
            ? "bg-[#e9f5ee] text-[#387555] hover:bg-[#def0e5]"
            : "bg-[#5152a5] text-white hover:bg-[#41428f]"
        }`}
        onClick={() => onToggleCompleted(assignment.id)}
        type="button"
      >
        {completed ? "Mark as Incomplete" : "Mark as Completed"}
      </button>
      {completed && (
        <p className="sr-only" role="status">
          {assignment.title} marked as completed.
        </p>
      )}
    </article>
  );
}
