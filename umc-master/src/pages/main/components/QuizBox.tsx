import Typography from '@components/common/typography';
import styled from 'styled-components';

const QuizBox: React.FC = () => {
  return (
    <Container>
      <CloseBTN>&times;</CloseBTN>
      <StyledTypography color="white" variant="headingXxSmall">
        오늘의 QUIZ를 맞혀보세요!
      </StyledTypography>
      <Card>
        <Image src="#"></Image>
      </Card>
    </Container>
  );
};

export default QuizBox;

const StyledTypography = styled(Typography)`
  padding-bottom: 30px;
  color: ${({ theme }) => theme.colors.text['white']};
`;

const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 400px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary[700]};
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
  padding-top: 45px;
  padding-bottom: 44px;
`;

const CloseBTN = styled.button`
  position: absolute;
  top: 15px;
  right: 72px;
  color: ${({ theme }) => theme.colors.text['white']};
  font-size: 60px;

  background: none;
  border: none;
  cursor: pointer;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.text['white']};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 220px;
  margin: 0 auto;
`;

const Image = styled.img`
  object-fit: contain;
`;
