"use client";
import React, { useEffect } from "react";
import s from "./sign-up.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFormSchema } from "../sign-up/SignUpFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { FormInput } from "@/components/form/formInput/FormInput";
import { SocialAuthBtn } from "@/components/auth/socialAuthBtn/SocialAuthBtn";
import { AgreementsCheckbox } from "@/components/auth/agreementsCheckbox/AgreementsCheckbox";
import Link from "next/link";
import { useRegistrationMutation } from "@/app/api/auth/auth.api";
import { setCookie } from "nookies";
import { setIsLogged, setUserData } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useRouter } from "next-intl/client";

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(SignUpFormSchema()),
    mode: "onTouched",
  });
  const dispatch = useAppDispatch();
  const t = useTranslations("auth");

  const [toSignUp, registrationData] = useRegistrationMutation();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  console.warn("isLogged: ", isLogged);

  useEffect(() => {
    if (isLogged) {
      router.push("/assignments");
    }
  }, [isLogged]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { agreements, passwordConfirm, ...registrationDto } = formData;
    toSignUp(registrationDto);
  };

  useEffect(() => {
    if (registrationData.data) {
      const { token, ...userData } = registrationData.data;

      setCookie(null, "nToken", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      dispatch(setUserData(userData));
      dispatch(setIsLogged({ isLogged: true }));
    }
  }, [registrationData.data]);

  if (registrationData.isLoading) return <div>Loading...</div>;
  if (registrationData.error) {
    console.log("ERROR: ", registrationData.error);
  }

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.titleAndDescription}>
          <h1>{t("common.regestration-title")}</h1>
          <p>{t("common.registration-description")}</p>
        </div>
        <form className={s.formEl} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            <FormInput
              type={"text"}
              register={register}
              registerName={"full_name"}
              placeholder={t("fields-name.full_name")}
              error={errors.full_name}
              errorMessage={errors?.full_name?.message}
            />
            <FormInput
              type={"email"}
              register={register}
              registerName={"email"}
              placeholder={t("fields-name.email")}
              error={errors.email}
              errorMessage={errors?.email?.message}
            />

            <FormInput
              type={"text"}
              register={register}
              registerName={"password"}
              placeholder={t("fields-name.password")}
              error={errors.password}
              errorMessage={errors?.password?.message}
            />

            <FormInput
              type={"text"}
              register={register}
              registerName={"passwordConfirm"}
              placeholder={t("fields-name.passwordConfirm")}
              error={errors.passwordConfirm}
              errorMessage={errors?.passwordConfirm?.message}
            />

            <AgreementsCheckbox
              register={register}
              registerName={"agreements"}
              error={errors.agreements}
              errorMessage={errors?.agreements?.message}
            />
<div className={s.btnWrapper}>            <button className={`${s.submitBtn}`} type="submit">
              {t("common.sign-up-btn")}
            </button>
            </div>

          </div>
        </form>
        <p className={s.or}>{t("social-auth.or")}</p>

        <div className={s.socialsBtns}>
          <SocialAuthBtn socailNetworkName={"Google"} btnPurpose={"sign-up"} />
          <SocialAuthBtn
            socailNetworkName={"Facebook"}
            btnPurpose={"sign-up"}
          />
        </div>

        <Link href={"/sign-in"} className={s.alreadyHaveAccoutn}>
          {t("common.already-have-account")}
        </Link>
      </div>
    </div>
  );
}

type Inputs = {
  email: string;
  full_name: string;
  password: string;
  passwordConfirm: string;
  agreements: boolean;
};
