import { useGetCandidatesByAsIDQuery } from "@/app/api/clientRequests/candidates/candidates.api";
import s from "../../../style/componentsModules/candidatItem.module.scss";
import Link from "next/link";
import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import { TheButton } from "../buttons/btn/TheButton";
import { useSelectCandidateMutation } from "@/app/api/clientRequests/assignment/assignment.api";
import { Preloader } from "../preloaders/Preloader";

export const Candidates = ({ assignmentID }: { assignmentID: number }) => {

  const { data, isLoading } = useGetCandidatesByAsIDQuery({
    assignmentID,
  });
  const [pickOne, { isLoading: pickLoading }] = useSelectCandidateMutation();

  const pickCandidateHandler = (candodateID: number) => {
    pickOne({ assignment_id: assignmentID, candidate_id: candodateID });
  };

  if (isLoading) {
    return <Preloader type="local"/>;
  }

  if (data) {
    const candidates = data?.candidates?.map((e, i) => {
      const date = formatIsoDateToDMHM(e.apply_time, "DMHM");
      return (
        <div className={s.itemWrapper}>
          <Link href={`profile/${e.candidate_id}`}>
            <div key={i} className={s.candidateWrapper}>
              <div className={s.name}>{e.candidate_full_name}</div>
              <div className={s.date}>applied: {date}</div>
            </div>
          </Link>
          <div className={s.btn}> 
          <TheButton
            btnText="pick one"
            callback={() => pickCandidateHandler(e.candidate_id)}
            isLoading={pickLoading}
          />
          </div>
        </div>
      );
    });

    return (
      <div className={s.listWrapper}>
        {candidates.length > 0 ? (
          <ul className={s.list}>{candidates}</ul>
        ) : (
          <div className={s.noCandidates}>there are no candidates yet</div>
        )}
      </div>
    );
  }
};
