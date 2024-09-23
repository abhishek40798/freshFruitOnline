import { colors, images } from "@/constants";
import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  background-image: url(${images.herobg.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: 1;
  height: 100vh;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: #07212e;
    z-index: 0; 
    opacity: 0.5;
  }
`;


const HeroText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTextTableCell = styled.div`
  height: auto;
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: ${colors.primaryColor};
`;

const HeroButtons = styled.div`
  margin-top: 20px;
`;

const BoxedButton = styled.a`
  font-family: "Poppins", sans-serif;
  display: inline-block;
  background-color: ${colors.primaryColor};
  color: ${colors.white};
  border: 2px solid ${colors.primaryColor};
  padding: 10px 20px;
  border-radius: 50px;
  &:hover {
    background-color: transparent;
  }
`;

const BorderedButton = styled.a`
  font-family: "Poppins", sans-serif;
  display: inline-block;
  color: ${colors.white} !important;
  border: 2px solid ${colors.primaryColor};
  padding: 7px 20px;
  border-radius: 50px;
  margin-left: 15px;
  &:hover {
    background-color: ${colors.primaryColor};
  }
`;

const HeroTopSection = () => {
  return (
    <HeroSection>
    <HeroText>
      <HeroTextTableCell>
        <Subtitle>Fresh & Organic</Subtitle>
        <h1
          style={{
            fontWeight: 700,
            color: `${colors.white}`,
            lineHeight: 1.3,
            fontSize: "40px",
          }}
        >
          Delicious Seasonal Fruits
        </h1>
        <HeroButtons>
          <BoxedButton href="">Fruit Collection</BoxedButton>
          <BorderedButton href="">Contact Us</BorderedButton>
        </HeroButtons>
      </HeroTextTableCell>
    </HeroText>
  </HeroSection>
  );
};

export default HeroTopSection;