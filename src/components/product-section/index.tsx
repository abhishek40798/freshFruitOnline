import { colors, images } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import FButton from "../FButton";

const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 150px auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const ColumnLg8 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 66.67%;
    max-width: 66.67%;
  }
`;

const OffsetLg2 = styled(ColumnLg8)`
  @media (min-width: 992px) {
    margin-left: 16.67%;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  h3 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #777;
  }
`;

const ProductBox = styled.div`
  max-width: 33.33%;
  width: 100%;
  text-align: center;
  margin-top: 40px;
`;

const ProductItem = styled.div`
  margin-left: 20px;
  box-shadow: 0 0 20px #e4e4e4;
  padding-bottom: 40px;
  &:hover {
    box-shadow: none;
  }

  transition: 0.3s;
`;

const ProductImageSection = styled.div`
  padding: 60px;
  padding-bottom: 0;
`;

const Text = styled.p`
  span {
    display: block;
    opacity: 0.8;
    font-size: 15px;
    font-weight: 400;
  }

  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const ProductSection = () => {
  return (
    <Wrapper>
      <Row>
        <OffsetLg2 className="col-lg-8 offset-lg-2 text-center">
          <SectionTitle>
            <h3>
              <span style={{ color: `${colors.primaryColor}` }}>Our</span>{" "}
              Products
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              fuga quas itaque eveniet beatae optio.
            </p>
          </SectionTitle>
        </OffsetLg2>
      </Row>

      <Row>
        <ProductBox>
          <ProductItem>
            <ProductImageSection>
              <Link href="">
                <Image
                  src={images.product1}
                  alt=""
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </ProductImageSection>
            <h3>Strawberry</h3>
            <Text>
              <span>Per Kg</span> 70${" "}
            </Text>
            <FButton text="Add to cart" />
          </ProductItem>
        </ProductBox>

        <ProductBox>
          <ProductItem>
            <ProductImageSection>
              <Link href="">
                <Image
                  src={images.product1}
                  alt=""
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </ProductImageSection>
            <h3>Strawberry</h3>
            <Text>
              <span>Per Kg</span> 70${" "}
            </Text>
            <FButton text="Add to cart" />
          </ProductItem>
        </ProductBox>

        <ProductBox>
          <ProductItem>
            <ProductImageSection>
              <Link href="">
                <Image
                  src={images.product1}
                  alt=""
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </ProductImageSection>
            <h3>Strawberry</h3>
            <Text>
              <span>Per Kg</span> 70${" "}
            </Text>
            <FButton text="Add to cart" />
          </ProductItem>
        </ProductBox>
      </Row>
    </Wrapper>
  );
};

export default ProductSection;
