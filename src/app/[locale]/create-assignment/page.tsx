"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "./createAssignment.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";

import { FormInput } from "@/components/form/formInput/FormInput";

import { CreateAssignmentDto } from "@/app/api/assignment/assignment.api";
import { CreateAsSchema } from "./CreateAsSchema";
import { TheButton } from "@/components/buttons/btn/TheButton";
import TheSelect from "@/components/form/select/TheSelect";
import { TheInputNumber } from "@/components/form/number/TheNumberInput";


export default function CreateAsignment() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isLoading },
  } = useForm<CreateAssignmentDto>({
    resolver: yupResolver(CreateAsSchema()),
    mode: "onTouched",
  });

  const t = useTranslations("auth");

  // const data = {
  //   assignment_date: string;
  //   address: string;
  // };

  //   assignment_title: string;
  //   assignment_description: string;
  //   execution_time_minutes: number;
  //   worth: number;
  //   country_id: number;
  //   city_id: number;
  //   required_languages_id: number[];
  //   customer_languages_id: number[];

  const onSubmit: SubmitHandler<CreateAssignmentDto> = (formData) => {
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
                registerName={"title"}
                placeholder={"t(fields-name.title)"}
                error={errors.address}
                errorMessage={errors?.address?.message}
              />
            </div>
            <div className={s.description}>
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
              <TheInputNumber />
            </div>

            <div className={s.worthWrapper}>
              <div className={s.worthDesription}>
                some text that explain what it is in different languages
              </div>
              <TheInputNumber />
            </div>

            <div className={s.dateWrapper}>
DATE
            </div>
            <div className={s.btnWrapper}>
              <TheButton btnText="Create" color="green" isLoading={isLoading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
