"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import s from "./profile.module.scss";
import noPhotoImg from "../../../../../../public/icons/user.png";
import { BottomListBlock } from "@/components/list/BottomListBlock";
import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import { ReviewsList } from "@/components/reviews/reviewsList/ReviewsList";

const fakeUserData: FakeUserData = {
  userID: 9,
  fullName: "Stasic",
  userPhoto: null,
  location: { city: "Kharkiv", country: "Ukraine" },
  registration_date: "2023-10-23T13:26:44.616Z",
  contacts: {
    instagram: null,
    other_contacts: null,
    phone_number: "38093234521",
    telegram: "stasictelegram",
    viber: "39345683138",
    whatsapp: null,
  },
  rating: {
    rating_as_customer: {
      reviewCount: 3,
      rating: 5,
    },
    rating_as_executor: { reviewCount: 1, rating: 5 },
    createdAssignments: [1, 2, 3, 4],
    complitedAssignments: [5, 6, 7, 8],
  },
  reviews: {
    userID: 9,
    totaCounts: 2,
    userReviews: [
      {
        reviewer_id: 52,
        review_text: "2 kasjd kajsdhkasjdkajsd",
        review_creation_date: "2023-10-23T13:26:44.616Z",
      },
      {
        reviewer_id: 52,
        review_text: "next text to you",
        review_creation_date: "2023-10-23T13:28:05.121Z",
      },
    ],
  },
};

export default function Profile({ userID }: { userID: number }) {
  const {
    userPhoto,
    registration_date,
    location,
    fullName,
    contacts,
    rating,
    reviews,
  } = fakeUserData;
  const registration_day = formatIsoDateToDMHM(registration_date, "DMY");
  const { instagram, other_contacts, phone_number, telegram, viber, whatsapp } =
    contacts;
  const {
    complitedAssignments,
    createdAssignments,
    rating_as_customer,
    rating_as_executor,
  } = rating;

  const { totaCounts, userReviews } = reviews;

  const gridContactBlocks: React.ReactNode[] = [];
  Object.entries(contacts).forEach(([k, v]: [string, string | null], i) => {
    if (v !== null) {
      gridContactBlocks.push(
        <div key={i} className={s.contactItem}>
          <span>{k}</span>
        </div>
      );
      gridContactBlocks.push(
        <div key={i * 100} className={s.contactItem}>
          <span>{v}</span>
        </div>
      );
    }
  });

  const t = useTranslations("profile-page");

  return (
    <div className={s.profileWrapper}>
      <div className={s.container}>
        <div className={s.profileContainer}>
          <div className={s.info}>
            <div>
              <BottomListBlock bottomText={"location"}>
                <div>{location.city}</div>
                <div> {location.country}</div>
              </BottomListBlock>
              <BottomListBlock bottomText="registered">
                {registration_day}
              </BottomListBlock>
            </div>
            <div>
              <BottomListBlock bottomText="assignments created as customer">
                {createdAssignments.length}
              </BottomListBlock>
              <BottomListBlock bottomText="assignments complited as executor">
                {complitedAssignments.length}
              </BottomListBlock>
            </div>
          </div>
          <div className={s.photoAndName}>
            <div className={s.photo}>
              <Image
                className={s.userImg}
                fill={true} //заполняет род эл
                src={userPhoto ? userPhoto : noPhotoImg}
                alt={userPhoto ? "user photo" : "user doesn't have photo"}
              />
            </div>
            <div className={s.userName}>
              {fullName} {userID}
            </div>
          </div>

          <div className={s.contactsWrapper}>{gridContactBlocks}</div>
        </div>
        <div className={s.rewiews}>
          <ReviewsList userID={userID} />
        </div>
      </div>
    </div>
  );
}

type Props = {
  params: {
    userID: number;
  };
};

type FakeUserData = {
  userID: number;
  fullName: string;
  userPhoto: string | null;
  registration_date: string;
  location: {
    city: string;
    country: string;
  };
  contacts: {
    instagram: string | null;
    whatsapp: string | null;
    telegram: string | null;
    viber: string | null;
    phone_number: string | null;
    other_contacts: string | null;
  };
  rating: {
    rating_as_customer: {
      reviewCount: number;
      rating: number;
    };
    rating_as_executor: {
      reviewCount: number;
      rating: number;
    };
    createdAssignments: number[];
    complitedAssignments: number[];
  };
  reviews: {
    userID: number;
    totaCounts: number; // Возможно, опечатка. Исправлено на `totalCount`
    userReviews: {
      reviewer_id: number;
      review_text: string;
      review_creation_date: string;
    }[];
  };
};
