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
  StyledDate,
} from "../../styles/PlannerDetailItem.styles";
import { useState } from "react";
import { toast } from "react-toastify";
import MenuModal from "./MenuModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { deletePlanner, updatePlanner } from "../../api/planner";
import { useRef, useEffect } from "react";

const PlanDetailItem = ({ plan, onRefresh }) => {
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

  // 플래너 계획 삭제 API
  const handleDelete = async () => {
    try {
      await deletePlanner(plan.id);
      toast.success("삭제가 완료되었습니다.", { autoClose: 2000 });
      onRefresh(); // 상위로 전달
      setIsDeleteOpen(false);
    } catch (err) {
      toast.error("삭제에 실패했습니다.", { autoClose: 2000 });
    }
  };

  const handleEditButton = () => {
    setIsMenuOpen(false);
    setIsEditing(true);
  };

  // 플래너 계획 수정 API
  const handleSave = async () => {
    try {
      await updatePlanner(plan.id, { goal: editedGoal });
      toast.success("수정이 완료되었습니다.", { autoClose: 2000 });
      onRefresh();
    } catch (err) {
      console.error("수정 실패:", err);
      toast.error("수정에 실패했습니다.", { autoClose: 2000 });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
  };

  const autoResize = (e) => {
    e.target.style.height = "auto"; // 초기화
    e.target.style.height = `${e.target.scrollHeight}px`; // 글 길이만큼 자동 높이
  };

  const textareaRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
      }, 0);
    }
  }, [isEditing]);
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
        <span
          style={{ color: "#140B77", fontSize: "16px", marginRight: "0.5em" }}
        >
          •
        </span>
        <Content>
          {isEditing ? (
            <StyledTextarea
              ref={textareaRef}
              value={editedGoal}
              autoFocus
              onChange={(e) => {
                setEditedGoal(e.target.value);
                autoResize(e);
              }}
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
