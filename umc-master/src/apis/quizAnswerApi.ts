import axiosInstance from './axios-instance';

export interface SubmitQuizResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    message: string;
  };
}

export const submitQuizAnswer = async (quizId: number, isCorrect: boolean): Promise<SubmitQuizResponse> => {
  const response = await axiosInstance.post<SubmitQuizResponse>(`/quizzes/${quizId}`, {
    isCorrect,
  });

  return response.data;
};
