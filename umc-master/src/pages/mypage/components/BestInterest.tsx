/* eslint-disable react/prop-types */
import styled from 'styled-components';
import InterestTag from '../../../components/InterestTag/InterestTag';
import Section from './Section';

interface BestInterestProps {
    interests: string[];
}

const BestInterest: React.FC<BestInterestProps> = ({ interests }) => {
  return (
    <>
      <BestInterestContainer>
        <Section_1>
          <Section 
            title='Best 꿀팁 선정 횟수'
            content={
              <>
                <BestChoice>
                  <BestNum>10</BestNum>
                  <BestNumber>회</BestNumber>
                </BestChoice>
              </>
            }
            goToText='보러가기'
          />
        </Section_1>
        <Section_2>
          <Section 
            title='나의 관심사'
            content={
              <>
                <InterestTagList>
                  {interests.map((interest, index) => (
                      <InterestTag key={index} label={interest}></InterestTag>
                  ))}
                </InterestTagList>
              </>
            }
            goToText='편집하기'
          />
        </Section_2>
      </BestInterestContainer>
    </>
  );
};

export default BestInterest;

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