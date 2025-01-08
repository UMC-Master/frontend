import styled from "styled-components";

const ButtonBox: React.FC = () => {

  return (
      <Buttons>
          <LoginButton>로그인하기</LoginButton>
          <KakaoButton>
            <KakaoImage src={"./src/pages/auth/Login_components/kakao_login_large_wide.png"} alt="Kakao Login" />
          </KakaoButton>
      </Buttons>
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
  border-radius: 12px;
  border: 0;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0.3px;
`

const LoginButton = styled(ButtonBase)`
  background: var(--Main-500, #1B8C78);
  color: #FFF;
  padding: 29px 204px;
`

const KakaoButton = styled(ButtonBase)`
  background: #fee500;
`

const KakaoImage = styled.img`
  width: 100%; /* 버튼 내부에 이미지 크기를 조정 */
  height: auto;
  object-fit: contain;
`;