"use client";
import { EditPropfileOptions } from "@/app/[locale]/edit-profile/page";
import s from "../../../style/componentsModules/editPropfileOptions.module.scss";

export const EditProfileOptions = ({ callback }: Props) => {
  const chooseOption = (option: EditPropfileOptions) => {
    callback(option);
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.option} onClick={() => chooseOption("cangeInfo")}>
          {"t(update location and about me)"}
        </div>
        <div className={s.option} onClick={() => chooseOption("changeLangs")}>
          {"t(update my languages)"}
        </div>
        <div
          className={s.option}
          onClick={() => chooseOption("changeContacts")}
        >
          {"t(update my contacts)"}
        </div>
      </div>
    </div>
  );
};

type Props = {
  callback: (option: EditPropfileOptions) => void;
};

// type Option = Omit<EditPropfileOptions, 'options'>
