/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from '@apis/axios-instance';

interface GetTipsParams {
  pageParam: number;
  sorted: string;
}

export interface NewPost {
  userId: number;
  title: string;
  content: string;
  hashtags: string[];
}

export const getTips = async ({ pageParam, sorted }: GetTipsParams) => {
  const { data } = await axiosInstance.get(`/tips/sorted?page=${pageParam}&limit=5&sort=${sorted}`);
  return data;
};

export const createPost = async (newPost: NewPost): Promise<void> => {
  try {
    await axiosInstance.post<void>('/tips', newPost);
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(`서버 에러: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      throw new Error('서버에 응답이 없습니다. (네트워크 문제일 수 있습니다)');
    } else {
      throw new Error(`요청 설정 에러: ${error.message}`);
    }
  }
};

// 다른 Tips 관련 API들...
