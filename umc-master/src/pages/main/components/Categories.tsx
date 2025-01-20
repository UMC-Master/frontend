import styled, { useTheme } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';
import Typography from '@components/common/typography';
import Tag from '@components/Tag/Tag';
import { useState } from 'react';

const dummyInterests = [
  { text: '청소', selected: true },
  { text: '요리', selected: true },
  { text: '재활용', selected: true },
];

const dummyCategories = [
  { section: '계절', tags: ['봄', '여름', '가을', '겨울'] },
  { section: '패션', tags: ['패션', '맨투맨', '니트', '바지', '치마', '블라우스', '자켓'] },
  { section: '청소', tags: ['청소', '방', '정리', '인테리어', '가구', '청소도구'] },
  {
    section: '요리 / 식재료',
    tags: ['요리', '음식', '보관', '냉장', '냉동', '면', '밥', '술', '반찬', '레시피', '냉장고'],
  },
  { section: '재활용 / 분리수거', tags: ['재활용', '분리수거', '리폼', '플라스틱', '스티로폼', '종이', '유리'] },
  { section: '주거', tags: ['주택', '원룸', '빌라', '아파트', '기숙사'] },
];

const InterestsAndCategories: React.FC = () => {
  const [isCategoryVisible, setIsCategoryVisible] = useState(true);
  const theme = useTheme();

  const toggleCategoryVisibility = () => {
    setIsCategoryVisible((prev) => !prev);
  };

  return (
    <Container>
      <TopRightIcon onClick={toggleCategoryVisibility}>
        <i className={`fas fa-chevron-${isCategoryVisible ? 'up' : 'down'}`}></i>
      </TopRightIcon>
      <Section>
        <StyledTypography variant="titleMedium">
          <Typography style={{ marginRight: '4px' }} variant="headingXxxSmall">
            애니
          </Typography>
          <Typography variant="titleXSmall"> 님의 관심사</Typography>
        </StyledTypography>
        <TagsWrapper>
          {dummyInterests.map((interest, index) => (
            <Tag key={index} text={interest.text} selected={interest.selected} />
          ))}
        </TagsWrapper>
      </Section>

      {isCategoryVisible && <Divider />}

      {isCategoryVisible && (
        <Section>
          <Div>
            <Typography style={{ color: theme.colors.primary[900] }} variant="titleXSmall">
              관심사 입력 (최대 10개 이내)
            </Typography>
            <CompleteButton>
              <Typography variant="titleXxSmall">완료</Typography>
            </CompleteButton>
          </Div>
          {dummyCategories.map((category, index) => (
            <CategorySection key={index}>
              <Typography variant="titleXxSmall" style={{ marginBottom: '10px', color: theme.colors.primary[700] }}>
                {category.section}
              </Typography>
              <TagsWrapper>
                {category.tags.map((tag, i) => (
                  <Tag key={`${index}-${i}`} text={tag} selected={false} />
                ))}
              </TagsWrapper>
            </CategorySection>
          ))}
        </Section>
      )}
    </Container>
  );
};

export default InterestsAndCategories;

const Container = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  padding: 29px 80px;
  border: 2px solid rgba(13, 99, 100, 1);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
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
const Section = styled.div``;

const StyledTypography = styled(Typography)`
  margin-bottom: 32px;
  display: flex;
  color: ${({ theme }) => theme.colors.primary[900]};
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
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
  margin-bottom: 20px;
`;

const CompleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 32px;
  min-width: 100px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.text['white']};
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;
const CategorySection = styled.div`
  margin-bottom: 24px;
`;
