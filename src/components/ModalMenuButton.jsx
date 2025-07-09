// 공통 더보기 버튼
import { OptionButton, IconWrapper, ButtonLabel } from "../styles/Modal.styles";

const ModalMenuButton = ({ icon, label, color = "#000", onClick }) => {
  return (
    <OptionButton onClick={onClick}>
      <IconWrapper color={color}>{icon}</IconWrapper>
      <ButtonLabel>{label}</ButtonLabel>
    </OptionButton>
  );
};

export default ModalMenuButton;
