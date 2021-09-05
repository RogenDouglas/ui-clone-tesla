import React from "react";
import { useTransform } from "framer-motion";
import useWrapperScroll from "../Model/useWrapperScroll";

import { Container, Arrow } from "./styles";

const ArrowBottom: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <Container style={{ opacity }}>
      <Arrow />
    </Container>
  );
};

export default ArrowBottom;
