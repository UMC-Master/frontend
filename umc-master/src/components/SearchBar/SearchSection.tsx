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
}

const SearchSection: React.FC<SearchSectionProps> = ({ frontText, backText, highlight, onSearch }) => {
  const navigate = useNavigate();
  const handleSearch = (value: string) => {
    if (onSearch) {
      onSearch(value);
    }
    navigate(`/search?query=${value}`);
  };

  return (
    <Container>
      <SearchTitle frontText={frontText} highlight={highlight} backText={backText} />
      <SearchBar onSearch={handleSearch} />
    </Container>
  );
};

export default SearchSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 928px;
  height: 146px;
  margin: 0 auto;
  margin-top: 100px;
`;
