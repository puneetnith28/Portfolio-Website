import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Card = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(213, 208, 208, 0.5);
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.05);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayButtons = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;

const OverlayButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + "CC"};
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 8px;
  line-height: 1.4;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  cursor: pointer;
  margin-top: 6px;
  align-self: flex-start;
  padding: 0;
`;

const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleDescription = () => setShowMore(!showMore);

  const displayedDescription = showMore
    ? project.description
    : project.description.slice(0, 100) + (project.description.length > 100 ? "..." : "");

  return (
    <Card>
      <ImageWrapper>
        <Image src={project.image} alt={project.title} />
        <OverlayButtons>
          <OverlayButton href={project.liveLink} target="_blank">
            🌐 Live Demo
          </OverlayButton>
          <OverlayButton href={project.github} target="_blank">
            <FaGithub size={16} />
            View Code
          </OverlayButton>
        </OverlayButtons>
      </ImageWrapper>

      <Details>
        <Title>{project.title}</Title>
        <Description>
          {displayedDescription}
          {project.description.length > 100 && (
            <ToggleButton onClick={toggleDescription}>
              {showMore ? "View Less" : "View More"}
            </ToggleButton>
          )}
        </Description>
      </Details>
    </Card>
  );
};

export default ProjectCard;
