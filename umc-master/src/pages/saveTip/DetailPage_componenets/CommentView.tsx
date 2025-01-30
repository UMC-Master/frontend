import Typography from "@components/common/typography";
import styled, { useTheme } from "styled-components";

const number = '1,000'

const CommentView: React.FC = () => {

  const theme = useTheme();
  return (
    <Comment>
      <CommentAdd>
        <Title>
          <Typography
            variant="headingXxxSmall"
            style={{color: theme.colors.text.black}}
          >댓글</Typography>
          <Typography 
            variant="titleXxxSmall"
            style={{color: theme.colors.text.gray}}
          >({number})</Typography>
        </Title>
        <StyledInput type={'text'} placeholder={'댓글을 작성해주세요. (최대 300자)'} />
      </CommentAdd>
      <CommentList>
        d
      </CommentList>
    </Comment>
  );
};

export default CommentView;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  align-self: stretch;
`

const CommentAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  align-self: stretch;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`

const StyledInput = styled.input`
  display: flex;
  height: 72px;
  padding: 23px 32px;
  align-items: center;
  align-self: stretch;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary[400]};
  background: ${({ theme }) => theme.colors.text.white};

  color: ${({ theme }) => theme.colors.text.gray};

  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.typography.body.small.size};
  font-weight: ${({ theme }) => theme.typography.body.small.weight};
  line-height: ${({ theme }) => theme.typography.body.small.lineHeight};
  letter-spacing: -0.48px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
`