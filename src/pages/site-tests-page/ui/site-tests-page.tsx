import { useMemo, useState } from "react";

import { useTestsQuery } from "@/entities/tests";
import { useSitesQuery } from "@/entities/sites";
import { EmptySearchResults, TestsSearchFilter } from "@/features/tests-search-filter";
import { TestsTable } from "@/features/tests-table";

import { SiteTestsPageLayout } from "./site-tests-page-layout.tsx";

export const SiteTestsPage = () => {
  const { data: normalizedTests, isLoading: isSitesLoading } = useTestsQuery();
  const { isLoading: isTestsLoading } = useSitesQuery();

  const [searchFilterValue, setSearchFilterValue] = useState("");

  const filteredTests = useMemo(() => {
    if (!normalizedTests) return [];

    const tests = normalizedTests.ids.map((testId) => normalizedTests.entities[testId]);

    if (!searchFilterValue) {
      return tests;
    }

    return tests.filter((test) =>
      test.name.toLowerCase().includes(searchFilterValue.toLowerCase()),
    );
  }, [searchFilterValue, normalizedTests]);

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
          testsCount={filteredTests.length}
        />
      }
      table={
        <TestsTable
          rows={filteredTests}
          noData={<EmptySearchResults onResetBtnClick={resetSearchFilter} />}
        />
      }
    />
  );
};
