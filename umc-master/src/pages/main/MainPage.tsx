import Banner from './components/Banner';
import InterestsAndCategories from './components/Categories';
import QuizBox from './components/QuizBox';
import SearchSection from './components/SearchSection';
import TipsSection from './components/TipsSection';

const dummyData = [
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '여행을 떠나요.' },
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
  { image: '#', text: '오늘의 추천입니다.' },
];

const MainPage: React.FC = () => {
  return (
    <>
      <>
        <Banner />
        <QuizBox />
        <SearchSection />
        <InterestsAndCategories />
        <TipsSection title="이 주의 꿀팁 BEST 5" items={dummyData} />
        <TipsSection title="실시간 꿀팁" items={dummyData} showArrows />
        <TipsSection title="오늘의 꿀팁" items={dummyData} showArrows />
      </>
    </>
  );
};

export default MainPage;
