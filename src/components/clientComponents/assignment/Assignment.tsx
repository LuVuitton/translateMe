"use client";
import { GetByIDRes } from "@/app/api/clientRequests/assignment/assignment.api";
import s from "../../../style/componentsModules/assignment.module.scss";
import { formatIsoDateToDMHM, minToHours } from "@/helpers/dateConverter";
import {
  asStatusesMapping,
  citiesMapping,
  countriesMapping,
  languageMapping,
} from "@/helpers/mappingData";
import { TheButton } from "@/components/clientComponents/buttons/btn/TheButton";
import {
  useGetCustomerLangsByAsIDQuery,
  useGetRequiredLangsByAsIDQuery,
} from "@/app/api/clientRequests/languages/assignmentsLangs.api";
import { useAddMeAsCandidateMutation } from "@/app/api/clientRequests/candidates/candidates.api";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Preloader } from "../preloaders/Preloader";
import { useTransition } from "react";

let needsLang: JSX.Element[] | undefined;
let speaksLang: JSX.Element[] | undefined;

export default function Assignment({ assignmentData, showAuthor }: Props) {
  const { candidates, ...assigment } = assignmentData;

  const t = useTranslations("assignmnentPage");
  const statusName = useTranslations("statuses");
  const langName = useTranslations("languages");

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

  const { data: rData, isLoading: rLoading } = useGetRequiredLangsByAsIDQuery({
    assignmentID,
  });
  const { data: cData, isLoading: cLoading } = useGetCustomerLangsByAsIDQuery({
    assignmentID,
  });

  const [addMeAsCandidate, { isLoading: addMeLoading, isSuccess }] =
    useAddMeAsCandidateMutation();

  const toApplyHandler = () => {
    addMeAsCandidate({ assignment_id: assignmentID });
  };

  const assignmentDate = formatIsoDateToDMHM(assignment_date);
  const creationDate = formatIsoDateToDMHM(assignment_creation_date);
  const updateDate = formatIsoDateToDMHM(assignment_update_date);
  const executionTime = minToHours(execution_time_minutes);
  const city = citiesMapping[city_id];
  const country = countriesMapping[country_id].countryName;

  if (rData) {
    needsLang = rData?.required_languages?.map((e, i) => (
      <div key={i}>{langName(`${e.language_id}`)}</div>
    ));
    speaksLang = cData?.сustomer_languages?.map((e, i) => (
      <div key={i}>{langName(`${e.language_id}`)}</div>
    ));
  }

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

            <div className={s.languages}>
              <div className={s.fn}>{t("speaks")}: </div>
              <div className={s.fn}>{t("needs")}:</div>

              <div> {speaksLang ? speaksLang : <Preloader type="local" />}</div>
              <div> {needsLang ? needsLang : <Preloader type="local" />}</div>
            </div>
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
                  <div>{city}</div>
                  <div>{country}</div>
                </div>

                <div className={s.fn}>{t("status")}: </div>
                {statusName(`${assignment_status}`)}
              </div>

              <div className={s.candidates}>
                <div className={s.fn}>{t("сandidates")}: </div>
                {candidates.candidatesCount}
              </div>
              <div className={s.views}>
                <div className={s.fn}>{t("views")}: </div> {views}
              </div>
              {showAuthor && (
                <div className={s.author}>
                  <div className={s.fn}>{t("author")}:</div>
                  <Link
                    href={`../profile/${customer.customer_id}`}
                    style={{ borderBottom: "1px solid white" }}
                  >
                    {customer.full_name}
                  </Link>
                </div>
              )}
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
                 t( "noExecutor")
                )}
              </div>
            </div>

            <div className={s.rightDown}>
              <div className={s.worth}>{worth}$</div>
            </div>
          </div>
        </div>

        <div className={s.bottomPart}>
          <div className={s.applyBtn}>
            <TheButton
              btnText="To Apply"
              color="green"
              isLoading={addMeLoading}
              callback={toApplyHandler}
            />
          </div>
          <div className={s.fn}>{t("description")}:</div>
          <div className={s.description}>{assignment_description}</div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  assignmentData: GetByIDRes;
  showAuthor: boolean;
};
