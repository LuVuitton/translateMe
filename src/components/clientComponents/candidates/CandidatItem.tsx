import { useGetCandidatesByAsIDQuery } from "@/app/api/clientRequests/candidates/candidates.api";
import s from "../../../style/componentsModules/candidatItem.module.scss";

import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import { TheButton } from "../buttons/btn/TheButton";
import { useSelectCandidateMutation } from "@/app/api/clientRequests/assignment/assignment.api";
import { Preloader } from "../preloaders/Preloader";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const Candidates = ({ assignmentID }: { assignmentID: number }) => {
  const t = useTranslations("candidates");

  const { data, isLoading } = useGetCandidatesByAsIDQuery({
    assignmentID,
  });
  const [pickOne, { isLoading: pickLoading }] = useSelectCandidateMutation();

  const pickHandler = (candodateID: number) => {
    pickOne({ assignment_id: assignmentID, candidate_id: candodateID });
  };

  const cancelHandler = () => {
    console.log("cancel candidate");
  };

  if (isLoading) {
    return <Preloader type="local" />;
  }

  if (data) {
    const candidates = data?.candidates?.map((e, i) => {
      const date = formatIsoDateToDMHM(e.apply_time, "DMHM");
      return (
        <div className={s.itemWrapper}>
          <Link href={`profile/${e.candidate_id}`}>
            <div key={i} className={s.candidateWrapper}>
              <div className={s.name}>{e.candidate_full_name}</div>
              <div className={s.date}>
                {t("applied")}: {date}
              </div>
            </div>
          </Link>
          <div>
            {e.isExecutor && t("isCandidate")}
            </div> 
          <div className={s.btn}>
            <TheButton
              btnText={t(e.isExecutor ? "btn.cancel" : "btn.pickOne")}
              callback={() =>
                e.isExecutor ? cancelHandler() : pickHandler(e.candidate_id)
              }
              isLoading={pickLoading}
              color={e.isExecutor ? "red" : "green"}
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
          <div className={s.noCandidates}>{t("noCandidates")}</div>
        )}
      </div>
    );
  }
};
