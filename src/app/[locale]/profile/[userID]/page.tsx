"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import s from "./profile.module.scss";
import noPhotoImg from "../../../../../public/icons/user.png";
import { useGetProfileInfoQuery } from "@/app/api/profile.api";

export default function Profile(props: Props) {
  const {
    params: { userID },
  } = props;

  const t = useTranslations("profile-page");
  const isInFav = false; // заглушка, показывает что юзер не в избранном
  // const totalPhotos = "показывает сколько всего фотографий у юзера";

  // userName, subscribers, loaction, photos, totalPhotos,
  // на аватар ставим последнее открытое фото

  const { data, isLoading, isError } = useGetProfileInfoQuery(userID);

  // const photos = [
  //   "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_9-62d561ac3b8f4__700.jpg",
  //   "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_11-62d563bf1c133__700.jpg",
  //   "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_88-62d6e9c65ff59__700.jpg",
  //   "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_3-62d5579c32674__700.jpg",
  //   "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_8-62d560fdb2b35__700.jpg",
  //   "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_16-62d569967f9a9__700.jpg",
  //   "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_15-62e107b376b46__700.jpg",
  // ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (data) {
    // берем в скобки весь компонент, разделить на мелкие компоненты и передавать в пропсах, бо это жуть
    const { userName, subscribers, location, photos, totalPhotos } = data;

   let mapPhotos
   if (photos){
  mapPhotos = photos.map((e) => (
      <Image
        key={e}
        alt="photo"
        src={e}
        width={95}
        height={95}
        className={s.photosImg}
      />
    ));}
  

    let distance;
    switch (location) {
      case "close":
        distance = t("close");
        break;
      case "not far":
        distance = t("not-far");
        break;
      case "far":
        distance = t("far");
        break;
      default:
        distance === "unknown";
        break;
    }


     

    return (
      <div className={s.profileWrapper}>
        <div className={s.profileContainer}>
          <div className={s.photoAndName}>
            <div className={s.photo}>
              <Image
                className={s.userImg}
                fill={true} //заполняет род эл
                src={photos ?  photos[photos.length-1]:noPhotoImg }
                alt={photos ? "user photo" : "user doesn't have photo"}
              />
            </div>
            <div className={s.userName}>{userName}</div>
          </div>
          <div className={s.btnWrapper}>
            <button className={s.btn}>{t("send-message")}</button>
          </div>

          <div className={s.info}>
            <div className={s.infoBlock}>
              <div className={s.infoMain}>{subscribers}</div>

              <div className={s.infoText}>{t("subscribers")}</div>
              <div className={s.infoDescription}>{t("sub-description")}</div>
            </div>
            <div className={s.infoBlock}>
              <div className={s.infoMain}>{distance}</div>

              <div className={s.infoText}> {t("distance-description")}</div>
            </div>
            <div className={s.infoBlock}>
              <div className={s.infoMain}>+</div>
              <div className={s.infoText}>
                {t(isInFav ? "remove-from-fav" : "add-to-fav")}
              </div>
              <div className={s.infoDescription}>{t("fav-description")}</div>
            </div>
            <div className={s.infoBlock}>
              <div className={s.infoMain}>{totalPhotos}</div>
              <div className={s.infoText}>
                {t(totalPhotos ? "total-photos" : "no-photos")}
              </div>
              <div className={s.infoDescription}>
                {t(
                  totalPhotos ? "photos-description" : "no-photos-description"
                )}
              </div>
            </div>
          </div>

          <div className={s.photos}>{!mapPhotos?"нет фото":mapPhotos}</div>
        </div>
      </div>
    );
  }
}
type Props = {
  params: {
    userID: string;
  };
};
