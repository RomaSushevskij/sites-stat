import { useState } from "react";

import { useTestsQuery } from "@/entities/tests";
import { useSitesQuery } from "@/entities/sites";
import { EmptySearchResults, TestsSearchFilter } from "@/features/tests-search-filter";
import { TestsTable } from "@/features/tests-table";

import { SiteTestsPageLayout } from "./site-tests-page-layout.tsx";

export const SiteTestsPage = () => {
  const { data: tests, isLoading: isSitesLoading } = useTestsQuery();
  const { isLoading: isTestsLoading } = useSitesQuery();

  const [searchFilterValue, setSearchFilterValue] = useState("");

  const isDataLoading = isSitesLoading || isTestsLoading;

  const resetSearchFilter = () => {
    setSearchFilterValue("");
  };

  return (
    <SiteTestsPageLayout
      isDataLoading={isDataLoading}
      searchFilter={
        <TestsSearchFilter
          value={searchFilterValue}
          onChange={setSearchFilterValue}
          testsCount={tests?.ids.length ?? 0}
        />
      }
      table={
        <TestsTable
          searchFilter={searchFilterValue}
          noData={<EmptySearchResults onResetBtnClick={resetSearchFilter} />}
        />
      }
    />
  );
};
