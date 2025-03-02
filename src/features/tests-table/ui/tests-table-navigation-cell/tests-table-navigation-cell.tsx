import clsx from "clsx";

import { UiButton } from "@/shared/ui/ui-button";
import { Test, TestStatus } from "@/entities/tests";
import { UiLink } from "@/shared/ui/ui-link";
import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";

import s from "./tests-table-navigation-cell.module.css";

export const TestsTableNavigationCell = ({
  id,
  status,
}: {
  status: Test["status"];
  id: Test["id"];
}) => {
  if (status === TestStatus.DRAFT) {
    return (
      <UiLink to={RoutePath.getPath(AppRoutes.FINALIZE, { testId: id })}>
        <UiButton className={clsx(s.root, s.draft)}>Finalize</UiButton>
      </UiLink>
    );
  }

  return (
    <UiLink to={RoutePath.getPath(AppRoutes.RESULTS, { testId: id })}>
      <UiButton className={s.root} color={"positive"}>
        Results
      </UiButton>
    </UiLink>
  );
};
