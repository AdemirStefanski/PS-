import styled from "styled-components";

export const CardContainer = styled.div<{ $isEnrolled: boolean }>`
  position: relative; 
  width: 100%;
  background: ${({ $isEnrolled }) => ($isEnrolled ? "#d8eaf7" : "#f5f5f5")};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  padding-bottom: 80px; 
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const FavoriteIconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 20px;
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: #013354;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  color: #013354;
`;

export const ActionButton = styled.button<{ $isEnrolled: boolean }>`
  position: absolute;
  bottom: 15px; /* 15px da parte inferior */
  right: 15px;  /* 15px da lateral direita */
  padding: 8px 16px;
  border: none;
  background-color: ${({ $isEnrolled }) => ($isEnrolled ? "#9bba58" : "#013354")};
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  

  &:hover {
    background-color: ${({ $isEnrolled }) =>
      $isEnrolled ? "#8aa84b" : "#012a45"};
  }
`;
