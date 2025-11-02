import React from 'react';
import { Container } from './style'; // Importando o componente estilizado

// Recebe props como 'onClick' e 'children' (o texto dentro do botão)
function Button({ onClick, children }) {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;