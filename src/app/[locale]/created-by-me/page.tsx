"use client";
import Link from "next/link";
import { AssignmentItem } from "../../../components/clientComponents/assignmentListItem/AssignmentListItem";
import s from "../../../style/pagesModules/assignmentsCreatedByMe.module.scss";
import { useGetMyAssignmentQuery } from "@/app/api/clientRequests/assignment/assignment.api";
import { Candidates } from "@/components/clientComponents/candidates/CandidatItem";
import { asStatusesMapping } from "@/helpers/mappingData";
import { useState } from "react";


export default function AssignmentsCreatedByMe() {
  const { data, isLoading } = useGetMyAssignmentQuery();
  const [listShown, setListShown] = useState<ListShownOptopns>("upcoming");
let upcomingAssignments: JSX.Element[] = [];
let closedAssignments: JSX.Element[] = [];

  data?.data.forEach((e) => {
    const item = (
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
        <div>status: {asStatusesMapping[e.assignment_status]}</div>
        <Candidates assignmentID={e.assignment_id} />
      </li>
    );

    if ([1, 2, 3].includes(e.assignment_status)) {
      upcomingAssignments.push(item);
    } else {
      closedAssignments.push(item);
    }
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  return (
    <div className={s.listWrapper}>
      <div className={s.nav}>
        <div className={s.navItem} onClick={() => setListShown("upcoming")}>
          upcoming
        </div>
        <div className={s.navItem} onClick={() => setListShown("closed")}>
          closed
        </div>
      </div>
      <ul className={s.list}>
        {listShown === "upcoming" ? upcomingAssignments : closedAssignments}
      </ul>
    </div>
  );
}

type ListShownOptopns = "upcoming" | "closed";
