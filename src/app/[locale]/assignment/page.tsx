"use client"
import { useGetSortedAssignmentQuery } from "@/app/api/assignment/assignment.api";
import { AssignmentItem } from "./assignmentItem/AssignmentItem";
import Link from "next/link";
import s from './assignmentList.module.scss'

export default function AssignmentList() {

  const { data, isLoading, isError } = useGetSortedAssignmentQuery({});


  const assignments = data?.assigments.map((e) => (
    <li key={e.assignment_id}>
      <Link href={`assignment/${e.assignment_id}`}>
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
    </li>
  ));


if (isLoading) {
  return <div>Loading ...</div>
}
  return (
    <div className={s.listWrapper}>
      <ul >{assignments}</ul>
    </div>
  );
}


