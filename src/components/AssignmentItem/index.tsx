import { AssignmentListItem } from "@/app/api/clientRequests/assignment/assignment.api";
import s from "./index.module.scss";
import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import { generatelanguagesBlocks } from "@/helpers/generateLanguageBlocks/generateLanguageBlocks";

import { useTranslations } from "next-intl";
import { BottomListBlock} from "@/components";


const AssignmentItem: React.FC<Props> = ({
  assignment_description,
  assignment_title,
  city_id,
  country_id,
  customer_languages_id,
  required_languages_id,
  worth,
  assignment_date,
}) => {
  const t = useTranslations("assignmnentPage");
  const commonName = useTranslations("common");
  const asDay = formatIsoDateToDMHM(assignment_date, "DM");
  const asTime = formatIsoDateToDMHM(assignment_date, "HM");
  const needsLang = generatelanguagesBlocks(required_languages_id, "yellow");
  const speaksLang = generatelanguagesBlocks(customer_languages_id, "blue");

  return (
    <div className={s.assignmentWrapper}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.topLeft}>
            <div className={s.title}>{assignment_title}</div>
            <div className={s.description}>{assignment_description}</div>
          </div>
          <div className={s.topRight}>
            <div className={s.languagesWrapper}>
              <div className={s.speaksWrapper}>
                <div className={s.languageTitle}> {t("speaks")}:</div>
                <div className={s.speaksBlocks}> {speaksLang}</div>
              </div>
              <div className={s.needsWrapper}>
                <div className={s.languageTitle}> {t("needs")}: </div>
                <div className={s.needsBlocks}> {needsLang} </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <BottomListBlock bottomText={asTime}>{asDay}</BottomListBlock>
          <BottomListBlock bottomText={commonName(`countries.${country_id}`)}>
            {commonName(`cities.${city_id}`)}
          </BottomListBlock>
          <BottomListBlock bottomText={t("worth")} color="green">
            {worth} $
          </BottomListBlock>
        </div>
      </div>
    </div>
  );
};

export default AssignmentItem;

type Props = Omit<AssignmentListItem, "assignment_id">;
