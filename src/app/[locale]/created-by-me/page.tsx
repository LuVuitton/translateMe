"use client";
import Link from "next/link";
import { AssignmentItem } from "../assignments/assignmentItem/AssignmentItem";
import s from "./assignmentsCreatedByMe.module.scss";
import { useGetMyAssignmentQuery } from "@/app/api/assignment/assignment.api";
import { useGetCandidatesByAsIDQuery } from "@/app/api/candidates/candidates.api";
import { Candidates } from "@/components/candidates/CandidatItem";

export default function AssignmentsCreatedByMe() {
  const { data, isLoading } = useGetMyAssignmentQuery();

  const assignments = data?.data.map((e) => {
    return (
      <li key={e.assignment_id} className={s.listItem}>
        <Link href={`assignments/${e.assignment_id}`}>
          <AssignmentItem
            assignment_title={e.assignment_title}
            assignment_description={e.assignment_description}
            worth={e.worth}
            assignment_date={e.assignment_date}
            city_id={e.city_id}
            country_id={e.country_id}
            customer_languages_id={e.customer_languages_id}
            required_languages_id={e.required_languages_id}
          />
        </Link>
<div>status: {e.assignment_status}</div>
        <Candidates assignmentID={e.assignment_id} />
      </li>
    );
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>{assignments}</ul>
    </div>
  );
}