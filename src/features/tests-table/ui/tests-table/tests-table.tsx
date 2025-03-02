import { ReactElement } from "react";

import { UiTable } from "@/shared/ui/ui-table";
import { UiTypography } from "@/shared/ui/ui-typography";
import { Test } from "@/entities/tests";
import { useSitesQuery } from "@/entities/sites";

import { defineColumns } from "../../lib/defineColumns.ts";
import { TestsTableStatusCell } from "../tests-table-status-cell/tests-table-status-cell.tsx";
import { TestTableSiteCell } from "../test-table-type-cell/test-table-site-cell.tsx";
import { TestsTableNavigationCell } from "../tests-table-navigation-cell/tests-table-navigation-cell.tsx";
import { TestsTableNameCell } from "../tests-table-name-cell/tests-table-name-cell.tsx";

export const TestsTable = ({ noData, rows }: { rows: Test[]; noData?: ReactElement }) => {
  const { data: sites } = useSitesQuery();

  const columns = defineColumns(sites);

  if (!rows.length) {
    return (
      noData ?? (
        <UiTypography variant={"h2"}>{"Your search did not match any results."}</UiTypography>
      )
    );
  }

  return (
    <UiTable
      columns={columns}
      rows={rows}
      canRowSelect
      rowKey={"id"}
      renderCell={({ name: fieldName, value, rowItem: { name, type, status, id } }) => {
        switch (fieldName) {
          case "name": {
            return <TestsTableNameCell name={name} type={type} />;
          }
          case "type": {
            return <TestTableSiteCell type={type} />;
          }
          case "status": {
            return <TestsTableStatusCell status={status} />;
          }
          case "id": {
            return <TestsTableNavigationCell status={status} id={id} />;
          }
          default: {
            return <UiTypography variant={"body3"}>{value}</UiTypography>;
          }
        }
      }}
    />
  );
};
