import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import { ArrowSVG } from "./IconSVG";

const ping = keyframes`
   0%,20%,50%,80%,to {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    40% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px)
    }

    60% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px)
    }
`;

export const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;

  svg {
    animation: ${ping} 2s infinite;
  }
`;

export const Arrow = styled(ArrowSVG)`
  width: 32px;
  height: 32px;
`;
