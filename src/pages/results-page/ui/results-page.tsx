import { useParams } from "react-router-dom";

import { UiTypography } from "@/shared/ui/ui-typography";
import { UiPageLoader } from "@/shared/ui/ui-page-loader";
import { useTestByIdQuery } from "@/entities/tests";

import s from "./results-page.module.css";

export const ResultsPage = () => {
  const params = useParams<{ testId: string }>();

  const { data: test, isLoading } = useTestByIdQuery({ id: Number(params.testId) });

  const renderPageContent = () => {
    if (isLoading) {
      return <UiPageLoader />;
    }

    return <UiTypography variant={"h3"}>{test?.name}</UiTypography>;
  };

  return (
    <section>
      <UiTypography variant={"h1"} as={"h1"} className={s.title}>
        Results
      </UiTypography>

      {renderPageContent()}
    </section>
  );
};
