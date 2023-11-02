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
  };

  const onNeedsChangeHandler = (e: any) => {
    console.log("needs: ", e);
  };
  const onSpeaksChangeHandler = (e: any) => {
    console.log("speaks: ", e);
  };
  const onCountryChangeHandler = (e: any) => {
    console.log("needs: ", e);
  };
  const onCityChangeHandler = (e: any) => {
    console.log("speaks: ", e);
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
            {/*   <div className={s.description}>
              <FormInput
                isTextarea
                rows={5}
                register={register}
                registerName={"description"}
                placeholder={"t(fields-name.description)"}
                error={errors.address}
                errorMessage={errors?.address?.message}
              />
            </div>
            <div className={s.address}>
              <FormInput
                isTextarea
                rows={3}
                register={register}
                registerName={"description"}
                placeholder={"t(fields-name.address)"}
                error={errors.address}
                errorMessage={errors?.address?.message}
              />
            </div>

            <div className={s.languages}>
              <TheSelect
                isMulti
                noOptionsMessage="there is mo more (on your language)"
                onSelectChange={onNeedsChangeHandler}
                options={[
                  { label: "english", value: 1 },
                  { label: "ukrainian", value: 2 },
                ]}
                placeholder="select language(s) what you need (on your language)"
              />
              <TheSelect
                isMulti
                noOptionsMessage="there is mo more (on your language)"
                onSelectChange={onSpeaksChangeHandler}
                options={[
                  { label: "english", value: 1 },
                  { label: "ukrainian", value: 2 },
                ]}
                placeholder="select language(s) what you speak (on your language)"
              />
            </div>

            <div className={s.location}>
              <TheSelect
                noOptionsMessage="there is mo more (on your language)"
                onSelectChange={onCountryChangeHandler}
                options={[
                  { label: "England", value: 1 },
                  { label: "Ukraine", value: 2 },
                ]}
                placeholder="country"
              />
              <TheSelect
                noOptionsMessage="there is mo more (on your language)"
                onSelectChange={onCityChangeHandler}
                options={[
                  { label: "London", value: 1 },
                  { label: "Milan", value: 2 },
                ]}
                placeholder="city"
              />
            </div>

            <div className={s.executionTimeWrapper}>
              <div className={s.executionTimeDesription}>
                тут кроме описания продублировать время в часах минутах
              </div>
              <TheInputNumber interval={10} />
            </div>
*/}
            <div className={s.worthWrapper}>
              <div className={s.worthDesription}>
                some text that explain what it is in different languages
              </div>

              {/* <Controller
                control={control}
                name={"worth"}
                render={({ field}) => ( */}
                  <TheInputNumber
                    register={register}
                    registerName="worth"
                    control={control}
                    // onChange={(e:number)=>field.onChange(e)}
                  />
                {/* )}
              /> */}
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
