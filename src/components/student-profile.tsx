const student = {
  name: "Alex Morgan",
  program: "BSc Computer Science",
  year: "Year 2 student",
  email: "alex.morgan@campus.edu",
};

export default function StudentProfile() {
  return (
    <section
      aria-labelledby="student-profile-heading"
      className="mb-7 flex flex-col gap-5 rounded-3xl border border-[#e9eaf1] bg-white p-6 shadow-[0_8px_32px_-24px_rgba(33,34,65,0.2)] sm:flex-row sm:items-center sm:justify-between sm:p-8"
    >
      <div className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#e8e7fb] text-xl font-bold text-[#5152a5]"
        >
          AM
        </div>
        <div className="min-w-0">
          <p
            className="mb-1 text-xs font-semibold tracking-[0.12em] text-[#77798e] uppercase"
            id="student-profile-heading"
          >
            Student profile
          </p>
          <h2 className="truncate text-xl font-bold tracking-tight">
            {student.name}
          </h2>
          <p className="mt-1 text-sm text-[#77798e]">{student.program}</p>
        </div>
      </div>

      <div className="border-t border-[#e9eaf1] pt-4 sm:border-t-0 sm:border-l sm:py-1 sm:pl-8">
        <p className="text-sm font-semibold text-[#363751]">{student.year}</p>
        <p className="mt-1 break-all text-sm text-[#77798e]">
          {student.email}
        </p>
      </div>
    </section>
  );
}
