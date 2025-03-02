export type SortState<T> = { name: keyof T; sortOrder: "asc" | "desc" };

export type TableColumn<T> = {
  name: keyof T;
  label: string;
  sortable: boolean;
  align?: "left" | "center" | "right";
  sortOrder?: "asc" | "desc";
  format?: (val: T[keyof T], row: T) => string;
  sortFn?: (
    rowAValue: T[keyof T],
    rowBValue: T[keyof T],
    sortOrder: SortState<T>["sortOrder"],
  ) => number;
};
