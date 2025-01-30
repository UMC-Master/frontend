import Typography from "@components/common/typography";
import Tag from "@components/Tag/Tag";
import styled, { useTheme } from "styled-components";

interface SaveTipDetailPageProps {
  title?: string;
  nickname?: string;
  text?: string;
}

const dummyInterests = ['보안', '도어카메라', '홈카메라'];

const content = `내용 예시 입니다. 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 
마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 
1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 
1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원
1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 
1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 
1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 
1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 
1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원 1인 가구를 위한 가이드북 마스터원`

const PostDetail: React.FC<SaveTipDetailPageProps> = () => {

  const theme = useTheme();
  return (
        <PostView>
          <Img />
          <Typography 
            variant="headingXxSmall"
            style={{color: theme.colors.primary[900]}}
          >title titletitletitletitletitle</Typography>
          <PostInfo>
            <InfoDetail>
              <Author>
                <ProfileImg/>
                <AuthorInfo>
                  <Typography 
                    variant="titleXxSmall"
                    style={{color: theme.colors.text.black}}
                  >nickname</Typography>
                  <Bestnum>
                    <Typography
                      variant="bodySmall"
                      style={{color: theme.colors.text.lightGray}}
                    >BEST 꿀팁 선정 횟수</Typography>
                    <Typography
                      variant="bodySmall"
                      style={{color: theme.colors.text.lightGray}}
                    >16회</Typography>
                  </Bestnum>
                </AuthorInfo>
              </Author>
              <Tags>
                {dummyInterests.map((interest, index) => (
                    <Tag key={index} selected={true} text={interest}></Tag>
                ))}
              </Tags>
            </InfoDetail>
            <PostDate>
              <Typography 
                variant="bodySmall"
                style={{color: theme.colors.text.black}}
              >2024.12.30</Typography>
              <Typography 
                variant="bodySmall"
                style={{color: theme.colors.text.black}}
              >01:45</Typography>
            </PostDate>
          </PostInfo>
          <Typography 
            variant="bodySmall"
            style={{color: theme.colors.text.black}}
          >{content}</Typography>
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
`

const Img = styled.div`
  width: 1280px;
  height: 360px;
  border-radius: 20px;
  background: #D9D9D9;
`

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`

const Author = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
`

const ProfileImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #D9D9D9;
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`

const Bestnum = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const PostDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`