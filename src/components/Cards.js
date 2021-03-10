import React from "react";
import {
  Container,
  ImageContainer,
  Subtitle,
  Title,
  Price,
  Description,
  BookContainer,
  CartContainer,
} from "../styles/CardStyles";

// Import icons
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const Cards = ({ subtitle, title, price, image }) => {
  return (
    <Container
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 80 }}>
      <ImageContainer>
        <img src={image} alt="Nike" />
        <BookContainer>
          <BsFillBookmarkFill />
        </BookContainer>
      </ImageContainer>
      <Description>
        <Subtitle>{subtitle}</Subtitle>
        <Title> {title} </Title>
        <Price> {price} </Price>
      </Description>
      <CartContainer>
        <FaShoppingBag />
      </CartContainer>
    </Container>
  );
};

export default Cards;
