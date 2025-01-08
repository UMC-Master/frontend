import styled from "styled-components";
import Title from "./Login_components/Title";
import ButtonBox from "./Login_components/ButtonBox";
import InputForm from "./Login_components/InputForm";

const LoginPage: React.FC = () => {

  return (
    <>
      <Container>
        <LoginForm>
          <Title/>
          <InputForm/>
          <ButtonBox/>
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
  width: 550px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`