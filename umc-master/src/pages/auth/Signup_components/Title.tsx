import Typography from "@components/common/typography";
import { useTheme } from "styled-components";

const Title: React.FC = () => {

  const theme = useTheme();
  return (
    <>
      <Typography 
        variant="headingSmall"
        style={{color: theme.colors.primary[900]}}
      >회원가입</Typography>
    </>
  );
};

export default Title;