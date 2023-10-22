import s from "./chat.module.scss";

export default function Chat() {
  const dialogData: dialogData = {
    activeChatID: "12345",
    messages: [
      {
        id: "msg1",
        sender: "Джулс",
        text: "Ты знаешь, как они называют Чизбургер с сыром в Париже?",
        timestamp: 1630731538000,
      },
      {
        id: "msg2",
        sender: "Винсент",
        text: "Им не нравится называть его Чизбургер с сыром?",
        timestamp: 1630731578000,
      },
      {
        id: "msg3",
        sender: "Джулс",
        text: "Нет, чувак, у них там метрическая система. Они бы не поняли, что такое Чизбургер.",
        timestamp: 1630731618000,
      },
      {
        id: "msg4",
        sender: "Винсент",
        text: "Ну и как они его называют?",
        timestamp: 1630731658000,
      },
      {
        id: "msg5",
        sender: "Джулс",
        text: "Они называют его 'Рояль с сыром'.",
        timestamp: 1630731698000,
      },
      {
        id: "msg6",
        sender: "Винсент",
        text: "'Рояль с сыром'. А как они называют Биг Мак?",
        timestamp: 1630731738000,
      },
      {
        id: "msg7",
        sender: "Джулс",
        text: "Биг Мак - это Биг Мак, но они называют его 'Ле Биг Мак'.",
        timestamp: 1630731778000,
      },
      {
        id: "msg8",
        sender: "Винсент",
        text: "'Ле Биг Мак'. Ха-ха-ха-ха. А как они называют Уоппер?",
        timestamp: 1630731818000,
      },
      {
        id: "msg9",
        sender: "Джулс",
        text: "Не знаю. Я не заходил в Бургер Кинг.",
        timestamp: 1630731858000,
      },
      {
        id: "msg10",
        sender: "Винсент",
        text: "Знаешь почему они его так называют?",
        timestamp: 1630731898000,
      },
      {
        id: "msg11",
        sender: "Джулс",
        text: "Умм, из-за метрической системы?",
        timestamp: 1630731938000,
      },
      {
        id: "msg12",
        sender: "Винсент",
        text: "Посмотри на умного Брэда!",
        timestamp: 1630731978000,
      },
      {
        id: "msg13",
        sender: "Джулс",
        text: "Ты умный ублюдок. Верно. Из-за метрической системы.",
        timestamp: 1630732018000,
      },
      {
        id: "msg14",
        sender: "Винсент",
        text: "А что в этом?",
        timestamp: 1630732058000,
      },
      {
        id: "msg15",
        sender: "Джулс",
        text: "Спрайт.",
        timestamp: 1630732098000,
      },
    ],
  };

  const dialog = dialogData.messages.map((e) => {
    return (
      <p key={e.id} className={e.sender === "Джулс" ? s.send : s.receive}>
        {e.text}
      </p>
    );
  });

  return (
    <div className={s.chatWrapper}>
      <div className={s.dialogWrapper}>{dialog}</div>
      <div className={s.inputWrapper}>
        <input type="text" className={s.inputText} />
        <button className={s.sendBtn}>{">"}</button>
      </div>
    </div>
  );
}

type dialogData = {
  activeChatID: string;
  messages: oneMessage[];
};

type oneMessage = {
  id: string;
  sender: string;
  text: string;
  timestamp: number;
};
