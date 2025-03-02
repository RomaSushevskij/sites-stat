import { type RouteProps } from "react-router";

import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";
import { SiteTestsPage } from "@/pages/site-tests-page";
import { ResultsPage } from "@/pages/results-page";
import { FinalizePage } from "@/pages/finalize-page";
import { NotFoundPage } from "@/pages/not-found-page";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <SiteTestsPage />,
  },
  [AppRoutes.FINALIZE]: {
    path: RoutePath.finalize,
    element: <FinalizePage />,
  },
  [AppRoutes.RESULTS]: {
    path: RoutePath.results,
    element: <ResultsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
