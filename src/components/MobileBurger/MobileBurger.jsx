import {
  BurgerButtonExit,
  BurgerButtonLogAut,
  BurgerButtonWraper,
  BurgerContainer,
  BurgerContainerContant,
  BurgerExit,
  BurgerLinkWraper,
  HeaderLink,
} from "./MobileBurger.Styled";
import SvgClose from "../../images/SvgClose";

const MobileBurger = ({ isOpen, handleLogout, closeModal }) => {
  const user = true;
  return (
    <>
      <BurgerContainer className={isOpen ? "open" : ""}>
        <BurgerContainerContant>
          <BurgerExit>
            <BurgerButtonExit onClick={closeModal}>
              <SvgClose />
            </BurgerButtonExit>
          </BurgerExit>
          <BurgerLinkWraper>
            <HeaderLink
              to="/"
              aria-label="return to the home page"
              //   style={{ textDecoration: "none" }}
            >
              Home
            </HeaderLink>
            <HeaderLink
              to="/products"
              aria-label="return to the product page"
              //   style={{ textDecoration: "none" }}
            >
              Products
            </HeaderLink>
          </BurgerLinkWraper>

          <BurgerButtonWraper>
            {!user ? (
              <>
                <BurgerButtonLogAut onClick={handleLogout}>
                  Log in
                </BurgerButtonLogAut>
                <BurgerButtonLogAut onClick={handleLogout}>
                  Registration
                </BurgerButtonLogAut>
              </>
            ) : (
              <>
                <BurgerButtonLogAut onClick={handleLogout}>
                  Log out
                </BurgerButtonLogAut>
              </>
            )}
          </BurgerButtonWraper>
        </BurgerContainerContant>
      </BurgerContainer>
    </>
  );
};

export default MobileBurger;
