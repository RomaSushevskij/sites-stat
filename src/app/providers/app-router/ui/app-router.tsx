import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};
