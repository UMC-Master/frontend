import styled from "styled-components";

const LoginPage: React.FC = () => {

  return (
    <>
      <Container>
        <LoginForm>
          <LoginTitle>
            <Title>로그인</Title>
            <Description>지금 마스터원에서 자취 꿀팁을 얻어가세요!</Description>
          </LoginTitle>
          <LoginInputForm>
            <LoginInput>
              <Input type={'email'} placeholder={'이메일 입력하기'} />
              <Input type={'password'} placeholder={'비밀번호 입력하기'} />
            </LoginInput>
            <LoginDetail>
              <AutoLoginWrapper>
                <AutoLoginCheckbox type={'checkbox'} />
                <AutoLoginLabel>자동로그인</AutoLoginLabel>
              </AutoLoginWrapper>
              <Options>
                <TextButton>회원 정보 찾기</TextButton>
                <Separator />
                <TextButton>회원 가입</TextButton>
              </Options>
            </LoginDetail>
          </LoginInputForm>
        </LoginForm>
      </Container>
    </>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 90px;
  background: #FFF;
`

const LoginForm = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const Title = styled.h1`
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

const LoginInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  align-self: stretch;
`

const Input = styled.input`
  display: flex;
  height: 90px;
  padding: 35px 32px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  border: 2px solid var(--Color-gray, #9C9C9C);
  background: #FFF;

  color: var(--Text-gray, #636363);

  /* Body/large */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  letter-spacing: -0.48px;
`

const LoginDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const AutoLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const AutoLoginCheckbox = styled.input`
  width: 23px;
  height: 23px;
  accent-color: #CCCCCC;
`

const AutoLoginLabel = styled.div`
  color: var(--Text-gray, #636363);

  /* Body/small */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.36px;
`

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const TextButton = styled.div`
  color: var(--Text-gray, #636363);

  /* Body/small */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.36px;
  cursor: pointer;
`;

const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: var(--Color-gray, #9C9C9C);
`