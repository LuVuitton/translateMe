"use client";
import Link from "next/link";
import { AssignmentItem } from "../assignments/assignmentItem/AssignmentItem";
import s from "./myApplies.module.scss";

import { useGetAssignmentsByCandidateIDQuery } from "@/app/api/candidates/candidates.api";

import { asStatusesMapping } from "@/helpers/mappingData";
import { SecondAsignmentBlock } from "@/components/list/secondAsignmentBlock/SecondAsignmentBlock";

export default function MyApplies() {
  const { data, isLoading } = useGetAssignmentsByCandidateIDQuery();

  const assignments = data?.assignments.map((e) => {
    return (
      <li key={e.assignment_id} className={s.listItem}>
        <Link href={`assignments/${e.assignment_id}`}>
          <SecondAsignmentBlock
            address={e.address}
            apply_time={e.apply_time}
            assignment_id={e.assignment_id}
            worth={e.worth}
            status={e.status}
            date={e.date}
            country_id={e.country_id}
            city_id={e.city_id}
            title={e.title}
            description={e.description}
            execution_time_minutes={e.execution_time_minutes}
          />
        </Link>
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
