import { formatIsoDateToDMHM } from "@/helpers/dateConverter";
import s from "../../../../style/componentsModules/secondAsignmentBlock.module.scss";
import {
  asStatusesMapping,
  citiesMapping,
  countriesMapping,
} from "@/helpers/mappingData";
import { BottomListBlock } from "../BottomListBlock";

export const SecondAsignmentBlock = (data: Props) => {
  const {
    address,
    apply_time,
    assignment_id,
    city_id,
    country_id,
    date,
    description,
    execution_time_minutes,
    status,
    title,
    worth,
  } = data;

  const asDay = formatIsoDateToDMHM(date, "DM");
  const asTime = formatIsoDateToDMHM(date, "HM");
  const countryName = countriesMapping[country_id].countryName;
  const cityName = citiesMapping[city_id];
  const currentStatus = asStatusesMapping[status];

  return (
    <div className={s.assignmentWrapper}>
      <div className={s.container}>
        <div className={s.left}>
          <div className={s.topLeft}>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description}</div>
          </div>
          <div className={s.bottomLeft}>
            <div className={s.fn}>status:</div>
            <div className={s.status}> {currentStatus}</div>
          </div>
        </div>

        <div className={s.right}>
          <div> {cityName}</div>

          <div>
            <div>{`${asDay} ${asTime}`}</div>
          </div>
          <div className={s.worth}>{worth}$</div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  assignment_id: number;
  apply_time: string;
  worth: number;
  status: number;
  address: string;
  date: string;
  country_id: number;
  city_id: number;
  title: string;
  description: string;
  execution_time_minutes: number;
};
