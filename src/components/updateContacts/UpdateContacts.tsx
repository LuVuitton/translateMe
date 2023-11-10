"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "../../style/componentsModules/updateContacts.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { FormInput } from "@/components/form/formInput/FormInput";
import { TheButton } from "@/components/buttons/btn/TheButton";
import { UpdateContactsSchema } from "../../helpers/formScheme/UpdateContactsSchema";
import { useUpdateMyContactsMutation } from "@/app/api/contacts/contacts.api";

export const UpdateContacts = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<ContacatsForm>({
    resolver: yupResolver(UpdateContactsSchema()),
    mode: "onTouched",
    // defaultValues: {
    //   about_me: data?.about_me ? data?.about_me : "",
    // },
  });
  const t = useTranslations("auth");
  const [
    update,
    { isLoading: requestPending, isSuccess, isError, data: responseData },
  ] = useUpdateMyContactsMutation();

  const onSubmit: SubmitHandler<any> = (formData: ContacatsForm) => {
    console.log(formData);
    console.log("SUUUUUUBMIT contacts");

    // update(formData);
  };

  const mappedContactsForm = [
    "whatsapp",
    "telegram",
    "viber",
    "phone_number",
    "instagram",
    "other_contacts",
  ].map((e) => {
    return (
      <div className={s.formItem}>
        <div className={s.formName}>{e}:</div>
        <div className={s.formInput}> 
        <FormInput
          register={register}
          registerName={e}
          placeholder={`t(fields-name.${e})`}
          error={errors[e as keyof ContacatsForm]}
          errorMessage={errors[e as keyof ContacatsForm]?.message}
        />
      </div>
      </div>
    );
  });

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.titleAndDescription}>
          <h1>Edit my profile</h1>
          <p>Fill out the form to edit your data</p>
        </div>
        <form className={s.formEl} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            {mappedContactsForm}

            <div className={s.btnWrapper}>
              <TheButton
                btnText="add contacts"
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
};

export type ContacatsForm = {
  whatsapp?: string;
  telegram?: string;
  viber?: string;
  phone_number?: string;
  instagram?: string;
  other_contacts?: string;
};
