/* eslint-disable react/prop-types */
import styled from 'styled-components';

interface SearchTitleProps {
  highlight?: string;
  text1?: string;
  text2?: string;
}

const SearchTitle: React.FC<SearchTitleProps> = ({ highlight, text1, text2 }) => {
  return (
    <SearchText>
      {text1 && <span>{text1} </span>}
      {highlight && <Highlight>{highlight}</Highlight>}
      {text2 && <span> {text2}</span>}
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
