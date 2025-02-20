import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ChallengeHeader from './ChallengeHeader';
import NumberCard from '@components/Card/NumberCard';
import dummyImage from '@assets/dummyImage/clean.png';
import styled from 'styled-components';
import SkeletonCard from '@components/Skeleton/SkeletonCard';
import { useNavigate } from 'react-router-dom';

interface Tip {
  id: number;
  image: string;
  text: string;
  likes: number;
  bookmarks: number;
  date: string;
  userNumber: number;
}

const PAGE_SIZE = 10;

/* 임시 더미 데이터 생성 함수 */
const generateDummyData = (count: number, startId: number): Tip[] => {
  return Array.from({ length: count }, (_, index) => {
    const randomDaysAgo = Math.floor(Math.random() * 30);
    const date = new Date();
    date.setDate(date.getDate() - randomDaysAgo);
    return {
      id: startId + index,
      image: dummyImage,
      text: `청소메이킹가이드 ${startId + index}`,
      likes: Math.floor(Math.random() * 5000),
      bookmarks: Math.floor(Math.random() * 5000),
      date: date.toISOString().slice(0, 10),
      userNumber: Math.floor(Math.random() * 1000),
    };
  });
};

const TipSection = () => {
  const [sortBy, setSortBy] = useState<'users' | 'latest'>('users');
  const [selectedCategory, setSelectedCategory] = useState('season');
  const [allData, setAllData] = useState<Tip[]>([]);
  const [loadedCount, setLoadedCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  // 전체 더미 데이터를 최초 한 번 로드
  useEffect(() => {
    const dummyData = generateDummyData(100, 1);
    setAllData(dummyData);
  }, []);

  const sortedAllData = useMemo(() => {
    return [...allData].sort((a, b) => {
      if (sortBy === 'users') {
        return b.userNumber - a.userNumber;
      }
      if (sortBy === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  }, [allData, sortBy]);

  const displayedCards = useMemo(() => {
    return sortedAllData.slice(0, loadedCount);
  }, [sortedAllData, loadedCount]);

  const hasMore = loadedCount < sortedAllData.length;

  const loadMoreData = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setTimeout(() => {
      setLoadedCount((prev) => prev + PAGE_SIZE);
      setIsLoading(false);
    }, 1000);
  }, [isLoading, hasMore]);

  // IntersectionObserver를 이용하여 마지막 요소가 보이면 loadMoreData 호출
  useEffect(() => {
    if (isLoading || !hasMore) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreData();
      }
    });

    if (lastElementRef.current) observerRef.current.observe(lastElementRef.current);

    return () => observerRef.current?.disconnect();
  }, [isLoading, hasMore, loadMoreData]);

  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/challenge/${id}`); // 상세 페이지로 이동
  };

  return (
    <Container>
      <ChallengeHeader
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <NumberCard cards={displayedCards} showNumber={sortBy !== 'latest'} onCardClick={handleCardClick}/>

      {/* 마지막 요소 감지용 div */}
      {hasMore && !isLoading && <div ref={lastElementRef} style={{ height: '10px' }} />}

      {/* 스켈레톤 UI */}
      {isLoading && (
        <SkeletonGrid style={{ marginTop: '20px' }}>
          {Array.from({ length: PAGE_SIZE }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))}
        </SkeletonGrid>
      )}
    </Container>
  );
};

export default TipSection;

const Container = styled.div`
  margin-bottom: 80px;
`;

const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
`;
