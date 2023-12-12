import Profile from "../../../../modules/profile/Profile";
import { getUser } from "@/app/api/serverRequests/profile/user";
import { Reviews } from "@/modules/reviews/Review";



export default async function ProfilePage(props: Props) {
  const {
    params: { userID },
  } = props;


  const userData = await getUser({ userID });

  return (
    <div>
      <Profile userData={userData}/>
      <Reviews userID={userID} />
    </div>
  );
}

type Props = {
  params: {
    userID: number;
  };
};
