import styled from "styled-components";

const CommentView: React.FC = () => {

  return (
    <Comment>

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