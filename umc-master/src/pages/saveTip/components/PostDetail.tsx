/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import Typography from '@components/common/typography';
import Tag from '@components/Tag/Tag';
import ProfileDefault from '@assets/gray-character.png';

interface Hashtag {
  hashtag_id: number;
  name: string;
}

interface Media {
  media_url: string;
  media_type: string;
}

interface User {
  user_id: number;
  nickname: string;
  profile_image_url: string | null;
}

export interface TipItem {
  tips_id: number;
  title: string;
  content: string;
  created_at: string;
  media: Media[];
  hashtags: { hashtag: Hashtag }[];
  user: User;
  _count: {
    likes: number;
    saves: number;
  };
}

interface PostDetailProps {
  detail: TipItem;
}

const PostDetail: React.FC<PostDetailProps> = ({ detail }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!detail) {
    return <PostView>해당 포스트를 찾을 수 없습니다.</PostView>;
  }

  return (
    <PostView>
      {detail.media.length > 0 && <Img src={detail.media[0].media_url} alt="게시물 이미지" />}
      <Typography variant="headingXxSmall" style={{ color: theme.colors.primary[900] }}>
        {detail.title}
      </Typography>
      <PostInfo>
        <InfoDetail>
          <Author>
            <ProfileImg src={detail.user.profile_image_url || ProfileDefault} alt="프로필 이미지" />
            <AuthorInfo>
              <Typography variant="titleXxSmall" style={{ color: theme.colors.text.black }}>
                {detail.user.nickname}
              </Typography>
              <Bestnum>
                <Typography variant="bodySmall" style={{ color: theme.colors.text.lightGray }}>
                  BEST 꿀팁 선정 횟수
                </Typography>
                <Typography variant="bodySmall" style={{ color: theme.colors.text.lightGray }}>
                  0 회
                </Typography>
              </Bestnum>
            </AuthorInfo>
          </Author>
          <Tags>
            {detail.hashtags.map((tag, index) => (
              <Tag key={index} selected={true} text={tag.hashtag.name}></Tag>
            ))}
          </Tags>
        </InfoDetail>
        <PostDate>
          <Typography variant="bodySmall" style={{ color: theme.colors.text.black }}>
            {detail.created_at.slice(0, 10)}
          </Typography>
        </PostDate>
      </PostInfo>
      <ContentWrapper>
        <Typography variant="bodySmall" style={{ color: theme.colors.text.black }}>
          {detail.content}
        </Typography>
      </ContentWrapper>
    </PostView>
  );
};

export default PostDetail;

const PostView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

const Img = styled.img`
  width: 80vw;
  height: 360px;
  border-radius: 20px;
  object-fit: cover;
  background: #d9d9d9;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const Author = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  object-fit: cover;
  background: #d9d9d9;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const Bestnum = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ContentWrapper = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
`;
