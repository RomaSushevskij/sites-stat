export type SortState<T> = { name: keyof T; sortOrder: "asc" | "desc" };

export type TableColumn<T, SortedValue> = {
  name: keyof T;
  label: string;
  sortable: boolean;
  align?: "left" | "center" | "right";
  sortOrder?: "asc" | "desc";
  format?: (val: any, row: T) => string;
  sortFn?: (
    rowAValue: SortedValue,
    rowBValue: SortedValue,
    sortOrder: SortState<T>["sortOrder"],
  ) => number;
};
