// 공통 모달창
import { Overlay, Box, CloseButton } from "../styles/Modal.styles";
import { MdClose } from "react-icons/md";

const Modal = ({ onClose, children }) => {
  return (
    <Overlay onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <MdClose />
        </CloseButton>
        {children}
      </Box>
    </Overlay>
  );
};

export default Modal;
