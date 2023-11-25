import Profile from "../../../../modules/profile/Profile";
import s from "../../../../style/pagesModules/assignmentPage.module.scss";
import Assignment from "@/modules/assignment/Assignment";
import { getAssignment } from "@/app/api/serverRequests/assignment/assignment";
import { getUser } from "@/app/api/serverRequests/profile/user";
import { getTranslations } from "next-intl/server";

export default async function AssignmentPage(props: Props) {
  const {
    params: { assignmentID },
  } = props;

  const t = await getTranslations("profilePage");
  const assignmentData = await getAssignment({ assignmentID });
  const authorData = await getUser({
    userID: assignmentData.customer.customer_id,
  });

  // const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  return (
    // <div className={s.mainWrapper} ref={ref}>
    <div className={s.mainWrapper}>
      <div className={s.assignmentWrapper}>
        <Assignment assignmentData={assignmentData} />
      </div>
      {/* {width && width > 860 && ( */}
      <div className={s.profileWrapper}>
        <div className={s.authorHeader}>{t("author")}</div>
        <Profile userData={authorData} />
      </div>
    </div>
  );
}

type Props = {
  params: {
    assignmentID: number;
  };
};
