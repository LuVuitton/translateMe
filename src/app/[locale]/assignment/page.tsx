import { AssignmentItem } from "./assignmentItem/AssignmentItem";


export default function AssignmentList() {
  const assignmentData: AssignmentListItem[] = [
    {
      assignment_id: 1,
      worth: 10,
      // assignment_status: 1,
      assignment_data: "2023-10-15",
      // address: "123 Main Street",
      country_id: 1,
      city_id: 10,
      assignment_title: "Im title for Test Assignment",
      assignment_description:
        "This is a test assignment description. it may be quite long and large",
      // execution_time_minutes: 120,
      // executor_rating_by_customer: null,
      // customer_rating_by_executor: null,
      // views: 0,
      // assignment_creation_date: "2023-10-22T20:40:31.924Z",
      // assignment_update_date: "2023-10-22T20:40:31.924Z",
      required_languages_id: [2, 4, 5],
      customer_languages_id: [3, 4, 5],
    },
  ];

  const assignments = assignmentData.map((e) => (
    <li key={e.assignment_id}>
      <AssignmentItem
        assignment_title={e.assignment_title}
        assignment_description={e.assignment_description}
        worth={e.worth}
        assignment_data={e.assignment_data}
        city_id={e.city_id}
        country_id={e.country_id}
        customer_languages_id={e.customer_languages_id}
        required_languages_id={e.required_languages_id}
      />
    </li>
  ));

  return (
    <div>
      <ul>{assignments}</ul>
    </div>
  );
}

export type AssignmentListItem = {
  assignment_id: number;
  assignment_data: string;
  worth: number;
  country_id: number;
  city_id: number;
  assignment_title: string;
  assignment_description: string;
  // execution_time_minutes: number;
  // views: number;
  // assignment_creation_date: string;
  required_languages_id: number[];
  customer_languages_id: number[];
};
