"use client";
import Link from "next/link";
import s from "./index.module.scss";
import { useGetMyAssignmentQuery } from "@/app/api/clientRequests/assignment/assignment.api";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Candidates, Preloader } from "@/components";
import { AssignmentItem } from "@/modules";

export default function AssignmentsCreatedByMe() {
  const { data, isLoading } = useGetMyAssignmentQuery();
  const t = useTranslations("createdByMe");
  const commonName = useTranslations("common.statuses");
  const [listShown, setListShown] = useState<ListShownOptopns>("upcoming");
  let upcomingAssignments: JSX.Element[] = [];
  let closedAssignments: JSX.Element[] = [];

  data?.data.forEach((e) => {
    const item = (
      <li key={e.assignment_id} className={s.listItem}>
        <Link href={`assignments/${e.assignment_id}`}>
          <AssignmentItem assignmentData={e} />
        </Link>
        <div>
          {t("status")}: {commonName(`${e.assignment_status}`)}
        </div>
        <Candidates assignmentID={e.assignment_id} />
      </li>
    );

    if ([1, 2, 3].includes(e.assignment_status)) {
      upcomingAssignments.push(item);
    } else {
      closedAssignments.push(item);
    }
  });

  if (isLoading) {
    return <Preloader type="local" />;
  }

  return (
    <div className={s.listWrapper}>
      <div className={s.nav}>
        <div className={s.navItem} onClick={() => setListShown("upcoming")}>
          {t("upcoming")}
        </div>
        <div className={s.navItem} onClick={() => setListShown("closed")}>
          {t("closed")}
        </div>
      </div>
      <ul className={s.list}>
        {listShown === "upcoming" ? upcomingAssignments : closedAssignments}
      </ul>
    </div>
  );
}

type ListShownOptopns = "upcoming" | "closed";
