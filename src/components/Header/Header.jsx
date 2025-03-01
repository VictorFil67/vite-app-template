import { useEffect, useState } from "react";
import BurgerOpen from "../../images/BurgerOpen";
import {
  HeaderAuthButton,
  HeaderButtonBurger,
  HeaderContainer,
  HeaderDivLink,
  HeaderIconUser,
  HeaderLink,
  HeaderUserContainer,
  LogoLink,
  Name,
} from "./Header.Styled";
import Backdrop from "../Backdrop/Backdrop";
import MobileBurger from "../MobileBurger/MobileBurger";

import { Modal } from "../Modal/Modal";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { logOutThunk } from "../../store/auth/operations";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [modal, setModal] = useState(false);
  const [mode, setmode] = useState("login");
  const user = useSelector(selectUser);
  const userName = user && user.name;
  const firstLetter = user && user.name ? user.name.charAt(0) : "";

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const handleBurgerOpen = () => {
    setBurgerMenu(!burgerMenu);
    setBackdrop(true);
  };

  const closeModal = () => {
    setBurgerMenu(false);
    setBackdrop(false);
    setModal(false);
  };

  const openRegistration = () => {
    setModal(true);
    setmode("registration");
    console.log("mode: ", mode);
  };
  const openLogin = () => {
    setModal(true);
    setmode("login");
    console.log("mode: ", mode);
  };

  return (
    <>
      <>
        {backdrop && <Backdrop closeModal={closeModal} mode={mode} />}
        {setBurgerMenu && (
          <>
            <MobileBurger closeModal={closeModal} isOpen={burgerMenu} />
          </>
        )}
      </>
      <HeaderContainer>
        <LogoLink to={"/"}>LOGO</LogoLink>
        <HeaderDivLink>
          <HeaderLink to={"/"} aria-label="Home">
            Home
          </HeaderLink>

          <HeaderLink to={"/products"} aria-label="Products">
            Products
          </HeaderLink>
        </HeaderDivLink>
        {!user ? (
          <HeaderUserContainer>
            <HeaderAuthButton onClick={openLogin}>Log In</HeaderAuthButton>
            <HeaderAuthButton onClick={openRegistration}>
              Registration
            </HeaderAuthButton>

            <HeaderButtonBurger onClick={handleBurgerOpen}>
              <BurgerOpen />
            </HeaderButtonBurger>
          </HeaderUserContainer>
        ) : (
          <>
            <HeaderUserContainer>
              <HeaderIconUser>
                <span>{firstLetter}</span>
              </HeaderIconUser>
              <Name>{userName}</Name>
              <HeaderAuthButton onClick={() => dispatch(logOutThunk())}>
                Log out
              </HeaderAuthButton>

              <HeaderButtonBurger onClick={handleBurgerOpen}>
                <BurgerOpen />
              </HeaderButtonBurger>
            </HeaderUserContainer>
          </>
        )}
      </HeaderContainer>
      {modal &&
        createPortal(
          <Modal closeModal={closeModal} mode={mode} setmode={setmode} />,
          document.body
        )}
      {/* {modal &&
        (createPortal(<Modal closeModal={closeModal} />), document.body)} */}
      {/* {modalLogIn &&
        createPortal( */}
      {/* <LoginForm close={handleCloseModal} /> */}
      {/* // , document.body)
        // } */}
      {/* {modalRegistration && <RegisterForm close={handleCloseModal} />} */}
    </>
  );
};

export default Header;
