import SearchSection from '@components/SearchBar/SearchSection';
import { useSearchParams } from 'react-router-dom';
import RecommendTitle from './components/RecommendTitle';
import { useSearchList } from '@apis/queries/useSearchList';
import TipsSection from '@pages/main/components/TipsSection';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const page = Number(searchParams.get('page')) || 1;
  const hashtagsParam = searchParams.get('hashtags') || '';
  const tags = hashtagsParam ? hashtagsParam.split(',') : [];

  const { data: searchResults, isFetching } = useSearchList({ query, tags, page, limit: 10 });

  const tipsFromApi = searchResults ? searchResults.result : [];

  const handleSearch = (value: string) => {
    setSearchParams({ query: value, page: '1' });
  };

  return (
    <>
      <SearchSection
        highlight={`'${query || (tags && '선택한 태그') || '검색어'}'`}
        backText="에 대한 좋아요순 검색 결과입니다"
        onSearch={handleSearch}
        marginTop="80px"
      />
      <TipsSection showLikes={false} items={tipsFromApi} isLoading={isFetching} isSearchSection />

      <RecommendTitle title={query || (tags && `선택한 태그`) || '검색어'} />
      <TipsSection items={tipsFromApi} isBigCard showLikes={false} />
    </>
  );
};

export default SearchPage;
