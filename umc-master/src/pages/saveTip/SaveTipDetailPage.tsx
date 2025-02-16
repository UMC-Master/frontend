/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import PostDetail from "./DetailPage_componenets/PostDetail";
import CommentView from "./DetailPage_componenets/CommentView";
import Likes from "@assets/savetipdetail/Likes.svg";
import Liked from "@assets/savetipdetail/liked.svg";
import Saves from "@assets/savetipdetail/saves.svg";
import Saved from "@assets/savetipdetail/saved.svg";
import Link from "@assets/savetipdetail/link.svg";
import Typography from "@components/common/typography";
import { useParams } from "react-router-dom";
import theme from "@styles/theme";
import { useEffect, useState } from "react";
import { useTipDetail } from "@apis/queries/useTipDetailQuery";

interface Hashtag {
  hashtagId: number;
  name: string;
}

interface Image {
  media_url: string;
  media_type: string;
}
interface Author {
  userId: number;
  nickname: string;
  profileImageUrl: string | null;
}

interface TipItem {
  tipId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  hashtags: Hashtag[];
  imageUrls: Image[];
  likesCount: number;
  savesCount: number;
  author: Author;
}

const SaveTipDetailPage: React.FC<TipItem> = () => {

  const { tipId } = useParams<{ tipId: string }>();

  // 상세 데이터 가져오기
  const { data: detail, isLoading, error } = useTipDetail(tipId!);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  if (!detail) return <div>데이터를 찾을 수 없습니다.</div>;
  
  const [likes, setLikes] = useState(detail.likesCount);
  const [liked, setLiked] = useState(false);
  const [saves, setSaves] = useState(detail.savesCount);
  const [saved, setSaved] = useState(false);

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + (liked ? -1 : 1));
    setLiked(!liked);
  };

  const handleSaveClick = () => {
    setSaves((prevSaves) => prevSaves + (saved ? -1 : 1));
    setSaved(!saved);
  };

  const Kakao = (window as any).Kakao;
  // const realUrl = "https://umc-master-frontend.vercel.app"; // 실제 URL을 여기에 설정하세요
  const realUrl = window.location.href; // 현재 보고 있는 페이지의 URL


  const loadKakaoSDK = () => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js";
    script.integrity = import.meta.env.VITE_INTEGRITY_VALUE; // 환경 변수 사용
    script.crossOrigin = "anonymous";
    script.onload = () => {
      console.log("Kakao SDK 로드 완료");
    };
    document.head.appendChild(script);
  };
  
  loadKakaoSDK();
  

  useEffect(() => {
      if (!Kakao) return;
      if (!Kakao.isInitialized()) {
          Kakao.init(`${import.meta.env.VITE_JAVASCRIPT_KEY}`); // 여기에 카카오 앱 키를 넣어주세요
      }
  }, []);

  const shareKakao = () => {
    
      if (!Kakao) {
          console.error("Kakao SDK가 로드되지 않았습니다.");
          return;
      }

      Kakao.Share.sendDefault({
          objectType: "feed",
          content: {
              title: "오늘의 꿀팁",
              description: "오늘의 꿀팁을 보러 갈까요?",
              imageUrl:
                  "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
              link: {
                  mobileWebUrl: realUrl,
              },
          },
          buttons: [
              {
                  title: "나도 꿀팁 보러가기",
                  link: {
                      mobileWebUrl: realUrl,
                  },
              },
          ],
      });
  };
  
  return (
    <Container>
      <SaveTipDatail>
        <PostDetail detail={detail}/>
        <Line/>
        <CommentView tipId={tipId}/>
      </SaveTipDatail>
      <InteractionButtons>
        <Interaction onClick={handleLikeClick}>
          <Img src={liked ? Liked : Likes} alt="좋아요"/>
          <Typography 
            variant="bodyXSmall"
            style={{color: theme.colors.text.lightGray}}
          >{likes}</Typography>
        </Interaction>
        <Interaction onClick={handleSaveClick}>
          <Img src={saved ? Saved : Saves} alt="저장하기"/>
          <Typography 
            variant="bodyXSmall"
            style={{color: theme.colors.text.lightGray}}
          >{saves}</Typography>
        </Interaction>
        <Interaction>
          <Img src={Link} alt="공유하기" onClick={shareKakao}/>
          <Typography 
            variant="bodyXSmall"
            style={{color: theme.colors.text.lightGray}}
          >공유하기</Typography>
        </Interaction>
      </InteractionButtons>
    </Container>
  );
};

export default SaveTipDetailPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
  background: #FFF;
`

const SaveTipDatail = styled.div`
  display: flex;
  width: 1280px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
`

const Line = styled.div`
  width: 1280px;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.colors.primary[800]};
`

const InteractionButtons = styled.div`
  position: fixed;
  right: 168px;
  top: 610px;
  width: 72px;
  height: 366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`

const Interaction = styled.div`
  display: flex;
  width: 72px;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`

const Img = styled.img`
  object-fit: cover;
  cursor: pointer;
`