import styled from "styled-components";
import PostDetail from "./DetailPage_componenets/PostDetail";
import CommentView from "./DetailPage_componenets/CommentView";

const SaveTipDetailPage: React.FC = () => {

  return (
    <Container>
      <SaveTipDatail>
        <PostDetail/>
        <Line/>
        <CommentView/>
      </SaveTipDatail>
    </Container>
  );
};

export default SaveTipDetailPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
  background: #FFF;
`

const SaveTipDatail = styled.div`
  display: flex;
  width: 1280px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
`

const Line = styled.div`
  width: 1280px;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.colors.primary[800]};
`