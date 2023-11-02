"use client";

import { useState } from "react";
import s from "./theNumberInput.module.scss";
import { TheButton } from "@/components/buttons/btn/TheButton";
import { UseFormRegister } from "react-hook-form";

export const TheInputNumber = ({
  interval = 1,
  register,
  registerName,
  onChange,
}: TheInputNumberProps) => {
  const [count, setCount] = useState(0);

  const onKeyPress = (num: number) => {
    if (!/[0-9]/.test(num.toString())) {
      return;
    } else {
      setCount(+num);
      onChange(+num);
    }
  };

  return (
    <div className={s.mianWrapper}>
      <div className={s.btnWrapper}>
        <TheButton
          btnText="-"
          color="red"
          callback={() => onKeyPress(count - interval)}
        />
      </div>

      <div className={s.inputWrapper}>
        <input
          type="number"
          {...register(registerName)}
          name={registerName}
          value={Number(count).toString()}
          onChange={(e) => onKeyPress(+e.currentTarget.value)}
        />
      </div>

      <div className={s.btnWrapper}>
        <TheButton
          btnText="+"
          color="red"
          callback={() => onKeyPress(count + interval)}
        />
      </div>
    </div>
  );
};

export type TheInputNumberProps = {
  interval?: number;
  register: UseFormRegister<any>;
  registerName: string;
  onChange: (num: number) => void;
};
