"use client";

import { ChangeEvent, useRef, useState } from "react";
import s from "./theNumberInput.module.scss";
import { TheButton } from "@/components/buttons/btn/TheButton";
import { Control, Controller, UseFormRegister } from "react-hook-form";

export const TheInputNumber = ({
  interval = 1,
  register,
  registerName,
  control,
}: // onChange
Props) => {
  const [count, setCount] = useState(0);

  const onKeyPress = (num: number) => {
    if (!/[0-9]/.test(num.toString())) {
      return;
    } else {
      setCount(+num);
    }
  };

  return (
    <div className={s.mianWrapper}>
      <div className={s.btnWrapper}>
        <TheButton
          btnText="-"
          color="red"
          callback={() => {
            // setCount(count - interval);
            onKeyPress(count - interval);
          }}
        />
      </div>

      <div className={s.inputWrapper}>
        <Controller
          control={control}
          name={registerName}
          render={({ field }) => (
            <input
              type="number"
              {...register(registerName)}
              name={registerName}
              // value={Number(count).toString()}
              value={count}
              onChange={(e) => onKeyPress(+e.currentTarget.value)}
            />
          )}
        />
      </div>

      <div className={s.btnWrapper}>
        <TheButton
          btnText="+"
          color="red"
          callback={() => setCount(count + interval)}
        />
      </div>
    </div>
  );
};

type Props = {
  interval?: number;
  register: UseFormRegister<any>;
  registerName: string;
  control: Control<any>;
  // onChange:any
};
