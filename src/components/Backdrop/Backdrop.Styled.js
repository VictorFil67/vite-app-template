import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    backdrop-filter: grayscale(0%) blur(0);
  }
  to {
    backdrop-filter: grayscale(100%) blur(2px);
  }
`;

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: grayscale(0%) blur(0);
  z-index: 6;
  animation: ${fadeIn} 0.3s ease-in forwards;
`;
