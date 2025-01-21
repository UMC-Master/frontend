/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "kakao";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ variant: "primary" | "kakao" }>`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 0;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0.3px;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: var(--Main-500, #1B8C78);
      color: #fff;
      padding: 29px 204px;
    `}

  ${(props) =>
    props.variant === "kakao" &&
    css`
      background: #fee500;
    `}
`;
