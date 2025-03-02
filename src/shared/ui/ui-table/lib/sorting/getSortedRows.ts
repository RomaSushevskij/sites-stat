import { SortState, TableColumn } from "../../model/types.ts";
import { defaultSortRowsFn } from "./defaultSortRowsFn.ts";

export const getSortedRows = <T, SortedValue>({
  sortState,
  rows,
  customSortRowsFn,
}: {
  rows: T[];
  sortState: SortState<T> | null;
  customSortRowsFn?: TableColumn<T, SortedValue>["sortFn"];
}) => {
  if (sortState === null) return rows;

  return [...rows].sort((rowA, rowB) => {
    if (sortState === null) return 0;

    if (customSortRowsFn) {
      return customSortRowsFn(
        rowA[sortState.name] as SortedValue,
        rowB[sortState.name] as SortedValue,
        sortState.sortOrder,
      );
    }

    return defaultSortRowsFn(rowA[sortState.name], rowB[sortState.name], sortState.sortOrder);
  });
};
