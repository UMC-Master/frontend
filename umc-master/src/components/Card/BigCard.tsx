import React from 'react';
import styled from 'styled-components';

interface CardProps {
  image: string;
  text: string;
}

const BigCard: React.FC<CardProps> = ({ image, text }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={text} />
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default BigCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border-radius: 13px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
`;
const CardImage = styled.img`
  min-width: 330px;
  height: 270px;
  object-fit: cover;
`;
const CardText = styled.p`
  margin: 10px 0;
  font-size: 24px;
  font-weight: 500;
  color: #121212;
`;
