import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper/swipper.css";
import styled from "styled-components";

const Wrapper = styled(Swiper)`
  max-width: 960px;
  width: 100%;
  margin: auto;
  padding: 150px 0;
`;

const FeedbackCarasoul = () => {
  return (
    <>
      <Wrapper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Wrapper>
    </>
  );
};

export default FeedbackCarasoul;