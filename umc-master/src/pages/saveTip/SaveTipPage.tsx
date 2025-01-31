import Card from "@components/Card/Card";
import Typography from "@components/common/typography";
import styled, { useTheme } from "styled-components";
import { dummyData } from "./dummydata/dummydata";


const SaveTipPage: React.FC = () => {
  
  const theme = useTheme();
  return (
    <Container>
      <SavedTips>
        <Typography 
          variant="headingXxSmall"
          style={{color: theme.colors.primary[900]}}
        >저장한 꿀팁</Typography>
        {dummyData.length === 0 ? (
          <Typography variant="bodySmall">최근 본 꿀팁이 없습니다.</Typography>
        ) : (
          <TipCardList>
            {dummyData.map((item) => (
              <Card 
                key={item.id} 
                image={item.image} 
                text={item.text} 
                likes={item.likes || 0} 
                bookmarks={item.bookmarks || 0} 
                date={item.date || ''}
              />
            ))}
          </TipCardList>
        )}
      </SavedTips>
    </Container>
  );
};

export default SaveTipPage;

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

const SavedTips = styled.div`
  display: flex;
  width: 1280px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const TipCardList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  flex-wrap: wrap;
`