"use client";
import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import chatImg from "../../../public/icons/chat.png";
import favoritesImg from "../../../public/icons/favorites.png";
import usersImg from "../../../public/icons/users.png";
import settingImg from "../../../public/icons/setting.png";

import { Burger } from "./burger/Burger";
import s from "./theHeader.module.scss";
import { useGetMeQuery } from "@/app/api/user/user.api";
import { setIsLogged, setUserData } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

export const TheHeader = ({ currentLanguage }: { currentLanguage: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("header");
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const userData = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetMeQuery();

  useEffect(() => {
    if (data) {
      const { email, user_id, user_registration_date, full_name } = data;
      dispatch(
        setUserData({ email, user_id, user_registration_date, full_name })
      );
      dispatch(setIsLogged({ isLogged: true }));
    }
  }, [data]);

  const switchLang = (lang: string) => {
    router.replace(`${pathname}`, { locale: lang });
  };

  const toSignIn = () => {
    router.push('sign-in');
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (userData.isLogged) {
    return (
      <div>
        <div className={s.mainWrapper}>
          <div
            className={s.btnWrapper}
            onClick={() => setBurgerIsOpen(!burgerIsOpen)}
          >
            <Image src={settingImg} alt="settings" />
            <div className={s.btnTitle}>{t("btns.settings")}</div>
          </div>

          <Link className={s.btnWrapper} href={"/assignments"}>
            <Image src={usersImg} alt="users" />
            <div className={s.btnTitle}>{"t(btns.assiignments)"}</div>
          </Link>

        </div>
        {burgerIsOpen && <Burger userData={userData.data}/>}
      </div>
    );
  }
  return (
    <div className={s.mainWrapper}>
      <div>
        <button onClick={toSignIn}>{"t(toSignIn)"}</button>
      </div>
      <div>
        <p>UNAUTORIZED</p>
      </div>
      <div>
        <select
          onChange={(e) => switchLang(e.target.value)}
          value={currentLanguage}
          className={s.select}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="ua">Українська</option>
          <option value="it">Italian</option>
          <option value="ru">Русский</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>
  );
};
