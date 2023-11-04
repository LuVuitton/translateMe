"use client";
import { useGetAssignmentByIDQuery } from "@/app/api/assignment/assignment.api";
import Profile from "../../profile/[userID]/profile/Profile";
import Assignment from "./assignment/Assignment";
import s from "./assignmentPage.module.scss";
import useResizeObserver from "use-resize-observer";

export default function AssignmentPage(props: Props) {
  const {
    params: { assignmentID },
  } = props;
  const { data, isLoading, error, isError, isSuccess } =
    useGetAssignmentByIDQuery(assignmentID);




  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  if (isLoading) {
    <div>Lading...</div>;
  }
  if (isError) {
    <div>error</div>;
  }
  if (data) {


    return (
      <div className={s.mainWrapper} ref={ref}>
        <div className={s.assignmentWrapper}>
          <Assignment assignmentData={data} />
        </div>
        {width && width > 860 && (
          <div className={s.profileWrapper}>
            <div className={s.authorHeader}>Assignment's author</div>
            <Profile userID={data.customer.customer_id} />
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
