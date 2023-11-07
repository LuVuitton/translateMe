import { useGetUserLangsQuery } from "@/app/api/user/user-lang/user-lang.api";
import s from "./userLangs.module.scss";
import { languageLevelMapping } from "@/helpers/mappingData";

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
        <div className={s.proficiency}>{languageLevelMapping[e.proficiency]}</div>
      </li>
    ));

    return <ul className={s.UserLangsWrapper}>{mappedLanguages}</ul>;
  }
};
