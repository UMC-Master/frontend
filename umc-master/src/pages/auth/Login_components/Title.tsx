import styled from "styled-components";

const Title: React.FC = () => {

  return (
    <>
        <LoginTitle>
            <Login>로그인</Login>
            <Description>지금 마스터원에서 자취 꿀팁을 얻어가세요!</Description>
        </LoginTitle>
    </>
  );
};

export default Title;

const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const Login = styled.h1`
  align-self: stretch;
  color: var(--Main-700, #0D6364);
  text-align: center;

  /* Display/small */
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px; /* 150% */
  letter-spacing: 0.5px;
`

const Description = styled.h6`
  align-self: stretch;

  color: var(--Text-gray, #636363);
  text-align: center;

  /* Title/small */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.28px;
`