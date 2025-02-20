/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from "@components/common/typography";
import styled from "styled-components";
import Input from "@components/Input/Input";
import useInput from "@hooks/useInput";
import { validateEmailFormat, validatePasswordFormat } from "@utils/validation";
import { useState, useEffect } from "react";
import Button from "@components/Button/Button";
import Kakao_Image from "@assets/kakao_login/kakao_login_large_wide.png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@apis/axios-instance";
import { useAuthStore } from "@store/authStore";
import { useTokenStore } from "@store/tokenStore";

const InputForm: React.FC = () => {
  const { setAuth } = useAuthStore();
  const { setTokens } = useTokenStore.getState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.Kakao) {
      console.log("🚨 카카오 SDK가 로드되지 않음"); // ✅ SDK 로드 확인
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.async = true;
      script.onload = () => {
        if (window.Kakao) {
          window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
          console.log("✅ 카카오 SDK 초기화 완료:", window.Kakao);
        }
      };
      document.head.appendChild(script);
    } else {
      console.log("✅ 카카오 SDK 이미 로드됨:", window.Kakao);
    }
  }, []);

  
  const handleKakaoLogin = () => {
    console.log("🚀 카카오 로그인 버튼 클릭됨"); // ✅ 버튼 클릭 확인
  
    if (!window.Kakao) {
      alert("카카오 SDK 로드 실패");
      return;
    }
  
    console.log("✅ 카카오 SDK 확인됨:", window.Kakao); // ✅ SDK 존재 여부 확인
  
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image",
      success: async (authObj: { access_token: any; }) => {
        console.log("✅ 카카오 로그인 성공!", authObj);
  
        try {
          const response = await axiosInstance.post("/login/kakao", {
            kakaoAccessToken: authObj.access_token,
          });
  
          console.log("✅ 백엔드 응답:", response.data); // ✅ 백엔드 응답 확인
  
          const { accessToken, refreshToken } = response.data.result;
          setTokens({ accessToken, refreshToken });
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
  
          alert("로그인 성공!");
          setAuth(true);
          navigate("/main");
        } catch (error: any) {
          console.error("카카오 로그인 실패:", error.response?.data || error.message);
          alert(error.response?.data?.message || "카카오 로그인에 실패했습니다.");
        }
      },
      fail: (err: any) => {
        console.error("❌ 카카오 로그인 실패:", err);
        alert("카카오 로그인에 실패했습니다.");
      },
    });
  };
  

  const handleEmailLogin = async () => {
    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data.result;

      setTokens({ accessToken, refreshToken });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      alert("로그인 성공!");
      setAuth(true);
      navigate("/main");
    } catch (error: any) {
      console.error("로그인 실패:", error.response?.data || error.message);
      alert(error.response?.data?.message || "로그인에 실패했습니다.");
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  // 이메일 상태 검증 및 에러메세지
  const {
    input: email,
    errorMessage: emailErrorMessage,
    changeHandler: emailChangeHandler,
    handleInputError: handleEmailError,
  } = useInput({
    initialValue: '',
    validate: async (value) => validateEmailFormat(value),
  });

  // 비밀번호 상태 검증 및 에러메세지
  const {
    input: password,
    errorMessage: passwordErrorMessage,
    changeHandler: passwordChangeHandler,
    handleInputError: handlePasswordError,
  } = useInput({
    initialValue: '',
    validate: async (value) => validatePasswordFormat(value),
  });

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // 이메일 및 비밀번호가 비어있는지 체크하고 오류 메시지 표시
    if (!email) {
      handleEmailError('이메일을 입력해주세요.');
    } else {
      const emailError = validateEmailFormat(email);
      if (emailError) {
        handleEmailError(emailError); // 이메일 오류 처리
      }
    }

    if (!password) {
      handlePasswordError('비밀번호를 입력해주세요.');
    } else {
      const passwordError = validatePasswordFormat(password);
      if (passwordError) {
        handlePasswordError(passwordError); // 비밀번호 오류 처리
      }
    }


    // // 서버에서 이메일과 비밀번호 검증
    // // 예시로 콘솔 로그로 확인
    // const emailExistsError = await validateEmailOnServer(email);
    // if (!emailExistsError.success) {
    //   handleEmailError(emailExistsError.message);
    //   return;
    // }

    // const passwordMatchError = await validatePasswordOnServer(email, password);
    // if (!passwordMatchError.success) {
    //   handlePasswordError(passwordMatchError.message);
    //   return;
    // }

    console.log(isSubmitted);

    await handleEmailLogin();
  };

  return (
    <LoginInputForm onSubmit={formSubmitHandler}>
      <LoginInput>
        <Input
          errorMessage={emailErrorMessage}
          type={'email'}
          placeholder={'이메일 입력하기'}
          onChange={emailChangeHandler} />
        <Input
          errorMessage={passwordErrorMessage}
          type={'password'}
          placeholder={'비밀번호 입력하기'}
          onChange={passwordChangeHandler} />
      </LoginInput>
      <Buttons>
        <Button variant="primary" type="submit">
          로그인하기
        </Button>
        <Button variant="kakao" onClick={handleKakaoLogin}>
          <KakaoImage src={Kakao_Image} alt="Kakao Login" />
        </Button>
      </Buttons>
      <LoginDetail>
        <AutoLoginWrapper htmlFor="autoLogin">
          <StyledCheckbox type="checkbox" id="autoLogin" />
          <StyledTypography variant="bodySmall">자동로그인</StyledTypography>
        </AutoLoginWrapper>
        <Options>
          <StyledTypography variant="bodySmall" onClick={() => navigate(`/find-privacy`)}>
            회원 정보 찾기
          </StyledTypography>
          <Separator />
          <StyledTypography variant="bodySmall" onClick={() => navigate(`/signup`)}>
            회원 가입
          </StyledTypography>
        </Options>
      </LoginDetail>
    </LoginInputForm>
  );
};

export default InputForm;

const LoginInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  align-self: stretch;
`;

const LoginDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const AutoLoginWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const StyledCheckbox = styled.input`
  width: 23px;
  height: 23px;
  accent-color: ${({ theme }) => theme.colors.primary[500]};
`;

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.gray};
  cursor: pointer;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: var(--Color-gray, #9c9c9c);
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const KakaoImage = styled.img`
  width: 100%; /* 버튼 내부에 이미지 크기를 조정 */
  height: 72px;
  object-fit: contain;
`;