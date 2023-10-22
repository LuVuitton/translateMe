"use client";

import s from "./favorites.module.scss";
import noPhotoImg from "../../../../../public/icons/user.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";

export const Favorites: React.FC<Props> = ({
  userPhoto,
  userName,
  subscribersCount,
  distanceFromUser,
  userID,
  photosOpened,
  totalPhotos,
}) => {
  const router = useRouter();
  const t = useTranslations("common");

  const sendMessageHandler = () => {
    router.push("/chat");
    // router.push(`/chat${userID}`)
  };

  return (
    <div className={s.stackWrapper}>
      <div className={s.userContainer}>
        <Link href={`/profile/${userID}`}>
          <div className={s.photoAndName}>
            <div className={s.photo}>
              <Image
                className={s.userImg}
                fill={true} //заполняет род эл
                src={userPhoto ? userPhoto : noPhotoImg}
                alt={userPhoto ? "user photo" : "user doesn't have photo"}
              />
            </div>
            <div className={s.userName}>{userName}</div>
          </div>
        </Link>
        <div className={s.photosOpenedAndOnline}>
          <div className={s.photosOpened}>
            {photosOpened}/{totalPhotos}
            <div className={s.photosOpenedText}>
              {t("have-been-opened")}
            </div>{" "}
          </div>
          <div className={true ? s.online : s.offline}>
            {true ? "online" : "offline"}{" "}
          </div>
        </div>

        <div className={s.subscribersCount}>
          <div className={s.subsCount}>
            {subscribersCount} {t("subscribers")}
          </div>
          <button onClick={sendMessageHandler} className={s.btn}>
            {t("send-message")}
          </button>
          <button onClick={sendMessageHandler} className={s.btn}>
            {t("unsubscribe")}
          </button>
        </div>
      </div>
    </div>
  );
};

type Props = {
  userPhoto: string | null;
  userName: string;
  subscribersCount: number;
  distanceFromUser: string;
  userID: string;
  photosOpened: number;
  totalPhotos: number;
};
