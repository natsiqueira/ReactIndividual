import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  width: 280px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 93%;
  height: px;
  object-fit: contain;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 16px;
  background-color: #f8f9fa;
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
  flex-grow: 1;
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