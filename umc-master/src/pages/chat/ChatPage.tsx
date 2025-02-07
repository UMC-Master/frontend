import { useState } from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import Typography from '@components/common/typography';
import SearchInput from './components/SearchInput';
import ButtonList from './components/ButtonList';
import Sidebar from './components/Sidebar';

const buttonTexts = ['꿀팁 검색 관련', '정책 관련', '꿀팁 요약', '서비스 이용 관련'];

const ChatPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <PageWrapper>
      <Sidebar onToggle={setIsSidebarOpen} />
      <ContentWrapper $isSidebarOpen={isSidebarOpen}>
        <Typography variant="headingXSmall" style={{ color: theme.colors.primary[800] }}>
          무엇을 도와드릴까요?
        </Typography>
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
        <ButtonList buttonTexts={buttonTexts} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ChatPage;

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
  overflow-x: hidden; // 좌우 스크롤 방지
`;

const ContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$isSidebarOpen',
})<{ $isSidebarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 40px;
  transition: margin-left 0.5s ease;
  margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '250px' : '0')};
  max-width: 100%;
  box-sizing: border-box;
`;
