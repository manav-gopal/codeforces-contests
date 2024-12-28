import React from 'react';
import { DataTable } from '@shopify/polaris';
import { Contest } from '../types';
import { TableContainer, StyledTypeCell, StyledPhaseTag, StyledTimeCell, StyledDurationCell } from '../styled';
import { HighlightedText } from './HighlightedText';
import { formatDateTime, formatDuration } from '../../utils/utils';

interface ContestTableProps {
  contests: Contest[];
  query: string;
}

export const ContestTable: React.FC<ContestTableProps> = ({ contests, query }) => {
  const rows = contests.map(contest => [
    <div className="name-cell">
      <HighlightedText text={contest.name} highlight={query} />
    </div>,
    <StyledTypeCell>
      <div className="type-badge">{contest.type}</div>
    </StyledTypeCell>,
    <StyledPhaseTag phase={contest.phase}>{contest.phase}</StyledPhaseTag>,
    <StyledTimeCell>
      <span className="date">{formatDateTime(contest.startTimeSeconds).date}</span>
      <span className="time">{formatDateTime(contest.startTimeSeconds).time}</span>
    </StyledTimeCell>,
    <StyledDurationCell>
      {formatDuration(contest.durationSeconds)}
    </StyledDurationCell>
  ]);

  return (
    <TableContainer>
      <DataTable
        columnContentTypes={['text', 'text', 'text', 'text', 'text']}
        headings={['Name', 'Type', 'Phase', 'Start Time', 'Duration']}
        rows={rows}
      />
    </TableContainer>
  );
}; 