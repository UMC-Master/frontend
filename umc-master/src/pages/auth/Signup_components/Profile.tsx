import { useRef, useState } from "react";
import styled from "styled-components";

const Profile: React.FC = () => {

  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const fileInput = useRef<HTMLInputElement>(null)

  return (
    <ProfileImg>
      <Avatar 
        src={Image} 
        alt="Profile Avatar"
        onClick={()=>{fileInput.current?.click()}}/>
    </ProfileImg>
  );
};
  
export default Profile;

const ProfileImg = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  padding: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`

const Avatar = styled.img`
  width: 180px;
  height: 180px;
  position: absolute;
  fill: #D9D9D9;
  border-radius: 50%;
`