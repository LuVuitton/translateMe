import Link from "next/link";
import s from "./burger.module.scss";
import { useState } from "react";
import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { RootStateType } from "@/redux/store";
import { setIsLogged } from "@/redux/slices/userSlice";

export const Burger = () => {
  const testMeID = "here-shoul-be-my-id";
  const [showLanguage, setShowLanguage] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("header.settings");
  const dispatch = useAppDispatch();
  const full_name = useAppSelector(
    (state: RootStateType) => state.user.data?.full_name
  );

  const locale = [
    { lang: "English", value: "en" },
    { lang: "Українська", value: "ua" },
    { lang: "Italiano", value: "it" },
    { lang: "Español", value: "es" },
    { lang: "Deutsch", value: "de" },
    { lang: "Русский", value: "ru" },
  ];

  const loacaleList = locale.map((e) => (
    <li key={e.lang} className={s.listItem} onClick={() => switchLang(e.value)}>
      {e.lang}
    </li>
  ));

  const logOutHandler = () => {
    dispatch(setIsLogged({ isLogged: false }));
  };

  const switchLang = (lang: string) => {
    setShowLanguage(!showLanguage);
    router.replace(`${pathname}`, { locale: lang });
  };

  return (
    <div className={s.burgerWrapper}>
      <div className={s.burgerContainer}>
        <ul className={s.list}>
          {full_name && <li className={s.listItem}>{full_name}</li>}

          <Link href={`/profile/${testMeID}`}>
            <li className={s.listItem}>{t("my-profile")}</li>
          </Link>

          <li
            className={s.listItem}
            onClick={() => setShowLanguage(!showLanguage)}
          >
            {t("change-language")}
          </li>
          <li className={s.listItem}>{t("change-theme")}</li>

          <li className={s.listItem} onClick={logOutHandler}>
            {t("log-out")}
          </li>
        </ul>
        {showLanguage && <ul className={s.languagelist}>{loacaleList}</ul>}
      </div>
    </div>
  );
};
