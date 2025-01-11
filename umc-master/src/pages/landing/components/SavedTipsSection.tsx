import styled, { keyframes } from 'styled-components';
import Card from '@components/Card/Card';

const SavedTipsSection: React.FC = () => {
  const savedTips = [
    { image: '', text: '요리 꿀팁 모음' },
    { image: '', text: '청소 노하우' },
    { image: '', text: '자취생 돈 관리법' },
    { image: '', text: '공간 활용 인테리어' },
    { image: '', text: '효율적인 시간 관리' },
  ];

  return (
    <Section>
      <Title>여러 꿀팁들을 저장하고 확인하세요!</Title>
      <ScrollContainer>
        <CardContainer>
          {savedTips.concat(savedTips).map((tip, index) => (
            <Card key={index} image={tip.image} text={tip.text} />
          ))}
        </CardContainer>
      </ScrollContainer>
    </Section>
  );
};

export default SavedTipsSection;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #0d6364;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 32px;
`;

const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding-right: 40px;
`;

const slideAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(-57%); }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 36px;
  animation: ${slideAnimation} 10s ease-out forwards;
  width: fit-content;

  &:hover {
    animation-play-state: paused;
  }

  & > div {
    width: 330px;
    height: 300px;
    flex-shrink: 0;
  }
`;
