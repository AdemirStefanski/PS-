"use client";

import React, { useRef, useState } from "react";
import { useParams } from "next/navigation"; 
import {
  PageContainer,
  HeaderSection,
  CourseLogo,
  CourseTitle,
  FavoriteIconContainer,
  VideoContainer,
  VideoFrame,
  DescriptionText,
  InfoRow,
  InfoLabel,
  ControlsContainer,
  ControlButton,
  VolumeSlider,
} from "./pageStyles";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import courses from "../../../data/cursos.json";
import user from "../../../data/user.json";
import { useFavorites } from "../../../Context/FavoritesContext";

// converter data de AAAA-MM-DD para DD/MM/AAAA
const formatDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

const CoursePage = () => {
  // Obtenha o courseId dos parâmetros de rota
  const { id } = useParams();
  const courseId = Number(id);

  const course = courses.find((c: any) => c.id === courseId);
  if (!course) return <div>Curso não encontrado</div>;

  // Verifica se o usuário adquiriu o curso
  const purchased = user.courses.find((c: any) => c.courseId === courseId);
  const isPurchased = Boolean(purchased);
  const acquiredDate = purchased ? formatDate(purchased.dateJoined) : "";

  // Configuração do vídeo
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
    }
  };

  const changeSpeed = (delta: number) => {
    const newSpeed = playbackRate + delta;
    setPlaybackRate(newSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(course.id);

  return (
    <PageContainer>
      <HeaderSection>
        <CourseLogo src={course.stack_logo} alt="Stack Logo" />
        <CourseTitle>{course.title}</CourseTitle>
        <FavoriteIconContainer onClick={() => toggleFavorite(course.id)}>
          {isFavorited ? (
            <AiFillHeart color="#013354" size={24} />
          ) : (
            <FiHeart color="#013354" size={24} />
          )}
        </FavoriteIconContainer>
      </HeaderSection>

      <VideoContainer>
        {isPurchased ? (
          <VideoFrame
            ref={videoRef}
            controls={false}
            src={course.link_curso}
          />
        ) : (
          <div style={{ textAlign: "center", padding: "40px", border: "1px solid #ccc" }}>
            Curso não adquirido. Por favor, compre para assistir.
          </div>
        )}
      </VideoContainer>

      <DescriptionText>{course.description}</DescriptionText>

      <InfoRow>
        <div>
          <InfoLabel>Criado em: </InfoLabel>
          <span>{formatDate(course.created_at)}</span>
        </div>
        {isPurchased && (
          <div>
            <InfoLabel>Adquirido em: </InfoLabel>
            <span>{acquiredDate}</span>
          </div>
        )}
      </InfoRow>

      {isPurchased && (
        <ControlsContainer>
          <ControlButton onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </ControlButton>
          <ControlButton onClick={handleRestart}>Reiniciar</ControlButton>
          <div>
            <label style={{ marginRight: "8px" }}>Volume:</label>
            <VolumeSlider
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
          <div>
            <ControlButton onClick={() => changeSpeed(0.25)}>Aumentar Vel.</ControlButton>
            <ControlButton onClick={() => changeSpeed(-0.25)}>Diminuir Vel.</ControlButton>
          </div>
        </ControlsContainer>
      )}
    </PageContainer>
  );
};

export default CoursePage;
