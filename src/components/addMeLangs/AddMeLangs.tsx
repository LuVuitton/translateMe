import {
  convertLanguageToSelect,
  convertProficiencyToSelect,
} from "@/helpers/convertDataToSelect";
import { languageMapping, proficiencyMapping } from "@/helpers/mappingData";

import s from "../../style/componentsModules/addMeLangs.module.scss";
import {
  Controller,
  FieldError,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddMeLangsSchema } from "../../helpers/formScheme/AddMeLangsSchema";
import TheSelect from "../form/select/TheSelect";
import { TheButton } from "../buttons/btn/TheButton";

export const AddMeLangs = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid, isLoading },
  } = useForm<AddMeLangsForm>({
    resolver: yupResolver(AddMeLangsSchema()),
    mode: "onTouched",
  });

  const languagesOptions = convertLanguageToSelect(languageMapping);
  const proficiencyOptions = convertProficiencyToSelect(proficiencyMapping);

  const onSubmit: SubmitHandler<any> = (formData: AddMeLangsForm) => {
    console.log(formData);
  };

  return (
    <div className={s.mainWrapper}>
      <form className={s.formEl} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.languages}>
          <Controller
            control={control}
            name={"languages"}
            render={({ field }) => (
              <TheSelect
                onChange={(data) => {
                  field.onChange(data);
                }}
                fieldName="languages"
                noOptionsMessage="there is mo more (on your language)"
                options={languagesOptions}
                placeholder="select language(s) what you speak (on your language)"
                error={errors.languages as FieldError | undefined}
                errorMessage={errors?.languages?.message}
              />
            )}
          />
          <Controller
            control={control}
            name={"proficiency"}
            render={({ field }) => (
              <TheSelect
                onChange={(data) => {
                  field.onChange(data);
                }}
                fieldName="proficiency"
                noOptionsMessage="there is mo more (on your language)"
                options={proficiencyOptions}
                placeholder="select language(s) what you speak (on your language)"
                error={errors.languages as FieldError | undefined}
                errorMessage={errors?.languages?.message}
              />
            )}
          />
        </div>

        <div className={s.btnWrapper}>
          <TheButton
            btnText="Create"
            color="green"
            type="submit"
            // isLoading={requestPending || isSuccess}
          />
        </div>
      </form>
    </div>
  );
};

type AddMeLangsForm = {
  languages: number;
  proficiency: number;
};
