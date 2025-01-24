/* eslint-disable react/prop-types */
import styled from 'styled-components';
import BigCard from '../../../components/Card/BigCard';

interface TipsSectionProps {
  title?: string;
  items: { image: string; text: string; likes?: number; bookmarks?: number; date?: string }[];
  showArrows?: boolean;
  showLikes?: boolean;
}

const RecommendedTipsSection: React.FC<TipsSectionProps> = ({ items }) => {
  return (
    <SectionContainer>
      <CardsWrapper>
        {items.map((item, index) => (
          <BigCard
            key={index}
            image={item.image}
            text={item.text}
            likes={item.likes || 0}
            bookmarks={item.bookmarks || 0}
            date={item.date || ''}
          />
        ))}
      </CardsWrapper>
    </SectionContainer>
  );
};

export default RecommendedTipsSection;

const SectionContainer = styled.div`
  max-width: 1405px;
  margin: 0 auto;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(330px, 1fr));
  gap: 28px;
`;
