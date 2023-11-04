"use client";

import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import s from "./reviewItem.module.scss";
import Link from "next/link";
import { Review } from "@/app/api/reviews/reviews.api";

export const ReviewItem = ({
  review_creation_date,
  review_text,
  reviewer_id: reviewer,
}: Props) => {
  const { full_name, user_id: reviewer_id, user_photo } = reviewer;

  const reviewDate = formatIsoDateToDMHM(review_creation_date, "DMHM");

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.top}>
          <Link href={`./${reviewer_id}`}>
            <div>{"user_photo"}</div>
            <div className={s.fullname}> {full_name}</div>
          </Link>
          <div className={s.date}> {reviewDate}</div>
        </div>
        <div className={s.bottom}>{review_text}</div>
      </div>
    </div>
  );
};

type Props = Omit<Review, "review_id">;
