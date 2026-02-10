import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  padding: 10px 18px;
  max-width: 180px;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  color: white;

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }
`;

const MobileNavButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 100%;
  text-align: center;
  padding: 12px 0;
  background: hsla(271, 100%, 50%, 1);
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  color: white;
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">&lt;Puneet Yadav/&gt;</NavLogo>

        <NavItems>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Blogs">Blogs</NavLink>
          {/* <NavLink href="#Certificates">Certificates</NavLink> */}
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        <NavRight>
          <NavButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </NavButton>
        </NavRight>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Blogs">
              Blogs
            </NavLink>
            {/* <NavLink onClick={() => setIsOpen(!isOpen)} href="#Certificates">
              Certificates
            </NavLink> */}
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <MobileNavButton
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(!isOpen)}
            >
              GitHub Profile
            </MobileNavButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
