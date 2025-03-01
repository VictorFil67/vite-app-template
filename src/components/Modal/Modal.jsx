import SvgClose from "../../images/SvgClose";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { CloseButton, ModalWindow, Overlay } from "./Modal.Styled";

export const Modal = ({ closeModal, mode, setmode, modal }) => {
  //   console.log(mode);
  function handleClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      closeModal();
      document.removeEventListener("keydown", onWindowEscape);
    }
  }

  return (
    <Overlay onClick={handleClick}>
      <ModalWindow>
        <CloseButton onClick={closeModal}>
          <SvgClose />
        </CloseButton>
        {/* <RegisterForm /> */}
        {mode === "login" ? (
          <Login setmode={setmode} closeModal={closeModal} modal={modal} />
        ) : (
          <Register setmode={setmode} closeModal={closeModal} />
        )}
      </ModalWindow>
    </Overlay>
  );
};
