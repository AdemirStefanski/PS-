"use client";

import React from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import coursesData from "../data/cursos.json";
import userData from "../data/user.json";
import { useFavorites } from "../Context/FavoritesContext";
import { useSearchParams } from "next/navigation";
import { Course, User } from "../types";

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
  const searchQuery = useSearchParams()?.get("search")?.toLowerCase() || "";
  const mineFilter = searchParams.get("mine") === "true";

  const courses: Course[] = coursesData;
  const user: User = userData;

  let filteredCourses = courses;

  if (mineFilter) {
    filteredCourses = courses.filter((course) =>
      user.courses.some((c) => c.courseId === course.id)
    );
  } else if (favoritesFilter) {
    filteredCourses = courses.filter((course) =>
      favorites.includes(course.id)
    );
  } else if (searchQuery) {
    filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery) ||
        course.description.toLowerCase().includes(searchQuery)
    );
  }

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
