import Typography from "@components/common/typography";
import styled, { useTheme } from "styled-components";
import SignupState from "./Signup_components/SignupState";
import { useEffect, useState } from "react";
import Section1 from "./Signup_components/Section1";
import Section2 from "./Signup_components/Section2";
import Section3 from "./Signup_components/Section3";
import Section4 from "./Signup_components/Section4";
import Section5 from "./Signup_components/Section5";
import Button from "@components/Button/Button";


const SignUpPage: React.FC = () => {

  const theme = useTheme();
  const [sectionCount, setSectionCount] = useState(0);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  useEffect(() => {
    if (sectionCount === 0) {
      setIsNextButtonEnabled(false); // 첫 번째 섹션으로 돌아가면 버튼 비활성화
    }
  }, [sectionCount]);
  
  const handleCheckRequired = (areRequiredChecked: boolean) => {
    setIsNextButtonEnabled(areRequiredChecked);
  }

  const renderSection = () => {
    switch (sectionCount) {
      case 0:
        return <Section1 onCheckRequired={handleCheckRequired}/>;
      case 1:
        return <Section2 />;
      case 2:
        return <Section3 />;
      case 3:
        return <Section4 />;
      case 4:
        return <Section5 />;
      default:
        return <Section1 onCheckRequired={handleCheckRequired}/>;
    }
  };

  return (
    <Container>
      <SignupForm>
        <Typography 
          variant="headingXxSmall"
          style={{color: theme.colors.primary[900]}}
        >회원가입</Typography>
        <SignupState sectionCount={sectionCount}/>
        {renderSection()}
        <ButtonContainer>
          {sectionCount > 0 && (
            <Button variant = "pageDown" onClick={() => setSectionCount(sectionCount - 1)}>이전</Button>
          )}
          {sectionCount < 4 && (
            <Button variant = "pageUp" onClick={() => setSectionCount(sectionCount + 1)} disabled={!isNextButtonEnabled}>다음</Button>
          )}
          {sectionCount === 4 && (
            <Button variant = "signUp">회원가입 완료</Button>
          )}
        </ButtonContainer>
      </SignupForm>
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
  background: #FFF;
`

const SignupForm = styled.div`
  display: flex;
  width: 978px;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;