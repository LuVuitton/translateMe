"use client";
import React, { useEffect } from "react";
import s from "../../../style/pagesModules/signUp.module.scss";
import {
  useForm,
  SubmitHandler,
  FieldError,
  FieldErrors,
} from "react-hook-form";
import { SignUpFormSchema } from "../../../helpers/formScheme/SignUpFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { FormInput } from "@/components/clientComponents/form/formInput/FormInput";
import { SocialAuthBtn } from "@/components/clientComponents/auth/socialAuthBtn/SocialAuthBtn";
import { AgreementsCheckbox } from "@/components/clientComponents/auth/agreementsCheckbox/AgreementsCheckbox";
import Link from "next/link";
import { useRegistrationMutation } from "@/app/api/clientRequests/auth/auth.api";
import { setIsLogged, setUserData } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useRouter } from "next-intl/client";
import { TheButton } from "@/components/clientComponents/buttons/btn/TheButton";


const fields = [
  { type: "text", fieldName: "full_name" },
  { type: "email", fieldName: "email" },
  { type: "password", fieldName: "password" },
  { type: "password", fieldName: "passwordConfirm" },
];

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

  useEffect(() => {
    if (isLogged) {
      router.push("/");
    }
  }, [isLogged]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { agreements, passwordConfirm, ...registrationDto } = formData;
    toSignUp(registrationDto);
  };

  if (registrationData.data) {
    const { token, ...userData } = registrationData.data;
    dispatch(setUserData(userData));
    dispatch(setIsLogged({ isLogged: true, token: token }));
  }

  if (registrationData.isLoading) return <div>Loading...</div>;

  if (registrationData.error) {
    console.log("ERROR: ", registrationData.error);
  }



  const mappedFormFields = fields.map((e, i) => {
    const fieldName = e.fieldName as keyof FieldErrors<Inputs>;
    const errorValue = errors && errors[fieldName];

    return (
      <FormInput
        key={i}
        type={e.type}
        register={register}
        registerName={e.fieldName}
        placeholder={t(`fields-name.${e.fieldName}`)}
        error={errorValue as FieldError}
        errorMessage={errorValue?.message}
      />
    );
  });

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.titleAndDescription}>
          <h1>{t("common.regestration-title")}</h1>
          <p>{t("common.registration-description")}</p>
        </div>
        <form className={s.formEl} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            {mappedFormFields}

            <AgreementsCheckbox
              register={register}
              registerName={"agreements"}
              error={errors.agreements}
              errorMessage={errors?.agreements?.message}
            />

            <div className={s.btnWrapper}>
              <TheButton type="submit" btnText={t("common.sign-up-btn")} />
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

/* <FormInput
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
            /> */
