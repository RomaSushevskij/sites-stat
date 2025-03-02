import clsx from "clsx";

import { UiTypography } from "@/shared/ui/ui-typography";
import { AngleTopIcon } from "@/shared/ui/icons/angle-top.tsx";

import { SortState, TableColumn } from "../model/types.ts";
import s from "./ui-table.module.css";

export const UiThContainer = <T, SortedValue>({
  column,
  sortState,
  isActiveSortColumn,
}: {
  column: TableColumn<T, SortedValue>;
  isActiveSortColumn: boolean;
  sortState: SortState<T> | null;
}) => {
  const { label } = column;

  const isSortDescOrder = isActiveSortColumn && sortState?.sortOrder === "desc";

  return (
    <div className={s.th_sortable_container}>
      <UiTypography variant={"body3"} color={"secondary"}>
        {label}
      </UiTypography>

      <AngleTopIcon
        className={clsx(s.sort_order_icon, {
          [s.sort_order_icon_desc]: isSortDescOrder,
          [s.sort_order_icon_visible]: isActiveSortColumn,
        })}
        width={"1rem"}
        height={"1rem"}
      />
    </div>
  );
};
