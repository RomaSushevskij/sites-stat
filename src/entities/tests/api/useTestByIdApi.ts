import { rtkApi } from "@/shared/api/rtkApi.ts";

import { Test } from "../model/types";

const testsByIdApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    testById: build.query<Test, { id: number }>({
      query: ({ id }) => ({
        url: `/tests/${id}`,
      }),
    }),
  }),
});

export const { useTestByIdQuery, util: testsUtil } = testsByIdApi;
