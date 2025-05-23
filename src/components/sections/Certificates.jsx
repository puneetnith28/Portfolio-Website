import React, { useState } from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import CertificatesCard from "../cards/CertificatesCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 25px;
  font-weight: 500;
  margin: 22px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 10px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  background: ${({ active, theme }) => (active ? theme.primary : "transparent")};
  color: ${({ active, theme }) => (active ? "white" : theme.primary)};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.primary : theme.primary + "33"}; /* 20% opacity */
    color: ${({ active, theme }) => (active ? "white" : theme.primary)};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
  opacity: 0.3;
  margin: 8px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Certificates = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="Certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Every certificate represents a step forward in my journey of skill development and knowledge.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "achivement"}
            onClick={() => setToggle("achivement")}
          >
            ACHIVEMENTS
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "participation"}
            onClick={() => setToggle("participation")}
          >
            PARTICIPATIONS
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "all" &&
            certificates.map((certificates) => <CertificatesCard certificates={certificates} />)}
          {certificates
            .filter((item) => item.category === toggle)
            .map((certificates) => (
              <CertificatesCard certificates={certificates} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
