import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studyspace | Student Dashboard",
  description:
    "Keep track of your courses, assignments, and progress in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
