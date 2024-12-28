import React from 'react';
import { TextField, Select } from '@shopify/polaris';
import { StyledFilterContainer } from '../styled';
import { ContestFilters as ContestFiltersType } from '../types';
import { ITEMS_PER_PAGE_OPTIONS, CONTEST_TYPE_OPTIONS } from '../constants';

interface ContestFiltersProps extends ContestFiltersType {
  onQueryChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onLimitChange: (value: string) => void;
}

export const ContestFilters: React.FC<ContestFiltersProps> = ({
  query,
  type,
  limit,
  onQueryChange,
  onTypeChange,
  onLimitChange,
}) => {
  return (
    <StyledFilterContainer>
      <TextField
        label="Search contests"
        value={query}
        onChange={onQueryChange}
        placeholder="Enter contest name..."
        autoComplete="off"
        variant="borderless"
        inputMode='search'
      />
      <Select
        label="Contest type"
        options={CONTEST_TYPE_OPTIONS}
        value={type}
        onChange={onTypeChange}
        tone="magic"
      />
      <Select
        label="Items per page"
        options={ITEMS_PER_PAGE_OPTIONS}
        value={limit}
        onChange={onLimitChange}
        tone="magic"
      />
    </StyledFilterContainer>
  );
}; 