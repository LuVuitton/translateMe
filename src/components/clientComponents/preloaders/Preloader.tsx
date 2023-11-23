import s from "../../../style/componentsModules/preloader.module.scss";

export const Preloader = ({ show, type }:Props) => {
  return (
    <>
      {show && (
        <div className={type==="blocking"?s.blockWrapper : s.localWrapper}>
          <div className={s.container}>
            <div className={s.loader}></div>
          </div>
        </div>
      )}
    </>
  );
};

type Props = {
    show: boolean 
    type: "local" | "blocking"
}