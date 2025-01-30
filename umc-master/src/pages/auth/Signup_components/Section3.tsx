import Typography from "@components/common/typography";
import Input from "@components/Input/Input";
import { styled, useTheme } from "styled-components";


const Section3: React.FC = () => {

  const theme = useTheme();
  return (
    <Container>
      <Typography 
        variant="headingXxxSmall"
        style={{color: theme.colors.primary[700]}}
      >비밀번호 입력 (필수) *</Typography>
      <Input errorMessage="" type={'password'} placeholder={'비밀번호 입력 (숫자, 영문자, 문자 포함 8~15자 이내)'} />
      <Input errorMessage="" type={'password'} placeholder={'비밀번호 확인'} />
    </Container>
  );
};

export default Section3;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  align-self: stretch;
`