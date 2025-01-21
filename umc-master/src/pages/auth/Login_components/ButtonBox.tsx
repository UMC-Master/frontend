import styled from "styled-components";
import Button from "@components/Button/Button";
import Kakao_Image from "@assets/kakao_login/kakao_login_large_wide.png"

const ButtonBox: React.FC = () => {

  return (
      <Buttons>
          <Button variant="primary">로그인하기</Button>
          <Button variant="kakao">
            <KakaoImage src={Kakao_Image} alt="Kakao Login" />
          </Button>
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

const KakaoImage = styled.img`
  width: 100%; /* 버튼 내부에 이미지 크기를 조정 */
  height: 72px;
  object-fit: contain;
`;