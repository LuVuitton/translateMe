import { FieldError, UseFormRegister } from "react-hook-form";
import { InputError } from "./InputError";
import s from "./formInput.module.scss";
import { HTMLInputTypeAttribute } from "react";

export const FormInput: React.FC<Props> = ({
  register,
  registerName,
  placeholder,
  error,
  errorMessage,
  type,
}) => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.mainContainer}>
        <input
          type={type}
          {...register(registerName)}
          placeholder={placeholder}
          className={`${s.customInput}  ${error ? s.redBorder : ""}`}
        />
        <InputError
          error={error}
          errorMessage={errorMessage}
          className={s.errorMessage}
        />
      </div>
    </div>
  );
};

type Props = {
  register: UseFormRegister<any>;
  registerName: string;
  placeholder: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  type: HTMLInputTypeAttribute;
};
