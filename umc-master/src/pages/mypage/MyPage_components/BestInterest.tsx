/* eslint-disable react/prop-types */
import styled from 'styled-components';
import InterestTag from './InterestTag';

interface BestInterestProps {
    interests: string[];
}

const BestInterest: React.FC<BestInterestProps> = ({ interests }) => {
  return (
    <>
      <BestInterestContainer>
        <Section_1>
          <SectionHeader>
            <TipTitle>Best 꿀팁 선정 횟수</TipTitle>
            <GoTo>
              <GoToText>보러가기</GoToText>
              <GoToText>{'>'}</GoToText>
            </GoTo>
          </SectionHeader>
          <BestChoice>
            <BestNum>10</BestNum>
            <BestNumber>회</BestNumber>
          </BestChoice>
        </Section_1>
        <Section_2>
          <SectionHeader>
            <TipTitle>나의 관심사</TipTitle>
            <GoTo>
              <GoToText>편집하기</GoToText>
              <GoToText>{'>'}</GoToText>
            </GoTo>
          </SectionHeader>
          <InterestTagList>
            {interests.map((interests, index) => (
                <InterestTag key={index} label={interests}></InterestTag>
            ))}
          </InterestTagList>
        </Section_2>
      </BestInterestContainer>
    </>
  );
};

export default BestInterest;

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

const BestInterestContainer = styled.div`
  display: flex;
  width: 630px;
  height: 372px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 47px;
  padding: 0px 9px 0px 0px; /* top right bottom left */
`

const Section_1 = styled.div`
  display: flex;
  width: 630px;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
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

const Section_2 = styled.div`
  display: flex;
  width: 630px;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`

const BestChoice = styled.div`
  display: flex;
  align-items: center;
`

const BestNum = styled.div`
  color: var(--Main-800, #084951);

  /* Display/medium */
  font-family: Pretendard;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px; /* 133.929% */
  letter-spacing: 0.56px;
`

const BestNumber = styled.div`
  color: var(--Main-800, #084951);

  /* Heading/large */
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 75px; /* 150% */
  letter-spacing: 0.5px;
`

const InterestTagList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`