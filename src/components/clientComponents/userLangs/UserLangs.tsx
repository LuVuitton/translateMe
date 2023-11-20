"use client"

import { useGetUserLangsQuery } from "@/app/api/clientRequests/user/user-lang/user-lang.api";
import s from "../../../style/componentsModules/userLangs.module.scss";
import { proficiencyMapping } from "@/helpers/mappingData";


export const UserLangs = ({ userID }: { userID: number }) => {
  const { data, isLoading } = useGetUserLangsQuery({
    userID,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (data) {
    const mappedLanguages = data.languages.map((e) => (
      <li key={e.language_id} className={s.itemWrapper}>
        <div className={s.languageName}>{e.language_name}</div>
        <div className={s.proficiency}>
          {proficiencyMapping[e.proficiency]}
        </div>
      </li>
    ));
    if (mappedLanguages.length > 0) {
      return <ul className={s.UserLangsWrapper}>{mappedLanguages}</ul>;
    } else {
      return (
        <div className={s.noLanguages}>user's not added languages yet</div>
      );
    }
  }
};
