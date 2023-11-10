import { Control, Controller, FieldError, UseFormRegister } from "react-hook-form";
import { TheInputNumber } from "../number/TheNumberInput";
import s from '../../../style/componentsModules/formNumberController.module.scss'

export const FormNumberController: React.FC<WithNumberControllerProps> = ({
    control,
    name,
    description,
    register,
    error,
    errorMessage,
    interval,
  }) => {
    return (
      <div className={s.mainWrapper}>
        <div className={s.description}>{description}</div>
  
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <TheInputNumber
              interval={interval}
              register={register}
              registerName={name}
              onChange={(num: number) => field.onChange(num)}
              error={error}
              errorMessage={errorMessage}
            />
          )}
        />
      </div>
    );
  };
  
  type WithNumberControllerProps = {
    control: Control<any, any>;
    name: string;
    description: string;
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    errorMessage: string | undefined;
    interval: number;
  };
  