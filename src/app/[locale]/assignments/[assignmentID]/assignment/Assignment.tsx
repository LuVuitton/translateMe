"use client";
import { AssignmentByIDRes, useGetAssignmentByIDQuery } from "@/app/api/assignment/assignment.api";
import s from "./assignment.module.scss";
import { formatIsoDateToDMHM, minToHours } from "@/helpers/dateConverter";
import {
  asStatusesMapping,
  citiesMapping,
  countriesMapping,
  languageMapping,
} from "@/helpers/mappingData";
import { TheButton } from "@/components/buttons/btn/TheButton";

export default function Assignment({ assignmentData }: { assignmentData: AssignmentByIDRes }) {

    const {candidates, ...assigment } = assignmentData;

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
      views,
      execution_time_minutes,
      worth,
      customer, /////!!!!
      customer_id, /////!!!!
      executor_id, /////!!!!
    } = assigment;

    const assignmentDate = formatIsoDateToDMHM(assignment_date);
    const creationDate = formatIsoDateToDMHM(assignment_creation_date);
    const updateDate = formatIsoDateToDMHM(assignment_update_date);
    const executionTime = minToHours(execution_time_minutes);
    const city = citiesMapping[city_id];
    const country = countriesMapping[country_id].countryName;
    const needsLang = [5].map((e, i) => (
      <div key={i}>{languageMapping[e].full}</div>
    ));
    const speaksLang = [1, 2, 3].map((e, i) => (
      <div key={i}>{languageMapping[e].full}</div>
    ));

    return (
      <div className={s.mainWrapper}>
        <div className={s.container}>
          <div className={s.up}>
            <div className={s.leftPart}>
              <div className={s.infoBlock}>
                <div>
                  <div className={s.fn}>created:</div> {creationDate}
                </div>
                <div>
                  <div className={s.fn}>updated: </div> {updateDate}
                </div>
              </div>

              <div className={s.title}>{assignment_title}</div>

              <div className={s.languages}>
                <div className={s.fn}>speaks: </div>
                <div className={s.fn}>needs:</div>
                <div>{speaksLang}</div>

                <div> {needsLang}</div>
              </div>
            </div>

            <div className={s.rightPart}>
              <div className={s.rightUp}>
                <div className={s.paramsBlock}>
                  <div>
                    <div className={s.fn}>where:</div> {address}
                  </div>
                  <div>
                    <div className={s.fn}>when:</div> {assignmentDate}
                  </div>
                  <div>
                    <div className={s.fn}>estimated duration: </div>
                    {executionTime}
                  </div>

                  <div className={s.location}>
                    <div className={s.fn}>Location: </div>
                    <div>{city}</div>
                    <div>{country}</div>
                  </div>

                  <div className={s.fn}>status: </div>
                  {asStatusesMapping[assignment_status]}
                </div>

                <div className={s.candidates}>
                  <div className={s.fn}>сandidates: </div>
                  {candidates.candidatesCount}
                </div>
                <div className={s.views}>
                  <div className={s.fn}>views: </div> {views}
                </div>
              </div>

              <div className={s.rightDown}>
                <div className={s.worth}>{worth}$</div>
              </div>
            </div>
          </div>

          <div className={s.bottomPart}>
            <div className={s.applyBtn}>
              <TheButton btnText="To Apply" color="green" isLoading={false} />
            </div>
            <div className={s.fn}>Description:</div>
            <div className={s.description}>{assignment_description}</div>
          </div>
        </div>
      </div>
    );

}

type Props = {
  assignmentID: number;
};
