import styled from 'styled-components';
import { motion } from 'framer-motion';
import TrophyImage from '@assets/trophy.png';
import useScrollAnimation from '@hooks/useScrollAnimation';

const InfluencerSection: React.FC = () => {
  const animation = useScrollAnimation({ direction: 'up', duration: 1 });
  return (
    <Section as={motion.section} {...animation}>
      <Content>
        <Icon src={TrophyImage} alt="트로피 아이콘" />
        <Text>인플루언서들의 노하우도 MASTER-1에서 모두 확인할 수 있어요!</Text>
      </Content>
    </Section>
  );
};

export default InfluencerSection;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #137870;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const Icon = styled.img`
  width: 356px;
`;

const Text = styled.p`
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
`;
