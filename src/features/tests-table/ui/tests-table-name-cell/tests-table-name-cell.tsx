import clsx from "clsx";

import { Test } from "@/entities/tests";
import { UiTypography } from "@/shared/ui/ui-typography";

import s from "./tests-table-name-cell.module.css";

export const TestsTableNameCell = ({ name, type }: { name: Test["name"]; type: Test["type"] }) => {
  const testTypesClassesMapper: Record<Test["type"], string> = {
    MVT: "mvt",
    CLASSIC: "classic",
    SERVER_SIDE: "server_side",
  };

  return (
    <>
      <div className={clsx(s.type_indicator, s[testTypesClassesMapper[type]])} />
      <UiTypography weight={"500"} variant={"body2"}>
        {name}
      </UiTypography>
    </>
  );
};
