"use client";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import s from "../../../style/pagesModules/createAssignment.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { FormInput } from "@/components/form/formInput/FormInput";
import {
  CreateAssignmentDto,
  useCreateAssignmentMutation,
} from "@/app/api/assignment/assignment.api";
import { CreateAsSchema } from "../../../helpers/formScheme/CreateAsSchema";
import { TheButton } from "@/components/buttons/btn/TheButton";
import { TheDataPicker } from "@/components/form/datePicker/DatePicker";
import { useEffect, useState } from "react";
import { useRouter } from "next-intl/client";
import { languagesOptions } from "@/helpers/convertDataToSelect";
import { FormNumberController } from "@/components/form/formNumberController/FormNumberController";
import { FormSelectController } from "@/components/form/formSelectController /FormSelectController";
import { createAssignmentFormFields } from "@/helpers/formData";

export default function CreateAsignment() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isLoading },
  } = useForm<CreateAssignmentDto>({
    resolver: yupResolver(CreateAsSchema()),
    mode: "onTouched",
  });
  const router = useRouter();

  const t = useTranslations("create-assignmnent");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [create, { isLoading: createLoading, isSuccess }] =
    useCreateAssignmentMutation();

  useEffect(() => {
    setShowDatePicker(true);
  }, []);

  const onSubmit: SubmitHandler<any> = (formData: CreateAssignmentDto) => {
    console.log(formData);
    const date = new Date(formData.assignment_date);
    const isoDateString = date.toISOString();

    create({ ...formData, assignment_date: isoDateString })
      .unwrap()
      .then((r) => {
        router.push(`/assignments/${r.assignment_id}`);
      });
  };

  const { languages, locations, numbers, text } = createAssignmentFormFields;

  const textFields = text.map((e) => (
    <FormInput
      type={e.type === "text" ? "text" : undefined}
      isTextarea={e.type === "textarea"}
      register={register}
      registerName={e.registerName}
      placeholder={t(`fields.${e.registerName}.placeholder`)}
      error={errors[e.registerName as keyof CreateAssignmentDto] as FieldError}
      errorMessage={
        errors[e.registerName as keyof CreateAssignmentDto]?.message
      }
    />
  ));
  const languageFields = languages.map((e) => (
    <FormSelectController
      control={control}
      name={e.name}
      isMulti
      options={languagesOptions}
      placeholder={t(`fields.${e.name}.placeholder`)}
      error={errors[e.name as keyof CreateAssignmentDto] as FieldError}
      errorMessage={errors[e.name as keyof CreateAssignmentDto]?.message}
    />
  ));
  const locationsFields = locations.map((e) => (
    <FormSelectController
      control={control}
      name={e.name}
      options={e.options}
      placeholder={t(`fields.${e.name}.placeholder`)}
      error={errors[e.name as keyof CreateAssignmentDto] as FieldError}
      errorMessage={errors[e.name as keyof CreateAssignmentDto]?.message}
    />
  ));
  const numbersFields = numbers.map((e) => (
    <FormNumberController
      description={t(`fields.${e.name}.description`)}
      control={control}
      name={e.name}
      register={register}
      error={errors[e.name as keyof CreateAssignmentDto] as FieldError}
      errorMessage={errors[e.name as keyof CreateAssignmentDto]?.message}
      interval={e.interval}
    />
  ));

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.titleAndDescription}>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
        <form className={s.formEl} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            {textFields}
            {languageFields}
            {locationsFields}
            {numbersFields}

            {showDatePicker ? (
              <TheDataPicker
                control={control}
                register={register}
                registerName={"assignment_date"}
                error={errors.assignment_date}
                errorMessage={errors?.assignment_date?.message}
                description={t(`fields.assignment_date.description`)}
              />
            ) : (
              "Loading..."
            )}
            <div className={s.btnWrapper}>
              <TheButton
                btnText="Create"
                color="green"
                type="submit"
                isLoading={createLoading || isSuccess}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
