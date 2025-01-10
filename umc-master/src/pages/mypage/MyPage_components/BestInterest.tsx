/* eslint-disable react/prop-types */
import styled from 'styled-components';

interface BestInterestProps {
    interests: string[];
}

const BestInterest: React.FC<BestInterestProps> = ({ interests }) => {
  return (
    <>
      <Best_Interest>
        <BestGoodTip>
          <Best_InterestTitle>
            <TipTitle>Best 꿀팁 선정 횟수</TipTitle>
            <GoTo>
              <GoToText>보러가기</GoToText>
              <GoToText>{'>'}</GoToText>
            </GoTo>
          </Best_InterestTitle>
          <BestChoice>
            <BestNum>10</BestNum>
            <Bestber>회</Bestber>
          </BestChoice>
        </BestGoodTip>
        <Interest>
          <Best_InterestTitle>
            <TipTitle>나의 관심사</TipTitle>
            <GoTo>
              <GoToText>편집하기</GoToText>
              <GoToText>{'>'}</GoToText>
            </GoTo>
          </Best_InterestTitle>
          <InterestTagList>
            {interests.map((interests, index) => (
                <Tag key={index}>#{interests}</Tag>
            ))}
          </InterestTagList>
        </Interest>
        </Best_Interest>
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

const Best_Interest = styled.div`
  display: flex;
  width: 630px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 47px;
  padding: 0px 9px 0px 0px; /* top right bottom left */
`

const BestGoodTip = styled.div`
  display: flex;
  width: 630px;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
`

const Best_InterestTitle = styled.div`
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

const Interest = styled.div`
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

const Bestber = styled.div`
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

const Tag = styled.span<{ selected?: boolean }>`
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
`