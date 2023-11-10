import { FieldError } from "react-hook-form";
import s from '../../../style/componentsModules/inputError.module.scss'

type Props = {
  error: FieldError | undefined;
  errorMessage: string | undefined;
  // id: string;
  className?:string

};

export const InputError: React.FC<Props> = ({ errorMessage, error, className }) => {
  return (
    <>
      {error && (
        <p className={s.errorMessage}>
          {errorMessage}
        </p>
      )}
    </>
  );
};

