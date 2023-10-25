"use client";

import { AssignmentListItem } from "@/app/api/assignment/assignment.api";
import s from "./assignmentItem.module.scss";
import Image from "next/image";
import {
  citiesMapping,
  countriesMapping,
  languageMapping,
} from "@/helpers/mappingData";
import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import { generatelanguagesBlocks } from "@/helpers/generateLanguageBlocks";
import { ListBtn } from "@/components/buttons/listBtn/listBtn";
import Link from "next/link";

export const AssignmentItem: React.FC<Props> = ({
  assignment_description,
  assignment_title,
  city_id,
  country_id,
  customer_languages_id,
  required_languages_id,
  worth,
  assignment_date,
}) => {
  // const t = useTranslations("common");

  const assignmentDate = formatIsoDateToDMHM(assignment_date);
  //     if (languages.length <= 3) {
  //       return languages.map((e, i) => (
  //         <div
  //           key={i}
  //           className={`${s.langItem} ${
  //             color === "yellow" ? s.yellowLangItem : s.blueLangItem
  //           }`}
  //           title={languageMapping[e].full}
  //           // key={"add id to lang"}
  //         >
  //           {languageMapping[e].short}
  //         </div>
  //       ));
  //     } else {
  //     const newArr = [];

  //     for (let i = 0; i < 2; i++) {
  //       const e = languages[i];
  //       newArr.push(
  //         <div
  //           key={i}
  //           className={`${s.langItem} ${
  //             color === "yellow" ? s.yellowLangItem : s.blueLangItem
  //           }`}
  //           title={languageMapping[e].full}
  //           // key={"add id to lang"}
  //         >
  //           {languageMapping[e].short}
  //         </div>
  //       );
  //     }
  //     newArr.push(  <div
  //       className={`${s.langItem} ${
  //         color === "yellow" ? s.yellowLangItem : s.blueLangItem
  //       }`}
  //     >
  //       +{languages.length-2}
  //     </div>)

  //     return newArr
  //     }
  //   };

  const needsLang = generatelanguagesBlocks(required_languages_id, "yellow");
  const speaksLang = generatelanguagesBlocks(customer_languages_id, "blue");

  return (
    <div className={s.assignmentWrapper}>
      <div className={s.container}>
        <div className={s.leftPart}>
          <div className={s.title}>
            <div> {assignment_title}</div>
          </div>

          <div className={s.description}>{assignment_description}</div>

          <div className={s.languagesWrapper}>
            <div className={s.speaksWrapper}>
              <div className={s.languageTitle}> speaks:</div>
              <div className={s.speaksBlocks}> {speaksLang}</div>
            </div>
            <div className={s.needsWrapper}>
              <div className={s.languageTitle}> needs: </div>
              <div className={s.needsBlocks}> {needsLang} </div>
            </div>
          </div>
        </div>

        <div className={s.rightPart}>
          <div className={s.location}>
            <div className={s.cityName}> {citiesMapping[city_id]}</div>
            <Image
              src={countriesMapping[country_id].flag}
              alt={countriesMapping[country_id].countryName}
              width={30}
              className={s.flagIcon}
            />
          </div>
          <div className={s.worth}> {worth}$</div>
          <ListBtn btnText="aplly for" />
          <div className={s.date}> {assignmentDate}</div>
        </div>
      </div>
    </div>
  );
};

type Props = Omit<AssignmentListItem, "assignment_id">;
