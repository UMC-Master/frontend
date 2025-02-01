/* eslint-disable react/prop-types */
import styled from 'styled-components';
import BigCard from '../../../components/Card/BigCard';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useGetTips } from '@hooks/queries/useGetTips';
import SkeletonBigCard from '@components/Skeleton/SkeletonBigCard';
import { useNavigate } from 'react-router-dom';

interface TipsSectionProps {
  title?: string;
  items: { image: string; text: string; likes?: number; bookmarks?: number; date?: string }[];
  showArrows?: boolean;
  showLikes?: boolean;
}

interface TipItem {
  image: string;
  text: string;
  likes?: number;
  bookmarks?: number;
  date?: string;
  id: string;
}

const RecommendedTipsSection: React.FC<TipsSectionProps> = ({ items }) => {
  const {
    isError,
    data: tips,
    isFetching,
  } = useQuery({
    queryKey: ['recommend'],
    queryFn: () => useGetTips({ pageParam: 1, sorted: 'latest' }),
    placeholderData: keepPreviousData,
  });

  const tipss = tips?.data?.length > 0 ? tips.data : items;

  if (isError) return <div>Something went wrong...</div>;

  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/save-tip/${id}`);
  };

  return (
    <SectionContainer>
      <CardsWrapper>
        {isFetching
          ? Array.from({ length: 8 }).map((_, index) => <SkeletonBigCard key={index} />) // ✅ SkeletonCard 컴포넌트 활용
          : tipss.map((item: TipItem, index: number) => (
              <BigCard
                key={index}
                image={item.image}
                text={item.text}
                likes={item.likes || 0}
                bookmarks={item.bookmarks || 0}
                date={item.date || ''}
                onClick={() => {
                  handleCardClick(item.id);
                }}
              />
            ))}
      </CardsWrapper>
    </SectionContainer>
  );
};

export default RecommendedTipsSection;

const SectionContainer = styled.div`
  max-width: 1405px;
  margin: 0 auto;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(330px, 1fr));
  gap: 28px;
`;
