import { useTestsQuery } from "@/entities/tests";
import { useSitesQuery } from "@/entities/sites";
import {
  EmptySearchResults,
  TestsSearchFilter,
  useTestsSearchFilter,
} from "@/features/tests-search-filter";
import { TestsTable } from "@/features/tests-table";

import { SiteTestsPageLayout } from "./site-tests-page-layout.tsx";

export const SiteTestsPage = () => {
  const { isLoading: isSitesLoading } = useTestsQuery();
  const { isLoading: isTestsLoading } = useSitesQuery();

  const { searchFilterValue, filteredTests, resetSearchFilter, setSearchFilterValue } =
    useTestsSearchFilter();

  const isDataLoading = isSitesLoading || isTestsLoading;

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
