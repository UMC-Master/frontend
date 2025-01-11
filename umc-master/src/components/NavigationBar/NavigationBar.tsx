import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRegBell } from 'react-icons/fa';
import LogoImage from '@assets/logo.png';
import RoutePaths from '@router/routePaths';

interface NavigationBarProps {
  login: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ login }) => (
  <Nav>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '57px' }}>
      <Link to={RoutePaths.MAIN}>
        <Logo src={LogoImage} alt="Logo" />
      </Link>
      <MenuItems>
        <Link to={RoutePaths.MAGAZINE}>매거진</Link>
        <Link to={RoutePaths.COMMUNITY}>커뮤니티</Link>
        <Link to={RoutePaths.SAVE_TIP}>저장한 글들</Link>
      </MenuItems>
    </div>
    {login ? (
      <UserSection>
        <IconButton>
          <FaRegBell size={40} />
        </IconButton>
        <Profile>
          <Avatar />
          <Username>애니님</Username>
        </Profile>
      </UserSection>
    ) : (
      <LoginLink to={RoutePaths.LOGIN}>로그인</LoginLink>
    )}
  </Nav>
);

export default NavigationBar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 200px;
  background: white;
  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.img`
  height: 100px;
  cursor: pointer;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 80px;

  a {
    color: #121212;
    font-size: 28px;
    font-family: Pretendard;
    font-style: medium;
  }
`;

const LoginLink = styled(Link)`
  background: #1b8c78;
  color: white;
  padding: 12px 64px;
  border-radius: 12px;
  font-size: 24px;
  font-family: Pretendard;
  font-style: 'semi-bold';
  cursor: pointer;

  &:hover {
    background: #177564;
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 70px;
  color: #084951;
  cursor: pointer;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: #e0e0e0;
  border-radius: 50%;
`;

const Username = styled.span`
  color: #121212;
  font-size: 28px;
  font-family: Pretendard;
  font-style: medium;
`;
