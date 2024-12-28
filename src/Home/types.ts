export enum ContestType {
  CF = "CF",
  IOI = "IOI",
  ICPC = "ICPC",
}

export enum ContestPhase {
  BEFORE = "BEFORE",
  CODING = "CODING",
  PENDING_SYSTEM_TEST = "PENDING_SYSTEM_TEST",
  SYSTEM_TEST = "SYSTEM_TEST",
  FINISHED = "FINISHED",
}

export interface Contest {
  id: number;
  name: string;
  type: `${ContestType}`;
  phase: `${ContestPhase}`;
  frozen: boolean;
  durationSeconds: number;
  startTimeSeconds: number;
  relativeTimeSeconds: number;
}

export interface ContestFilters {
  query: string;
  type: string;
  limit: string;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

export interface ApiResponse {
  status: string;
  result: Contest[];
}
