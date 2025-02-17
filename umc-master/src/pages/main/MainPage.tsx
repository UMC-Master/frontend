import Banner from './components/Banner';
import InterestsAndCategories from './components/Categories';
import QuizBox from './components/QuizBox';
import SearchSection from '../../components/SearchBar/SearchSection';
import TipsSection from './components/TipsSection';
import { useQuizStore } from '@store/quizStore';
import ChatBotIcon from '@assets/icons/chatbot.svg?react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const { isQuizVisible } = useQuizStore();
  const navigate = useNavigate();
  const handleClickBot = () => {
    navigate(`/chat`);
    window.scroll(0, 0);
  };

  return (
    <>
      <>
        <Banner />
        {isQuizVisible && <QuizBox />}
        <SearchSection frontText="궁금한" highlight="키워드" backText="를 검색해보세요!" marginTop="60px" />
        <InterestsAndCategories />
        <FixedChatbotWrapper>
          <ChatBotIcon onClick={handleClickBot} />
        </FixedChatbotWrapper>
        <TipsSection title="이 주의 꿀팁 BEST 5" showLikes defaultSort="likes" timeFilter="7days" />
        <TipsSection title="실시간 꿀팁" showArrows showLikes={false} defaultSort="latest" timeFilter="24h" />
        <TipsSection title="오늘의 꿀팁" showArrows defaultSort="likes" timeFilter="today" />
      </>
    </>
  );
};

export default MainPage;

const FixedChatbotWrapper = styled.div`
  position: fixed;
  right: 80px;
  bottom: 40px;
  cursor: pointer;
`;
