// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Profile from "../../../../modules/serverModules/profile/Profile";

async function getUser({ userID }: { userID: number }) {
  const res = await fetch(`http://localhost:3000/user/${userID}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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
