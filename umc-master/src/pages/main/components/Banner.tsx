import { useState } from 'react';
import styled from 'styled-components';
const TOTAL_PAGES = 5;

const Banner: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleNextPage = (): void => {
    setPageNumber((prev) => (prev < TOTAL_PAGES ? prev + 1 : 1));
  };

  const handlePrevPage = (): void => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : TOTAL_PAGES));
  };

  return (
    <Container>
      <ArrowLeft onClick={handlePrevPage}>&lt;</ArrowLeft>
      <Content>
        <WelcomeText>Welcome!</WelcomeText>
        <Subtitle>오늘도 마스터원에서 꿀팁들을 얻어가세요!</Subtitle>
      </Content>
      <ArrowRight onClick={handleNextPage}>&gt;</ArrowRight>
      <PageIndicator>
        {`${pageNumber} `}/{` 5`}
      </PageIndicator>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  background-color: rgba(27, 140, 120, 1);
  color: white;
  text-align: center;
`;

const ArrowButtonBase = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ArrowLeft = styled(ArrowButtonBase)`
  left: 220px;
`;

const ArrowRight = styled(ArrowButtonBase)`
  right: 220px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeText = styled.span`
  font-size: 36px;
  padding-bottom: 40px;
`;

const Subtitle = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

const PageIndicator = styled.div`
  position: absolute;
  bottom: 55px;
  right: 270px;
  background: white;
  color: rgba(99, 99, 99, 1);
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 15px;
  font-weight: bold;
`;
