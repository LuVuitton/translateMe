import { FieldError } from "react-hook-form";

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
        <p className={className}>
          {errorMessage}
        </p>
      )}
    </>
  );
};