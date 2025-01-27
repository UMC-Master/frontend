/* eslint-disable react/prop-types */
import styled, { useTheme } from 'styled-components';
import Card from '@components/Card/Card';
import Typography from '@components/common/typography';

interface TipCardItem {
  id: string;
  image: string;
  text: string;
  likes?: number;
  bookmarks?: number;
  date?: string;
}

interface RecentTipsProps {
  items: TipCardItem[];
}

const RecentTips: React.FC<RecentTipsProps> = ({ items }) => {

  const theme = useTheme();
  return (
    <RecentGoodTip>
      <Typography 
        variant='titleXxSmall' 
        style={{color: theme.colors.primary[800]}}
      >최근에 본 꿀팁</Typography>
      <TipCardList>
        {items.map((item) => (
          <Card 
            key={item.id} 
            image={item.image} 
            text={item.text} 
            likes={item.likes || 0} 
            bookmarks={item.bookmarks || 0} 
            date={item.date || ''}
          />
        ))}
      </TipCardList>
    </RecentGoodTip>
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
  padding: 45px 0px 32px; /* top right bottom left */
`

const TipCardList = styled.div`
  width: 623px;
  height: 200px;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  gap: 36px;
`