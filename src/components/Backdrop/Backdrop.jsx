import { BackdropContainer } from "./Backdrop.Styled";

const Backdrop = ({ closeModal }) => {
  return <BackdropContainer onClick={closeModal} />;
};

export default Backdrop;
