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
  isTextarea=false,
  rows  
}) => {

  const InputComponent = isTextarea ? "textarea" : "input"; // Определение, какой элемент использовать




  return (
    <div className={s.mainWrapper}>
      <div className={s.mainContainer}>
        {/* <input */}
        <InputComponent
          type={type}
          {...register(registerName)}
          placeholder={placeholder}
          className={`${s.customInput}  ${error ? s.redBorder : ""}`}
          rows={rows} // Устанавливаем количество видимых строк для textarea (если применимо)

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
  type?: HTMLInputTypeAttribute;
  isTextarea?: boolean; // Новый проп для указания, является ли элемент textarea
  rows?: number;  
};
