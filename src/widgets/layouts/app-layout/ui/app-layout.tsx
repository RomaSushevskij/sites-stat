import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { UiTypography } from "@/shared/ui/ui-typography";
import { AngleTopIcon } from "@/shared/ui/icons/angle-top.tsx";
import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";

import s from "./app-layout.module.css";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleBackBtnClick = () => {
    navigate(-1);
  };

  const isBackBtnDisplay = () => {
    const disableBackBtnRoutes: (typeof RoutePath)[keyof typeof RoutePath][] = [
      RoutePath[AppRoutes.MAIN],
    ];

    return !disableBackBtnRoutes.includes(pathname);
  };

  return (
    <div className={s.root}>
      <main className={s.main}>{children}</main>
      {isBackBtnDisplay() && (
        <UiTypography
          as={"button"}
          weight={"500"}
          variant={"h2"}
          className={s.back_btn}
          onClick={handleBackBtnClick}
        >
          <AngleTopIcon className={s.back_icon} width={"2rem"} height={"2rem"} /> Back
        </UiTypography>
      )}
    </div>
  );
};
