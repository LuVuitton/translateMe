"use client";

import Profile from "./profile/Profile";



export default function ProfilePage(props: Props) {
  const {
    params: { userID },
  } = props;

  return <Profile userID={userID}/>;
}

type Props = {
  params: {
    userID: number;
  };
};
