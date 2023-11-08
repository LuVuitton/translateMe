import {
  useAddMeAsCandidateMutation,
  useGetCandidatesByAsIDQuery,
} from "@/app/api/candidates/candidates.api";
import s from "./candidatItem.module.scss";
import Link from "next/link";
import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import { TheButton } from "../buttons/btn/TheButton";
import { useSelectCandidateMutation } from "@/app/api/assignment/assignment.api";

export const Candidates = ({ assignmentID }: { assignmentID: number }) => {
  console.log(assignmentID);

  const { data, isLoading } = useGetCandidatesByAsIDQuery({
    assignmentID,
  });
  const [pickOne, { isLoading: pickLoading }] = useSelectCandidateMutation();

  const pickCandidateHandler = (candodateID: number) => {
    pickOne({ assignment_id: assignmentID, candidate_id: candodateID });
  };

  if (isLoading) {
    return <div>Loading ...</div>;
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
          <TheButton
            btnText="pick one"
            callback={() => pickCandidateHandler(e.candidate_id)}
            isLoading={pickLoading}
          />
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
