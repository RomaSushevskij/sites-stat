import s from "./ui-page-loader.module.css";
import { UiLoader } from "@/shared/ui/ui-loader";

export const UiPageLoader = () => {
  return (
    <div className={s.root}>
      <UiLoader />
    </div>
  );
};
