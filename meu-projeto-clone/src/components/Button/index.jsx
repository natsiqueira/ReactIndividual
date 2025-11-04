import React from 'react';
import { Container } from './style'; 

function Button({ onClick, children }) {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;