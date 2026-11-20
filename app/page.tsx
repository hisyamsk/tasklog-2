import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Tasklog</h1>
      <p>A small issue tracker.</p>
      <Link href="/issues">See all issues</Link>
    </>
  );
}
