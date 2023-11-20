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
    },
    {
      name: "customer_languages_id",
    },
  ],
  locations: [
    {
      name: "country_id",
      options: countriesOptions,
    },
    {
      name: "city_id",
      options: citiesOptions,
    },
  ],
  numbers: [
    {

      name: "execution_time_minutes",
      interval: 10,
    },
    {
      name: "worth",
      interval: 1,
    },
  ],
};
