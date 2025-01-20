import styled from "styled-components";
import Input from "@components/Input/Input";

const InputForm: React.FC = () => {

  
  return (
    <>
        <SignupInputForm>
          <Input/>
          <Input/>
        </SignupInputForm>
        <SignupInputForm>
          <Input/>
          <Input/>
        </SignupInputForm>
        <SignupInputForm>
          <Input/>
        </SignupInputForm>
    </>
  );
};

export default InputForm;

const SignupInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`
