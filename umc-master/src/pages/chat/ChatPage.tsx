import { useState } from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import Typography from '@components/common/typography';
import SearchInput from './components/SearchInput';
import ButtonList from './components/ButtonList';

const buttonTexts = ['꿀팁 검색 관련', '정책 관련', '꿀팁 요약', '서비스 이용 관련'];

const ChatPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Typography variant="headingXSmall" style={{ color: theme.colors.primary[800] }}>
        무엇을 도와드릴까요?
      </Typography>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <ButtonList buttonTexts={buttonTexts} />
    </Container>
  );
};

export default ChatPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  gap: 40px;
`;
