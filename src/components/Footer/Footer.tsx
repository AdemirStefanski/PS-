"use client";

import React from "react";
import { FooterContainer, FooterLeft, FooterRight, ContentWrapper } from "./FooterStyles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterLeft>
          Grupo Permaneo <span>&reg;</span>
        </FooterLeft>
        <FooterRight>
          Desenvolvido por Ademir Stefanski
        </FooterRight>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
