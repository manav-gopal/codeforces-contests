import React from 'react';
import { Layout, Spinner, Toast, Box, Pagination } from '@shopify/polaris';
import { StyledLayout, StyledCard, StyledPage, StyledHeading, StyledLoadingContainer } from './styled';
import { ContestFilters } from './components/ContestFilters';
import { ContestTable } from './components/ContestTable';
import { useContests } from '../hooks/useContests';

export const HomePage: React.FC = () => {
  const {
    filteredContests,
    loading,
    error,
    filters,
    pagination,
    setFilters,
    setCurrentPage,
    clearError,
  } = useContests();

  if (loading) {
    return (
      <StyledLoadingContainer>
        <Spinner size="large" />
      </StyledLoadingContainer>
    );
  }

  return (
    <StyledPage title="Codeforces Contests" subtitle="All contests from Codeforces">
      <StyledLayout>
        <Layout.Section>
          <StyledCard>
            <Box padding="400">
              <StyledHeading as="h2" variant="headingMd" fontWeight="semibold">
                Contest Filters
              </StyledHeading>
              
              <Box paddingBlockStart="400" overflowX="scroll">
                <ContestFilters
                  query={filters.query}
                  type={filters.type}
                  limit={filters.limit}
                  onQueryChange={(value) => setFilters({ query: value })}
                  onTypeChange={(value) => setFilters({ type: value })}
                  onLimitChange={(value) => setFilters({ limit: value })}
                />
              </Box>

              <Box paddingBlockStart="400">
                <ContestTable 
                  contests={filteredContests}
                  query={filters.query}
                />
              </Box>

              <Box paddingBlockStart="400">
                <Pagination
                  label={`Page ${pagination.currentPage} of ${pagination.totalPages}`}
                  hasPrevious={pagination.currentPage > 1}
                  onPrevious={() => setCurrentPage(pagination.currentPage - 1)}
                  hasNext={pagination.currentPage < pagination.totalPages}
                  onNext={() => setCurrentPage(pagination.currentPage + 1)}
                />
              </Box>
            </Box>
          </StyledCard>
        </Layout.Section>
      </StyledLayout>
      {error && (
        <Toast content={error} error onDismiss={clearError} duration={4000} />
      )}
    </StyledPage>
  );
};