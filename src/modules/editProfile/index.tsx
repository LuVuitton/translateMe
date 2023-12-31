"use client";
import { AddMeLangs } from "@/modules/editProfile/AddMeLangs/AddMeLangs";
import { UpdateContacts } from "@/modules/editProfile/UpdateContacts/UpdateContacts";
import { UpdateProfileInfo } from "@/modules/editProfile/UpdateProfile/UpdateProfileInfo";
import s from "./index.module.scss";
import { useState } from "react";
import { EditProfileOptions } from "@/modules/editProfile/EditProfileOptions/EditProfileOptions";
import { useTranslations } from "next-intl";

export default function EditProfile() {
  const t = useTranslations("editProfile")
  const [option, setOption] = useState<EditPropfileOptions>("options");


  const componentMap = {
    options: <EditProfileOptions callback={(option) => setOption(option)} />,
    changeLangs: <AddMeLangs />,
    cangeInfo: <UpdateProfileInfo />,
    changeContacts: <UpdateContacts />
  };


  return (
    <>
      <div className={s.mainWrapper}>
        {option !== "options" && <button onClick={()=> setOption('options')}> {t("backBtn")} </button>}

        <div className={s.container}>{componentMap[option]}</div>
      </div>
    </>
  );
}

export type EditPropfileOptions =
  | "options"
  | "changeLangs"
  | "cangeInfo"
  | "changeContacts";
