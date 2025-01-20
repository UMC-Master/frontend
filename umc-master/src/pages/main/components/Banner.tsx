import Typography from '@components/common/typography';
import { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'; // 아이콘 추가

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
      <ArrowLeft onClick={handlePrevPage}>
        <MdKeyboardArrowLeft />
      </ArrowLeft>
      <Content>
        <StyledTypography variant="titleMedium">Welcome!</StyledTypography>
        <Typography variant="titleLarge">오늘도 마스터원에서 꿀팁들을 얻어가세요!</Typography>
      </Content>
      <ArrowRight onClick={handleNextPage}>
        <MdKeyboardArrowRight />
      </ArrowRight>
      <PageIndicator>
        <Typography variant="titleXxSmall">
          {`${pageNumber} `}/{` 5`}
        </Typography>
      </PageIndicator>
    </Container>
  );
};

export default Banner;

const StyledTypography = styled(Typography)`
  padding-bottom: 20px;
`;

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
  font-size: 80px;
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

const PageIndicator = styled.div`
  position: absolute;
  bottom: 55px;
  right: 270px;
  width: 100px;
  height: 36px;
  background: white;
  color: rgba(99, 99, 99, 1);
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 15px;
  font-weight: bold;
`;
