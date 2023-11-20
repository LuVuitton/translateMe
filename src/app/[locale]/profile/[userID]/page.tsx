// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Profile from "../../../../modules/serverModules/profile/Profile";
import { getUser } from "@/app/api/serverRequests/profile/user";



export default async function ProfilePage(props: Props) {
  const {
    params: { userID },
  } = props;

  const t = await getTranslations("profile-page");
  const userData = await getUser({ userID });

  return (
    <>
      hello
      <Profile userID={userID} t={t} userData={userData}/>
      {/* <Reviews userID={userID} /> */}
    </>
  );
}

type Props = {
  params: {
    userID: number;
  };
};
