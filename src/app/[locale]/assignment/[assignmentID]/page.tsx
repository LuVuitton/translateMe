"use client";
import { useGetAssignmentByIDQuery } from "@/app/api/assignment/assignment.api";
import s from "./assignment.module.scss";
import { formatIsoDateToDMHM, minToHours } from "@/helpers/dateConverter";
import { asStatusesMapping, citiesMapping, countriesMapping } from "@/helpers/mappingData";

export default function Assignment(props: Props) {
  const {
    params: { assignmentID },
  } = props;
  const { data, isLoading, error } = useGetAssignmentByIDQuery(assignmentID);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (data) {
    const { assigment, candidates } = data;

    const {
      assignment_creation_date,
      assignment_update_date,
      assignment_title,
      assignment_description,
      address,
      assignment_date,
      assignment_status,
      city_id,
      country_id,
      customer_id,
      execution_time_minutes,
      //   required_languages_id,
      //   customer_languages_id,
      //   customer_rating_by_executor,
      //   executor_rating_by_customer,
      views,
      worth,
    } = assigment;

    const assignmentDate = formatIsoDateToDMHM(assignment_date);
    const creationDate = formatIsoDateToDMHM(assignment_creation_date);
    const updateDate = formatIsoDateToDMHM(assignment_update_date);
    const executionTime = minToHours(execution_time_minutes);
    const city = citiesMapping[city_id]
    const country = countriesMapping[country_id].countryName;



    return (
      <div className={s.mainWrapper}>
        <div className={s.container}>
          <div className={s.creationBlock}>
            <div>Author: {customer_id}</div>
            <div>Was created: {creationDate}</div>
            <div>Was updated: {updateDate}</div>
            <div>Views: {views}</div>
            <div>status: {asStatusesMapping[assignment_status]}</div>
          </div>

          <div className={s.textBlock}>
            <div className={s.title}>{assignment_title}</div>
            <div className={s.description}>{assignment_description}</div>
          </div>

          <div className={s.paramsBlock}>
            <div>where: {address}</div>
            <div>when: {assignmentDate}</div>
            <div>execution time: {executionTime}</div>
          </div>

          <div className={s.worth}>{worth}$</div>

          <div className={s.location}>

            <div>{city}</div>
            <div>{country}</div>
          </div>

          <div className={s.languages}>
            <div>speaks: {}</div>
            <div>needs: {}</div>
          </div>

          <div>
          number of requests: {candidates.candidatesCount}
          </div>
        </div>
      </div>
    );
  }
}

type Props = {
  params: {
    assignmentID: number;
  };
};
