import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tasklog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/issues">Issues</Link> |{" "}
          <Link href="/issues/new">New issue</Link>
          {children}
        </nav>
      </body>
    </html>
  );
}
