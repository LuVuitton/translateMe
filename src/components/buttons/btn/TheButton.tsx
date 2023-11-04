"use client";
import s from "./theButton.module.scss";
export const TheButton: React.FC<Props> = ({
  callback,
  btnText,
  color = "green",
  isLoading,
  type = "button",
}) => {
  let btnColor: string = "";
  switch (color) {
    case "red":
      btnColor = s.redBtn;
      break;
    case "green":
      btnColor = s.greenBtn;
      break;
    default:
      break;
  }

  return (
    <div>
      <button
        type={type}
        className={`${s.btnWrapper} ${btnColor ? btnColor : ""}`}
        onClick={callback}
        disabled={isLoading} // 
      >
        <span className={s.btnText}>{isLoading ? "Loading..." : btnText}</span>
      </button>
    </div>
  );
};

type Props = {
  btnText: string;
  callback?: () => void;
  color?: "red" | "green";
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
};
