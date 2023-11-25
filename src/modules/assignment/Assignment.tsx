"use client";
import { GetByIDRes } from "@/app/api/clientRequests/assignment/assignment.api";
import s from "../../style/componentsModules/assignment.module.scss";
import { formatIsoDateToDMHM, minToHours } from "@/helpers/dateConverter";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { ApplyButton } from "./ApplyButton";
import { LanguagesBlock } from "./LanguagesBlock";

export default function Assignment({ assignmentData }: Props) {
  const { candidates, ...assigment } = assignmentData;

  const t = useTranslations("assignmnentPage");
  const commonName = useTranslations("common");

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
    customer,
    executor,
    assignment_id: assignmentID,
  } = assigment;

  const assignmentDate = formatIsoDateToDMHM(assignment_date);
  const creationDate = formatIsoDateToDMHM(assignment_creation_date);
  const updateDate = formatIsoDateToDMHM(assignment_update_date);
  const executionTime = minToHours(execution_time_minutes);

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.up}>
          <div className={s.leftPart}>
            <div className={s.infoBlock}>
              <div>
                <div className={s.fn}>{t("created")}:</div> {creationDate}
              </div>
              <div>
                <div className={s.fn}>{t("updated")}: </div> {updateDate}
              </div>
            </div>

            <div className={s.title}>{assignment_title}</div>

            <LanguagesBlock assignmentID={assignmentID} />
          </div>

          <div className={s.rightPart}>
            <div className={s.rightUp}>
              <div className={s.paramsBlock}>
                <div>
                  <div className={s.fn}>{t("where")}:</div> {address}
                </div>
                <div>
                  <div className={s.fn}>{t("when")}:</div> {assignmentDate}
                </div>
                <div>
                  <div className={s.fn}>{t("executionTime")}:</div>
                  {executionTime}
                </div>

                <div className={s.location}>
                  <div className={s.fn}>{t("location")}: </div>
                  <div>{commonName(`cities.${city_id}`)}</div>
                  <div>{commonName(`countries.${country_id}`)}</div>
                </div>

                <div className={s.fn}>{t("status")}: </div>
                {commonName(`statuses.${assignment_status}`)}
              </div>

              <div className={s.candidates}>
                <div className={s.fn}>{t("сandidates")}: </div>
                {candidates.candidatesCount}
              </div>
              <div className={s.views}>
                <div className={s.fn}>{t("views")}: </div> {views}
              </div>

                <div className={s.author}>
                  <div className={s.fn}>{t("author")}:</div>
                  <Link
                    href={`../profile/${customer.customer_id}`}
                    style={{ borderBottom: "1px solid white" }}
                  >
                    {customer.full_name}
                  </Link>
                </div>
              <div className={s.author}>
                <div className={s.fn}>{t("executor")}:</div>
                {executor.executor_id ? (
                  <Link
                    href={`../profile/${executor.executor_id}`}
                    style={{ borderBottom: "1px solid white" }}
                  >
                    {executor.full_name}
                  </Link>
                ) : (
                  t("noExecutor")
                )}
              </div>
            </div>

            <div className={s.rightDown}>
              <div className={s.worth}>{worth}$</div>
            </div>
          </div>
        </div>

        <div className={s.bottomPart}>
          <ApplyButton
            assignmentID={assignmentID}
            candidates={candidates.candidates}
            customer_id={customer.customer_id}
          />
          <div className={s.fn}>{t("description")}:</div>
          <div className={s.description}>{assignment_description}</div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  assignmentData: GetByIDRes;
};
