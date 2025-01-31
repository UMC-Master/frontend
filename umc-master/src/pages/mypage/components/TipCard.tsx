import React from 'react';
import styled from 'styled-components';

interface CardProps {
  image: string;
  text: string;
}

const TipCard: React.FC<CardProps> = ({ image, text }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={text} />
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default TipCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 184px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #9C9C9C;
  background: #F4F4F4;
  overflow: hidden;
  cursor: pointer;
`

const CardImage = styled.img`
  width: 184px;
  height: 140px;
  background-color: #ffffff;
  border-bottom: 1px solid #9C9C9C;
  object-fit: contain;
`

const CardText = styled.p`
  margin: 13px 0;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
`