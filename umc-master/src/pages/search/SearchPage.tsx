import SearchSection from '@components/SearchBar/SearchSection';
import TipsSection from '@pages/main/components/TipsSection';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecommendTitle from './components/RecommendTitle';
import RecommendedTipsSection from './components/RecommendTipsSection';
import dummyImage from '@assets/dummyImage/dummy.jpeg';

const dummyData = [
  { image: dummyImage, text: '오늘의 추천입니다.' },
  { image: dummyImage, text: '여행을 떠나요.' },
  { image: dummyImage, text: '오늘의 추천입니다.' },
  { image: dummyImage, text: '오늘의 추천입니다.' },
  { image: dummyImage, text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(searchParams.get('query') || '');

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <SearchSection
        highlight={`'${searchValue || '검색어'}'`}
        backText="에 대한 검색 결과입니다."
        onSearch={handleSearch}
      />
      <TipsSection items={dummyData.slice(0, 5)} showArrows showLikes={false} />
      <RecommendTitle title={searchValue} />
      <RecommendedTipsSection items={dummyData.slice(0, 8)} />
    </>
  );
};

export default SearchPage;
