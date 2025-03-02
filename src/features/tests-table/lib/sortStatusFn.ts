import { SortState } from "@/shared/ui/ui-table";
import { Test, TestStatus } from "@/entities/tests";

export function sortStatusFn(
  rowAValue: Test["status"],
  rowBValue: Test["status"],
  sortOrder: SortState<Test>["sortOrder"],
): number {
  const statusOrder: Test["status"][] = [
    TestStatus.ONLINE,
    TestStatus.PAUSED,
    TestStatus.STOPPED,
    TestStatus.DRAFT,
  ];

  const rowAValueIndex = statusOrder.indexOf(rowAValue);
  const rowBValueIndex = statusOrder.indexOf(rowBValue);

  if (sortOrder === "asc") {
    return rowAValueIndex - rowBValueIndex;
  }

  return rowBValueIndex - rowAValueIndex;
}
