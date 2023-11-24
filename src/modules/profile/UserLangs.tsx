import { getTranslations } from "next-intl/server";
import s from "../../style/componentsModules/userLangs.module.scss";
import { proficiencyMapping } from "@/helpers/mappingData";
import { getUserLangs } from "@/app/api/serverRequests/profile/user";

export default async function UserLangs({ userID }: { userID: number }) {
  const t = await getTranslations("profilePage.userLangs");
  const langName = await getTranslations("languages")


  const data = await getUserLangs({ userID });

  const mappedLanguages = data.languages.map((e: any) => (
    <li key={e.language_id} className={s.itemWrapper}>
      <div className={s.languageName}>{langName(`${e.language_id}`)}</div>
      <div className={s.proficiency}>{langName(`proficiency.${e.proficiency}`)}</div>

    </li>
  ));
  if (mappedLanguages.length > 0) {
    return <ul className={s.UserLangsWrapper}>{mappedLanguages}</ul>;
  } else {
    return <div className={s.noLanguages}>{t("notAdded")}</div>;
  }
}
