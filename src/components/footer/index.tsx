"use client";
import { colors } from "@/constants";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 80px 0;
  background-color: ${colors.black};
`;

const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 25%;
  border: 1px solid #000;
`;

const FooterBox = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: ${colors.white};
  font-weight: 500;
`;

const Text = styled.p`
  color: ${colors.white};
  opacity: 0.7;
  font-size: 12px;
`;

const StyledLink = styled(Link)`
    font-size: 12px;
    color: ${colors.white};
    opacity: 0.7;
    ::before {
        content: ">";
        color: #FFF;
    }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Column>
          <FooterBox>
            <Title>About us</Title>
            <Text>
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae.
            </Text>
          </FooterBox>
        </Column>

        <Column>
          <FooterBox>
            <Title>Get in Touch</Title>
            <ul
              style={{
                fontSize: "12px",
                opacity: 0.7,
                color: "#FFF",
                listStyle: "none",
              }}
            >
              <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
              <li>support@fruitkha.com</li>
              <li>+00 111 222 3333</li>
            </ul>
          </FooterBox>
        </Column>

        <Column>
          <FooterBox>
            <Title>Pages</Title>
            <ul>
              <li>
                <StyledLink href="index.html">Home</StyledLink>
              </li>
              <li>
                <StyledLink href="about.html">About</StyledLink>
              </li>
              <li>
                <StyledLink href="services.html">Shop</StyledLink>
              </li>
              <li>
                <StyledLink href="news.html">News</StyledLink>
              </li>
              <li>
                <StyledLink href="contact.html">Contact</StyledLink>
              </li>
            </ul>
          </FooterBox>
        </Column>

        <Column>
          <FooterBox>
            <Title>Subscribe</Title>
            <Text>
              Subscribe to our mailing list to get the latest updates.
            </Text>
          </FooterBox>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Footer;
