import axiosInstance from './axios-instance';

export interface QuizData {
  id: number;
  question: string;
  answer: number;
  description: string;
}

export interface QuizResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    response: {
      number_of_quiz: number;
      quiz_list: QuizData[];
    };
  };
}

export const fetchQuizData = async (): Promise<QuizResponse> => {
  const response = await axiosInstance.get<QuizResponse>('/quizzes', {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  });

  if (!response?.data || !response.data.result) {
    throw new Error('퀴즈 데이터가 없습니다.');
  }

  return response.data;
};
