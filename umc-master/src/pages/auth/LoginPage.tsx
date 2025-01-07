import styled from "styled-components";
import Title from "./Login_components/Title";

const LoginPage: React.FC = () => {

  return (
    <>
      <Container>
        <LoginForm>
          <Title/>
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
          <Buttons>
              <LoginButton>로그인하기</LoginButton>
              <KakaoButton>카카오로 시작하기</KakaoButton>
            </Buttons>
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
`

const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: var(--Color-gray, #9C9C9C);
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`

const LoginButton = styled.button`
  display: flex;
  height: 100px;
  padding: 29px 274px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: var(--Main-500, #1B8C78);
  border: 0;
  cursor: pointer;

  color: #FFF;

  /* Heading/xsmall */
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: 0.3px;
`

const KakaoButton = styled.button`
  display: flex;
  height: 100px;
  padding: 29px 254px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: #FEE500;
  border: 0;
  cursor: pointer;

  color: #000;

  /* Heading/xsmall */
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: 0.3px;
`