"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import s from "./profile.module.scss";
import noPhotoImg from "../../../../../../public/icons/user.png";
import { BottomListBlock } from "@/components/list/BottomListBlock";
import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import { ReviewsList } from "@/components/reviews/reviewsList/ReviewsList";
import Contacts from "@/components/contacts/Contacts";
import { useGetUserQuery } from "@/app/api/user/user.api";
import { citiesMapping, countriesMapping } from "@/helpers/mappingData";
import { Reviews } from "@/components/reviews/Review";

// debugger
// const {
//   complitedAssignments,
//   createdAssignments,
//   rating_as_customer,
//   rating_as_executor,
// } = rating;

// rating: { !!!
//   rating_as_customer: {
//     reviewCount: 3,
//     rating: 5,
//   },
//   rating_as_executor: { reviewCount: 1, rating: 5 },
//   createdAssignments: [1, 2, 3, 4],
//   complitedAssignments: [5, 6, 7, 8],
// },

export default function Profile({ userID }: { userID: number }) {
  const t = useTranslations("profile-page");

  const { data, isLoading, isError } = useGetUserQuery({ userID });

  if (data) {
    const {
      city_id,
      country_id,
      email,
      full_name,
      user_id,
      user_photo,
      user_registration_date,
      user_update_date,
    } = data;

    const registration_day = formatIsoDateToDMHM(user_registration_date, "DMY");
    const city = !city_id? '': citiesMapping[city_id]
    const country = !country_id? '': countriesMapping[country_id].countryName

    return (
      <div className={s.profileWrapper}>
        <div className={s.container}>
          <div className={s.profileContainer}>
            <div className={s.info}>
              <div>
                <BottomListBlock bottomText={"location"}>
                  <div>{city}</div>
                  <div> {country}</div>
                </BottomListBlock>
                <BottomListBlock bottomText="registered">
                  {registration_day}
                </BottomListBlock>
              </div>
              <div>
                <BottomListBlock bottomText="assignments created as customer">
                  {"created.length"}
                </BottomListBlock>
                <BottomListBlock bottomText="assignments complited as executor">
                  {"complited.length"}
                </BottomListBlock>
              </div>
            </div>
            <div className={s.photoAndName}>
              <div className={s.photo}>
                <Image
                  className={s.userImg}
                  fill={true} //заполняет род эл
                  src={user_photo ? user_photo : noPhotoImg}
                  alt={user_photo ? "user photo" : "user doesn't have photo"}
                />
              </div>
              <div className={s.userName}>{full_name}</div>
            </div>
            <Contacts userID={userID} />
          </div>
          <div className={s.rewiews}>
            <Reviews userID={userID} />
          </div>
        </div>
      </div>
    );
  }
}

type Props = {
  params: {
    userID: number;
  };
};
