"use client"

import s from "./bottomListBlock.module.scss";

export const BottomListBlock = ({ bottomText, children, color }: Props) => {
  return (
    <div className={s.bottomListBlock}>
      <div className={`${s.top} ${color==="green"? s.green:""}`}> {children}</div>

      <div className={s.bottom}>{bottomText}</div>
    </div>
  );
};

type Props = {
  bottomText: string;
  children: React.ReactNode; // Добавляем children в типы Props
  color?: "green";
};
