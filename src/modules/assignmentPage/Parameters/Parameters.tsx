import { formatIsoDateToDMHM, minToHours } from "@/helpers/dateConverter";
import { getTranslations } from "next-intl/server";

const Parameters = async ({ parameters }: Props) => {
  const t = await getTranslations("assignmnentPage");
  const tCommon = await getTranslations("common");

  const {
    address,
    assignment_date,
    city_id,
    country_id,
    execution_time_minutes,
    worth,
  } = parameters;

  const assignmentDate = formatIsoDateToDMHM(assignment_date);
  const executionTime = minToHours(execution_time_minutes);

  return (
    <div>
      <div>{t("where")}:</div> {address}
      <div>{t("when")}:</div> {assignmentDate}
      <div>{t("executionTime")}:</div>
      {executionTime}
      <div>{tCommon(`cities.${city_id}`)}</div>
      <div>{tCommon(`countries.${country_id}`)}</div>
      <div>{worth}$</div>
    </div>
  );
};

export default Parameters;

type Props = {
  parameters: {
    address: string;
    assignment_date: string;
    city_id: number;
    country_id: number;
    execution_time_minutes: number;
    worth: number;
  };
};
