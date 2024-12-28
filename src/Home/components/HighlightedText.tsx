import React from 'react';
import { Text } from '@shopify/polaris';
import styled from 'styled-components';
import { darkTheme } from '../tokens';

const HighlightSpan = styled.span`
  background-color: ${darkTheme.colors.filteredText.background};
  border-radius: 2px;
  color: ${darkTheme.colors.filteredText.color} !important;
`;

const TextWrapper = styled(Text)`
  color: ${darkTheme.colors.text} !important;
`;

interface HighlightedTextProps {
  text: string;
  highlight: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <TextWrapper as="span" variant="bodyMd">{text}</TextWrapper>;
  }

  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));

  return (
    <TextWrapper as="span" variant="bodyMd">
      {parts.map((part, index) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <HighlightSpan key={index}>{part}</HighlightSpan>
        ) : (
          part
        )
      )}
    </TextWrapper>
  );
}; 