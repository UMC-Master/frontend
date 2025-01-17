import Banner from './components/Banner';
import InterestsAndCategories from './components/Categories';
import QuizBox from './components/QuizBox';
import SearchSection from '../../components/SearchBar/SearchSection';
import TipsSection from './components/TipsSection';
import dummyImage from '@assets/dummyImage/dummy.jpeg';

const dummyData = [
  { image: dummyImage, text: '오늘의 추천입니다.' },
  { image: dummyImage, text: '여행을 떠나요.' },
  { image: dummyImage, text: '오늘의 추천입니다.' },
  { image: dummyImage, text: '오늘의 추천입니다.' },
  { image: dummyImage, text: '오늘의 추천입니다.' },
];

const MainPage: React.FC = () => {
  return (
    <>
      <>
        <Banner />
        <QuizBox />
        <SearchSection frontText="궁금한" highlight="키워드" backText="를 검색해보세요!" />
        <InterestsAndCategories />
        <TipsSection title="이 주의 꿀팁 BEST 5" items={dummyData} />
        <TipsSection title="실시간 꿀팁" items={dummyData} showArrows />
        <TipsSection title="오늘의 꿀팁" items={dummyData} showArrows />
      </>
    </>
  );
};

export default MainPage;
