import { TableColumn, UiTable, SortState } from "@/shared/ui/ui-table";

import { UiButton } from "@/shared/ui/ui-button";

type Person = {
  name: string;
  age: number;
  city: string;
  occupation: string;
  salary: number;
  status: "active" | "inactive" | "suspended"; // новое поле с ограничением значений
};

const rows: Person[] = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
    occupation: "Engineer",
    salary: 70000,
    status: "active",
  },
  {
    name: "Jane Smith",
    age: 25,
    city: "Los Angeles",
    occupation: "Designer",
    salary: 65000,
    status: "inactive",
  },
  {
    name: "Sam Brown",
    age: 35,
    city: "Chicago",
    occupation: "Manager",
    salary: 80000,
    status: "suspended",
  },
  {
    name: "Alice Johnson",
    age: 28,
    city: "Houston",
    occupation: "Teacher",
    salary: 50000,
    status: "active",
  },
  {
    name: "Michael Lee",
    age: 40,
    city: "San Francisco",
    occupation: "Developer",
    salary: 90000,
    status: "inactive",
  },
  {
    name: "Emily Davis",
    age: 32,
    city: "Seattle",
    occupation: "Architect",
    salary: 75000,
    status: "suspended",
  },
  {
    name: "Daniel Wilson",
    age: 27,
    city: "Austin",
    occupation: "Doctor",
    salary: 85000,
    status: "active",
  },
  {
    name: "Sophia Martinez",
    age: 29,
    city: "Denver",
    occupation: "Nurse",
    salary: 60000,
    status: "inactive",
  },
  {
    name: "James Anderson",
    age: 37,
    city: "Miami",
    occupation: "Lawyer",
    salary: 95000,
    status: "suspended",
  },
  {
    name: "Olivia Thomas",
    age: 26,
    city: "Boston",
    occupation: "Analyst",
    salary: 72000,
    status: "active",
  },
];

// Вынесенная функция сортировки для поля `status`
function sortStatus(
  rowAValue: Person["status"],
  rowBValue: Person["status"],
  sortOrder: SortState<Person>["sortOrder"],
): number {
  const statusOrder: Person["status"][] = ["active", "inactive", "suspended"];

  const aIndex = statusOrder.indexOf(rowAValue);
  const bIndex = statusOrder.indexOf(rowBValue);

  if (sortOrder === "asc") {
    return aIndex - bIndex;
  }

  return bIndex - aIndex;
}

const columns: TableColumn<Person, Person["status"]>[] = [
  { name: "name", label: "Name", sortable: true },
  { name: "age", label: "Age", sortable: true, sortOrder: "asc" },
  { name: "city", label: "City", sortable: true },
  { name: "occupation", label: "Occupation", sortable: true },
  { name: "salary", label: "Salary", sortable: true, sortOrder: "desc" },
  {
    name: "status",
    label: "Status",
    sortable: true,
    sortFn: sortStatus,
  },
];

export const App = () => {
  return (
    <div style={{ margin: "3.125rem" }}>
      <UiTable
        columns={columns}
        rows={rows}
        rowKey={"name"}
        canRowSelect
        renderCell={({ name, value, rowItem: { age, salary } }) => {
          if (name === "age") {
            return <UiButton color={age < 30 ? "positive" : "negative"}>{value}</UiButton>;
          }

          if (name === "salary") {
            return <UiButton color={salary > 70000 ? "positive" : "negative"}>{salary}</UiButton>;
          }

          return <>{value}</>;
        }}
      />
    </div>
  );
};
