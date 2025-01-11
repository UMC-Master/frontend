import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '@assets/logo.png';

const Footer: React.FC = () => (
  <FooterContainer>
    {/* TODO: 라우팅 수정 예정 */}
    <FooterLinks>
      <Link to="/privacy-policy">개인정보처리방침</Link>
      <Divider>|</Divider>
      <Link to="/terms">책임의 한계와 법적 고지</Link>
      <Divider>|</Divider>
      <Link to="/support">회원정보 고객센터</Link>
    </FooterLinks>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
      <Logo src={LogoImage} alt="Logo" />
      <Copyright>Copyright © H_MASTER Corp. All Rights Reserved.</Copyright>
    </div>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  background: #f8f8f8;
  padding: 28px;
  text-align: center;
  font-size: 14px;
  color: #555;
`;

const FooterLinks = styled.div`
  margin-bottom: 16px;

  a {
    color: #555;
    margin: 0 8px;

    &:hover {
      color: #000;
    }
  }
`;

const Divider = styled.span`
  margin: 0 8px;
  color: #ccc;
`;

const Logo = styled.img`
  height: 30px;
  cursor: pointer;
`;

const Copyright = styled.div`
  font-size: 12px;
  color: #888;
`;
