import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
  transition: all 0.3s ease;
`;

export const FormArea = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h2 {
    margin-bottom: 25px;
    text-align: center;
    color: #1a73e8;
    font-size: 24px;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a73e8;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1557b0;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;