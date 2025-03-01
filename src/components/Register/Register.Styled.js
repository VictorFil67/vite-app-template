import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  letter-spacing: 0.02em;
  /* color: var(--white);
  max-width: 444px; */
  @media only screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 0.9375;
  }
`;
// export const AuthSpan = styled.span`
//   color: rgba(227, 227, 227, 0.5);
//   @media only screen and (min-width: 768px) {
//   }
// `;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    gap: 40px;
  }
`;
export const AuthInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 472px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const AuthSubmitBlock = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  max-width: 472px;
  @media only screen and (min-width: 768px) {
    gap: 20px;
  }
`;
export const EmtyBlock = styled.div`
  height: 44px;
  @media only screen and (min-width: 768px) {
    height: 50px;
    margin-bottom: 42px;
  }
`;
export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  @media only screen and (min-width: 768px) {
    &:last-child {
      margin-bottom: 42px;
    }
  }
`;

export const AuthInput = styled.input`
  padding: 8px 18px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  width: 238px;
  min-width: 100%;

  outline: none;
  &::placeholder {
    color: #191a15;
  }

  &:focus-within {
    border: 1px solid #54be96;
  }
  @media only screen and (min-width: 768px) {
    padding: 16px 18px;
    width: 438px;
    height: 52px;
  }
`;
export const ErrorSpan = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
`;
export const AuthEyeBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 5px;
  background-color: transparent;
  border: none;
  padding: 0;
  height: 30px;
  width: 30px;
  z-index: 2;
  display: ${(props) => (props.$err ? "none" : "block")};
  @media only screen and (min-width: 768px) {
    top: 14px;
  }
`;
export const AuthButton = styled.button`
  border-radius: 30px;
  padding: 10px;
  border: none;
  background-color: #54be96;
  color: #fbfbfb;
  transition: all 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: var(--hover-green);
  }
  @media only screen and (min-width: 768px) {
    padding: 16px 56px;
    max-width: 438px;
    white-space: nowrap;
  }
`;
export const LinkStyled = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: var(--input-title);
  &:hover {
    color: var(--hover-green);
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
// export const ContentWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   background: #1f1f1f;
//   border-radius: 30px;
//   padding: 20px;
// `;
