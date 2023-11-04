"use client";
import { useGetReviewsByUserQuery } from "@/app/api/reviews/reviews.api";
import { ReviewItem } from "../reviewItem/ReviewItem";

export const ReviewsList = ({ userID }: { userID: number }) => {
  const { data, isLoading, isError } = useGetReviewsByUserQuery({
    user_id: userID,
  });
  if (isLoading) {
    return <div>isLoading...</div>;
  }
  if (isError) {
    return <div>error</div>;
  }
  if (data) {
    if (data.userReviews.length === 0) {
      return <div> there is no reviews yet</div>;
    }

    const listRewiews = data.userReviews.map((e) => {
      return (
        <ReviewItem
          key={e.review_id}
          review_creation_date={e.review_creation_date}
          review_text={e.review_text}
          reviewer_id={e.reviewer_id}
        />
      );
    });

    return <div> {listRewiews}</div>;
  }
};
