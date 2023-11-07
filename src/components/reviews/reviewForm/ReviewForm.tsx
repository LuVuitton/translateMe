"use client";
import { useAddReviewMutation } from "@/app/api/reviews/reviews.api";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RewiewFormSchema } from "./ReviewFormSchema";
import { TheButton } from "@/components/buttons/btn/TheButton";
import { FormInput } from "@/components/form/formInput/FormInput";
import s from './reviewForm.module.scss'

export const ReviewForm = ({ userID, callback }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ReviewsFields>({
    resolver: yupResolver(RewiewFormSchema()),
    mode: "onTouched",
  });

  // const dispatch = useAppDispatch()
  const [addReview, { data, isLoading, isError, isSuccess }] =
    useAddReviewMutation();

  const onSubmit: SubmitHandler<ReviewsFields> = async (formData) => {
    await addReview({ recipient_id: +userID, review_text: formData.review });
    callback();
    reset();
  };

  return (
    // <div className={s.mainWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type={"text"}
          register={register}
          registerName={"review"}
          placeholder={"t(fields-name.email)"}
          error={errors.review}
          errorMessage={errors?.review?.message}
          isTextarea
          rows={2}
        />
        <div className={s.btn}>
        <TheButton btnText="add comment" type="submit" />
        </div>
      </form>
    // </div>
  );
};

type ReviewsFields = {
  review: string;
};

type Props = {
  userID: number;
  callback: () => void;
};
