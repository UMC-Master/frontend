import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, errorMessage, ...props }) => {

    return (
      <InputWrapper>
        {label && <InputLabel>{label}</InputLabel>}
        <StyledInput {...props} />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </InputWrapper>
    );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

const InputLabel = styled.label`
  color: var(--text-gray, #636363);
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
`

const StyledInput = styled.input`
  display: flex;
  height: 90px;
  padding: 35px 32px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  border: 2px solid var(--Color-gray, #9C9C9C);
  background: #FFF;

  color: var(--Text-gray, #636363);

  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  letter-spacing: -0.48px;

  &:focus {
    outline: none;
    border-color: var(--color-primary, #636363);
  }

  &:disabled {
    background-color: var(--color-disabled, #f5f5f5);
    border-color: var(--color-gray-light, #e0e0e0);
    cursor: not-allowed;
  }
`

const ErrorText = styled.span`
  color: var(--color-error, #d32f2f);
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`