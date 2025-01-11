/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = '검색어를 입력하세요', onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <SearchIcon>🔍</SearchIcon>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0px 10px 10px 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid rgba(99, 99, 99, 1);
  outline: none;
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  cursor: pointer;
`;
