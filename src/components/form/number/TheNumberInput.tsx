"use client";

import { ChangeEvent, useState } from "react";
import s from "./theNumberInput.module.scss";
import { TheButton } from "@/components/buttons/btn/TheButton";

export const TheInputNumber = () => {
  const [count, setCount] = useState(0);

  const onKeyPress = (event: ChangeEvent<HTMLInputElement>) => {
    const num = event.target.value;
    if (!/[0-9]/.test(num)) {
      event.preventDefault();
    }
    if (count === 0) {
      setCount(+num);
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
          callback={() => setCount(count - 1)}
        />
      </div>

      <div className={s.inputWrapper}>
        <input
          type="number"
          name="number"
          value={Number(count).toString()}
          onChange={onKeyPress}
        />
      </div>
      
      <div className={s.btnWrapper}>
        <TheButton
          btnText="+"
          color="red"
          callback={() => setCount(count + 1)}
        />
      </div>
    </div>
  );
};
