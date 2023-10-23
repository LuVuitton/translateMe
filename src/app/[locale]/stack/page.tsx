import { StackUser } from "./stackUser/StackUser";

export default function OnlineStack() {
  const usersData: usersData[] = [
    {
      userName: "charles_johnson",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_88-62d6e9c65ff59__700.jpg",
      subscribersCount: 1850,
      distanceFromUser: "500",
      userID: "56789s01234",
    },
    {
      userName: "ronaldinho",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_9-62d561ac3b8f4__700.jpg",
      subscribersCount: 1876,
      distanceFromUser: "450",
      userID: "2423423aassd423",
    },
    {
      userName: "john_doe",
      userPhoto: null,
      subscribersCount: 1200,
      distanceFromUser: "600",
      userID: "123456789",
    },
    {
      userName: "mary_smith",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_11-62d563bf1c133__700.jpg",
      subscribersCount: 800,
      distanceFromUser: "700",
      userID: "0987654321",
    },
    {
      userName: "dori",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_3-62d5579c32674__700.jpg",
      subscribersCount: 2300,
      distanceFromUser: "300",
      userID: "5678901234",
    },
    {
      userName: "jane_doe",
      userPhoto: null,
      subscribersCount: 1500,
      distanceFromUser: "800",
      userID: "6789f012345",
    },
    {
      userName: "michael_black",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_8-62d560fdb2b35__700.jpg",
      subscribersCount: 1000,
      distanceFromUser: "550",
      userID: "34567890e12",
    },
    {
      userName: "susan_brown",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_16-62d569967f9a9__700.jpg",
      subscribersCount: 2100,
      distanceFromUser: "900",
      userID: "qweqweqweqweqwe",
    },
    {
      userName: "chris_williams",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_15-62e107b376b46__700.jpg",
      subscribersCount: 1800,
      distanceFromUser: "480",
      userID: "2345678901",
    },
    {
      userName: "david_johnson",
      userPhoto: null,
      subscribersCount: 1900,
      distanceFromUser: "520",
      userID: "345eee6789012",
    },
    {
      userName: "linda_martin",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_18-62d567cba7885__700.jpg",
      subscribersCount: 1600,
      distanceFromUser: "650",
      userID: "45asfgg67890123",
    },
    {
      userName: "peter_davis",
      userPhoto: null,
      subscribersCount: 2200,
      distanceFromUser: "400",
      userID: "567890aaaa1234",
    },
    {
      userName: "sarah_jones",
      userPhoto: null,
      subscribersCount: 1300,
      distanceFromUser: "750",
      userID: "67890a12345",
    },
    {
      userName: "mark_taylor",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_44-62d671c2c2371__700.jpg",
      subscribersCount: 2400,
      distanceFromUser: "350",
      userID: "345678asda9012",
    },
    {
      userName: "emily_davis",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_28-62d5743ed92e4__700.jpg",
      subscribersCount: 1400,
      distanceFromUser: "700",
      userID: "4567890123",
    },
    {
      userName: "james_white",
      userPhoto: null,
      subscribersCount: 1700,
      distanceFromUser: "580",
      userID: "567adddd8901234",
    },
    {
      userName: "olivia_green",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_31-62d65a4193b19__700.jpg",
      subscribersCount: 2000,
      distanceFromUser: "480",
      userID: "67890s12345",
    },
    {
      userName: "william_jackson",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_1377-62e10d2e2baef__700.jpg",
      subscribersCount: 1950,
      distanceFromUser: "510",

      userID: "3456asdas789012",
    },
    {
      userName: "ava_miller",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_34-62d669c87c1e4__700.jpg",
      subscribersCount: 1750,
      distanceFromUser: "600",
      userID: "45678dasda90123",
    },
    {
      userName: "natalie_brown",
      userPhoto: null,
      subscribersCount: 2250,
      distanceFromUser: "410",
      userID: "67890adadasdasddddd12345",
    },
  ];

  

  const users = usersData.map((e) => (
    <>
      <li key={e.userID}>
        <StackUser
          distanceFromUser={e.distanceFromUser}
          userPhoto={e.userPhoto}
          subscribersCount={e.subscribersCount}
          userID={e.userID}
          userName={e.userName}
        />
      </li>
    </>
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
};
