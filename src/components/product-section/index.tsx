import { colors, convertRupeesToDollars, images } from "@/constants";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import FButton from "../FButton";
import ProductDialog from "../dialogs/productDialog";

const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  margin: auto;
  padding: 150px 0;
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

interface ProductProps {
  img: StaticImageData;
  name: string;
  rupees: number;
}

const products: ProductProps[] = [
  {
    img: images.product1,
    name: "Strawberry",
    rupees: 7103,
  },
  {
    img: images.product2,
    name: "Berry",
    rupees: 5849,
  },
  {
    img: images.product3,
    name: "Lemon",
    rupees: 2924,
  },
];

const ProductSection = () => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Row>
          <OffsetLg2 className="col-lg-8 offset-lg-2 text-center">
            <SectionTitle>
              <h3>
                <span style={{ color: `${colors.primaryColor}` }}>Our</span>{" "}
                Products
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, fuga quas itaque eveniet beatae optio.
              </p>
            </SectionTitle>
          </OffsetLg2>
        </Row>

        <Row>
          {products.map((product, i) => (
            <ProductBox key={i}>
              <ProductItem>
                <ProductImageSection>
                  <Link href="">
                    <Image
                      src={product.img}
                      alt=""
                      style={{
                        width: "220px",
                        height: "220px",
                        objectFit: "contain",
                      }}
                    />
                  </Link>
                </ProductImageSection>
                <h3>{product.name}</h3>
                <Text>
                  <span>Per Kg</span> {convertRupeesToDollars(product.rupees)}
                </Text>
                <FButton text="Add to cart" />
              </ProductItem>
            </ProductBox>
          ))}
        </Row>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <FButton
            text="Add Product"
            icon={<Image src={images.Cart} alt="" />}
            onClick={()=> setDialogOpen(true)}
          />
        </div>
      </Wrapper>

      {isDialogOpen && <ProductDialog isOpen={isDialogOpen} onCLose={handleClose} />}
    </>
  );
};

export default ProductSection;
