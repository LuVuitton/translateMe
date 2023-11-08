"use client";
import { AddMeLangs } from "@/components/addMeLangs/AddMeLangs";
import { UpdateContacts } from "@/components/updateContacts/UpdateContacts";
import { UpdateProfileInfo } from "@/components/updateProfileInfo/UpdateProfileInfo";

export default function EditProfile() {

  return (
    <>
      <UpdateProfileInfo />
      <UpdateContacts />
      <AddMeLangs />
    </>
  );
}
