import { rtkApi } from "@/shared/api/rtkApi.ts";

export type StateSchema = {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
};
