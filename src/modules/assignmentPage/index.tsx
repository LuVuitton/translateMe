import { GetByIDRes } from "@/app/api/clientRequests/assignment/assignment.api";
import s from "./index.module.scss";
import { formatIsoDateToDMHM, minToHours } from "@/helpers/dateConverter";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { LanguagesBlock } from "./LanguagesBlock/LanguagesBlock";
import { Section, Title } from "@/components";
import Parameters from "./Parameters/Parameters";

export default async function Assignment({ assignmentData }: Props) {
  const { candidates, ...assigment } = assignmentData;

  const t = await getTranslations("assignmnentPage");
  const tCommon = await getTranslations("common");

  const {
    assignment_title,
    assignment_creation_date,
    assignment_update_date,
    assignment_description,
    assignment_status,
    views,
    customer,
    executor,
    assignment_id: assignmentID,
    customer_rating_by_executor,
    executor_rating_by_customer,
    ...paremeters
  } = assigment;

  const creationDate = formatIsoDateToDMHM(assignment_creation_date);
  const updateDate = formatIsoDateToDMHM(assignment_update_date);

  return (
    <div>
      <Section>
      <Title type="medium">{assignment_title}</Title>
      <div>{t("created")}:</div> {creationDate}
      <div>{t("updated")}: </div> {updateDate}
      <div>{t("author")}:</div>
      <Link href={`../profile/${customer.customer_id}`}>
        {customer.full_name}
      </Link>
      </Section>

      <LanguagesBlock assignmentID={assignmentID} />
      
    
      <Section>
        <Parameters parameters={paremeters} />
      </Section>
      
      <div>{t("description")}:</div>
      {assignment_description}
      <ApplyButton
        assignmentID={assignmentID}
        candidates={candidates.candidates}
        customer_id={customer.customer_id}
      />
      <div>{t("status")}: </div>
      {tCommon(`statuses.${assignment_status}`)}
      <div>{t("executor")}:</div>
      {executor.executor_id ? (
        <Link href={`../profile/${executor.executor_id}`}>
          {executor.full_name}
        </Link>
      ) : (
        t("noExecutor")
      )}
      <div>{t("сandidates")}: </div>
      {candidates.candidatesCount}
      <div>{t("views")}: </div> {views}
    </div>
  );
}

type Props = {
  assignmentData: GetByIDRes;
};

//By default, Next.js pre-renders every page.
// This means that Next.js generates HTML for each page in advance,
// instead of having it all done by client-side JavaScript.
// Pre-rendering can result in better performance and SEO.
// (...) When a page is loaded by the browser,
// its JavaScript code runs and makes the page fully interactive
// (this process is called hydration in React).
const ApplyButton = dynamic(() => import("./ApplyButton/ApplyButton"), {
  ssr: false,
});
