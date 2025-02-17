/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import Typography from '@components/common/typography';
import Likes from '@assets/savetipdetail/Likes.svg';
import Liked from '@assets/savetipdetail/liked.svg';
import Saves from '@assets/savetipdetail/saves.svg';
import Saved from '@assets/savetipdetail/saved.svg';
import Link from '@assets/savetipdetail/link.svg';
import { useToggleLike, useToggleBookmark } from '@apis/queries/useTipDetailMutations';

interface FloatingToggleBtnProps {
  tipId: number;
  initialLikes: number;
  initialSaves: number;
  userLiked: boolean;
  userSaved: boolean;
}

const FloatingToggleBtn: React.FC<FloatingToggleBtnProps> = ({ tipId, initialLikes, initialSaves }) => {
  //TODO: 유저 추가 여부 서버에서 데이터 주면 추가 예정
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [saves, setSaves] = useState(initialSaves);
  const [saved, setSaved] = useState(false);

  const { mutate: toggleLike } = useToggleLike(tipId);
  const { mutate: toggleBookmark } = useToggleBookmark(tipId);

  const handleLikeClick = () => {
    toggleLike();
    setLikes((prevLikes) => prevLikes + (liked ? -1 : 1));
    setLiked(!liked);
  };

  const handleSaveClick = () => {
    toggleBookmark();
    setSaves((prevSaves) => prevSaves + (saved ? -1 : 1));
    setSaved(!saved);
  };

  const shareKakao = () => {
    const Kakao = (window as any).Kakao;
    if (!Kakao) {
      console.error('Kakao SDK가 로드되지 않았습니다.');
      return;
    }

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 꿀팁',
        description: '오늘의 꿀팁을 보러 갈까요?',
        imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '나도 꿀팁 보러가기',
          link: {
            mobileWebUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <BtnContainer>
      <InteractionBtn onClick={handleLikeClick}>
        <BtnImg src={liked ? Liked : Likes} alt="좋아요" />
        <Typography variant="bodyXSmall" style={{ color: theme.colors.text.lightGray }}>
          {likes}
        </Typography>
      </InteractionBtn>
      <InteractionBtn onClick={handleSaveClick}>
        <BtnImg src={saved ? Saved : Saves} alt="저장하기" />
        <Typography variant="bodyXSmall" style={{ color: theme.colors.text.lightGray }}>
          {saves}
        </Typography>
      </InteractionBtn>
      <InteractionBtn>
        <BtnImg src={Link} alt="공유하기" onClick={shareKakao} />
        <Typography variant="bodyXSmall" style={{ color: theme.colors.text.lightGray }}>
          공유하기
        </Typography>
      </InteractionBtn>
    </BtnContainer>
  );
};

export default FloatingToggleBtn;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 2%;
  bottom: 5%;
  gap: 26px;
`;

const InteractionBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const BtnImg = styled.img`
  object-fit: cover;
  cursor: pointer;
`;
