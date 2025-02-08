import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getSearchTips, TipsResponse } from '@apis/searchApi';

interface UseSearchListParams {
  query: string;
  // TODO: 백엔드 태그 검색 기능 구현 후 주석 해제
  // tags?: string[];
  page: number;
  limit?: number;
}

export const useSearchList = ({ query, /* tags, */ page, limit = 10 }: UseSearchListParams) => {
  return useQuery<TipsResponse>({
    // TODO: 백엔드 태그 검색 기능 구현 후 tags 추가
    queryKey: ['tips', query, /* tags, */ page],
    queryFn: () => getSearchTips({ query, /* tags, */ page, limit }),
    placeholderData: keepPreviousData,
  });
};
