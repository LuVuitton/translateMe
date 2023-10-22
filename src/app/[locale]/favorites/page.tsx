import { Favorites } from "./favorites/Favorites";

export default function OnlineStack() {
  const usersData:usersData[] = [
    {
      userName: "ava_miller",
      userPhoto: "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_34-62d669c87c1e4__700.jpg",
      subscribersCount: 1750,
      distanceFromUser: "600",
      userID: "45678dasda90123",
      photosOpened:25,
      totalPhotos:34
    },

    {
      userName: "mary_smith",
      userPhoto: "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_11-62d563bf1c133__700.jpg",
      subscribersCount: 800,
      distanceFromUser: "700",
      userID: "0987654321",
      photosOpened:32,
      totalPhotos:34
    },
    {
      userName: "mark_taylor",
      userPhoto: "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_44-62d671c2c2371__700.jpg",
      subscribersCount: 2400,
      distanceFromUser: "350",
      userID: "345678asda9012",
      photosOpened:45,
      totalPhotos:34
    },
    {
      userName: "emily_davis",
      userPhoto: "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_28-62d5743ed92e4__700.jpg",
      subscribersCount: 1400,
      distanceFromUser: "700",
      userID: "4567890123",
      photosOpened:4,
      totalPhotos:34
    },
    {
      userName: "charles_johnson",
      userPhoto: "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_88-62d6e9c65ff59__700.jpg",
      subscribersCount: 1850,
      distanceFromUser: "500",
      userID: "56789s01234",
      photosOpened:6,
      totalPhotos:34
    },
    {
      userName: "dori",
      userPhoto: "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_3-62d5579c32674__700.jpg",
      subscribersCount: 2300,
      distanceFromUser: "300",
      userID: "5678901234",
      photosOpened:3,
      totalPhotos:34
    },

    {
      userName: "michael_black",
      userPhoto: "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_8-62d560fdb2b35__700.jpg",
      subscribersCount: 1000,
      distanceFromUser: "550",
      userID: "34567890e12",
      photosOpened: 2,
      totalPhotos:34
    },
   
 
  ];
  

  

  const users = usersData.map((e) => (
    <li key={e.userID}>
      <Favorites
        distanceFromUser={e.distanceFromUser}
        userPhoto={e.userPhoto}
        subscribersCount={e.subscribersCount}
        userID={e.userID}
        userName={e.userName}
        photosOpened={e.photosOpened}
        totalPhotos={e.totalPhotos}
      />
    </li>
  ));

  return (
    <div>
      <ul>{users}</ul>
    </div>
  );
}

type usersData = {
  userName: string;
  userPhoto: string | null;
  subscribersCount: number;
  distanceFromUser: string;
  userID: string;
  photosOpened:number;
  totalPhotos:number
};
