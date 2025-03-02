import { useState } from "react";
import { SortState, TableColumn } from "../../model/types.ts";

const defineDefaultSortData = <T>(columns: TableColumn<T>[]): SortState<T> | null => {
  const defaultSortableColumn = columns.find(
    ({ sortable, sortOrder }) => Boolean(sortable) && Boolean(sortOrder),
  );

  if (!defaultSortableColumn) return null;

  return {
    name: defaultSortableColumn.name,
    sortOrder: defaultSortableColumn.sortOrder as SortState<T>["sortOrder"],
  };
};

export const useSortState = <T>({ columns }: { columns: TableColumn<T>[] }) => {
  const [sortState, setSortState] = useState<SortState<T> | null>(defineDefaultSortData(columns));

  const changeSortState = (column: TableColumn<T>) => {
    if (!column.sortable) return;

    if (column.name !== sortState?.name) {
      setSortState({ name: column.name, sortOrder: "asc" });
    }

    if (column.name === sortState?.name) {
      setSortState((prevSortState) => {
        if (!prevSortState) return prevSortState;

        const defineNewSortState = (prevSortState: SortState<T>): SortState<T> | null => {
          switch (prevSortState.sortOrder) {
            case "asc": {
              return { name: prevSortState.name, sortOrder: "desc" };
            }
            case "desc": {
              return null;
            }
            default: {
              return { name: prevSortState.name, sortOrder: "asc" };
            }
          }
        };

        return defineNewSortState(prevSortState);
      });
    }
  };

  const isColumnSortable = (column: TableColumn<T>) => {
    return column.sortable;
  };

  const isActiveSortColumn = (column: TableColumn<T>) => {
    return column.name === sortState?.name;
  };

  return { sortState, changeSortState, isColumnSortable, isActiveSortColumn };
};
