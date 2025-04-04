import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: rgba(235, 237, 240, 0.8);
  backdrop-filter: blur(10px);
  color: #013354;
  padding: 8px 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export const FooterLeft = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const FooterRight = styled.div`
  font-size: 0.9rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: auto auto; 
  }
`;