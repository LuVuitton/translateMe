"use client";
import s from "./contacts.module.scss";
import { useGetContactsByIDQuery } from "@/app/api/contacts/contacts.api";

export default function Contacts({ userID }: { userID: number }) {


  const { data, isError, isLoading } = useGetContactsByIDQuery({userID});

  if (isLoading) {
    return <div>isLoading...</div>;
  }
  if (isError) {
    return <div>isError</div>;
  }
  if (data) {
    const {
      contact_create_date,
      contact_update_date,
      user_contact_id,
      user_id,
      ...contacts
    } = data;

    const gridContactBlocks: React.ReactNode[] = [];
    Object.entries(contacts).forEach(([k, v]: [string, string | null], i) => {
      if (v !== null) {
        gridContactBlocks.push(
          <div key={i} className={s.contactItem}>
            <span>{k}</span>
          </div>
        );
        gridContactBlocks.push(
          <div key={i * 100} className={s.contactItem}>
            <span>{v}</span>
          </div>
        );
      }
    });

    return (
      <div className={s.mainWrapper}>
        <div className={s.contactsWrapper}>{gridContactBlocks}</div>
      </div>
    );
  }
}
