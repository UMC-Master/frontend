import styled from 'styled-components';

const SearchSection = () => {
  return (
    <Container>
      <SearchText>
        궁금한 <Highlight>키워드</Highlight>를 검색해보세요!
      </SearchText>
      <SearchBarContainer>
        <SearchInput type="text" placeholder="검색어를 입력하세요" />
        <SearchIcon>🔍</SearchIcon>
      </SearchBarContainer>
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

const SearchText = styled.p`
  font-size: 36px;
  margin-bottom: 32px;
  text-align: center;
`;

const Highlight = styled.span`
  color: rgba(4, 112, 214, 1);
  font-weight: bold;
`;

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
