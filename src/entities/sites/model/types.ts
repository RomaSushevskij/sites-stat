import { EntityState } from "@reduxjs/toolkit";

export type Site = {
  id: number;
  url: string;
};

export type NormalizedSites = EntityState<Site, Site["id"]>;
