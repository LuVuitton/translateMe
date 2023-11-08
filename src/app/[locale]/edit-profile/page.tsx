"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import s from "./editProfile.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";

import { FormInput } from "@/components/form/formInput/FormInput";
import { TheButton } from "@/components/buttons/btn/TheButton";
import TheSelect from "@/components/form/select/TheSelect";
import { useEffect, useState } from "react";
import { useRouter } from "next-intl/client";
import { EditProfileSchema } from "./EditProfileSchema";
import {
  UpdateUserDto,
  useGetMeQuery,
  useUpdateUserMutation,
} from "@/app/api/user/user.api";
import { citiesMapping, countriesMapping } from "@/helpers/mappingData";
import { convertLocationToSelect } from "@/helpers/convertDataToSelect";

export default function EditProfile() {
  const router = useRouter();
  const t = useTranslations("auth");
  const [
    update,
    { isLoading: requestPending, isSuccess, isError, data: responseData },
  ] = useUpdateUserMutation();
  const { data, isLoading } = useGetMeQuery();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<UpdateUserDto>({
    resolver: yupResolver(EditProfileSchema()),
    mode: "onTouched",
    defaultValues: {
      about_me: data?.about_me ? data?.about_me : "",
    },
  });

  const countriesOptions = convertLocationToSelect(countriesMapping);
  const citiesOptions = convertLocationToSelect(citiesMapping);

  useEffect(() => {
    if (responseData) {
      router.push(`/profile/${responseData.user.user_id}`);
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<any> = (formData: UpdateUserDto) => {
    console.log(formData);
    console.log("SUUUUUUBMIT");

    update(formData);
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.titleAndDescription}>
          <h1>Edit my profile</h1>
          <p>Fill out the form to edit your data</p>
        </div>
        <form className={s.formEl} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            <div className={s.description}>
              <FormInput
                isTextarea
                rows={5}
                register={register}
                registerName={"about_me"}
                placeholder={"t(fields-name.description)"}
                error={errors.about_me}
                errorMessage={errors?.about_me?.message}
              />
            </div>

            <div className={s.location}>
              <Controller
                control={control}
                name={"country_id"}
                defaultValue={0}
                render={({ field }) => (
                  <TheSelect
                    {...field}
                    fieldName="country_id"
                    onChange={(data) => field.onChange(data)}
                    noOptionsMessage="there is mo more (on your language)"
                    // onSelectChange={onCountryChangeHandler}
                    options={countriesOptions}
                    placeholder={
                      data?.country_id
                        ? countriesMapping[data?.country_id].countryName
                        : "country"
                    }
                    error={errors.country_id}
                    errorMessage={errors?.country_id?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={"city_id"}
                // defaultValue={20}
                render={({ field }) => (
                  <TheSelect
                    fieldName="city_id"
                    onChange={(data) => field.onChange(data)}
                    noOptionsMessage="there is mo more (on your language)"
                    // onSelectChange={onCityChangeHandler}
                    options={citiesOptions}
                    placeholder="city"
                    error={errors.city_id}
                    errorMessage={errors?.city_id?.message}
                  />
                )}
              />
            </div>

            <div className={s.btnWrapper}>
              <TheButton
                btnText="apply changes"
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
