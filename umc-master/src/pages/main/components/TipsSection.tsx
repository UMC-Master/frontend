/* eslint-disable react/prop-types */
import Card from '@components/Card/Card';
import styled from 'styled-components';

interface TipsSectionProps {
  title?: string;
  items: { image: string; text: string }[];
  showArrows?: boolean;
  showLikes?: boolean;
}

const TipsSection: React.FC<TipsSectionProps> = ({ title, items, showArrows = false, showLikes = true }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {showLikes && <SortOption>좋아요순 ▼</SortOption>}
      </SectionHeader>
      <CardsWrapper>
        {showArrows && <LeftArrow>{'<'}</LeftArrow>}
        {items.map((item, index) => (
          <Card key={index} image={item.image} text={item.text} />
        ))}
        {showArrows && <RightArrow>{'>'}</RightArrow>}
      </CardsWrapper>
    </SectionContainer>
  );
};

export default TipsSection;

const SectionContainer = styled.div`
  max-width: 1405px;
  margin: 0 auto;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
`;
const SectionTitle = styled.p`
  font-size: 36px;
  color: #0d6364;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const SortOption = styled.span`
  font-size: 20px;
  color: #555;
  cursor: pointer;
  margin-left: auto;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(252px, 1fr));
  gap: 36px;
  position: relative;
`;

const LeftArrow = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #121212;
  position: absolute;
  top: 50%;
  left: -40px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const RightArrow = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #121212;
  position: absolute;
  top: 50%;
  right: -40px;
  transform: translateY(-50%);
  cursor: pointer;
`;
