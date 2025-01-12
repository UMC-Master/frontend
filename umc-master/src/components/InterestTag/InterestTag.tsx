import React from 'react';
import styled from 'styled-components';

interface InterestTagProps {
  label: string;
}

const InterestTag: React.FC<InterestTagProps> = ({ label }) => {
  return <Tag>#{label}</Tag>;
};

export default InterestTag;

const Tag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 34px;
  border-radius: 30px;
  font-size: 24px;
  min-width: 103px;
  height: 60px;
  color: #ffffff;
  background-color: #1B8C78;
  cursor: pointer;
`;
