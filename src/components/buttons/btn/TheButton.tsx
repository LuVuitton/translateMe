"use client";
import s from "./theButton.module.scss";
export const TheButton: React.FC<Props> = ({
  callback,
  btnText,
  color,
  isLoading,
  size
}) => {
  let btnColor: string = "";
  switch (color) {
    case "red":
      btnColor = s.redBtn;
      break
    case "green":
      btnColor = s.greenBtn;
      break
    default:
      break;
  }

  return (
    <div>
      {/* <button style={{`width:${size.w}`}} className={`${s.btnWrapper} ${btnColor}`} onClick={callback}> */}
      <button style={{"width":size.w, "height": size.h}} className={`${s.btnWrapper} ${btnColor}`} onClick={callback}>
        {isLoading ? "Loading..." : btnText}
      </button>
    </div>
  );
};

type Props = {
  btnText: string;
  callback?: () => void;
  color: "red" | "green";
  isLoading: boolean;
  size: {
  w:number;
  h:number;
}
};
