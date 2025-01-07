import styled from "styled-components";

const ButtonBox: React.FC = () => {

  return (
    <>
        <Buttons>
            <LoginButton>로그인하기</LoginButton>
            <KakaoButton>카카오로 시작하기</KakaoButton>
        </Buttons>
    </>
  );
};

export default ButtonBox;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`

const ButtonBase = styled.button`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  border: 0;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: 0.3px;
`

const LoginButton = styled(ButtonBase)`
  background: var(--Main-500, #1B8C78);
  color: #FFF;
  padding: 29px 274px;
`

const KakaoButton = styled(ButtonBase)`
  background: #FEE500;
  color: #000;
  padding: 29px 254px;
`