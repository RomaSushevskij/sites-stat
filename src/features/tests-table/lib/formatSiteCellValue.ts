import { NormalizedSites, normalizeUrl, Site } from "@/entities/sites";

export const formatSiteCellValue = (siteId: Site["id"], sites?: NormalizedSites) => {
  if (!sites) return String(siteId);

  const site = sites?.entities[siteId];

  if (!site) return String(siteId);

  return normalizeUrl(site.url);
};
