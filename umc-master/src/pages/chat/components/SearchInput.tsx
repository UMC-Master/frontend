import React from 'react';
import styled from 'styled-components';
import SendIcon from '@assets/icons/send.svg?react';

interface SearchInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ inputValue, setInputValue }) => (
  <SearchBox>
    <Input placeholder="궁금한 점을 입력해주세요!" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <StyledSendIcon hasText={inputValue.length > 0} />
  </SearchBox>
);

export default SearchInput;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  border: 2px solid ${({ theme }) => theme.colors.text.gray};
  border-radius: 20px;
  padding: 22px 32px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 20px;
`;

const StyledSendIcon = styled(SendIcon)<{ hasText: boolean }>`
  cursor: pointer;
  fill: ${({ hasText, theme }) => (hasText ? theme.colors.primary[500] : theme.colors.text.gray)};
  transition: fill 0.3s ease;
`;
