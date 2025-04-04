import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../src/components/Card/Card";
import { FavoritesProvider } from "../src/Context/FavoritesContext";

const courseMock = {
  id: 1,
  title: "JavaScript Avançado",
  description: "Descrição do curso de JavaScript",
  price: 59.99,
  created_at: "2023-03-05",
  stack_logo: "/stack_logos/javascript.png",
  link_curso: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

const userMock = {
  id: 1,
  name: "John Doe",
  courses: [
    {
      courseId: 1,
      dateJoined: "2023-03-10",
    },
  ],
};

describe("Card Component", () => {
  test("renders course data and shows 'Assistir' when enrolled", () => {
    render(
      <FavoritesProvider>
        <Card course={courseMock} user={userMock} />
      </FavoritesProvider>
    );
    expect(screen.getByText(/javascript avançado/i)).toBeInTheDocument();
    expect(screen.getByText(/assistir/i)).toBeInTheDocument();
  });

  test("renders course data and shows 'Comprar' when not enrolled", () => {
    const userNotEnrolled = { ...userMock, courses: [] };
    render(
      <FavoritesProvider>
        <Card course={courseMock} user={userNotEnrolled} />
      </FavoritesProvider>
    );
    expect(screen.getByText(/javascript avançado/i)).toBeInTheDocument();
    expect(screen.getByText(/comprar/i)).toBeInTheDocument();
  });
});
