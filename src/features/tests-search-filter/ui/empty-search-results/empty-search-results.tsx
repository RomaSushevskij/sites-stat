import { UiTypography } from "@/shared/ui/ui-typography";
import { UiButton } from "@/shared/ui/ui-button";

import s from "./empty-search-results.module.css";

export const EmptySearchResults = ({ onResetBtnClick }: { onResetBtnClick: () => void }) => {
  return (
    <div className={s.root}>
      <UiTypography>{"Your search did not match any results."}</UiTypography>
      <UiButton className={s.reset_search_filter_btn} color={"positive"} onClick={onResetBtnClick}>
        Reset
      </UiButton>
    </div>
  );
};
