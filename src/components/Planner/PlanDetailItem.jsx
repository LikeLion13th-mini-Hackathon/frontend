import { TbDots } from "react-icons/tb";
import {
  ItemWrapper,
  TopSection,
  CategoryTitle,
  Divider,
  Content,
  MenuButton,
  StyledTextarea,
  BottomSection,
} from "../../styles/PlannerDetailItem.styles";
import { useState } from "react";
import { toast } from "react-toastify";
import MenuModal from "./MenuModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { BsDot } from "react-icons/bs";
import { deletePlanner, updatePlanner } from "../../api/planner";

const PlanDetailItem = ({ plan, onDeletePlan }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedGoal, setEditedGoal] = useState(plan.goal);

  const openMenuModal = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const openDeleteModal = () => {
    setIsMenuOpen(false);
    setIsDeleteOpen(true);
  };

  const closeDeleteModal = () => setIsDeleteOpen(false);

  const handleDelete = async () => {
    try {
      await deletePlanner(plan.id);
      toast.success("삭제가 완료되었습니다.");
      onDeletePlan(plan.id); // 상위로 전달
      setIsDeleteOpen(false);
    } catch (err) {
      toast.error("삭제 실패");
    }
  };

  const handleEditButton = () => {
    setIsMenuOpen(false);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updatePlanner(plan.id, { goal: editedGoal });
      toast.success("수정이 완료되었습니다.");
    } catch (err) {
      console.error("수정 실패:", err);
      toast.error("수정에 실패했습니다.");
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <ItemWrapper>
      <TopSection>
        <CategoryTitle>{plan.category}</CategoryTitle>
        <MenuButton onClick={openMenuModal}>
          <TbDots size={24} color="#140B77" />
        </MenuButton>
      </TopSection>
      <Divider />
      <BottomSection>
        <BsDot
          size={25}
          style={{ flexShrink: 0, color: "#140b77", marginTop: "4px" }}
        />
        <Content>
          {isEditing ? (
            <StyledTextarea
              value={editedGoal}
              autoFocus
              rows={3}
              onChange={(e) => setEditedGoal(e.target.value)}
              onBlur={handleSave} // 포커스 아웃 시 저장
              onKeyDown={handleKeyDown} // 엔터로 저장 (Shift+Enter는 줄바꿈)
            />
          ) : (
            plan.goal
          )}
        </Content>
      </BottomSection>
      {isMenuOpen && (
        <MenuModal
          onClose={closeMenu}
          onEdit={handleEditButton}
          onDelete={openDeleteModal}
          planText={plan.goal}
        />
      )}
      {isDeleteOpen && (
        <DeleteConfirmModal
          onClose={closeDeleteModal}
          onDelete={handleDelete}
          planCategory={plan.category}
        />
      )}
    </ItemWrapper>
  );
};

export default PlanDetailItem;
