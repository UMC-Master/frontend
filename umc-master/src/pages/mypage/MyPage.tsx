/* eslint-disable react/prop-types */
import styled from "styled-components";
import TipCard from "./MyPage_components/TipCard";

const dummyData = [
  {
    id: "1",
    image: "https://via.placeholder.com/150", // 더미 이미지 URL
    text: "자취생을 위한 꿀팁 1",
  },
  {
    id: "2",
    image: "https://via.placeholder.com/150", // 더미 이미지 URL
    text: "청소 쉽게 하는 방법",
  },
  {
    id: "3",
    image: "https://via.placeholder.com/150", // 더미 이미지 URL
    text: "절약 꿀팁 3가지",
  },
];


interface TipcardProps {
  items : { image: string; text: string; id: string }[];
}

const MyPage: React.FC<TipcardProps> = ({ items = dummyData }) => {
    return (
      <>
        <Container>
          <MyPageForm>
            <Title>마이페이지</Title>
            <ProfileCard>
              <State>
                <ProfileImg/>
                <LoginState>카카오 로그인</LoginState>
              </State>
              <Card>
                <Text>
                  <Hello>
                    <Nickname>Nickname</Nickname>
                    <Detail>님 오늘도 반가워요!</Detail>
                  </Hello>
                  <Detail>자취 마스터가 되는 그날까지 마스터원과 함께 해요!</Detail>
                </Text>
                <ProfileEdit>프로필 변경</ProfileEdit>
              </Card>
            </ProfileCard>
            <ProfileCard2>
              <RecentGoodTip>
                <TipTitle>최근에 본 꿀팁</TipTitle>
                <TipCardList>
                  {items.map((item) => (
                    <TipCard key={item.id} image={item.image} text={item.text} />
                  ))}
                </TipCardList>
              </RecentGoodTip>
            </ProfileCard2>
          </MyPageForm>
        </Container>
      </>
    );
  };
  
export default MyPage;
  
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  background: #FFF;
`

const MyPageForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 241px 101px;
`

const Title = styled.h6`
  color: var(--Main-700, #0D6364);
  text-align: center;
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 75px;
  letter-spacing: 0.5px;
`

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;
  padding-top: 47px;
`

const State = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 224px;
`

const ProfileImg = styled.div`
  width: 180px;
  height: 180px;
  background-color: rgb(230, 230, 230);
  border-radius: 50%;
`

const LoginState = styled.div`
  display: flex;
  width: 180px;
  height: 50px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #3B1E1E;

  color: #FFF;
  text-align: center;

  /* Body/medium */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.4px;
`

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1165px;
  height: 224px;
  padding: 28px 52px;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--Text-gray, #636363);
  background-color: #fff;
  position: relative;
`

const Text = styled.div`
  display: flex;
  width: 565px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

const Hello = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Nickname = styled.div`
  color: var(--Text-black, #121212);
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0.36px;
`

const Detail = styled.div`
  color: var(--Text-black, #121212);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.28px;
`

const ProfileEdit = styled.button`
  position: absolute;
  bottom: 32px;
  right: 37px;

  display: flex;
  width: 196px;
  height: 60px;
  padding: 17px 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Main-500, #1B8C78);
  color: #FFF;

  /* Body/large */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.48px;

  &:hover {
    background: var(--Main-600, #157a66);
  }
`

const ProfileCard2 = styled.div`
  width: 1415px;
  height: 372px;
  flex-shrink: 0;
  padding: 57px 9px 0px 13px; /* top right bottom left */
`

const RecentGoodTip = styled.div`
  display: flex;
  width: 623px;
  height: 295px;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  flex-shrink: 0;
  padding: 45px 162px 32px 0px; /* top right bottom left */
`

const TipTitle = styled.div`
  width: 623px;
  align-self: stretch;
  color: var(--Main-600, #137870);

  /* Heading/xsmall */
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px; /* 150% */
  letter-spacing: 0.3px;
`

const TipCardList = styled.div`
  width: 623px;
  height: 200px;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  gap: 36px;
`

