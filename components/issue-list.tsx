import { Issue, STATUS_LABELS } from "@/lib/issues";
import Link from "next/link";

export function IssueList({ issues }: { issues: Issue[] }) {
    return (
        <ul>
            {issues.map((issue) => (
                <li key={issue.id}>
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    {" "} ({STATUS_LABELS[issue.status]})
                </li>
            ))}
        </ul>
    )
}
