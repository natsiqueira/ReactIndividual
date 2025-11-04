import styled from 'styled-components';

// componente estilizado/Container
export const Container = styled.button`
  background-color: #007bff; /* Exemplo de cor primária */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%; /* Exemplo: botão que ocupa a largura total */
  margin-top: 15px;

  &:hover {
    filter: brightness(0.9);
  }
`;