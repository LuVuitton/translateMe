"use client";
import Profile from "../../profile/[userID]/profile/Profile";
import Assignment from "./assignment/Assignment";
import s from "./assignmentPage.module.scss";
import useResizeObserver from "use-resize-observer";

export default function AssignmentPage(props: Props) {
  const {
    params: { assignmentID },
  } = props;

  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  //const {customerID} = getCustomerByAssignmentID
  // costomerID => <Assignment showAuthorID={costomerID, true}  />
  // costomerID => <Assignment showAuthorID={costomerID, true}  />

  return (
    <div className={s.mainWrapper} ref={ref}>
      <div className={s.assignmentWrapper}>
        <Assignment assignmentID={assignmentID} />
      </div>
      {width && width > 860 && (
        <div className={s.profileWrapper}>
          <div className={s.authorHeader}>Assignment's author</div>
           <Profile userID={31} /> {/* costomerID */}
        </div>
      )}
    </div>
  );
}

type Props = {
  params: {
    assignmentID: number;
  };
};
