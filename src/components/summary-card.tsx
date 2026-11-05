type SummaryCardTone = "violet" | "green" | "amber";

interface SummaryCardProps {
  label: string;
  value: string;
  description: string;
  tone: SummaryCardTone;
}

const toneStyles: Record<SummaryCardTone, string> = {
  violet: "bg-[#f0f0fb] text-[#5152a5]",
  green: "bg-[#e9f5ee] text-[#387555]",
  amber: "bg-[#fff4e3] text-[#ad7625]",
};

export default function SummaryCard({
  label,
  value,
  description,
  tone,
}: SummaryCardProps) {
  return (
    <article className="rounded-2xl border border-[#e9eaf1] bg-white p-5 shadow-[0_8px_32px_-24px_rgba(33,34,65,0.2)] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-[#77798e]">{label}</p>
        <span
          aria-hidden="true"
          className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${toneStyles[tone]}`}
        >
          <span className="size-2 rounded-full bg-current" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-[#20213b]">
        {value}
      </p>
      <p className="mt-1 text-xs text-[#77798e]">{description}</p>
    </article>
  );
}
