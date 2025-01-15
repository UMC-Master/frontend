import styled from "styled-components";
import Input from "../../../components/Input/Input";

const InputForm: React.FC = () => {

  return (
      <LoginInputForm>
          <LoginInput>
              <Input type={'email'} placeholder={'이메일 입력하기'} />
              <Input type={'password'} placeholder={'비밀번호 입력하기'} />
          </LoginInput>
          <LoginDetail>
              <AutoLoginWrapper>
                  <Checkbox type="checkbox" id="autoLogin" />
                  <Label>자동로그인</Label>
              </AutoLoginWrapper>
              <Options>
                  <TextButton>회원 정보 찾기</TextButton>
                  <Separator />
                  <TextButton>회원 가입</TextButton>
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

const TextBase = styled.div`
  color: var(--Text-gray, #636363);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.36px;
`

const Label = styled(TextBase)``

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const TextButton = styled(TextBase)`
  cursor: pointer;
`

const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: var(--Color-gray, #9C9C9C);
`
