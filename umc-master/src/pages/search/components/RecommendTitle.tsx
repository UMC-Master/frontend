/* eslint-disable react/prop-types */
import styled from 'styled-components';

interface RecommendProps {
  title: string;
}

const RecommendTitle: React.FC<RecommendProps> = ({ title }) => {
  return (
    <SearchText>
      {title && <Highlight>{`'${title}'`}</Highlight>}
      {`에 대해서 관심있으면 이건 어떤가요?`}
    </SearchText>
  );
};

export default RecommendTitle;

const SearchText = styled.p`
  font-size: 36px;
  margin-bottom: 40px;
  margin-top: 100px;
  text-align: center;
`;

const Highlight = styled.span`
  color: #1b8c76;
  font-weight: bold;
`;