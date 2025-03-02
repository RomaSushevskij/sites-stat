import { ReactElement } from "react";

import { UiTypography } from "@/shared/ui/ui-typography";
import { UiPageLoader } from "@/shared/ui/ui-page-loader";

import s from "./site-tests-page-layout.module.css";

export const SiteTestsPageLayout = ({
  searchFilter,
  table,
  isDataLoading,
}: {
  searchFilter: ReactElement;
  table: ReactElement;
  isDataLoading: boolean;
}) => {
  if (isDataLoading) {
    return <UiPageLoader />;
  }

  const renderPageContent = () => {
    if (isDataLoading) {
      return <UiPageLoader />;
    }

    return (
      <>
        <div className={s.search_filter_slot}>{searchFilter}</div>

        <div className={s.table_slot}>{table}</div>
      </>
    );
  };

  return (
    <section>
      <UiTypography variant={"h1"} as={"h1"}>
        {"Dashboard"}
      </UiTypography>

      {renderPageContent()}
    </section>
  );
};
