/* eslint-disable react/prop-types */
import Card from '@components/Card/Card';
import Typography from '@components/common/typography';
import { useState } from 'react';
import styled from 'styled-components';

interface TipsSectionProps {
  title?: string;
  items: { image: string; text: string; likes?: number; bookmarks?: number; date?: string }[];
  showArrows?: boolean;
  showLikes?: boolean;
}

const TipsSection: React.FC<TipsSectionProps> = ({ title, items, showArrows = false, showLikes = true }) => {
  const [sortOption, setSortOption] = useState<'likes' | 'recent'>('likes');

  // 정렬된 아이템
  const sortedItems = [...items].sort((a, b) => {
    if (sortOption === 'likes') return (b.likes || 0) - (a.likes || 0);
    if (sortOption === 'recent') return new Date(b.date || '').getTime() - new Date(a.date || '').getTime();
    return 0;
  });

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>
          <Typography variant="headingXxSmall">{title}</Typography>
        </SectionTitle>
      </SectionHeader>
      <SortAndCardWrapper>
        <SortButtonGroup hasButtons={showLikes}>
          {showLikes && (
            <>
              <SortButton active={sortOption === 'likes'} onClick={() => setSortOption('likes')}>
                <Typography variant="bodyXSmall">좋아요순</Typography>
              </SortButton>
              <SortButton active={sortOption === 'recent'} onClick={() => setSortOption('recent')}>
                <Typography variant="bodyXSmall">저장많은순</Typography>
              </SortButton>
            </>
          )}
        </SortButtonGroup>
        <CardsWrapper>
          {showArrows && <LeftArrow>{'<'}</LeftArrow>}
          {sortedItems.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              text={item.text}
              likes={item.likes || 0}
              bookmarks={item.bookmarks || 0}
              date={item.date || ''}
            />
          ))}
          {showArrows && <RightArrow>{'>'}</RightArrow>}
        </CardsWrapper>
      </SortAndCardWrapper>
    </SectionContainer>
  );
};

export default TipsSection;

const SortAndCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionContainer = styled.div`
  max-width: 1424px;
  margin: 0 auto;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
`;

const SortButtonGroup = styled.div<{ hasButtons: boolean }>`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  margin-left: auto;
  height: ${({ hasButtons }) => (hasButtons ? 'auto' : '40px')}; /* 버튼이 없을 때 고정된 높이 */
`;

const SortButton = styled.button<{ active: boolean }>`
  padding: 7px 16px;
  color: ${({ active, theme }) => (active ? theme.colors.text['white'] : theme.colors.text['gray'])};
  background-color: ${({ active, theme }) => (active ? theme.colors.primary[600] : theme.colors.text['white'])};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  border: ${({ active }) => (active ? 'none' : '1px solid #ccc')};
  &:hover {
    background-color: ${({ active, theme }) => (active ? theme.colors.primary[600] : theme.colors.text['white'])};
  }
  margin: 0 auto; /* 가운데 정렬 */
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;
const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary[900]};
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(240px, 1fr));
  gap: 20px;
  position: relative;
  max-width: 1280px; /* 원하는 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const LeftArrow = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #121212;
  position: absolute;
  top: 50%;
  left: -62px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const RightArrow = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #121212;
  position: absolute;
  top: 50%;
  right: -62px;
  transform: translateY(-50%);
  cursor: pointer;
`;
