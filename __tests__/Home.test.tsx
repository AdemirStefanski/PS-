jest.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams("search=java"),
  useRouter: () => ({ push: jest.fn() }),
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";  
import { FavoritesProvider } from "../src/Context/FavoritesContext";

describe("Home Page", () => {
  test("filters courses based on search query", () => {
    render(
      <FavoritesProvider>
        <Home />
      </FavoritesProvider>
    );
    const courseElement = screen.getByText(/javascript avançado/i);
    expect(courseElement).toBeInTheDocument();
  });
});
