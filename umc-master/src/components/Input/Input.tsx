import Typography from "@components/common/typography";
import React from "react";
import styled, { useTheme } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, errorMessage, ...props }) => {

    const theme = useTheme();
    return (
      <InputWrapper>
        {label && (<Typography variant="bodySmall" style={{color: theme.colors.text.gray}} as="label">{label}</Typography>)}
        <StyledInput {...props} />
        {errorMessage && (<Typography variant="bodySmall" as="span">{errorMessage}</Typography>)}
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

const StyledInput = styled.input`
  display: flex;
  height: 72px;
  padding: 23px 32px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.text.lightGray};
  background: ${({ theme }) => theme.colors.text.white};

  color: ${({ theme }) => theme.colors.text.gray};

  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.typography.body.small.size};
  font-weight: ${({ theme }) => theme.typography.body.small.weight};
  line-height: ${({ theme }) => theme.typography.body.small.lineHeight};
  letter-spacing: -0.48px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.text.gray};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.red[500]};
    cursor: not-allowed;
  }
`