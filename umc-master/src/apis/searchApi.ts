import axiosInstance from '@apis/axios-instance';

export interface Author {
  userId: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface Tip {
  tipId: number;
  title: string;
  description: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  likesCount: number;
  commentsCount: number;
  hashtags: string[];
}

export interface TipsResponse {
  isSuccess: boolean;
  message: string;
  result: Tip[];
}

export interface GetTipsParams {
  query: string;
  page: number;
  limit: number;
}

export const getSearchTips = async ({ query, /* tags, */ page, limit }: GetTipsParams): Promise<TipsResponse> => {
  const response = await axiosInstance.get<TipsResponse>('/tips/search', {
    params: {
      query,
      // TODO: 백엔드 태그 검색 기능 구현 후 주석 해제
      // tags: tags?.join(','),
      page,
      limit,
    },
  });
  return response.data;
};
