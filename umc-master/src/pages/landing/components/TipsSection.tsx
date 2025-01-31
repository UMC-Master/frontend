import styled from 'styled-components';
import { motion } from 'framer-motion';
import GiftImage from '@assets/gift.png';
import useScrollAnimation from '@hooks/useScrollAnimation';

const TipsSection: React.FC = () => {
  const animation = useScrollAnimation({ direction: 'up', duration: 1 });
  return (
    <Section as={motion.section} {...animation}>
      <Content>
        <Text>홈마스터에서 다양한 자취 지원 정책들과 꿀팁을 확인할 수 있어요 </Text>
        <Icon src={GiftImage} alt="선물 아이콘" />
      </Content>
    </Section>
  );
};

export default TipsSection;

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
  width: 350px;
`;

const Text = styled.p`
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
`;
