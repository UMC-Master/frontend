import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '@assets/logo.png';
import RoutePaths from '@router/routePaths';
import Typography from '@components/common/typography';
import AlarmIcon from '@assets/icons/alarm.svg?react';

interface NavigationBarProps {
  login: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ login }) => {
  return (
    <Nav>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        <Link to={RoutePaths.MAIN}>
          <Logo src={LogoImage} alt="Logo" />
        </Link>
        <Typography variant="titleXxSmall">
          <MenuItems>
            <Link to={RoutePaths.MAGAZINE}>매거진</Link>
            <Link to={RoutePaths.COMMUNITY}>꿀팁나눔</Link>
            <Link to={RoutePaths.SAVE_TIP}>저장한 꿀팁</Link>
          </MenuItems>
        </Typography>
      </div>
      {login ? (
        <UserSection>
          <AlarmIcon />
          <ProfileImg />
        </UserSection>
      ) : (
        <LoginBtn to={RoutePaths.LOGIN}>
          <Typography variant="bodySmall">로그인</Typography>
        </LoginBtn>
      )}
    </Nav>
  );
};
export default NavigationBar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 0 clamp(20px, 10vw, 320px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.gray};
`;

const Logo = styled.img`
  height: 52px;
  cursor: pointer;
`;

const MenuItems = styled.div`
  display: flex;
  gap: clamp(20px, 10vw, 40px);

  a {
    color: ${({ theme }) => theme.colors.text.black};
  }
`;

const LoginBtn = styled(Link)`
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.text.white};
  padding: 7px 27px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 10vw, 20px);
  cursor: pointer;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background: #e0e0e0; /**TODO: 프로필 이미지 추가*/
  border-radius: 50%;
`;
