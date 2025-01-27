import React from 'react';
import styled from 'styled-components';
import Typography from '@components/common/typography';

interface TagProps {
  selected?: boolean;
  text: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ selected, text, onClick }) => {
  return (
    <TagContainer selected={selected} onClick={onClick}>
      <Typography variant="bodySmall">#{text}</Typography>
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  border-radius: 30px;
  height: 48px;
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary[500] : theme.colors.text['lightGray'])};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text['white']};
`;
