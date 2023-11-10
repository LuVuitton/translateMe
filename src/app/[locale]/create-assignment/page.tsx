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
import {
  citiesMapping,
  countriesMapping,
  languageMapping,
} from "@/helpers/mappingData";
import {
  convertLanguageToSelect,
  convertLocationToSelect,
} from "@/helpers/convertDataToSelect";
import { FormNumberController } from "@/components/form/formNumberController/FormNumberController";
import { FormSelectController } from "@/components/form/formSelectController /FormSelectController";

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

  const t = useTranslations("auth");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const languagesOptions = convertLanguageToSelect(languageMapping);
  const citiesOptions = convertLocationToSelect(citiesMapping);
  const countriesOptions = convertLocationToSelect(countriesMapping);

  const [
    create,
    { isLoading: requestPending, isSuccess, isError, data: responseData },
  ] = useCreateAssignmentMutation();

  useEffect(() => {
    setShowDatePicker(true);
  }, []);

  useEffect(() => {
    if (responseData) {
      router.push(`/assignments/${responseData.assignment_id}`);
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<any> = (formData: CreateAssignmentDto) => {
    console.log(formData);

    const date = new Date(formData.assignment_date);
    const isoDateString = date.toISOString();

    create({ ...formData, assignment_date: isoDateString });
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.titleAndDescription}>
          <h1>Create new assignment</h1>
          <p>Fill out the form to create a new task</p>
        </div>
        <form className={s.formEl} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            <FormInput
              type={"text"}
              register={register}
              registerName={"assignment_title"}
              placeholder={"t(fields-name.title)"}
              error={errors.assignment_title}
              errorMessage={errors?.assignment_title?.message}
            />
            <FormInput
              isTextarea
              rows={5}
              register={register}
              registerName={"assignment_description"}
              placeholder={"t(fields-name.description)"}
              error={errors.assignment_description}
              errorMessage={errors?.assignment_description?.message}
            />
            <FormInput
              isTextarea
              rows={3}
              register={register}
              registerName={"address"}
              placeholder={"t(fields-name.address)"}
              error={errors.address}
              errorMessage={errors?.address?.message}
            />

            <div className={s.languages}>
              <FormSelectController
                control={control}
                name={"required_languages_id"}
                isMulti
                options={languagesOptions}
                placeholder="select language(s) what you need (on your language)"
                error={errors.required_languages_id as FieldError | undefined}
                errorMessage={errors?.required_languages_id?.message}
              />

              <FormSelectController
                control={control}
                name={"customer_languages_id"}
                isMulti
                options={languagesOptions}
                placeholder="select language(s) what you speak (on your language)"
                error={errors.customer_languages_id as FieldError | undefined}
                errorMessage={errors?.customer_languages_id?.message}
              />
            </div>

            <div className={s.location}>
              <FormSelectController
                control={control}
                name={"country_id"}
                options={countriesOptions}
                placeholder="country"
                error={errors.country_id as FieldError | undefined}
                errorMessage={errors?.country_id?.message}
              />
              <FormSelectController
                control={control}
                name={"city_id"}
                options={citiesOptions}
                placeholder="city"
                error={errors.city_id as FieldError | undefined}
                errorMessage={errors?.city_id?.message}
              />
            </div>

            <FormNumberController
              control={control}
              description="time description"
              name="execution_time_minutes"
              register={register}
              error={errors.execution_time_minutes}
              errorMessage={errors?.execution_time_minutes?.message}
              interval={10}
            />
            <FormNumberController
              control={control}
              description="worth description"
              name="worth"
              register={register}
              error={errors.worth}
              errorMessage={errors?.worth?.message}
              interval={1}
            />
            {showDatePicker ? (
              <TheDataPicker
                control={control}
                register={register}
                registerName={"assignment_date"}
                error={errors.assignment_date}
                errorMessage={errors?.assignment_date?.message}
                description="date description"
              />
            ) : (
              "Loading..."
            )}
            <div className={s.btnWrapper}>
              <TheButton
                btnText="Create"
                color="green"
                type="submit"
                isLoading={requestPending || isSuccess}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
