type SummaryCardTone = "sage" | "deep" | "pale";

interface SummaryCardProps {
  label: string;
  value: string;
  description: string;
  tone: SummaryCardTone;
  announceChanges?: boolean;
}

const toneStyles: Record<SummaryCardTone, string> = {
  sage: "bg-[#E5EBDD] text-[#527A60]",
  deep: "bg-[#E5EBDD] text-[#354A39]",
  pale: "bg-[#F8F4E9] text-[#527A60]",
};

export default function SummaryCard({
  label,
  value,
  description,
  tone,
  announceChanges = false,
}: SummaryCardProps) {
  return (
    <article className="rounded-2xl border border-[#D8E1D2] bg-[#FFFDF7] p-5 shadow-[0_8px_32px_-24px_rgba(53,74,57,0.2)] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div
          aria-atomic={announceChanges || undefined}
          aria-live={announceChanges ? "polite" : undefined}
        >
          <p className="text-sm font-medium text-[#657568]">{label}</p>
          <p className="mt-4 text-3xl font-bold tracking-tight text-[#354A39]">
            {value}
          </p>
        </div>
        <span
          aria-hidden="true"
          className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${toneStyles[tone]}`}
        >
          <span className="size-2 rounded-full bg-current" />
        </span>
      </div>
      <p className="mt-1 text-xs text-[#657568]">{description}</p>
    </article>
  );
}
