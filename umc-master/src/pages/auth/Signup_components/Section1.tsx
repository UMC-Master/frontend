/* eslint-disable react/prop-types */
import Typography from "@components/common/typography";
import styled, { useTheme } from "styled-components";
import ImgAdd from "@assets/add.svg";
import { useEffect, useState } from "react";

interface AgreementItemProps {
  isRequired: boolean;  // 필수 여부
  label: string;        // 약관 이름
  isOptional: boolean;  // 선택 사항 여부
  checked: boolean;     // 체크 여부
  onChange: (checked: boolean) => void; // 체크 상태 변경 함수
}

const AgreementItem: React.FC<AgreementItemProps> = ({ isRequired, label, isOptional, checked, onChange }) => {
  const theme = useTheme();
  const labelColor = isRequired
    ? theme.colors.text.gray
    : isOptional
    ? theme.colors.text.gray
    : theme.colors.text.black;

  return (
    <Agreement>
      <Terms>
        <Checkbox type="checkbox" id="agreement" checked={checked} onChange={(e) => onChange(e.target.checked)}/>
        {isRequired && <Typography variant="bodySmall" style={{ color: theme.colors.red[500] }}>(필수)</Typography>}
        {!isRequired && isOptional && <Typography variant="bodySmall" style={{ color: theme.colors.blue[400] }}>(선택)</Typography>}
        <Typography variant="bodySmall" style={{ color: labelColor }}>
          {label}
        </Typography>
      </Terms>
      <Plus>
        <img src={ImgAdd} alt="addDetail" />
      </Plus>
    </Agreement>
  );
};

interface Section1Props {
  onCheckRequired: (areRequiredChecked: boolean) => void;
}

const Section1: React.FC<Section1Props> = ({ onCheckRequired }) => {
  
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    terms: false, privacy: false, thirdinfo: false, marketing: false, 
  });

  // 전체 동의 체크박스
  const handleAllAgreeChange = (checked: boolean) => {
    setIsAllAgreed(checked);
    const updatedItems = {
      terms: checked, privacy: checked, thirdinfo: checked, marketing: checked,
    };
    setCheckedItems(updatedItems);
    onCheckRequired(updatedItems.terms && updatedItems.privacy);
  };

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setCheckedItems((prevState) => {
      const updatedItems = { ...prevState, [key]: checked };
      onCheckRequired(updatedItems.terms && updatedItems.privacy);
      return updatedItems;
    });
  };

  useEffect(() => {
    if (isAllAgreed) {
      setCheckedItems({
        terms: true, privacy: true, thirdinfo: true, marketing: true,
      });
      onCheckRequired(true);
    } else {
      onCheckRequired(checkedItems.terms && checkedItems.privacy);
    }
  }, [isAllAgreed, checkedItems, onCheckRequired]);

  return (
    <Container>
      <AgreementItem 
        isRequired={false} 
        label="전체 약관에 동의합니다." 
        isOptional={false}
        checked={isAllAgreed}
        onChange={handleAllAgreeChange}
      />
      <AgreementItem 
        isRequired={true} 
        label="이용 약관 동의" 
        isOptional={false} 
        checked={checkedItems.terms}
        onChange={(checked) => handleCheckboxChange('terms', checked)}
      />
      <AgreementItem 
        isRequired={true} 
        label="개인 정보 수집 및 이용 약관 동의" 
        isOptional={false} 
        checked={checkedItems.privacy}
        onChange={(checked => handleCheckboxChange('privacy', checked))}
      />
      <AgreementItem 
        isRequired={false} 
        label="제 3자 정보 제공 동의" 
        isOptional={true} 
        checked={checkedItems.thirdinfo}
        onChange={(checked) => handleCheckboxChange('thirdinfo', checked)}
      />
      <AgreementItem 
        isRequired={false} 
        label="마케팅 활용 동의" 
        isOptional={true} 
        checked={checkedItems.marketing}
        onChange={(checked) => handleCheckboxChange('marketing', checked)}
      />
    </Container>
  );
};

export default Section1;
  
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

const Agreement = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

const Terms = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

const Checkbox = styled.input`
  width: 30px;
  height: 30px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary[600]};
`

const Plus = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
`