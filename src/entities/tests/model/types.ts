import { EntityState } from "@reduxjs/toolkit";

enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

export enum TestStatus {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}
export type Test = {
  id: number;
  name: string;
  type: Type;
  status: TestStatus;
  siteId: number;
};

export type NormalizedTests = EntityState<Test, Test["id"]>;
