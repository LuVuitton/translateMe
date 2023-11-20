"use client";
import { AddMeLangs } from "@/components/clientComponents/addMeLangs/AddMeLangs";
import { UpdateContacts } from "@/components/clientComponents/updateContacts/UpdateContacts";
import { UpdateProfileInfo } from "@/components/clientComponents/updateProfileInfo/UpdateProfileInfo";

export default function EditProfile() {

  return (
    <>
      <UpdateProfileInfo />
      <UpdateContacts />
      <AddMeLangs />
    </>
  );
}
