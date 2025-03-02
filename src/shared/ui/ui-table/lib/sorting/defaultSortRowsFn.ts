import { SortState } from "../../model/types.ts";

export const defaultSortRowsFn = <T>(
  rowAValue: T[keyof T],
  rowBValue: T[keyof T],
  sortOrder: SortState<T>["sortOrder"],
) => {
  if (typeof rowAValue === "symbol" || typeof rowBValue === "symbol") {
    return 0;
  }

  switch (sortOrder) {
    case "asc": {
      if (rowAValue > rowBValue) {
        return 1;
      }

      if (rowAValue < rowBValue) {
        return -1;
      }

      return 0;
    }
    case "desc": {
      if (rowBValue > rowAValue) {
        return 1;
      }

      if (rowBValue < rowAValue) {
        return -1;
      }

      return 0;
    }
  }
};
