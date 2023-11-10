import { citiesOptions, countriesOptions } from "./convertDataToSelect";

export const createAssignmentFormFields = {
  text: [
    { type: "text", registerName: "assignment_title" },
    { type: "textarea", registerName: "assignment_description", rows: 5 },
    { type: "textarea", registerName: "address", rows: 3 },
  ],
  languages: [
    {
      name: "required_languages_id",
      placeholder: "need lang",
    },
    {
      name: "customer_languages_id",
      placeholder: "speak lang",
    },
  ],
  locations: [
    {
      name: "country_id",
      options: countriesOptions,
      placeholder: "country",
    },
    {
      name: "city_id",
      options: citiesOptions,
      placeholder: "city",
    },
  ],
  numbers: [
    {
      description: "time description",
      name: "execution_time_minutes",
      interval: 10,
    },
    {
      description: "worth description",
      name: "worth",
      interval: 1,
    },
  ],
};
