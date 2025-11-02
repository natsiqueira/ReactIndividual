import React from 'react';
import { CardContainer, CardImage, CardTitle, CardDescription, CardPrice, CardButton } from './style';

const Card = ({ title, description, price, imageUrl }) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardPrice>R$ {price}</CardPrice>
      <CardButton>Comprar</CardButton>
    </CardContainer>
  );
};

export default Card;