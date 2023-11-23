"use client";
import { AddMeLangs } from "@/components/clientComponents/addMeLangs/AddMeLangs";
import { UpdateContacts } from "@/components/clientComponents/updateContacts/UpdateContacts";
import { UpdateProfileInfo } from "@/components/clientComponents/updateProfileInfo/UpdateProfileInfo";
import s from "../../../style/componentsModules/editProfile.module.scss";
import { useState } from "react";
import { EditProfileOptions } from "@/components/clientComponents/editProfileOptions/EditProfileOptions";

export default function EditProfile() {
  const [option, setOption] = useState<EditPropfileOptions>("options");
  console.log("render");

  let content;
  switch (option) {
    case "cangeInfo":
      content = <UpdateProfileInfo />;
      break;

    case "changeLangs":
      content = <AddMeLangs />;
      break;

    case "changeContacts":
      content = <UpdateContacts />;
      break;

    default:
      content = <EditProfileOptions callback={(option) => setOption(option)} />;
      break;
  }

  console.log(option);

  return (
    <>
      <div className={s.mainWrapper}>
        {option !== "options" && <button onClick={()=> setOption('options')}> back </button>}

        <div className={s.container}>{content}</div>
      </div>
    </>
  );
}

export type EditPropfileOptions =
  | "options"
  | "changeLangs"
  | "cangeInfo"
  | "changeContacts";
