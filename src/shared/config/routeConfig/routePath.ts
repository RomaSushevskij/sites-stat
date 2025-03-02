export enum AppRoutes {
  MAIN = "main",
  RESULTS = "results",
  FINALIZE = "finalize",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> & {
  getPath: <T extends Record<string, string | number>>(route: AppRoutes, params: T) => string;
} = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.RESULTS]: "/results/:id",
  [AppRoutes.FINALIZE]: "/finalize/:id",
  [AppRoutes.NOT_FOUND]: "*",

  getPath: (route, params) => {
    return RoutePath[route].replace(/:([a-zA-Z]+)/g, (_, key) => String(params[key] ?? ""));
  },
};
