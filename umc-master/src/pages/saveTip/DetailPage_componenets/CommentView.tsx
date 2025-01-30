/* eslint-disable react/prop-types */
import Typography from "@components/common/typography";
import { useState } from "react";
import styled, { useTheme } from "styled-components";

const commentCount = 1000; // 실제 데이터에서 가져올 값
const formattedNumber = new Intl.NumberFormat().format(commentCount);


const MAX_LENGTH = 100;

const CommentText: React.FC<{ text: string }> = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldShowMore = text.length > MAX_LENGTH;
    const theme = useTheme();
    
    return (
      <div>
        <Typography variant="bodySmall" style={{ color: theme.colors.text.black }}>
          {isExpanded ? text : `${text.slice(0, MAX_LENGTH)}...`}
        </Typography>
        {shouldShowMore && (
          <button onClick={() => setIsExpanded(!isExpanded)} style={{ marginLeft: "4px", color: "gray", cursor: "pointer", background: "none", border: "none" }}>
            {isExpanded ? "접기" : "더보기"}
          </button>
        )}
      </div>
    );
  };

const CommentView: React.FC = () => {

  const theme = useTheme();
  const [comments, setComments] = useState<string[]>([
    "첫 번째 댓글입니다!",
    "여기에 새로운 댓글이 추가될 거예요!"
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddComment = () => {
    if (inputValue.trim().length === 0) return;
    setComments([...comments, inputValue]); // 기존 댓글 배열에 새 댓글 추가
    setInputValue(""); // 입력창 초기화
  };

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
          >({formattedNumber})</Typography>
        </Title>
        <StyledInput 
          type={'text'} 
          placeholder={'댓글을 작성해주세요. (최대 300자)'} 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
        />
      </CommentAdd>
      <CommentList>
        {comments.map((cmt, index) => (
          <CommentCard key={index}>
          <Author>
              <ProfileImg/>
              <AuthorInfo>
              <Typography 
                  variant="titleXxSmall"
                  style={{color: theme.colors.text.black}}
              >nickname</Typography>
              <CommentDate>
                  <Typography
                  variant="bodyXSmall"
                  style={{color: theme.colors.text.gray}}
                  >2024.12.30</Typography>
                  <Typography
                  variant="bodyXSmall"
                  style={{color: theme.colors.text.gray}}
                  >03:16</Typography>
              </CommentDate>
              </AuthorInfo>
          </Author>
          <CommentText text={cmt} />
          </CommentCard>
        ))}
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

const CommentCard = styled.div`
  display: flex;
  height: 180px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #D9D9D9;
`

const AuthorInfo = styled.div`
  display: flex;
  width: 125px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

const CommentDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`