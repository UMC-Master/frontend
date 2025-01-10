/* eslint-disable react/prop-types */
import styled from 'styled-components';
import TipCard from './TipCard';

interface TipCardItem {
  id: string;
  image: string;
  text: string;
}

interface RecentTipsProps {
  items: TipCardItem[];
}

const RecentTips: React.FC<RecentTipsProps> = ({ items }) => {
  return (
    <>
      <RecentGoodTip>
        <TipTitle>최근에 본 꿀팁</TipTitle>
        <TipCardList>
          {items.map((item) => (
            <TipCard key={item.id} image={item.image} text={item.text} />
          ))}
        </TipCardList>
      </RecentGoodTip>
    </>
  );
};

export default RecentTips;

const RecentGoodTip = styled.div`
  display: flex;
  width: 623px;
  height: 295px;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  flex-shrink: 0;
  padding: 45px 0px 32px 0px; /* top right bottom left */
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

const TipCardList = styled.div`
  width: 623px;
  height: 200px;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  gap: 36px;
`