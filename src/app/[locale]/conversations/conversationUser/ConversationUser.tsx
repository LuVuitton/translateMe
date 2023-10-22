"use client";

import s from "./conversationUser.module.scss";
import noPhotoImg from "../../../../../public/icons/user.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";

export const ConversationUser: React.FC<Props> = ({
  userPhoto,
  userName,
  isOnline,
  userID,
  lastMessage,
}) => {
  const router = useRouter();
  const t = useTranslations("common");

  const toChatHandler = () => {
    router.push(`/chat`);
    // router.push(`/chat${userID}`)
  };

  return (
    <div className={s.stackWrapper}>
      <div className={s.userContainer} onClick={toChatHandler}>
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
        <div className={s.message}>{lastMessage.text}</div>
        <div className={s.time}>{lastMessage.time}</div>
      </div>
    </div>
  );
};

type Props = {
  userName: string;
  userPhoto: string | null;
  userID: string;
  isOnline: boolean;
  lastMessage: {
    time: string;
    text: string;
  };
};
