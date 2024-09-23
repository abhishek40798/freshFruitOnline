import { colors, images } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  margin: auto;
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ListBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ListIcon = styled.div`
  display: block;
  font-size: 24px;
  margin-right: 15px;
  color: ${colors.primaryColor};
  width: 65px;
  height: 65px;
  text-align: center;
  line-height: 70px;
  border: 2px ${colors.primaryColor} dotted;
  border-radius: 999px;
`;

const ListContent = styled.div`
  h3 {
    display: block;
    line-height: 22px;
    font-size: 18px;
    margin-bottom: 4px;
  }

  p {
    margin-bottom: 0px;
    opacity: 0.75;
  }
`;

interface ListProps {
  img: string;
  title: string;
  subTitle: string;
}

const listData: ListProps[] = [
  {
    img: images.localShipping,
    title: "Free Shipping",
    subTitle: "When order over $75",
  },
  {
    img: images.call,
    title: "24/7 Support",
    subTitle: "Get support all day",
  },
  {
    img: images.refresh,
    title: "Refund",
    subTitle: "Get refund within 3 days!",
  },
];

const ListSection = () => {
  return (
    <Wrapper>
      {listData.map((list, i) => (
        <ListBox key={i}>
          <ListIcon>
            <Image alt="" src={list.img} />
          </ListIcon>
          <ListContent>
            <h3>{list.title}</h3>
            <p>{list.subTitle}</p>
          </ListContent>
        </ListBox>
      ))}
    </Wrapper>
  );
};

export default ListSection;
