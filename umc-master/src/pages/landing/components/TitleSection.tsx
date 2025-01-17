import useScrollAnimation from '@hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TitleSection: React.FC = () => {
  const animation = useScrollAnimation({ direction: 'up', duration: 1 });
  return (
    <Section as={motion.section} {...animation}>
      <Content>
        <TextContainer>
          <SubTitle>1인 가구를 위한 가이드북</SubTitle>
          <Title>나만의 자취 꿀팁 완성하기</Title>
          <StartButton>지금 시작하기</StartButton>
        </TextContainer>
        <ImageContainer>
          <Character src={''} alt="Character" />
        </ImageContainer>
      </Content>
    </Section>
  );
};

export default TitleSection;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #1b8c78;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #e0f2f1;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
`;

const StartButton = styled.button`
  width: 150px;
  padding: 10px 4px;
  background-color: #ffffff;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Character = styled.img`
  width: 80%;
  height: auto;
`;
