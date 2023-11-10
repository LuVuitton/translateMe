import { Control, Controller, FieldError } from "react-hook-form";
import s from "../../../style/componentsModules/formSelectController.module.scss";
import TheSelect from "../select/TheSelect";
import { SelectOptions } from "@/helpers/convertDataToSelect";

export const FormSelectController: React.FC<WithSelectControllerProps> = ({
  control,
  name,
  description,
  error,
  errorMessage,
  options,
  placeholder,
  isMulti,
}) => {
  return (
    <div className={s.mainWrapper}>
      {description && <div className={s.description}>{description}</div>}

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TheSelect
            name={name}
            onChange={(data) => field.onChange(data)}
            noOptionsMessage="there is mo more (on your language)"
            options={options}
            placeholder={placeholder}
            error={error}
            errorMessage={errorMessage}
            isMulti={isMulti}
          />
        )}
      />
    </div>
  );
};

type WithSelectControllerProps = {
  control: Control<any, any>;
  name: string;
  description?: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  options: SelectOptions;
  placeholder: string;
  isMulti?: true;
};
