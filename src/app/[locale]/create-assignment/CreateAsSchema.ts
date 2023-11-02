import { useTranslations } from "next-intl";
import * as yup from "yup";

export const CreateAsSchema = () => {
  const t = useTranslations("auth.auth-errors");


  return yup.object({
    assignment_date: yup.string().required(),  
    assignment_title: yup.string().required(),
    worth: yup.number().required(),
    // address: yup.string().required(),
    // country_id: yup.number().required(),
    // city_id: yup.number().required(),
    // required_languages_id: yup.array(yup.number().required()).required(),
    // customer_languages_id: yup.array(yup.number().required()).required(),
    // assignment_description: yup.string().required(),
    // execution_time_minutes: yup.number().required(),

  });
};

