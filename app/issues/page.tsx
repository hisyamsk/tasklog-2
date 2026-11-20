import { IssueList } from "@/components/issue-list";
import * as api from "@/lib/api";
import { Suspense } from "react";

export default function IssuesPage() {
  return (
    <>
      <h1>Issues</h1>
      <p>List of issues goes here</p>

      <Suspense fallback={<p>Loading issues... </p>}>
        <ListResults />
      </Suspense>
    </>
  );
}

async function ListResults() {
  const issues = await api.getIssues()
  return <IssueList issues={issues} />
}
