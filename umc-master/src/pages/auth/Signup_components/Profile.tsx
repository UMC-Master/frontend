import { useRef, useState } from "react";
import styled from "styled-components";
import nullImg from "@assets/profile_null.png";

const Profile: React.FC = () => {

  const [Image, setImage] = useState<string>(nullImg)
  const fileInput = useRef<HTMLInputElement>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]){
          const file = e.target.files[0];
          const imageUrl = URL.createObjectURL(file);
          setImage(imageUrl);
        }else{
          setImage(nullImg);
          return
        }
      }

  return (
    <ProfileImg>
      <ImgButton
        onClick={()=>{fileInput.current?.click()}}
      >+</ImgButton>
      <Avatar 
        src={Image} 
        alt="Profile Avatar"
      />
      <input 
        type='file' 
        style={{display:'none'}}
        accept='image/jpg,impge/png,image/jpeg' 
        name='profile_img'
        onChange={onChange}
        ref={fileInput}/>
    </ProfileImg>
  );
};
  
export default Profile;

const ProfileImg = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #d9d9d9;
`

const ImgButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: #d9d9d9;
  font-size: ${({ theme }) => theme.typography.title.large.size};
  font-weight: ${({ theme }) => theme.typography.title.large.weight};
  background-color: ${({ theme }) => theme.colors.text.black};
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text.gray};  // 버튼 hover 상태
  }
`