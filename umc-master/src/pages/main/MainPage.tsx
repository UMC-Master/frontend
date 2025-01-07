import Banner from './components/Banner';
import QuizBox from './components/QuizBox';
import SearchSection from './components/SearchSection';

const MainPage: React.FC = () => {
  return (
    <>
      <div>
        <Banner></Banner>
        <QuizBox></QuizBox>
        <SearchSection></SearchSection>
      </div>
    </>
  );
};

export default MainPage;
