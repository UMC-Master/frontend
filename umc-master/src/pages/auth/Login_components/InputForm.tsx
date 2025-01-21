/* eslint-disable @typescript-eslint/no-unused-vars */
import Typography from "@components/common/typography";
import styled from "styled-components";
import Input from "@components/Input/Input";
import useInput from "@hooks/useInput";
import { validateEmail, validatePassword } from "@utils/validation";

const InputForm: React.FC = () => {

  // 이메일 상태 검증 및 에러메세지
  const {
    input: email, 
    errorMessage: emailErrorMessage,
    changeHandler: emailChangeHandler,
    handleInputError: handleEmailError, 
  } = useInput({
    initialValue: "",
    validate: async (value) => validateEmail(value),
  });

  // 비밀번호 상태 검증 및 에러메세지
  const {
    input: password, 
    errorMessage: passwordErrorMessage,
    changeHandler: passwordChangeHandler,
    handleInputError: handlePasswordError, 
  } = useInput({
    initialValue: "",
    validate: async (value) => validatePassword(email, value), 
  });

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // 이메일 및 비밀번호 유효성 검사
    const emailError = await validateEmail(email);
    const passwordError = await validatePassword(email, password);

    if (emailError) return handleEmailError(emailError);
    if (passwordError) return handlePasswordError(passwordError);

    alert("로그인 성공!");
  };

  return (
      <LoginInputForm onSubmit={formSubmitHandler}>
          <LoginInput>
              <Input errorMessage={emailErrorMessage} type={'email'} placeholder={'이메일 입력하기'} onChange={emailChangeHandler}/>
              <Input errorMessage={passwordErrorMessage} type={'password'} placeholder={'비밀번호 입력하기'} onChange={passwordChangeHandler}/>
          </LoginInput>
          <LoginDetail>
              <AutoLoginWrapper>
                  <StyledCheckbox  type="checkbox" id="autoLogin" />
                  <StyledTypography variant="bodySmall">자동로그인</StyledTypography>
              </AutoLoginWrapper>
              <Options>
                  <StyledTypography variant="bodySmall">회원 정보 찾기</StyledTypography>
                  <Separator />
                  <StyledTypography variant="bodySmall">회원 가입</StyledTypography>
              </Options>
          </LoginDetail>
      </LoginInputForm>
  );
};

export default InputForm;

const LoginInputForm = styled.form`
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

const StyledCheckbox = styled.input`
  width: 23px;
  height: 23px;
  accent-color: #CCCCCC;
`

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.gray};
  cursor: pointer;
`

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: var(--Color-gray, #9C9C9C);
`
