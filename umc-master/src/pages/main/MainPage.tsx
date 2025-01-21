import Banner from './components/Banner';
import InterestsAndCategories from './components/Categories';
import QuizBox from './components/QuizBox';
import SearchSection from '../../components/SearchBar/SearchSection';
import TipsSection from './components/TipsSection';
import dummyImage from '@assets/dummyImage/dummy.jpeg';

const dummyData = [
  {
    image: dummyImage,
    text: '따뜻한 감성이 담긴 방꾸미기',
    likes: 1200,
    bookmarks: 800,
    date: '2025.01.20',
  },
  {
    image: dummyImage,
    text: '여행을 떠나는 방법',
    likes: 450,
    bookmarks: 300,
    date: '2025.01.15',
  },
  {
    image: dummyImage,
    text: '화사한 인테리어의 비밀',
    likes: 980,
    bookmarks: 670,
    date: '2025.01.18',
  },
  {
    image: dummyImage,
    text: '북유럽 감성으로 꾸민 침실',
    likes: 1300,
    bookmarks: 950,
    date: '2025.01.12',
  },
  {
    image: dummyImage,
    text: '오늘의 추천 인테리어 팁',
    likes: 890,
    bookmarks: 430,
    date: '2025.01.10',
  },
];

const MainPage: React.FC = () => {
  return (
    <>
      <>
        <Banner />
        <QuizBox />
        <SearchSection frontText="궁금한" highlight="키워드" backText="를 검색해보세요!" marginTop="60px" />
        <InterestsAndCategories />
        <TipsSection title="이 주의 꿀팁 BEST 5" items={dummyData} showLikes />
        <TipsSection title="실시간 꿀팁" items={dummyData} showArrows showLikes={false} />
        <TipsSection title="오늘의 꿀팁" items={dummyData} showArrows />
      </>
    </>
  );
};

export default MainPage;
