import Typography from "@components/common/typography";
import styled, { useTheme } from "styled-components";
import Input from "@components/Input/Input";

const InputForm: React.FC = () => {

  const theme = useTheme();
  return (
      <LoginInputForm>
          <LoginInput>
              <Input errorMessage="" type={'email'} placeholder={'이메일 입력하기'} />
              <Input errorMessage="" type={'password'} placeholder={'비밀번호 입력하기'} />
          </LoginInput>
          <LoginDetail>
              <AutoLoginWrapper>
                  <Checkbox type="checkbox" id="autoLogin" />
                  <Typography variant="bodySmall" style={{color: theme.colors.text.gray, cursor: "pointer"}}>자동로그인</Typography>
              </AutoLoginWrapper>
              <Options>
                  <Typography variant="bodySmall" style={{color: theme.colors.text.gray, cursor: "pointer"}}>회원 정보 찾기</Typography>
                  <Separator />
                  <Typography variant="bodySmall" style={{color: theme.colors.text.gray, cursor: "pointer"}}>회원 가입</Typography>
              </Options>
          </LoginDetail>
      </LoginInputForm>
  );
};

export default InputForm;

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

const Checkbox = styled.input`
  width: 23px;
  height: 23px;
  accent-color: #CCCCCC;
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
