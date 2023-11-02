"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import s from "./createAssignment.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";

import { FormInput } from "@/components/form/formInput/FormInput";

import { CreateAssignmentDto } from "@/app/api/assignment/assignment.api";
import { CreateAsSchema } from "./CreateAsSchema";
import { TheButton } from "@/components/buttons/btn/TheButton";
import TheSelect from "@/components/form/select/TheSelect";
import { TheInputNumber } from "@/components/form/number/TheNumberInput";
import { TheDataPicker } from "@/components/form/datePicker/DatePicker";
import { useEffect, useState } from "react";

export default function CreateAsignment() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid, isLoading },
    // } = useForm<CreateAssignmentDto>({
  } = useForm({
    resolver: yupResolver(CreateAsSchema()),
    mode: "onTouched",
  });

  console.log(watch());

  const t = useTranslations("auth");
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setShowDatePicker(true);
  }, []);

  //   address: string;
  //   assignment_date: string;
  //   assignment_title: string;
  //   assignment_description: string;
  //   execution_time_minutes: number;
  //   worth: number;
  //   country_id: number;
  //   city_id: number;
  //   required_languages_id: number[];
  //   customer_languages_id: number[];

  // const onSubmit: SubmitHandler<CreateAssignmentDto> = (formData) => {
  const onSubmit: SubmitHandler<any> = (formData) => {
    console.log(formData);
    console.log("SUUUUUUBMIT");
  };

console.log("ERRRORS: ", errors);


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
              onChange={(data)=> {field.onChange(data)}}
              fieldName="required_languages_id"
                isMulti
                noOptionsMessage="there is mo more (on your language)"
                // onSelectChange={onNeedsChangeHandler}
                options={[
                  { label: "english", value: 1 },
                  { label: "ukrainian", value: 2 },
                ]}
                placeholder="select language(s) what you need (on your language)"
                error={errors.required_languages_id}
                errorMessage={errors?.required_languages_id?.message}
              />
              )}
              />
               <Controller
                control={control}
                name={"customer_languages_id"}
                render={({ field }) => (
              <TheSelect
              onChange={(data)=> {field.onChange(data)}}
              fieldName="customer_languages_id"
                isMulti
                noOptionsMessage="there is mo more (on your language)"
                // onSelectChange={onNeedsChangeHandler}
                options={[
                  { label: "english", value: 1 },
                  { label: "ukrainian", value: 2 },
                ]}
                placeholder="select language(s) what you speak (on your language)"
                error={errors?.customer_languages_id[0]}
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
                  />
                ) : (
                  "Loading..."
                )}
              </div>
              {errors.assignment_date?.message && (
                <div>{errors.assignment_date?.message}</div>
              )}
            </div>
            <div className={s.btnWrapper}>
              <TheButton
                btnText="Create"
                color="green"
                type="submit"
                isLoading={isLoading}
              />
              {/* <button className={s.submitBtn} type="submit">
                click
              </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
