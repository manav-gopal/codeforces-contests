import { Layout, Page, Text } from "@shopify/polaris";
import styled from "styled-components";
import { darkTheme } from './tokens';

//! Layout Components
export const StyledPage = styled(Page)`
  background-color: ${darkTheme.colors.background};
`;

export const StyledLayout = styled(Layout)`
  padding: ${darkTheme.spacing.lg};
  background-color: ${darkTheme.colors.background};
`;

export const StyledCard = styled.div`
  background-color: ${darkTheme.colors.cardBackground};
  border: 1px solid ${darkTheme.colors.border};
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${darkTheme.colors.background};
`;

//! Form Elements
const formStyles = `
  background-color: ${darkTheme.colors.input.background};
  border-color: ${darkTheme.colors.input.border};
  color: ${darkTheme.colors.input.text};
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  gap: ${darkTheme.spacing.md};
  margin-bottom: ${darkTheme.spacing.md};

  .Polaris-TextField, .Polaris-Select {
    ${formStyles}
  }

  .Polaris-TextField__Input {
    ${formStyles}
    
    &:focus {
      border-color: ${darkTheme.colors.accent};
      box-shadow: 0 0 0 1px ${darkTheme.colors.accent};
    }
  }

  .Polaris-Label {
    color: ${darkTheme.colors.textSecondary};
  }
`;

//! Table Components
export const TableContainer = styled.div`
  position: relative;
  height: 60vh;

  .Polaris-DataTable__Table {
    background-color: ${darkTheme.colors.cardBackground};
    color: ${darkTheme.colors.text};
    table-layout: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .Polaris-DataTable__Table thead {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  .Polaris-DataTable__Table tbody {
    display: block;
    overflow-y: auto;
    height: calc(60vh - 48px); /* 48px is approx header height */
  }

  .Polaris-DataTable__Table tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  .Polaris-DataTable__Cell {
    border-color: ${darkTheme.colors.border};
    color: ${darkTheme.colors.text};
    background-color: ${darkTheme.colors.cardBackground};
    padding: 12px 16px;
    vertical-align: middle;

    &:nth-child(1) { width: 50%; }
    &:nth-child(2) { width: 10%; }
    &:nth-child(3) { width: 15%; }
    &:nth-child(4) { width: 15%; }
    &:nth-child(5) { width: 10%; }
  }

  .Polaris-DataTable__Cell--header {
    background-color: ${darkTheme.colors.highlight};
    color: ${darkTheme.colors.textSecondary};
    font-weight: 600;
    border-bottom: 2px solid ${darkTheme.colors.border};
    text-transform: uppercase;
    font-size: 0.85em;

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(5) {
      text-align: center;
    }
  }

  .Polaris-DataTable__Cell:not(.Polaris-DataTable__Cell--header) {
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(5) {
      text-align: center;
    }
  }

  .Polaris-DataTable__TableRow {
    transition: background-color 0.15s ease;
    &:hover { background-color: ${darkTheme.colors.highlight}; }
  }

  .name-cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    font-weight: 500;
    color: ${darkTheme.colors.text};
    display: block;
    * { color: ${darkTheme.colors.text}; }
  }
`;

//! Cell Components
export const StyledTypeCell = styled.div`
  color: ${darkTheme.colors.text};
  text-align: center;
  
  .type-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    background-color: ${darkTheme.colors.highlight};
  }
`;

export const StyledPhaseTag = styled.span<{ phase: string }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => darkTheme.colors.phase[props.phase as keyof typeof darkTheme.colors.phase]};
  color: ${darkTheme.colors.text};
  display: inline-block;
  text-transform: capitalize;
  text-align: center;
  min-width: 80px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const StyledTimeCell = styled.div`
  color: ${darkTheme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  .date {
    font-weight: 500;
    font-size: 0.95em;
  }
  
  .time {
    color: ${darkTheme.colors.textSecondary};
    font-size: 0.85em;
  }
`;

export const StyledDurationCell = styled.div`
  color: ${darkTheme.colors.text};
  text-align: center;
  color: ${darkTheme.colors.textSecondary};
  font-family: monospace;
  font-size: 0.95em;
`;

export const StyledHeading = styled(Text)`
  color: ${darkTheme.colors.text};
  margin-bottom: ${darkTheme.spacing.md};
`;