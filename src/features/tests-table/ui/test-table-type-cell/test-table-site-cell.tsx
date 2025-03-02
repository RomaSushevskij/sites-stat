import { UiTypography } from "@/shared/ui/ui-typography";
import { Test } from "@/entities/tests";

export const TestTableSiteCell = ({ type }: { type: Test["type"] }) => {
  const typesMapper: Record<Test["type"], string> = {
    MVT: "MVT",
    CLASSIC: "Classic",
    SERVER_SIDE: "Server-side",
  };

  return <UiTypography variant={"body3"}>{typesMapper[type]}</UiTypography>;
};
