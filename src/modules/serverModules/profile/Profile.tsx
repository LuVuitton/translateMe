// "use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import s from "../../../style/componentsModules/profile.module.scss";
import noPhotoImg from "../../../../public/icons/user.png";
import { BottomListBlock } from "@/components/clientComponents/list/BottomListBlock";
import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import Contacts from "@/components/clientComponents/contacts/Contacts";
import { MeResponse, useGetUserQuery } from "@/app/api/clientRequests/user/user.api";
import { citiesMapping, countriesMapping } from "@/helpers/mappingData";
import { UserLangs } from "@/components/clientComponents/userLangs/UserLangs";

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

// const data = {
//   about_me: null,
//   city_id: null,
//   country_id: null,
//   email: "sssasd@g.as",
//   full_name: "hello mr. anderson",
//   user_id: 1,
//   user_photo: null,
//   user_registration_date: "2023-11-07T15:44:45.780Z",
//   user_update_date: "2023-11-08T13:47:47.490Z",
// };

export default function Profile({ userID, t, userData }: Props) {
  // const t = useTranslations("profile-page");
  // const { data, isLoading, isError } = useGetUserQuery({ userID });

    const {
      city_id,
      country_id,
      email,
      full_name,
      user_id,
      user_photo,
      user_registration_date,
      user_update_date,
      about_me,
    } = userData;

    const registration_day = formatIsoDateToDMHM(user_registration_date, "DMY");
    const city = !city_id ? "" : citiesMapping[city_id];
    const country = !country_id ? "" : countriesMapping[country_id].countryName;

    return (
      <div className={s.profileWrapper}>
        <div className={s.container}>
          <div className={s.profileContainer}>
            <div className={s.info}>
              <div className={s.innerBlockWrapper}>
                <BottomListBlock bottomText={"location"}>
                  <div>{city ? city : "unknown "}</div>
                  <div>{country ? country : "unknown"}</div>
                </BottomListBlock>
                <BottomListBlock bottomText="registered">
                  {registration_day}
                </BottomListBlock>
              </div>
              <div className={s.innerBlockWrapper}>
                <BottomListBlock bottomText="created as customer">
                  {/* {"created.length"} */}1
                </BottomListBlock>
                <BottomListBlock bottomText="complited as executor">
                  {/* {"complited.length"} */}4
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
            <div className={s.aboutMe}>
              {about_me ? about_me : "user's not added discription yet"}
            </div>
            <UserLangs userID={userID} />
            <Contacts userID={userID} />
          </div>
        </div>
      </div>
    );

}

type Props = {

    userID: number;
  t:(text:string)=> string;
  userData: MeResponse
};
