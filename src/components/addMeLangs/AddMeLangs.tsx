import { convertLanguageToSelect } from "@/helpers/convertDataToSelect";
import { languageMapping } from "@/helpers/mappingData";
import s from './addMeLangs.module.scss'
import { AddMeLangDto } from "@/app/api/user/user-lang/user-lang.api";
import { Controller, FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddMeLangsSchema } from "./AddMeLangsSchema";
import TheSelect from "../form/select/TheSelect";

export const AddMeLangs = ()=> {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isValid, isLoading },
      } = useForm<AddMeLangDto>({
        // resolver: yupResolver(AddMeLangsSchema()),
        mode: "onTouched",
      });

    const languagesOptions = convertLanguageToSelect(languageMapping);



  return  <div className={s.languages}>
    <Controller
      control={control}
      name={"languages"}
      render={({ field }) => (
        <TheSelect
          onChange={(data) => {
            field.onChange(data);
          }}
          fieldName="languages"
          isMulti
          noOptionsMessage="there is mo more (on your language)"
          // onSelectChange={onNeedsChangeHandler}
          options={languagesOptions}
          placeholder="select language(s) what you speak (on your language)"
          error={errors.languages as FieldError | undefined}
          errorMessage={errors?.languages?.message}
        />
      )}
    />
  </div>

}