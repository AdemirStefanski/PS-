import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(235, 237, 240, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: box-shadow 0.3s ease;
  padding: 0.5rem 2rem;
  color: #013354; 
  
  &.scrolled {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: auto auto; 
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 70%;
  max-width: 600px;
  
  input {
    width: 100%;
    padding: 0.5rem 3rem 0.5rem 1rem; 
    border-radius: 9999px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 1rem;
  }
  
  button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #013354;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .favorites {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    background: none;
    border: none;
  }
  
  .profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    position: relative;
  }
  
  .profile img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`;


export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  justify-self: end;
`;


export const MobileMenu = styled.div`
  position: absolute;
  
  left: 15px;
  right: 15px;
  background: rgba(235, 237, 240, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;


export const MobileMenuItem = styled.div`
`;

export const FavSpan = styled.span`
  font-size: 1rem;
  color: #013354;
  font-weight: 500;
`;

export const NameSpan = styled.span`
  font-size: 1rem;
  color: #013354;
  font-weight: 700;
`;

export const FavoriteIconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const FavoriteCountBadge = styled.span`
  position: absolute;
  bottom: -3px;
  right: -3px;
  background-color: #ebedf0;
  color: #013354;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const FavoritesButton = styled.button`
  border: none;
  outline: none;
  background: none;
  -webkit-appearance: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover,
  &:focus {
    border: none;
    outline: none;
    background: none;
  }
`;