import React from "react";
import styled from "styled-components";
import { PiCertificateBold } from "react-icons/pi"; 

const Card = styled.div`
  width: 330px;
  height: 320px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(213, 208, 208, 0.5);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.0);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const ViewButton = styled.a`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + "CC"};
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  text-align: center;
`;

const CertificatesCard = ({ certificates }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={certificates.image} />
        <ViewButton href={certificates.link} target="_blank">
          <PiCertificateBold size={16} />
          View
        </ViewButton>
      </ImageWrapper>
      <Details>
        <Title>{certificates.title}</Title>
      </Details>
    </Card>
  );
};

export default CertificatesCard;
