"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import "../Header/header.css";
import { images } from "@/constants";

const TopHeaderArea = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 960px;
  left: 50%;
  transform: translateX(-50%);
`;

const SiteLogoBox = styled.div`
  float: left;
  max-width: 150px;
`;

const List = styled.li`
  a:hover {
    color: #f28123;
    text-decoration: none;
  }
`;

const Header = () => {
  // const [hovered,setHovered] = useState(null);
  return (
    <TopHeaderArea id="sticker">
      <div className="main-menu-wrap">
        <SiteLogoBox>
          <Link href="">
            <Image
              src={images.logo}
              alt="logo"
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
          </Link>
        </SiteLogoBox>

        <nav className="main-menu">
          <ul>
            <List>
              <Link href="">Home</Link>
            </List>
            <List>
              <Link href="">About</Link>
            </List>
            <List>
              <Link href="">Pages</Link>
            </List>
            <List>
              <Link href="">News</Link>
            </List>
            <List>
              <Link href="">Contact</Link>
            </List>
            <List>
              <Link href="">Shop</Link>
            </List>
            <List>
              <Link href="">
                <Image
                  src={true ? images.Cart : images.hover_cart }
                  alt="cart"
                  style={{ width: "25px", height: "25px" }}
                />
              </Link>
              <Link href="">
                <Image
                  src={images.Search}
                  alt="cart"
                  style={{ width: "25px", height: "25px" }}
                />                
              </Link>
            </List>
          </ul>
        </nav>

        {/* <CartBox>
        <div>
          <Image
            src={constants.images.Cart}
            alt="cart"
            style={{ width: "30px", height: "30px" }}
          />
          </div>
          <div>
          <Image
            src={constants.images.Search}
            alt="cart"
            style={{ width: "30px", height: "30px", paddingLeft: "10px" }}
          />
          </div>
        </CartBox> */}
      </div>
    </TopHeaderArea>
  );
};

export default Header;
