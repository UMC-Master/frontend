import TipsSection from '@pages/main/components/TipsSection';
import Banner from './components/Banner';

const CommunityPage: React.FC = () => {
  return (
    <>
      <Banner />
      <TipsSection title="BEST 5 꿀팁" defaultSort="likes" />
      <TipsSection title="꿀팁 모아보기" defaultSort="likes" showRecent />
    </>
  );
};

export default CommunityPage;
