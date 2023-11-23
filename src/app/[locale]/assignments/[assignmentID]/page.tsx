"use client";
import { useGetAssignmentByIDQuery } from "@/app/api/clientRequests/assignment/assignment.api";
import Profile from "../../../../modules/serverModules/profile/Profile";
import Assignment from "../../../../components/clientComponents/assignment/Assignment";
import s from "../../../../style/pagesModules/assignmentPage.module.scss";
import useResizeObserver from "use-resize-observer";
import { useTranslations } from "next-intl";


export default function AssignmentPage(props: Props) {
  const {
    params: { assignmentID },
  } = props;

  const { ref, width, height } = useResizeObserver<HTMLDivElement>();
  const t = useTranslations("profile-page");
  const { data, isLoading, error, isError, isSuccess } =
    useGetAssignmentByIDQuery(assignmentID);

  // const {
  //   data: userData,
  //   isLoading: userLoading,
  //   isError: isUserError,
  // } = useGetUserQuery({ userID });

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (data) {
    return (
      <div className={s.mainWrapper} ref={ref}>
        <div className={s.assignmentWrapper}>
          <Assignment
            assignmentData={data}
            showAuthor={width && width < 860 ? true : false}
          />
        </div>
        {width && width > 860 && (
          <div className={s.profileWrapper}>
            <div className={s.authorHeader}>Assignment's author</div>
            {/* <Profile userID={data.customer.customer_id} t={t} /> */}
          </div>
        )}
      </div>
    );
  }
}

type Props = {
  params: {
    assignmentID: number;
  };
};
