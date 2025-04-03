"use client";

import React from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import courses from "../data/cursos.json";
import user from "../data/user.json";
import { useFavorites } from "../Context/FavoritesContext";

const CardsContainer = styled.div`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
  padding-top: 100px;
`;

export default function Home() {
  const { favoritesFilter, favorites } = useFavorites();

  const filteredCourses = favoritesFilter
    ? courses.filter((course) => favorites.includes(course.id))
    : courses;

  return (
    <main>
      <CardsContainer>
        {filteredCourses.map((course) => (
          <Card key={course.id} course={course} user={user} />
        ))}
      </CardsContainer>
    </main>
  );
}
