import React from "react";
import { useTransform } from "framer-motion";
import ArrowBottom from "../ArrowBottom";
import useWrapperScroll from "../Model/useWrapperScroll";

import { Container, Header, Logo, Buger, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Buger />
      </Header>
      <ArrowBottom />

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="/#">UI Clone Tesla with Color</a>
          </li>
          <li>
            <a href="/#">UI Clone Tesla with Color</a>
          </li>
          <li>
            <a href="/#">UI Clone Tesla with Color</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
