import SearchSection from '@components/SearchBar/SearchSection';
import TipsSection from '@pages/main/components/TipsSection';
import { useSearchParams } from 'react-router-dom';
import RecommendTitle from './components/RecommendTitle';
import RecommendedTipsSection from './components/RecommendTipsSection';
import dummyImage from '@assets/dummyImage/dummy.jpeg';
import { useSearchList } from '@apis/queries/useSearchList';
import { Tip } from '@apis/searchApi';

const dummyData = [
  {
    image: dummyImage,
    text: '따뜻한 감성이 담긴 방꾸미기',
    likes: 1200,
    bookmarks: 800,
    date: '2025.01.20',
  },
  {
    image: dummyImage,
    text: '여행을 떠나는 방법',
    likes: 450,
    bookmarks: 300,
    date: '2025.01.15',
  },
  {
    image: dummyImage,
    text: '화사한 인테리어의 비밀',
    likes: 980,
    bookmarks: 670,
    date: '2025.01.18',
  },
  {
    image: dummyImage,
    text: '북유럽 감성으로 꾸민 침실',
    likes: 1300,
    bookmarks: 950,
    date: '2025.01.12',
  },
  {
    image: dummyImage,
    text: '오늘의 추천 인테리어 팁',
    likes: 890,
    bookmarks: 430,
    date: '2025.01.10',
  },
  {
    image: dummyImage,
    text: '화사한 인테리어의 비밀',
    likes: 980,
    bookmarks: 670,
    date: '2025.01.18',
  },
  {
    image: dummyImage,
    text: '북유럽 감성으로 꾸민 침실',
    likes: 1300,
    bookmarks: 950,
    date: '2025.01.12',
  },
  {
    image: dummyImage,
    text: '오늘의 추천 인테리어 팁',
    likes: 890,
    bookmarks: 430,
    date: '2025.01.10',
  },
];

interface TipItem {
  image: string;
  title: string;
  likes?: number;
  saves?: number;
  created_at?: string;
  tips_id: string;
}

const transformTipToTipItem = (tip: Tip): TipItem => ({
  image: dummyImage,
  title: tip.title,
  likes: tip.likesCount,
  saves: tip.commentsCount,
  created_at: tip.createdAt,
  tips_id: tip.tipId.toString(),
});

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const page = Number(searchParams.get('page')) || 1;

  // 검색 API 호출
  const { data: searchResults, isFetching } = useSearchList({ query, page, limit: 10 });
  const tipsFromApi = searchResults ? searchResults.result : [];

  // API 데이터 변환
  const transformedItems = tipsFromApi.map(transformTipToTipItem);

  const handleSearch = (value: string) => {
    setSearchParams({ query: value, page: '1' });
  };
  return (
    <>
      <SearchSection
        highlight={`'${query || '검색어'}'`}
        backText="에 대한 검색 결과입니다."
        onSearch={handleSearch}
        marginTop="80px"
      />
      <TipsSection showLikes={false} items={transformedItems} isLoading={isFetching} />
      <RecommendTitle title={query} />
      <RecommendedTipsSection items={dummyData.slice(0, 8)} />
    </>
  );
};

export default SearchPage;
