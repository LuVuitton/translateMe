"use client"
import s from "../../../style/componentsModules/burger.module.scss";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { UserState, setIsLogged } from "@/redux/slices/userSlice";
import { Link, usePathname, useRouter } from "@/navigation";
import { getTranslations } from "next-intl/server";

export const Burger = ({ userData }: { userData: UserState }) => {
  const [showLanguage, setShowLanguage] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = getTranslations("header.settings");
  const dispatch = useAppDispatch();

  const locale = [
    { lang: "English", value: "en" },
    // { lang: "Українська", value: "ua" },
    // { lang: "Italiano", value: "it" },
    // { lang: "Español", value: "es" },
    // { lang: "Deutsch", value: "de" },
    { lang: "Русский", value: "ru" },
  ];

  const loacaleList = locale.map((e) => (
    <li key={e.lang} className={s.listItem} onClick={() => switchLang(e.value)}>
      {e.lang}
    </li>
  ));

  const logOutHandler = () => {
    dispatch(setIsLogged({ isLogged: false }));
    router.push("/sign-in");
  };

  const switchLang = (lang: string) => {
    setShowLanguage(!showLanguage);
    router.replace(`${pathname}`, { locale: lang });
  };

  return (
    <div className={s.burgerWrapper}>
      <div className={s.burgerContainer}>
        <ul className={s.list}>
          {userData?.full_name && (
            <li className={s.listItem}>{userData.full_name}</li>
          )}

          <Link href={`/profile/${userData?.user_id}`}>
            <li className={s.listItem}>{"t(my-profile)"}</li>
          </Link>
          <Link href={`/edit-profile`}>
            <li className={s.listItem}>{"t(edit-profile)"}</li>
          </Link>
          <Link href={`/my-applies`}>
            <li className={s.listItem}>{"t(my-applies)"}</li>
          </Link>
          <Link href={`/created-by-me`}>
            <li className={s.listItem}>{"t(createdbyme)"}</li>
          </Link>
          <Link href={`/create-assignment`}>
            <li className={s.listItem}>create assignment</li>
          </Link>

          <li
            className={s.listItem}
            onClick={() => setShowLanguage(!showLanguage)}
          >
            {"t(change-language)"}
          </li>

          <li className={s.listItem} onClick={logOutHandler}>
            {"t(log-out)"}
          </li>
        </ul>
        {showLanguage && <ul className={s.languagelist}>{loacaleList}</ul>}
      </div>
    </div>
  );
};
