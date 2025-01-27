/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "kakao" | "profileEdit" | "interestEdit";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ variant: "primary" | "kakao" | "profileEdit" | "interestEdit" }>`
  display: flex;
  width: 616px;
  height: 72px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary[500]};
  cursor: pointer;

  font-family: ${({ theme }) => theme.typography.title.xsmall};
  font-size: ${({ theme }) => theme.typography.title.xsmall.size};
  font-weight: ${({ theme }) => theme.typography.title.xsmall.weight};
  line-height: ${({ theme }) => theme.typography.title.xsmall.lineHeight};
  letter-spacing: 0.3px;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${({ theme }) => theme.colors.primary[500]};
      color: #fff;
      padding: 29px 204px;
    `}

  ${(props) =>
    props.variant === "kakao" &&
    css`
      background: #fee500;
    `}

  ${(props) =>
    props.variant === "profileEdit" &&
    css`
      width: 200px;
      height: 60px;
      background: ${({ theme }) => theme.colors.primary[500]};
      color: #fff;
      padding: 29px;
      font-size: ${({ theme }) => theme.typography.title.xxxsmall.size};
      font-weight: ${({ theme }) => theme.typography.title.xxxsmall.weight};
      line-height: ${({ theme }) => theme.typography.title.xxxsmall.lineHeight};
    `}
    
  ${(props) =>
    props.variant === "interestEdit" &&
    css`
      width: 212px;
      height: 60px;
      background: ${({ theme }) => theme.colors.primary[500]};
      color: #fff;
      padding: 29px;
      font-size: ${({ theme }) => theme.typography.title.xxxsmall.size};
      font-weight: ${({ theme }) => theme.typography.title.xxxsmall.weight};
      line-height: ${({ theme }) => theme.typography.title.xxxsmall.lineHeight};
    `}
`;
