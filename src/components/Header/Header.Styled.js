import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
// import Logo from "../../images/Logo";
// import LogoTitleSvg from "../../images/LogoTitleSvg";

export const HeaderContainer = styled.div`
  /* background: grey; */
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 57px;
  /* margin-top: 20px; */
  @media (min-width: 768px) {
    padding-right: 16px;
    padding-left: 16px;
    /* margin-top: 32px; */
    height: 74px;
  }
`;
export const LogoLink = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  &:hover,
  &:focus {
    color: green;
  }
`;
// export const LogoStyled = styled(Logo)`
//   height: 17px;
//   @media only screen and (min-width: 1280px) {
//     display: none;
//   }
// `;
// export const LogoTitleSvgStyled = styled(LogoTitleSvg)`
//   height: 17px;
//   @media only screen and (max-width: 1279px) {
//     display: none;
//   }
// `;
export const HeaderUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const HeaderIconUser = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  /* background-color: #262626; */
  border: 1px solid rgba(49, 49, 49, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.p`
  @media only screen and (max-width: 1279px) {
    display: none;
  }
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: -0.02em;
  color: var(--white);
`;
export const HeaderButtonBurger = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const HeaderTabletWrap = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
export const HeaderDivLink = styled.nav`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 28px;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: -0.02em;
  color: #686868;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #797979;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background-color: #4f92f7;
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
  }
  &.active {
    color: #4f92f7;
  }
  &.active::before {
    width: 100%;
    opacity: 1;
  }

  &.inactive::before {
    width: 0;
    opacity: 0;
  }
  transition: transform 0.3s ease;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;
export const HeaderAuthButton = styled.button`
  @media only screen and (max-width: 767px) {
    display: none;
  }
  font-weight: 700;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.02em;
  color: #686868;
  border: 1px solid rgba(149, 149, 149, 0.2);
  border-radius: 30px;
  padding: 12px 28px;
  background-color: transparent;
`;

export const Square = styled.div`
  background-color: green;
  width: 200px;
  height: 200px;
  border: 2px solid red;
`;
