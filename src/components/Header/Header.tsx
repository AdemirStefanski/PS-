"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiSearch, FiHeart, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import user from "../../data/user.json";
import {
  HeaderContainer,
  ContentWrapper,
  Logo,
  SearchWrapper,
  SearchContainer,
  ActionsContainer,
  MobileIcon,
  MobileMenu,
  MobileMenuItem,
  FavSpan,
  NameSpan,
  FavoriteCountBadge,
  FavoriteIconContainer,
  FavoritesButton,
} from "./HeaderStyles";

import { useFavorites } from "../../Context/FavoritesContext";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { favoritesFilter, toggleFavoritesFilter, favorites } = useFavorites();
  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta se é mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -50, height: 0 },
    visible: {
      opacity: 1,
      x: 0,
      height: "auto",
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, x: -50, height: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      <ContentWrapper>
        <Logo>
          <Image src="/logo/PSALogo.png" alt="Logo" width={40} height={40} />
        </Logo>

        {/* Exibição para desktop */}
        {!isMobile && (
          <>
            <SearchWrapper>
              <SearchContainer>
                <input type="text" placeholder="Pesquisar cursos..." />
                <button>
                  <FiSearch />
                </button>
              </SearchContainer>
            </SearchWrapper>
            <ActionsContainer>
            <button 
              className="favorites"
              onClick={toggleFavoritesFilter}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", position: "relative" }}
            >
              <FavoriteIconContainer>
                {favorites.length > 0 ? (
                  <AiFillHeart color="#013354" size={20} />
                ) : (
                  <FiHeart color="#013354" size={20} />
                )}
                {favorites.length > 0 && (
                  <FavoriteCountBadge>
                    {favorites.length}
                  </FavoriteCountBadge>
                )}
              </FavoriteIconContainer>
              <FavSpan>Favoritos</FavSpan>
            </button>
              <div className="profile">
                <Image src="/images/profile/pedro_sobral.jpg" alt="Perfil" width={32} height={32} />
                <NameSpan>{user.name}</NameSpan>
                <FiChevronDown />
              </div>
            </ActionsContainer>
          </>
        )}

        {/* Exibição para mobile: mostra ícone de menu */}
        {isMobile && (
          <MobileIcon onClick={toggleMenu}>
            {menuOpen ? (
              <FiX color="#013354" size={24} />
            ) : (
              <div
                style={{
                  backgroundColor: "#d8eaf7",
                  borderRadius: "50%",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiMenu color="#013354" size={24} />
              </div>
            )}
          </MobileIcon>
        )}
      </ContentWrapper>

      {/* Menu drop-down mobile */}
      {isMobile && (
        <AnimatePresence>
          {menuOpen && (
            <MobileMenu
              as={motion.div}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <MobileMenuItem as={motion.div} variants={itemVariants}>
                <SearchContainer style={{ width: "100%" }}>
                  <input type="text" placeholder="Pesquisar cursos..." />
                  <button>
                    <FiSearch color="#013354" />
                  </button>
                </SearchContainer>
              </MobileMenuItem>
              <MobileMenuItem as={motion.div} variants={itemVariants}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src="/images/profile/pedro_sobral.jpg"
                    alt="Perfil"
                    width={32}
                    height={32}
                    style={{ borderRadius: "50%" }}
                  />
                  <NameSpan>{user.name}</NameSpan>
                </div>
              </MobileMenuItem>
              <MobileMenuItem as={motion.div} variants={itemVariants}>
              <FavoritesButton onClick={toggleFavoritesFilter}>
                  <FavoriteIconContainer>
                    {favorites.length > 0 ? (
                      <AiFillHeart color="#013354" size={20} />
                    ) : (
                      <FiHeart color="#013354" size={20} />
                    )}
                    {favorites.length > 0 && (
                      <FavoriteCountBadge>{favorites.length}</FavoriteCountBadge>
                    )}
                  </FavoriteIconContainer>
                  <FavSpan>Favoritos</FavSpan>
                </FavoritesButton>
              </MobileMenuItem>
            </MobileMenu>
          )}
        </AnimatePresence>
      )}
    </HeaderContainer>
  );
};

export default Header;
