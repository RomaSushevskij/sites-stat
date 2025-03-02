export const normalizeUrl = (url: string): string => {
  // Убираем протокол (http://, https://) и поддомен www
  return url.replace(/^(https?:\/\/)?(www\.)?/, "");
};
