# Studyspace Student Dashboard

A responsive, one-page student dashboard built with the Next.js App Router,
React, TypeScript, and Tailwind CSS. All student and course information is
sample data; there is no backend or authentication.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the project,
run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Understand the project

- [`src/app/page.tsx`](./src/app/page.tsx) assembles the dashboard and uses
  React `useState` to track which assignments are complete.
- [`src/components/summary-card.tsx`](./src/components/summary-card.tsx)
  defines the reusable, typed `SummaryCard` component.
- [`src/data/assignments.ts`](./src/data/assignments.ts) defines the
  `Assignment` interface and the three sample assignments.
- [`src/data/courses.ts`](./src/data/courses.ts) defines the three course
  records.
- [`src/components/student-profile.tsx`](./src/components/student-profile.tsx),
  [`src/components/course-card.tsx`](./src/components/course-card.tsx), and
  [`src/components/assignment-card.tsx`](./src/components/assignment-card.tsx)
  render the profile and reusable content cards.
- [`src/app/globals.css`](./src/app/globals.css) contains the global styling
  and reduced-motion preference.

## Try the completion buttons

Select **Mark as Completed** on an assignment. Its button changes to
**Mark as Incomplete**, and the **Assignments to do** count decreases. Select
the button again to undo completion. The state is in memory only, so refreshing
the page resets the sample assignments.

## Class rule

Before accepting generated changes, open the files, identify the components,
and understand the `Assignment` data shape. Test the completion button yourself.
If an error appears, ask the agent to explain it before applying a suggested fix.
Never paste passwords or API keys into a prompt.
