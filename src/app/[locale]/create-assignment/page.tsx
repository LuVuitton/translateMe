"use client";
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldError,
} from "react-hook-form";
import s from "./createAssignment.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";

import { FormInput } from "@/components/form/formInput/FormInput";

import {
  CreateAssignmentDto,
  useCreateAssignmentMutation,
} from "@/app/api/assignment/assignment.api";
import { CreateAsSchema } from "./CreateAsSchema";
import { TheButton } from "@/components/buttons/btn/TheButton";
import TheSelect from "@/components/form/select/TheSelect";
import { TheInputNumber } from "@/components/form/number/TheNumberInput";
import { TheDataPicker } from "@/components/form/datePicker/DatePicker";
import { useEffect, useState } from "react";
import { useRouter } from "next-intl/client";

export default function CreateAsignment() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid, isLoading },
  } = useForm<CreateAssignmentDto>({
    resolver: yupResolver(CreateAsSchema()),
    mode: "onTouched",
  });
  const router = useRouter();

  const t = useTranslations("auth");
  const [showDatePicker, setShowDatePicker] = useState(false);

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
    console.log("SUUUUUUBMIT");

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
            <div className={s.title}>
              <FormInput
                type={"text"}
                register={register}
                registerName={"assignment_title"}
                placeholder={"t(fields-name.title)"}
                error={errors.assignment_title}
                errorMessage={errors?.assignment_title?.message}
              />
            </div>
            <div className={s.description}>
              <FormInput
                isTextarea
                rows={5}
                register={register}
                registerName={"assignment_description"}
                placeholder={"t(fields-name.description)"}
                error={errors.assignment_description}
                errorMessage={errors?.assignment_description?.message}
              />
            </div>
            <div className={s.address}>
              <FormInput
                isTextarea
                rows={3}
                register={register}
                registerName={"address"}
                placeholder={"t(fields-name.address)"}
                error={errors.address}
                errorMessage={errors?.address?.message}
              />
            </div>

            <div className={s.languages}>
              <Controller
                control={control}
                name={"required_languages_id"}
                render={({ field }) => (
                  <TheSelect
                    onChange={(data) => {
                      field.onChange(data);
                    }}
                    fieldName="required_languages_id"
                    isMulti
                    noOptionsMessage="there is mo more (on your language)"
                    // onSelectChange={onNeedsChangeHandler}
                    options={[
                      { label: "english", value: 1 },
                      { label: "ukrainian", value: 2 },
                    ]}
                    placeholder="select language(s) what you need (on your language)"
                    error={
                      errors.required_languages_id as FieldError | undefined
                    }
                    errorMessage={errors?.required_languages_id?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name={"customer_languages_id"}
                render={({ field }) => (
                  <TheSelect
                    onChange={(data) => {
                      field.onChange(data);
                    }}
                    fieldName="customer_languages_id"
                    isMulti
                    noOptionsMessage="there is mo more (on your language)"
                    // onSelectChange={onNeedsChangeHandler}
                    options={[
                      { label: "english", value: 1 },
                      { label: "ukrainian", value: 2 },
                    ]}
                    placeholder="select language(s) what you speak (on your language)"
                    // error={errors.customer_languages_id ? errors?.customer_languages_id[0] : undefined}
                    error={
                      errors.customer_languages_id as FieldError | undefined
                    }
                    errorMessage={errors?.customer_languages_id?.message}
                  />
                )}
              />
            </div>

            <div className={s.location}>
              <Controller
                control={control}
                name={"country_id"}
                render={({ field }) => (
                  <TheSelect
                    fieldName="country_id"
                    onChange={(data) => field.onChange(data)}
                    noOptionsMessage="there is mo more (on your language)"
                    // onSelectChange={onCountryChangeHandler}
                    options={[
                      { label: "England", value: 1 },
                      { label: "Ukraine", value: 2 },
                    ]}
                    placeholder="country"
                    error={errors.country_id}
                    errorMessage={errors?.country_id?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={"city_id"}
                render={({ field }) => (
                  <TheSelect
                    fieldName="city_id"
                    onChange={(data) => field.onChange(data)}
                    noOptionsMessage="there is mo more (on your language)"
                    // onSelectChange={onCityChangeHandler}
                    options={[
                      { label: "London", value: 1 },
                      { label: "Milan", value: 2 },
                    ]}
                    placeholder="city"
                    error={errors.city_id}
                    errorMessage={errors?.city_id?.message}
                  />
                )}
              />
            </div>

            <div className={s.executionTimeWrapper}>
              <div className={s.executionTimeDesription}>
                тут кроме описания продублировать время в часах минутах
              </div>

              <Controller
                control={control}
                name={"execution_time_minutes"}
                render={({ field }) => (
                  <TheInputNumber
                    interval={10}
                    register={register}
                    registerName="execution_time_minutes"
                    onChange={(num: number) => field.onChange(num)}
                    error={errors.execution_time_minutes}
                    errorMessage={errors?.execution_time_minutes?.message}
                  />
                )}
              />
            </div>

            <div className={s.worthWrapper}>
              <div className={s.worthDesription}>
                some text that explain what it is in different languages
              </div>

              <Controller
                control={control}
                name={"worth"}
                render={({ field }) => (
                  <TheInputNumber
                    register={register}
                    registerName="worth"
                    onChange={(num: number) => field.onChange(num)}
                    error={errors.worth}
                    errorMessage={errors?.worth?.message}
                  />
                )}
              />
            </div>

            <div className={s.dateWrapper}>
              <div className={s.dateDesriptiom}>
                askjdh askjdh aksjhdaksj hdakjs dhkas
              </div>
              <div className={s.datePicker}>
                {showDatePicker ? (
                  <TheDataPicker
                    control={control}
                    register={register}
                    registerName={"assignment_date"}
                    error={errors.assignment_date}
                    errorMessage={errors?.assignment_date?.message}
                  />
                ) : (
                  "Loading..."
                )}
              </div>
            </div>
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
