import { getTranslations } from "next-intl/server";
import Profile from "../../../../modules/serverModules/profile/Profile";
import { getUser } from "@/app/api/serverRequests/profile/user";
import { Reviews } from "@/components/clientComponents/reviews/Review";



export default async function ProfilePage(props: Props) {
  const {
    params: { userID },
  } = props;

  const t = await getTranslations("profile-page");
  const userData = await getUser({ userID });

  return (
    <>
      <Profile userID={userID} t={t} userData={userData}/>
      <Reviews userID={userID} />
    </>
  );
}

type Props = {
  params: {
    userID: number;
  };
};
