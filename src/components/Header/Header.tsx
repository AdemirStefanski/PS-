"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiSearch, FiHeart, FiChevronDown, FiMenu, FiX, FiLogOut } from "react-icons/fi";
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
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); 
  const profileRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { favoritesFilter, toggleFavoritesFilter, favorites } = useFavorites();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta se é mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    };
    if (!isMobile && profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuOpen, isMobile]);

  
  useEffect(() => {
    const handleClickOutsideMobile = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (isMobile && menuOpen) {
      document.addEventListener("mousedown", handleClickOutsideMobile);
    }
    return () => document.removeEventListener("mousedown", handleClickOutsideMobile);
  }, [menuOpen, isMobile]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    router.push(`/?search=${encodeURIComponent(query)}`);
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

  
  const handleMyCourses = () => {
    router.push("/?mine=true");
    setProfileMenuOpen(false);
    setMenuOpen(false);
  };

  return (
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      <ContentWrapper>
        
        <Logo>
          <Link href="/" onClick={() => { if (favoritesFilter) toggleFavoritesFilter(); }}>
            <Image src="/logo/PSALogo.png" alt="Logo" width={50} height={50} />
          </Link>
        </Logo>

        
        {!isMobile && (
          <>
            <SearchWrapper>
              <SearchContainer>
                <input
                  type="text"
                  placeholder="Pesquisar cursos..."
                  onChange={handleSearchChange}
                />
                <button>
                  <FiSearch />
                </button>
              </SearchContainer>
            </SearchWrapper>
            <ActionsContainer>
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
              <div
                className="profile"
                ref={profileRef}
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => setProfileMenuOpen((prev) => !prev)}
              >
                <Image src="/images/profile/pedro_sobral.jpg" alt="Perfil" width={32} height={32} />
                <NameSpan>{user.name}</NameSpan>
                <FiChevronDown />
                
                {profileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      background: "#fff",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      borderRadius: "4px",
                      padding: "8px 0",
                      zIndex: 100,
                      minWidth: "180px",
                    }}
                  >
                    <div style={{ padding: "8px 16px", cursor: "pointer" }}>
                      Editar Perfil
                    </div>
                    <div
                      style={{ padding: "8px 16px", cursor: "pointer" }}
                      onClick={handleMyCourses}
                    >
                      Meus Cursos
                    </div>
                    <div
                      style={{
                        padding: "8px 16px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <FiLogOut color="#013354" />
                      Sair
                    </div>
                  </motion.div>
                )}
              </div>
            </ActionsContainer>
          </>
        )}

        
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

      
      {isMobile && (
        <AnimatePresence>
          {menuOpen && (
            <MobileMenu
              ref={mobileMenuRef}
              as={motion.div}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <MobileMenuItem as={motion.div} variants={itemVariants}>
                <SearchContainer style={{ width: "100%" }}>
                  <input
                    type="text"
                    placeholder="Pesquisar cursos..."
                    onChange={handleSearchChange}
                  />
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
                  onClick={handleMyCourses}
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
                <div
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                  }}
                  onClick={handleMyCourses}
                >
                  Meus Cursos
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
              <MobileMenuItem as={motion.div} variants={itemVariants}>
                <div
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onClick={() => {
                    router.push("/");
                    setMenuOpen(false);
                  }}
                >
                  <FiLogOut color="#013354" size={20} />
                  Sair
                </div>
              </MobileMenuItem>
            </MobileMenu>
          )}
        </AnimatePresence>
      )}
    </HeaderContainer>
  );
};

export default Header;
