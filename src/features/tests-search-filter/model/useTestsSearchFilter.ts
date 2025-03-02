import { useMemo, useState } from "react";

import { useTestsQuery } from "@/entities/tests";

export const useTestsSearchFilter = () => {
  const { data: normalizedTests } = useTestsQuery();
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

  const resetSearchFilter = () => {
    setSearchFilterValue("");
  };

  return { filteredTests, setSearchFilterValue, searchFilterValue, resetSearchFilter };
};
