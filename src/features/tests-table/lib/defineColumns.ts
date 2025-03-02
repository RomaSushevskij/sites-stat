import { TableColumn } from "@/shared/ui/ui-table";
import { NormalizedSites } from "@/entities/sites";
import { Test } from "@/entities/tests";

import { formatSiteCellValue } from "./formatSiteCellValue.ts";
import { sortStatusFn } from "@/features/tests-table/lib/sortStatusFn.ts";

export const defineColumns = (sites: NormalizedSites | undefined): TableColumn<Test>[] => {
  return [
    { name: "name", label: "NAME", sortable: true },
    { name: "type", label: "TYPE", sortable: true },
    {
      name: "status",
      label: "STATUS",
      sortable: true,
      sortFn: (rowAValue, rowBValue, sortOrder) =>
        sortStatusFn(rowAValue as Test["status"], rowBValue as Test["status"], sortOrder),
    },
    {
      name: "siteId",
      label: "SITE",
      sortable: true,
      format: (siteId) => formatSiteCellValue(siteId as number, sites),
    },
    { name: "id", label: "", sortable: false },
  ];
};
