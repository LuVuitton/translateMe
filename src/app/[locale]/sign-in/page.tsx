"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "../../../style/pagesModules/signIn.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { SignInFormSchema } from "../../../helpers/formScheme/SignInFormSchema";
import { SocialAuthBtn } from "@/components/clientComponents/auth/socialAuthBtn/SocialAuthBtn";
import Link from "next/link";
import { FormInput } from "@/components/clientComponents/form/formInput/FormInput";
import { useLoginMutation } from "@/app/api/clientRequests/auth/auth.api";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect } from "react";
import { useRouter } from "next-intl/client";
import { setIsLogged, setUserData } from "@/redux/slices/userSlice";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(SignInFormSchema()),
    mode: "onTouched",
  });

  const t = useTranslations("auth");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isLogged = useAppSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (isLogged) {
      router.push("/assignments");
    }
  }, [isLogged]);

  const [toLogin, { isError, isLoading, isSuccess, data, error }] =
    useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    toLogin(formData)
      .unwrap()
      .then((r) => {
        console.log("fulfilled", r.token);
        const { email, full_name, user_id, user_registration_date } = r;

        dispatch(
          setUserData({ email, full_name, user_id, user_registration_date })
        );
        dispatch(setIsLogged({ isLogged: true, token: r.token }));
      });
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.titleAndDescription}>
          <h1>{t("common.sign-in-title")}</h1>
          <p>{t("common.sign-in-description")}</p>
        </div>
        <form className={s.formEl} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            <FormInput
              type={"email"}
              register={register}
              registerName={"email"}
              placeholder={t("fields-name.email")}
              error={errors.email}
              errorMessage={errors?.email?.message}
            />

            <div className={s.pass}>
              <FormInput
                type={"text"}
                register={register}
                registerName={"password"}
                placeholder={t("fields-name.password")}
                error={errors.password}
                errorMessage={errors?.password?.message}
              />
              <div className={s.forgotPass}>
                <Link href={"#"}>{t("common.forgot-pass")}</Link>
              </div>
            </div>
            <div className={s.btnWrapper}>
              <button className={s.submitBtn} type="submit">
                {t("common.sign-in-btn")}
              </button>
            </div>
          </div>
        </form>
        <p className={s.or}>{t("social-auth.or")}</p>

        <div className={s.socialsBtns}>
          <SocialAuthBtn socailNetworkName={"Google"} btnPurpose={"sign-in"} />
          <SocialAuthBtn
            socailNetworkName={"Facebook"}
            btnPurpose={"sign-in"}
          />
        </div>
        <Link href={"/sign-up"} className={s.dontHaveAccoutn}>
          {t("common.dont-have-account")}
        </Link>
        <p className={s.dontHaveAccoutnDesc}>
          {t("common.dont-have-account-description")}
        </p>
      </div>
    </div>
  );
}
