import axiosInstance from '@apis/axios-instance';

interface UserSignup {
  email: string;
  password: string;
  nickname: string;
  hashtag: string[];
}

export const postEmail = async ({ email, password, nickname, hashtag } : UserSignup) => {
  const { data } = await axiosInstance.post(`/signup`, {
    email,
    password,
    nickname,
    hashtag,
  });
  return data;
};

