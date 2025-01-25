import React, { useState } from 'react';
import ImageUploader from './components/ImageUpload';
import Typography from '@components/common/typography';
import styled from 'styled-components';
import Title from './components/Title';
import CategoryInputSection from '@pages/main/components/CategoriesInputSection';

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

const CreatePostPage: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [text, setText] = useState<string>('');
  const [context, setContext] = useState<string>('');

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else if (prev.length < 10) {
        return [...prev, tag];
      } else {
        alert('최대 10개까지만 선택할 수 있습니다.');
        return prev;
      }
    });
  };

  const isFormValid = text.trim() !== '' && context.trim() !== '' && selectedTags.length > 0;

  return (
    <>
      <MainTitle>
        <Typography variant="headingXSmall">NEW 꿀팁 작성</Typography>
      </MainTitle>
      <ImageUploader
        maxImages={5}
        images={images}
        onUpload={(newImages) => setImages((prev) => [...prev, ...newImages])}
        onDelete={(index) => setImages(images.filter((_, i) => i !== index))}
      />
      <Title type="input" title="제목" placeholder="50자 이내로 작성하기" value={text} onChange={setText} />
      <Title
        type="textarea"
        title="내용 작성하기"
        placeholder="최대 1800자 이내"
        value={context}
        onChange={setContext}
      />
      <Divider />

      <CategoriesContainer>
        <CategoryInputSection
          categories={dummyCategories}
          onTagClick={handleTagClick}
          selectedTags={selectedTags}
          isComplete={false}
          tagAndTitleGap={32}
        />
      </CategoriesContainer>

      <CreateBTN
        isActive={isFormValid}
        onClick={() => {
          if (isFormValid) {
            alert('게시물이 등록되었습니다!');
          } else {
            alert('모든 필드를 입력해주세요.');
          }
        }}
      >
        <Typography variant="titleSmall">등록하기</Typography>
      </CreateBTN>
    </>
  );
};

export default CreatePostPage;

const MainTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary[900]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.primary[900]};
  margin: 20px auto;
  width: 1280px;
`;

const CategoriesContainer = styled.div`
  margin: 40px auto;
  max-width: 1280px;
  width: 100%;
`;

const CreateBTN = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  max-width: 1280px;
  height: 80px;
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primary[500] : theme.colors.text['lightGray'])};
  color: ${({ theme }) => theme.colors.text['white']};
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
`;
