import axiosInstance from './axios-instance';

export const sendVerificationEmail = async (email: string) => {
    const response = await axiosInstance.post('/send-verification-email', { email });
    return response;
};
