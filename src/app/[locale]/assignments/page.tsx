"use client";
import { useGetSortedAssignmentQuery } from "@/app/api/clientRequests/assignment/assignment.api";
import { AssignmentItem } from "../../../components/clientComponents/assignmentListItem/AssignmentListItem";
import s from "../../../style/pagesModules/assignmentList.module.scss";
import { Link } from "@/navigation";
import { Preloader } from "@/components/clientComponents/preloaders/Preloader";


export default function AssignmentList() {
  const { data, isLoading, isError } = useGetSortedAssignmentQuery({});

  const assignments = data?.assigments.map((e) => (
    <li key={e.assignment_id}>
      <Link href={`/assignments/${e.assignment_id}`}>
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
    return <Preloader type="blocking"/> ;
  }
  return (
    <div className={s.listWrapper}>
      <div className={s.contaciner}> 
      <ul className={s.list}>{assignments}</ul>
      </div>
    </div>
  );
}
