"use client";

import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import s from "./reviewItem.module.scss";
import Link from "next/link";

export const ReviewItem = ({
  reviewer_id,
  reviewer_fullname,
  review_text,
  review_creation_date,
}: Props) => {
  const reviewDate = formatIsoDateToDMHM(review_creation_date, "DMHM");

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.top}>
          <Link href={`./${reviewer_id}`}> <div className={s.fullname}> {reviewer_fullname}</div></Link>
          <div className={s.date}> {reviewDate}</div>
        </div>
        <div className={s.bottom}>{review_text}</div>
      </div>
    </div>
  );
};

type Props = {
  reviewer_id: number;
  reviewer_fullname: string;
  review_text: string;
  review_creation_date: string;
};
