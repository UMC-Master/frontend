/* eslint-disable react/prop-types */
import styled from 'styled-components';
import SearchTitle from './components/SearchTitle';
import SearchBar from './components/SearchBar';
import { useNavigate } from 'react-router-dom';

interface SearchSectionProps {
  highlight?: string;
  frontText?: string;
  backText?: string;
  onSearch?: (value: string) => void;
  marginTop?: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  frontText,
  backText,
  highlight,
  onSearch,
  marginTop = '0px',
}) => {
  const navigate = useNavigate();
  const handleSearch = (value: string) => {
    if (onSearch) {
      onSearch(value);
    }
    navigate(`/search?query=${value}`);
  };

  return (
    <Container marginTop={marginTop}>
      <SearchTitle frontText={frontText} highlight={highlight} backText={backText} />
      <SearchBar onSearch={handleSearch} />
    </Container>
  );
};

export default SearchSection;

const Container = styled.section<{ marginTop: string }>`
  // marginTop을 props로 전달받음
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 928px;
  height: 137px;
  margin: ${({ marginTop }) => marginTop} auto; // margin-top을 동적으로 설정
`;
