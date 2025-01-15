/* eslint-disable react/prop-types */
import styled from 'styled-components';

interface SearchTitleProps {
  highlight?: string;
  frontText?: string;
  backText?: string;
}

const SearchTitle: React.FC<SearchTitleProps> = ({ highlight, frontText, backText }) => {
  return (
    <SearchText>
      {frontText && <span>{frontText} </span>}
      {highlight && <Highlight>{highlight}</Highlight>}
      {backText && <span> {backText}</span>}
    </SearchText>
  );
};

export default SearchTitle;

const SearchText = styled.p`
  font-size: 36px;
  margin-bottom: 32px;
  text-align: center;
`;

const Highlight = styled.span`
  color: rgba(4, 112, 214, 1);
  font-weight: bold;
`;
