import { ConversationUser } from "./conversationUser/ConversationUser";

export default function Conversation() {
  const usersData: UsersData[] = [
    {
      userName: "ronaldinho",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_9-62d561ac3b8f4__700.jpg",
      userID: "2423423aassd423",
      isOnline: true,
      lastMessage: {
        time: "14:09:2023",
        text: "Когда я считаю money, моя шея затекает        Они любят получать, меня это расслабляет Кто-то получает всё, а кто-то наблюдает Деньги, мои деньги, я их просто собираю ",
      },
    },

    {
      userName: "john_doe",
      userPhoto: null,
      userID: "123456789",
      isOnline: false,
      lastMessage: {
        time: "13:09:2023",
        text: "В моей голове (А-а), dollar sign, dollar sign Золото на шее светит, будто sunshine Э-Э-Эй, не мешай, мама на работе   Запястье сияет в Абу-Даби, mommy body!",
      },
    },
    {
      userName: "mary_smith",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_11-62d563bf1c133__700.jpg",
      userID: "0987654321",
      isOnline: true,
      lastMessage: {
        time: "12:09:2023",
        text: "Спасибо за фото!",
      },
    },
    {
      userName: "charles_johnson",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_88-62d6e9c65ff59__700.jpg",
      userID: "56789s01234",
      isOnline: false,
      lastMessage: {
        time: "15:09:2023",
        text: "Не помню имена лица номера. Я помню только пин-код VISA Master Card Походка от бедра, это я иду в магаз.",
      },
    },

    {
      userName: "dori",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_3-62d5579c32674__700.jpg",
      userID: "5678901234",
      isOnline: true,
      lastMessage: {
        time: "11:09:2023",
        text: "Замыкание это комбинация функции и лексического окружения, в котором эта функция была определена. ",
      },
    },
    {
      userName: "jane_doe",
      userPhoto: null,
      userID: "6789f012345",
      isOnline: false,
      lastMessage: {
        time: "10:09:2023",
        text: "До свидания!",
      },
    },
    {
      userName: "michael_black",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_8-62d560fdb2b35__700.jpg",
      userID: "34567890e12",
      isOnline: true,
      lastMessage: {
        time: "09:09:2023",
        text: "Пожалйуста незачто",
      },
    },
    {
      userName: "susan_brown",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_16-62d569967f9a9__700.jpg",
      userID: "qweqweqweqweqwe",
      isOnline: true,
      lastMessage: {
        time: "08:09:2023",
        text: "Как дела?",
      },
    },
    {
      userName: "chris_williams",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_15-62e107b376b46__700.jpg",
      userID: "2345678901",
      isOnline: true,
      lastMessage: {
        time: "07:09:2023",
        text: "Пока!",
      },
    },
    {
      userName: "david_johnson",
      userPhoto: null,
      userID: "345eee6789012",
      isOnline: false,
      lastMessage: {
        time: "06:09:2023",
        text: "Доброе утро!",
      },
    },
    {
      userName: "linda_martin",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_18-62d567cba7885__700.jpg",
      userID: "45asfgg67890123",
      isOnline: true,
      lastMessage: {
        time: "05:09:2023",
        text: "Спасибо за совет!",
      },
    },
    {
      userName: "peter_davis",
      userPhoto: null,
      userID: "567890aaaa1234",
      isOnline: true,
      lastMessage: {
        time: "04:09:2023",
        text: "Пока!",
      },
    },
    {
      userName: "sarah_jones",
      userPhoto: null,
      userID: "67890a12345",
      isOnline: false,
      lastMessage: {
        time: "03:09:2023",
        text: "До свидания!",
      },
    },
    {
      userName: "mark_taylor",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_44-62d671c2c2371__700.jpg",
      userID: "345678asda9012",
      isOnline: true,
      lastMessage: {
        time: "02:09:2023",
        text: "Спасибо за совет!",
      },
    },
    {
      userName: "emily_davis",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_28-62d5743ed92e4__700.jpg",
      userID: "4567890123",
      isOnline: true,
      lastMessage: {
        time: "01:09:2023",
        text: "Как твои дела?",
      },
    },
    {
      userName: "james_white",
      userPhoto: null,
      userID: "567adddd8901234",
      isOnline: false,
      lastMessage: {
        time: "31:08:2023",
        text: "Привет!",
      },
    },
    {
      userName: "olivia_green",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_31-62d65a4193b19__700.jpg",
      userID: "67890s12345",
      isOnline: true,
      lastMessage: {
        time: "30:08:2023",
        text: "Спасибо за поддержку!",
      },
    },
    {
      userName: "william_jackson",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_1377-62e10d2e2baef__700.jpg",
      userID: "3456asdas789012",
      isOnline: true,
      lastMessage: {
        time: "29:08:2023",
        text: "Удачного дня!",
      },
    },
    {
      userName: "ava_miller",
      userPhoto:
        "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_34-62d669c87c1e4__700.jpg",
      userID: "45678dasda90123",
      isOnline: true,
      lastMessage: {
        time: "28:08:2023",
        text: "Как у тебя дела?",
      },
    },
    {
      userName: "natalie_brown",
      userPhoto: null,
      userID: "67890adadasdasddddd12345",
      isOnline: true,
      lastMessage: {
        time: "27:08:2023",
        text: "Спасибо за приглашение!",
      },
    },
  ];

  const users = usersData.map((e) => (
    <li key={e.userID}>

        <ConversationUser
          isOnline={e.isOnline}
          userPhoto={e.userPhoto}
          lastMessage={e.lastMessage}
          userID={e.userID}
          userName={e.userName}
          />

      </li>
  ));

  return (
    <div>
      <ul>{users}</ul>
    </div>
  );
}

type UsersData = {
  userName: string;
  userPhoto: string | null;
  userID: string;
  isOnline: boolean;
  lastMessage: {
    time: string;
    text: string;
  };
};
