import styled from "styled-components";
import Title from "./Signup_components/Title";
import Profile from "./Signup_components/Profile";
import InputForm from "./Signup_components/InputForm";
import Interest from "./Signup_components/Interest";
import ButtonBox from "./Signup_components/ButtonBox";

const SignUpPage: React.FC = () => {

  return (
      <Container>
        <SignupForm>
          <Title/>
          <Profile/>
          <InputForm/>
          <Interest/>
          <ButtonBox/>
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
  padding-top: 100px;
  background: #FFF;
`

const SignupForm = styled.div`
  display: flex;
  width: 944px;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`