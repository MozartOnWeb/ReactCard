
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  cursor: pointer;
  width: 351px;
  height: 320px;
  border: 0.01px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export const ImageContainer = styled.div`
  width: 351px;
  height: 206px;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export const Description = styled.div`
  width: fit-content;
  margin-top: 15px;
  margin-left: 25px;
  line-height: 30px;
`;

export const Subtitle = styled.h6`
  opacity: 0.5;
  font-size: 13px;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #171616;
  margin: 0;
`;

export const Price = styled.h2`
  font-size: 16px;
  color: #538ed1;
  margin: 0;
`;

export const BookContainer = styled.div`
  position: absolute;
  cursor: pointer;
  border-radius: 8px;
  left: 5%;
  top: 8%;
  height: 35px;
  width: 30px;
  background: #538ed1;
  svg {
    position: absolute;
    height: 23px;
    width: 23px;
    left: 10%;
    top: 18%;

    path {
      fill: #fff;
    }
  }
`;

export const CartContainer = styled.div`
  position: absolute;
  right: 5%;
  bottom: 5%;
  cursor: pointer;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  background: #1d1c1c;
  svg {
    position: absolute;
    height: 23px;
    width: 23px;
    left: 20%;
    top: 18%;

    path {
      fill: #fff;
    }
  }
`;
