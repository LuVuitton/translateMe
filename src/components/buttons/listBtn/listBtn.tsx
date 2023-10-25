"use client"
import Link from 'next/link'
import './listButtom.scss'
export const ListBtn: React.FC<Props> = ({ callback, btnText }) => {
  return (
    <>    
    <button onClick={callback} > 
    {btnText}
    </button> 
    </>
  );
};


type Props = {
  btnText: string;
  callback?: () => void;
};
