import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  width: 280px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #333;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  line-height: 1.4;
`;

export const CardPrice = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #1a73e8;
  margin: 8px 0;
`;

export const CardButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1557b0;
  }
`;