"use client";

import React, { useRef, useState } from "react";
import { useParams } from "next/navigation";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import {
  PageContainer,
  HeaderSection,
  CourseLogo,
  CourseTitle,
  FavoriteIconContainer,
  VideoContainer,
  DescriptionText,
  InfoRow,
  InfoLabel,
  ControlsContainer,
  ControlButton,
  VolumeSlider,
  ResponsiveYouTubeWrapper,
  PriceText,
  PurchaseButton,
  DescripContainer,
} from "./pageStyles";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import courses from "../../../data/cursos.json";
import user from "../../../data/user.json";
import { useFavorites } from "../../../Context/FavoritesContext";
import Image from "next/image";

// Função para converter data de AAAA-MM-DD para DD/MM/AAAA
const formatDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

// Função para extrair o videoId de um link do YouTube
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
};

const CoursePage = () => {
  const { id } = useParams();
  const courseId = Number(id);

  const course = courses.find((c: any) => c.id === courseId);
  if (!course) return <div>Curso não encontrado</div>;

  // Verifica se o curso foi adquirido pelo usuário
  const purchased = user.courses.find((c: any) => c.courseId === courseId);
  const isPurchased = Boolean(purchased);
  const acquiredDate = purchased ? formatDate(purchased.dateJoined) : "";

  const videoRef = useRef<YouTubePlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); 
  const [playbackRate, setPlaybackRate] = useState(1);

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      controls: 0, 
      rel: 0, 
      showinfo: 0,
    },
  };

  const handleVideoReady: YouTubeProps["onReady"] = (event) => {
    videoRef.current = event.target;
    event.target.setVolume(volume);
    event.target.setPlaybackRate(playbackRate);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pauseVideo();
    } else {
      videoRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.seekTo(0);
      if (!isPlaying) {
        videoRef.current.playVideo();
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseInt(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.setVolume(newVol);
    }
  };

  const changeSpeed = (delta: number) => {
    const newSpeed = playbackRate + delta;
    setPlaybackRate(newSpeed);
    if (videoRef.current) {
      videoRef.current.setPlaybackRate(newSpeed);
    }
  };

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(course.id);

  const videoId = getYouTubeVideoId(course.link_curso || "");

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

      <VideoContainer $purchased={isPurchased}>
        {isPurchased && videoId ? (
          <ResponsiveYouTubeWrapper >
            <YouTube videoId={videoId} opts={opts} onReady={handleVideoReady} />
          </ResponsiveYouTubeWrapper>
        ) : (
          <ResponsiveYouTubeWrapper style={{ display: isPurchased ? "block" : "none" }}>
          </ResponsiveYouTubeWrapper>
        )}
        <DescripContainer>
          <div style={{ textAlign: "left", marginTop: "16px" }}>
            
              <DescriptionText style={{ fontSize: isPurchased ? "1rem" : "1.2rem" }}>
                {course.description}
              </DescriptionText>
              {!isPurchased && (
                <>
                  <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                    <InfoLabel>Criado em:</InfoLabel>
                    <span>{formatDate(course.created_at)}</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px" }}>
                    <PriceText>{`R$ ${Math.floor(course.price)},00`}</PriceText>
                    <PurchaseButton>Adquirir Curso</PurchaseButton>
                  </div>
                </>
            )}
            {isPurchased && (
              <InfoRow>
                <div>
                  <InfoLabel>Criado em:</InfoLabel>
                  <span>{formatDate(course.created_at)}</span>
                </div>
                <div>
                  <InfoLabel>Adquirido em:</InfoLabel>
                  <span>{acquiredDate}</span>
                </div>
              </InfoRow>
            )}
            
          </div>
        </DescripContainer>  
      </VideoContainer>

      {isPurchased && (
        <ControlsContainer>

          <ControlButton onClick={handlePlayPause}>
            {isPlaying ? (
              <Image
                src="/videocontrols/pause.png"
                alt="Pause"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/videocontrols/play.png"
                alt="Play"
                width={24}
                height={24}
              />
            )}
          </ControlButton>

          <ControlButton onClick={handleRestart}>
            <Image
              src="/videocontrols/restartVideo.png"
              alt="Reiniciar Vídeo"
              width={24}
              height={24}
            />
          </ControlButton>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Image
              src="/videocontrols/sound.png"
              alt="Volume"
              width={24}
              height={24}
            />
            <VolumeSlider
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>

          <ControlButton onClick={() => changeSpeed(-0.25)}>
            <Image
              src="/videocontrols/speedDown.png"
              alt="Diminuir Velocidade"
              width={24}
              height={24}
            />
          </ControlButton>

          <ControlButton onClick={() => changeSpeed(0.25)}>
            <Image
              src="/videocontrols/speedUp.png"
              alt="Aumentar Velocidade"
              width={24}
              height={24}
            />
          </ControlButton>
        </ControlsContainer>
      )}
    </PageContainer>
  );
};

export default CoursePage;
