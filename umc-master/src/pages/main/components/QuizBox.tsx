import styled from 'styled-components';

const QuizBox: React.FC = () => {
  return (
    <Container>
      <CloseBTN>&times;</CloseBTN>
      <Title>오늘의 QUIZ를 맞혀보세요!</Title>
      <Card>
        <Image src="#"></Image>
      </Card>
    </Container>
  );
};

export default QuizBox;

const Container = styled.div`
  position: relative;
  width: 1404px;
  height: 400px;
  border-radius: 20px;
  background-color: rgba(13, 99, 100, 1);
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
  padding-top: 30px;
  padding-bottom: 44px;
`;

const CloseBTN = styled.button`
  position: absolute;
  top: 3px;
  right: 29px;
  color: white;
  font-size: 60px;
  width: 60px;
  height: 60px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 48px;
  color: white;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background-color: white;
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
