import { createEntityAdapter } from "@reduxjs/toolkit";

import { rtkApi } from "@/shared/api/rtkApi.ts";

import { NormalizedTests, Test } from "../model/types";

const testsEntityAdapter = createEntityAdapter<Test, Test["id"]>({
  selectId: (site) => site.id,
});

const testsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    tests: build.query<NormalizedTests, void>({
      query: () => ({
        url: "/tests",
      }),
      transformResponse(baseQueryReturnValue: Test[]) {
        const state = testsEntityAdapter.getInitialState();

        return testsEntityAdapter.setAll(state, baseQueryReturnValue);
      },
    }),
  }),
});

export const { useTestsQuery, util: testsUtil } = testsApi;
