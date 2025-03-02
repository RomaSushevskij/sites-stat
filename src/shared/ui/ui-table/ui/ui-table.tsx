import { ReactElement, useMemo } from "react";
import clsx from "clsx";

import { UiTypography } from "@/shared/ui/ui-typography";

import { UiThContainer } from "./ui-th-container.tsx";
import { TableColumn } from "../model/types.ts";
import { useSortState } from "../lib/sorting/useSortState.ts";
import { getSortedRows } from "../lib/sorting/getSortedRows.ts";
import s from "./ui-table.module.css";

export type Props<T extends Record<string, any>> = {
  columns: TableColumn<T>[];
  rows: T[];
  renderCell?: (props: { name: keyof T; value: T[keyof T]; rowItem: T }) => ReactElement;
  rowKey: keyof T;
  canRowSelect?: boolean;
  onRowClick?: (row: T) => void;
};

export const UiTable = <T extends Record<string, any>>({
  columns,
  rows,
  rowKey,
  canRowSelect,
  onRowClick,
  ...props
}: Props<T>) => {
  const defaultAlign: TableColumn<T>["align"] = "left";

  const { sortState, changeSortState, isActiveSortColumn, isColumnSortable } = useSortState({
    columns,
  });

  const formattedRows = useMemo(() => {
    return rows.map((row) => {
      const formattedRow = { ...row };

      columns.forEach((column) => {
        if (column.format) {
          formattedRow[column.name as keyof T] = column.format(row[column.name], row) as T[keyof T];
        }
      });

      return formattedRow;
    });
  }, [rows, columns]);

  const sortedRows = useMemo(() => {
    const sortedColumn = columns.find((column) => column.name === sortState?.name);

    if (!sortedColumn) {
      return formattedRows;
    }

    return getSortedRows({ rows: formattedRows, sortState, customSortRowsFn: sortedColumn.sortFn });
  }, [formattedRows, sortState, columns]);

  const renderThead = (
    <tr>
      {columns.map((column) => {
        const { name, align } = column;

        return (
          <th
            className={clsx(s.th, { [s.th_sortable]: isColumnSortable(column) })}
            key={String(name)}
            align={align ?? defaultAlign}
            onClick={() => changeSortState(column)}
          >
            <UiThContainer
              column={column}
              isActiveSortColumn={isActiveSortColumn(column)}
              sortState={sortState}
            />
          </th>
        );
      })}
    </tr>
  );

  const renderTd = (row: T, name: keyof T, align: TableColumn<T>["align"]) => {
    if (props.renderCell) {
      return (
        <td key={String(name)} className={s.td} align={align ?? defaultAlign}>
          {props.renderCell({ name, value: row[name], rowItem: row })}
        </td>
      );
    }

    return (
      <td key={String(name)} className={s.td}>
        <UiTypography variant={"body2"} color={"secondary"}>
          {row[name]}
        </UiTypography>
      </td>
    );
  };

  const renderRows = sortedRows.map((row) => {
    return (
      <tr
        key={row[rowKey]}
        className={clsx(s.tr, {
          [s.tr_selected]: canRowSelect,
          [s.tr_clickable]: Boolean(onRowClick),
        })}
      >
        {columns.map(({ name, align }) => {
          return renderTd(row, name, align);
        })}
      </tr>
    );
  });

  return (
    <table className={s.table}>
      <thead>{renderThead}</thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};
