import { createEntityAdapter } from "@reduxjs/toolkit";

import { rtkApi } from "@/shared/api/rtkApi.ts";

import { NormalizedSites, Site } from "../model/types";

const sitesEntityAdapter = createEntityAdapter<Site, Site["id"]>({
  selectId: (site) => site.id,
});

const sitesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    sites: build.query<NormalizedSites, void>({
      query: () => ({
        url: "/sites",
      }),
      transformResponse(baseQueryReturnValue: Site[]) {
        const state = sitesEntityAdapter.getInitialState();

        return sitesEntityAdapter.setAll(state, baseQueryReturnValue);
      },
    }),
  }),
});

export const { useSitesQuery, util: testsUtil } = sitesApi;
