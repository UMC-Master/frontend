/* eslint-disable react/prop-types */
import styled from 'styled-components';

interface TipsSectionProps {
  title: string;
  items: { image: string; text: string }[];
}

const TipsSectionTopFive: React.FC<TipsSectionProps> = ({ title, items }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SortOption>좋아요순 ▼</SortOption>
      </SectionHeader>
      <CardsWrapper>
        {items.map((item, index) => (
          <Card key={index}>
            <CardImage src={item.image} alt={item.text} />
            <CardText>{item.text}</CardText>
          </Card>
        ))}
      </CardsWrapper>
    </SectionContainer>
  );
};

export default TipsSectionTopFive;

const SectionContainer = styled.div`
  max-width: 1405px;
  margin: 0 auto;
  margin-top: 100px;
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
`;
const CardImage = styled.img`
  max-width: 252px;
  height: 200px;
  object-fit: cover;
`;
const CardText = styled.p`
  margin: 10px 0;
  font-size: 24px;
  font-weight: 500;
  color: #121212;
`;
