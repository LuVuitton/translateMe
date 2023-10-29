"use client"
import { ReviewItem } from "../reviewItem/ReviewItem";


const fakeData: FakeData = {
  userID: 9,
  totalCounts: 2,
  userReviews: [
    {
      reviewer_id: 52,
      reviewer_fullname: "statix",
      review_text: "2 kasjd kajsdhkasjdkajsd",
      review_creation_date: "2023-10-23T13:26:44.616Z",
    },
    {
      reviewer_id: 42,
      reviewer_fullname: "Nokolas Cage",
      review_text: "next text to you",
      review_creation_date: "2023-10-23T13:28:05.121Z",
    },
  ],
};

export const ReviewsList = ({ userID: number }: { userID: number }) => {
  const listRewiews = fakeData.userReviews.map((e) => {
    return (
      <ReviewItem
        key={e.reviewer_id}
        review_creation_date={e.review_creation_date}
        review_text={e.review_text}
        reviewer_fullname={e.reviewer_fullname}
        reviewer_id={e.reviewer_id}
      />
    );
  });

  return <div> {listRewiews}</div>;
};

interface FakeReview {
  reviewer_id: number;
  reviewer_fullname: string;
  review_text: string;
  review_creation_date: string;
}

interface FakeData {
  userID: number;
  totalCounts: number;
  userReviews: FakeReview[];
}
