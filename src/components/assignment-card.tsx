import type { Assignment } from "@/data/assignments";

interface AssignmentCardProps {
  assignment: Assignment;
  completed?: boolean;
  onToggleCompleted?: (assignmentId: string) => void;
}

export default function AssignmentCard({
  assignment,
  completed = false,
  onToggleCompleted,
}: AssignmentCardProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl border bg-white p-5 shadow-[0_8px_32px_-24px_rgba(33,34,65,0.2)] transition-colors sm:p-6 ${
        completed ? "border-[#A3BFA8]" : "border-[#D8E1D2]"
      }`}
    >
      <div className="flex flex-1 items-start gap-3">
        <span
          aria-hidden="true"
          className={`mt-1.5 size-2 shrink-0 rounded-full ${
            completed ? "bg-[#527A60]" : "bg-[#A3BFA8]"
          }`}
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#657568] uppercase">
              {assignment.course}
            </p>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                completed
                  ? "bg-[#E5EBDD] text-[#527A60]"
                  : "bg-[#F8F4E9] text-[#527A60]"
              }`}
            >
              {completed ? "Completed" : "Pending"}
            </span>
          </div>
          <h3 className="mt-2 text-base font-bold leading-6 tracking-tight text-[#354A39]">
            {assignment.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#657568]">
            {assignment.description}
          </p>
        </div>
      </div>
      <p className="mt-5 border-t border-[#D8E1D2] pt-4 text-xs font-semibold text-[#657568]">
        Due date ·{" "}
        <time dateTime={assignment.dueDate}>
          {new Date(`${assignment.dueDate}T12:00:00`).toLocaleDateString(
            "en-US",
            { day: "numeric", month: "short" },
          )}
        </time>
      </p>
      {onToggleCompleted && (
        <button
          aria-pressed={completed}
          className={`mt-4 min-h-11 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
            completed
              ? "bg-[#E5EBDD] text-[#354A39] hover:bg-[#D8E1D2]"
              : "bg-[#527A60] text-white hover:bg-[#42674E]"
          }`}
          onClick={() => onToggleCompleted(assignment.id)}
          type="button"
        >
          {completed ? "Mark as Incomplete" : "Mark as Completed"}
        </button>
      )}
      {completed && (
        <p className="sr-only" role="status">
          {assignment.title} marked as completed.
        </p>
      )}
    </article>
  );
}
