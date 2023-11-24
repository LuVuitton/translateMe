import Image from "next/image";
import s from "../../style/componentsModules/profile.module.scss";
import noPhotoImg from "../../../public/icons/user.png";
import { BottomListBlock } from "@/components/serverComponents/list/BottomListBlock";
import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import Contacts from "@/modules/profile/Contacts";
import { MeResponse } from "@/app/api/clientRequests/user/user.api";
import { citiesMapping, countriesMapping } from "@/helpers/mappingData";
import UserLangs from "@/modules/profile/UserLangs";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import Rating from "./Rating";



export default async function Profile({ userID, userData }: Props) {
  const t = await getTranslations("profilePage");



  const {
    city_id,
    country_id,
    email,
    full_name,
    user_id,
    user_photo,
    user_registration_date,
    user_update_date,
    about_me
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
              <BottomListBlock bottomText={t("location")}>
                <div>{city ? city : "unknown "}</div>
                <div>{country ? country : "unknown"}</div>
              </BottomListBlock>
              <BottomListBlock bottomText={t("registered")}>
                {registration_day}
              </BottomListBlock>
            </div>
            <div className={s.innerBlockWrapper}>
              <Link href={`/user-assignments/${user_id}`}>
                <BottomListBlock bottomText={t("createdAsCustomer")}>
                  {/* {"created.length"} */}number
                </BottomListBlock>
              </Link>
              <Link href={`/user-assignments/${user_id}`}>
                <BottomListBlock bottomText={t("complitedAsExecutor")}>
                  {/* {"complited.length"} */}number
                </BottomListBlock>
              </Link>
            </div>
          </div>
          <div className={s.photoAndName}>
            <div className={s.photo}>
              <Image
                className={s.userImg}
                fill={true} //заполняет род эл
                src={user_photo ? user_photo : noPhotoImg}
                alt={user_photo ? t("userPhoto") : t("noPhoto")}
              />
            </div>
            <div className={s.userName}>{full_name}</div>
          </div>
          <Rating userID={userID}/>
          <div className={s.aboutMe}>
            {about_me ? about_me : t("noDiscription")}
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
  userData: MeResponse;
};
