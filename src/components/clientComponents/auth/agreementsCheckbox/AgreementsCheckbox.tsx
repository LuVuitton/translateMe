import { FieldError, UseFormRegister } from "react-hook-form";
import { InputError } from "../../form/inputError/InputError";
import { useTranslations } from "next-intl";
import s from "../../../../style/componentsModules/agreementsCheckbox.module.scss";

export const AgreementsCheckbox: React.FC<Props> = ({
  error,
  errorMessage,
  register,
  registerName,
}) => {
  const t = useTranslations("auth.fields-name");

  return (
          <label>
      <div className={s.agreeWrapper}>
        <div className={s.checkboxAndText} >
          <input type="checkbox" {...register(registerName)} />
          {t("agreements")}
        </div>
        <div className={s.agreeError}>
          <InputError error={error} errorMessage={errorMessage} />
        </div>
      </div>
    </label>
  );
};

type Props = {
  register: UseFormRegister<any>;
  registerName: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
};
