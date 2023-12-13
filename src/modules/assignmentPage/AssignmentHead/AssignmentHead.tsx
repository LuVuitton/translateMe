import { Title } from "@/components";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

const AssignmentHead = async ({data}: Props) => {
  const t = await getTranslations("assignmnentPage");
  const {assignment_title,creationDate,customer,updateDate,} = data

  return (
    <div>
      <Title type="medium">{assignment_title}</Title>
      <div>{t("created")}:</div> {creationDate}
      <div>{t("updated")}: </div> {updateDate}
      <div>{t("author")}:</div>
      <Link href={`../profile/${customer.customer_id}`}>
        {customer.full_name}
      </Link>
    </div>
  );
};

export default AssignmentHead;

type Props = {
  data: {
    assignment_title: string;
    creationDate: string;
    updateDate: string;
    customer: {
      customer_id: number;
      full_name: string;
      user_photo: string | null;
    };
  };
};
