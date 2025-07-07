import Modal from "../Modal";
import { Title, ButtonWrapper } from "../../styles/Modal.styles"
import ModalMenuButton from "../ModalMenuButton";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaRegTrashCan } from "react-icons/fa6";

const MenuModal = ({ onClose, onEdit, onDelete, planText }) => {
  return (
    <Modal onClose={onClose}>
      <Title>
        {planText}
      </Title>
      <ButtonWrapper>
        <ModalMenuButton
          icon={<PiPencilSimpleLineFill />}
          label="수정하기"
          color="#140b77"
          onClick={onEdit}
        />
        <ModalMenuButton
          icon={<FaRegTrashCan />}
          label="삭제하기"
          color="#FF4A65"
          onClick={onDelete}
        />
      </ButtonWrapper>
    </Modal>
  );
};

export default MenuModal;