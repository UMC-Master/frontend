import React from 'react';
import styled from 'styled-components';
import Typography from '@components/common/typography';

interface TagProps {
  selected?: boolean;
  text: string;
}

const Tag: React.FC<TagProps> = ({ selected, text }) => {
  return (
    <TagContainer selected={selected}>
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
  background-color: ${(props) => (props.selected ? '#1B8C78' : '#9C9C9C')};
  cursor: pointer;
  color: #ffffff;
`;
