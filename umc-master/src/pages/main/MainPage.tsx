import Banner from './components/Banner';
import InterestsAndCategories from './components/Categories';
import QuizBox from './components/QuizBox';
import SearchSection from './components/SearchSection';

const MainPage: React.FC = () => {
  return (
    <>
      <div>
        <Banner></Banner>
        <QuizBox></QuizBox>
        <SearchSection></SearchSection>
        <InterestsAndCategories></InterestsAndCategories>
      </div>
    </>
  );
};

export default MainPage;
