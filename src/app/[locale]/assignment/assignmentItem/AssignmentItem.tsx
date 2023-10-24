"use client";

import s from "./assignmentItem.module.scss";
import { AssignmentListItem } from "../page";

export const AssignmentItem: React.FC<Props> = ({
  assignment_description,
  assignment_title,
  city_id,
  country_id,
  customer_languages_id,
  required_languages_id,
  worth,
  assignment_data,
}) => {
  // const t = useTranslations("common");

  return (
    <div className={s.assignmentWrapper}>
      <div className={s.container}>
        <div className={s.leftPart}>
          <div className={s.title}>
            <div> {assignment_title}</div>
          </div>

          <div className={s.description}>
            <div> {assignment_description}</div>
          </div>

          <div className={s.languagesWrapper}>
            <div> speaks {customer_languages_id}</div>
            <div> needs {required_languages_id}</div>
          </div>
        </div>

        <div className={s.rightPart}>
          <div className={s.location}>
            <div> {city_id}</div>
            <div> {country_id}</div>
          </div>
          <div> {worth}$</div>
          <button>APPLY FOR</button>
          <div> {assignment_data}</div>
        </div>
      </div>
    </div>
  );
};

type Props = Omit<AssignmentListItem, "assignment_id">;
