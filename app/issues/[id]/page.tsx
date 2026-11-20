import { issueIdSchema } from "@/lib/validation";
import { notFound } from "next/navigation";
import * as api from "@/lib/api"
import { STATUS_LABELS } from "@/lib/issues";
import { Suspense } from "react";

export default function IssuePage({ params }: PageProps<"/issues/[id]">) {
  return (
    <Suspense fallback={<p>Loading issue...</p>}>
      <IssueDetail params={params} />
    </Suspense>
  )
}

async function IssueDetail({ params }: Pick<PageProps<"/issues/[id]">, "params">) {
  const { id } = await params
  const parsedId = issueIdSchema.safeParse(id)

  if (!parsedId.success)
    notFound()

  const issue = await api.getIssue(parsedId.data)
  if (!issue) notFound()

  return (
    <article>
      <h1>{issue.title}</h1>
      <p>Status: {STATUS_LABELS[issue.status]}</p>
      <p>Opened: {new Date(issue.createdAt).toLocaleDateString("en-US")}</p>
      <p>{issue.description || "No description"}</p>
    </article>
  )
}
