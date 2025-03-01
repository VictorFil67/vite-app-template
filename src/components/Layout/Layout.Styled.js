import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
