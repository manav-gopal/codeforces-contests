import { useState, useCallback, useEffect, useMemo } from "react";
import {
  Contest,
  ContestFilters,
  ApiResponse,
  PaginationState,
} from "../Home/types";
import { CODEFORCES_API_URL, DEFAULT_FILTERS } from "../Home/constants";

interface UseContestsReturn {
  contests: Contest[];
  filteredContests: Contest[];
  loading: boolean;
  error: string;
  filters: ContestFilters;
  pagination: PaginationState;
  setFilters: (filters: Partial<ContestFilters>) => void;
  setCurrentPage: (page: number) => void;
  clearError: () => void;
}

export const useContests = (): UseContestsReturn => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [filteredContests, setFilteredContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState<ContestFilters>(DEFAULT_FILTERS);
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: Number(DEFAULT_FILTERS.limit),
  });

  //! Fetch contests from API
  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch(CODEFORCES_API_URL);
        const data: ApiResponse = await response.json();

        if (data.status === "OK") {
          setContests(data.result);
          setFilteredContests(data.result);
        } else {
          throw new Error("Failed to fetch contests");
        }
      } catch (err) {
        setError("Error fetching contests. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  //! Update total pages when filtered contests or items per page changes
  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      totalPages: Math.ceil(filteredContests.length / Number(filters.limit)),
    }));
  }, [filteredContests.length, filters.limit]);

  //! Filter contests based on current filters
  const filterContests = useCallback(
    (currentFilters: ContestFilters) => {
      const filtered = contests.filter((contest) => {
        const matchesSearch = contest.name
          .toLowerCase()
          .includes(currentFilters.query.toLowerCase());
        const matchesType =
          currentFilters.type === "all" || contest.type === currentFilters.type;
        return matchesSearch && matchesType;
      });

      setFilteredContests(filtered);
      setPagination((prev) => ({
        ...prev,
        currentPage: 1,
        itemsPerPage: Number(currentFilters.limit),
      }));
    },
    [contests]
  );

  //! Update filters and refilter contests
  const handleFilterUpdate = useCallback(
    (newFilters: Partial<ContestFilters>) => {
      setFilters((prev) => {
        const updated = { ...prev, ...newFilters };
        filterContests(updated);
        return updated;
      });
    },
    [filterContests]
  );

  //! Update current page
  const handlePageChange = useCallback((page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  }, []);

  //! Clear error message
  const clearError = useCallback(() => {
    setError("");
  }, []);

  //! Get paginated contests
  const paginatedContests = useMemo(() => {
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    return filteredContests.slice(startIndex, endIndex);
  }, [filteredContests, pagination.currentPage, pagination.itemsPerPage]);

  return {
    contests,
    filteredContests: paginatedContests,
    loading,
    error,
    filters,
    pagination,
    setFilters: handleFilterUpdate,
    setCurrentPage: handlePageChange,
    clearError,
  };
};
