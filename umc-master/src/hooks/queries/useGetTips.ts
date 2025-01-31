import axiosInstance from '@apis/axios-instance';

interface GetTipsParams {
  pageParam: number;
  sorted: string;
}

const useGetTips = async ({ pageParam, sorted }: GetTipsParams) => {
  const { data } = await axiosInstance.get(`/tips/sorted?page=${pageParam}&limit=10&sort=${sorted}`);
  return data;
};

export { useGetTips };
