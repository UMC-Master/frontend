import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  title: string;
  content: React.ReactNode;
  goToText: string;
}

const Section: React.FC<SectionProps> = ({ title, content, goToText }) => {
  return (
    <>
      <SectionHeader>
        <TipTitle>{title}</TipTitle>
        <GoTo>
          <GoToText>{goToText}</GoToText>
          <GoToText>{'>'}</GoToText>
        </GoTo>
      </SectionHeader>
      <SectionContent>{content}</SectionContent>
    </>
  );
};

export default Section;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const TipTitle = styled.div`
  width: 623px;
  align-self: stretch;
  color: var(--Main-600, #137870);

  /* Heading/xsmall */
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px; /* 150% */
  letter-spacing: 0.3px;
`

const GoTo = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
  cursor: pointer;
`

const GoToText = styled.div`
  color: var(--Text-gray, #636363);
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.48px;
`

const SectionContent = styled.div`
  display: flex;
  align-items: center;
`
