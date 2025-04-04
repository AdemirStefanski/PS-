import React from "react";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";      
import { AiFillHeart } from "react-icons/ai";   
import {
  CardContainer,
  CardHeader,
  LogoImage,
  Title,
  Description,
  ActionButton,
  FavoriteIconWrapper,
} from "./CardStyles";

import { useFavorites } from "../../Context/FavoritesContext";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
  stack_logo: string;
}

interface UserCourse {
  courseId: number;
  dateJoined: string;
}

interface User {
  id: number;
  name: string;
  courses: UserCourse[];
}

interface CardProps {
  course: Course;
  user: User;
}

const Card: React.FC<CardProps> = ({ course, user }) => {
  const isEnrolled = user.courses.some((c) => c.courseId === course.id);

  const { favorites, toggleFavorite } = useFavorites();
const isFavorited = favorites.includes(course.id);
  

  return (
    <CardContainer $isEnrolled={isEnrolled}>
      <FavoriteIconWrapper onClick={() => toggleFavorite(course.id)}>
        {isFavorited ? (
          <AiFillHeart color="#013354" size={20} />
        ) : (
          <FiHeart color="#013354" size={20} />
        )}
      </FavoriteIconWrapper>
      <CardHeader>
        <LogoImage src={course.stack_logo} alt="Stack Logo" />
        <Title>{course.title}</Title>
      </CardHeader>
      <Description>{course.description}</Description>
      <Link href={`/course/${course.id}`} passHref>
        <ActionButton $isEnrolled={isEnrolled}>
          {isEnrolled ? "Assistir" : "Comprar"}
        </ActionButton>
      </Link>
    </CardContainer>
  );
};

export default Card;
