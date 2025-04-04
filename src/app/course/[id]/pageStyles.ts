import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 16px;
  color: #013354;
  max-width: 1440px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  margin-top:80px;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

export const CourseLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export const CourseTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
`;

export const FavoriteIconContainer = styled.div`
  margin-left: auto;
  cursor: pointer;
  position: relative;
`;

export const VideoContainer = styled.div<{ $purchased: boolean }>`
  width: 80%;
  max-width: 800px;
  margin: ${({ $purchased }) => ($purchased ? "0 auto" : "0")};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResponsiveYouTubeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px; 
  height: 0;
  padding-bottom: 56.25%; 
  margin: 0 auto; 

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const VideoFrame = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 16px;
  font-size: 0.9rem;
`;

export const InfoLabel = styled.span`
  font-weight: 700;
  margin-right: 4px;
`;

export const DescripContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const ControlButton = styled.button`
  padding: 8px 12px;
  background-color: transparent !important;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  
`;

export const VolumeSlider = styled.input`
  width: 100px;
`;

export const PriceText = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  
  color: #013354;
`;

export const PurchaseButton = styled.button`
  padding: 8px 16px;
  background-color: #013354;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  &:hover {
    background-color: #012a45;
    transform: scale(1.05);
  }
`;