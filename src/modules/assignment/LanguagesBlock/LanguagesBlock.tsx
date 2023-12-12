"use client";

import {
  useGetCustomerLangsByAsIDQuery,
  useGetRequiredLangsByAsIDQuery,
} from "@/app/api/clientRequests/languages/assignmentsLangs.api";
import { useTranslations } from "next-intl";
import s from "./index.module.scss";
import { Preloader } from "@/components";


let needsLang: JSX.Element[] | undefined;
let speaksLang: JSX.Element[] | undefined;

export const LanguagesBlock = ({ assignmentID }: LanguagesBlock) => {
  const t = useTranslations("assignmnentPage");
  const commonName = useTranslations("common");

  const { data: rData, isLoading: rLoading } = useGetRequiredLangsByAsIDQuery({
    assignmentID,
  });
  const { data: cData, isLoading: cLoading } = useGetCustomerLangsByAsIDQuery({
    assignmentID,
  });
  if (rData) {
    needsLang = rData?.required_languages?.map((e, i) => (
      <div key={i}>{commonName(`languages.${e.language_id}`)}</div>
    ));
    speaksLang = cData?.сustomer_languages?.map((e, i) => (
      <div key={i}>{commonName(`languages.${e.language_id}`)}</div>
    ));
  }

  return (
    <div className={s.languages}>
      <div className={s.fn}>{t("speaks")}: </div>
      <div className={s.fn}>{t("needs")}:</div>

      <div> {speaksLang ? speaksLang : <Preloader type="local" />}</div>
      <div> {needsLang ? needsLang : <Preloader type="local" />}</div>
    </div>
  );
};

type LanguagesBlock = {
  assignmentID: number;
};
