import React from 'react';
import { Container } from './style';

// Recebe todas as props que um input HTML pode ter (type, placeholder, onChange, etc.)
function Input(props) {
  // Passamos todas as props diretamente para o componente estilizado Container
  return (
    <Container {...props} />
  );
}

export default Input;