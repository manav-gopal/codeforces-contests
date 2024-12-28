import { SelectOption } from "@shopify/polaris";

// Could have added api key to the url but it's not required for the Public data
export const CODEFORCES_API_URL = "https://codeforces.com/api/contest.list";

export const ITEMS_PER_PAGE_OPTIONS: SelectOption[] = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
];

export const CONTEST_TYPE_OPTIONS: SelectOption[] = [
  { label: "All", value: "all" },
  { label: "CF", value: "CF" },
  { label: "IOI", value: "IOI" },
  { label: "ICPC", value: "ICPC" },
];

export const DEFAULT_FILTERS: {
  query: string;
  type: string;
  limit: string;
} = {
  query: "",
  type: "all",
  limit: "20",
};
