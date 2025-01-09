import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';

const dummyInterests = ['청소', '요리', '재활용'];
const dummyCategories = [
  '봄',
  '여름',
  '가을',
  '겨울',
  '패션',
  '니트',
  '잠옷',
  '청소',
  '방',
  '정리',
  '인테리어',
  '요리',
  '냉장고',
  '음식',
  '재활용',
  '분리수거',
  '주택',
  '빌라',
  '아파트',
  '원룸',
  '기타 (직접 입력)',
];

const InterestsAndCategories: React.FC = () => {
  return (
    <Container>
      <TopRightIcon>
        <i className="fas fa-chevron-down"></i>
      </TopRightIcon>
      <Section>
        <InterestTitle>애니 님의 관심사</InterestTitle>
        <TagsWrapper>
          {dummyInterests.map((interest, index) => (
            <Tag key={index} selected>
              #{interest}
            </Tag>
          ))}
        </TagsWrapper>
      </Section>

      <Divider />

      <Section>
        <Div>
          <SectionTitle>카테고리</SectionTitle>
          <CompleteButton>완료하기</CompleteButton>
        </Div>
        <TagsWrapper>
          {dummyCategories.map((category, index) => (
            <Tag key={index}>#{category}</Tag>
          ))}
        </TagsWrapper>
      </Section>
    </Container>
  );
};

export default InterestsAndCategories;

const Container = styled.div`
  position: relative;
  min-height: 565px;
  max-width: 1404px;
  padding: 29px 63px;
  border: 2px solid rgba(13, 99, 100, 1);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 100px;
`;

const TopRightIcon = styled.div`
  position: absolute;
  top: 44px;
  right: 70px;
  font-size: 24px;
  color: grey;
  cursor: pointer;
  i {
    font-size: 36px;
  }
`;
const Section = styled.div`
  margin-bottom: 24px;
`;
const InterestTitle = styled.h2`
  font-size: 30px;
  color: #2d9c89;
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  color: #2d9c89;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
`;
const Tag = styled.span<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 34px;
  border-radius: 30px;
  font-size: 24px;
  min-width: 103px;
  height: 60px;
  color: #ffffff;
  background-color: ${(props) => (props.selected ? '#1B8C78' : '#9C9C9C')};
  cursor: pointer;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #0d6364;
  margin: 20px 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const CompleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  min-width: 100px;
  height: 40px;
  font-size: 16px;
  background-color: #1b8c78;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
