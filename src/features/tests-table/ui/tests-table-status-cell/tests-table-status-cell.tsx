import { Test } from "@/entities/tests";
import { UiTypography } from "@/shared/ui/ui-typography";

import s from "./tests-table-status-cell.module.css";

export const TestsTableStatusCell = ({ status }: { status: Test["status"] }) => {
  const statusesMapper: Record<Test["status"], string> = {
    DRAFT: "Draft",
    PAUSED: "Paused",
    ONLINE: "Online",
    STOPPED: "Stopped",
  };

  const statusesClassesMapper: Record<Test["status"], string> = {
    DRAFT: "draft",
    PAUSED: "paused",
    ONLINE: "online",
    STOPPED: "stopped",
  };

  return (
    <UiTypography className={s[statusesClassesMapper[status]]} weight={"500"} variant={"body2"}>
      {statusesMapper[status]}
    </UiTypography>
  );
};
