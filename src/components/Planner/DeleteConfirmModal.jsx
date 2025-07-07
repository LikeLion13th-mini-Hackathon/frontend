import Modal from "../Modal";
import ModalMenuButton from "../ModalMenuButton";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";import { Title, ButtonWrapper } from "../../styles/Modal.styles"

const DeleteConfirmModal = ({ onClose, onDelete, planCategory }) => {
  return (
    <Modal onClose={onClose}>
      <Title>
        {planCategory} 메모를 정말 삭제할까요?
      </Title>
      <ButtonWrapper>
        <ModalMenuButton
          icon={<FaArrowLeftLong />}
          label="뒤로가기"
          color="#140B77"
          onClick={onClose}
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

export default DeleteConfirmModal;