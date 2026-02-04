import { format } from "date-fns";

export const formatDate = (date: string, dateFormat = "MMMM d, yyyy") => {
  if (!date) return "";
  return format(new Date(date), dateFormat);
};

export const unique = <T>(items: T[]) => Array.from(new Set(items));
