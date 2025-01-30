import Typography from "@components/common/typography";
import styled, { useTheme } from "styled-components";
import SignupState from "./Signup_components/SignupState";
import { useEffect, useState } from "react";
import AgreementForm from "./Signup_components/AgreementForm";
import EmailForm from "./Signup_components/EmailForm";
import PasswordForm from "./Signup_components/PasswordForm";
import PrivacyForm from "./Signup_components/PrivacyForm";
import InterestForm from "./Signup_components/InterestForm";
import Button from "@components/Button/Button";
import { useNavigate } from "react-router-dom";


const SignUpPage: React.FC = () => {

  const theme = useTheme();
  const navigate = useNavigate();
  const [sectionCount, setSectionCount] = useState(0);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  useEffect(() => {
      setIsNextButtonEnabled(false); // 섹션이 변경될 때마다 버튼 비활성화
  }, [sectionCount]);
  
  const handleCheckRequired = (areRequiredChecked: boolean) => {
    setIsNextButtonEnabled(areRequiredChecked);
  }

  const renderSection = () => {
    switch (sectionCount) {
      case 0:
        return <AgreementForm onCheckRequired={handleCheckRequired}/>;
      case 1:
        return <EmailForm onCheckRequired={handleCheckRequired}/>;
      case 2:
        return <PasswordForm onCheckRequired={handleCheckRequired}/>;
      case 3:
        return <PrivacyForm onCheckRequired={handleCheckRequired}/>;
      case 4:
        return <InterestForm />;
      default:
        return <AgreementForm onCheckRequired={handleCheckRequired}/>;
    }
  };

  const handleSignUpComplete = () => {
    navigate("/main");
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
            <Button variant = "signUp" onClick={handleSignUpComplete}>회원가입 완료</Button>
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