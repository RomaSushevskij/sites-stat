import { ReactElement, useMemo } from "react";

import { UiTable } from "@/shared/ui/ui-table";
import { UiTypography } from "@/shared/ui/ui-typography";
import { Test, useTestsQuery } from "@/entities/tests";
import { useSitesQuery } from "@/entities/sites";

import { defineColumns } from "../../lib/defineColumns.ts";
import { TestsTableStatusCell } from "../tests-table-status-cell/tests-table-status-cell.tsx";
import { TestTableSiteCell } from "../test-table-type-cell/test-table-site-cell.tsx";
import { TestsTableNavigationCell } from "../tests-table-navigation-cell/tests-table-navigation-cell.tsx";
import { TestsTableNameCell } from "../tests-table-name-cell/tests-table-name-cell.tsx";

export const TestsTable = ({
  searchFilter,
  noData,
}: {
  searchFilter: string;
  noData?: ReactElement;
}) => {
  const { data: tests } = useTestsQuery();
  const { data: sites } = useSitesQuery();

  const columns = defineColumns(sites);

  const rows = useMemo<Test[]>(() => {
    if (!tests) return [];

    return tests.ids.map((testId) => tests.entities[testId]);
  }, [tests]);

  const filteredRows = useMemo(() => {
    if (!searchFilter) {
      return rows;
    }

    return rows.filter((row) => row.name.toLowerCase().includes(searchFilter.toLowerCase()));
  }, [searchFilter, rows]);

  if (!filteredRows.length) {
    return (
      noData ?? (
        <UiTypography variant={"h2"}>{"Your search did not match any results."}</UiTypography>
      )
    );
  }

  return (
    <UiTable
      columns={columns}
      rows={filteredRows}
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
