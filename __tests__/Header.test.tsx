jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header/Header"; 
import { FavoritesProvider } from "../src/Context/FavoritesContext";

const HeaderWrapper = () => (
  <FavoritesProvider>
    <Header />
  </FavoritesProvider>
);

describe("Header Component", () => {
  test("renders logo and search input", () => {
    render(<HeaderWrapper />);
    
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    
    const searchInput = screen.getByPlaceholderText("Pesquisar cursos...");
    expect(searchInput).toBeInTheDocument();
  });
});
