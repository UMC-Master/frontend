import styled from "styled-components";
import ProfileSection from "./components/ProfileSection";
import RecentTips from "./components/RecentTips";
import BestInterest from "./components/BestInterest";
import { dummyData, dummyInterests } from "./dummyData/dummyData";

const MyPage: React.FC = () => {
    return (
      <>
        <Container>
          <MyPageForm>
            <Title>마이페이지</Title>
            <ProfileSection/>
            <ProfileCard2>
              <RecentTips items={dummyData}/>
              <BestInterest interests={dummyInterests}/>
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
  background: #FFF;
`

const MyPageForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 241px 101px 242px;
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

const ProfileCard2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 1415px;
  height: 372px;
  gap: 162px;
  flex-shrink: 0;
  padding: 57px 9px 0px 13px; /* top right bottom left */
`