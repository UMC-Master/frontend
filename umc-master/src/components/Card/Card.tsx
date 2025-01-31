import React from 'react';
import styled from 'styled-components';

interface CardProps {
  image: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ image, text }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={text} />
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
`;
const CardImage = styled.img`
  min-width: 252px;
  height: 200px;
  object-fit: cover;
`;
const CardText = styled.p`
  margin: 10px 0;
  font-size: 24px;
  font-weight: 500;
  color: #121212;
`;
