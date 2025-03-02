import { AppLayout } from "@/widgets/layouts/app-layout";
import { AppRouter } from "./providers/app-router";

export const App = () => {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
};
