import NoteCard from "../components/NoteCard";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import styled, { keyframes, css } from "styled-components";
import { TbDots } from "react-icons/tb";
import MenuModal from "../components/Planner/MenuModal";
import DeleteConfirmModal from "../components/Planner/DeleteConfirmModal";
import { MenuButton } from "../styles/PlannerDetailItem.styles";
import { toast } from "react-toastify";
import {
  getSubjectMemo,
  updateSubjectMemo,
  deleteSubjectMemo,
} from "../api/subjectMemo";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const ShakingWrapper = styled.div`
  ${({ isShaking }) =>
    isShaking &&
    css`
      animation: ${shake} 0.3s;
    `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
`;

const BackButton = styled.div`
  position: absolute;
  left: 1rem;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #140b77;
`;

const CardWrapper = styled.div`
  flex: 1;
  padding: 1rem 0.5rem;
`;

const EditButton = styled.button`
  background-color: #140b77;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const NoteContent = styled.div`
  font-size: 15px;
  line-height: 1.8;
  white-space: pre-wrap;
`;

const SubjectNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [subjectName, setSubjectName] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    loadMemo();
  }, []);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  // 메모 불러오기
  const loadMemo = async () => {
    try {
      const res = await getSubjectMemo(id);
      setNote(res.memo);
      setSubjectName(res.subjectName);
    } catch (err) {
      console.error("메모 조회 실패:", err);
      setNote("");
    }
  };

  // 메모 등록
  const handleSave = async () => {
    try {
      await updateSubjectMemo(id, note);
      alert("메모가 저장되었습니다.");
    } catch (err) {
      console.error("메모 저장 실패:", err);
      alert("저장 실패");
    }
  };

  // 메모 삭제
  const handleDelete = async () => {
    try {
      await deleteSubjectMemo(id);
      toast.success("메모가 삭제되었습니다.");
      closeDeleteModal();
      loadMemo();
    } catch (err) {
      console.error("메모 삭제 실패:", err);
      alert("삭제 실패");
    }
  };

  const handleBlur = () => {
    if (!note.trim()) {
      toast.warn("메모를 입력하세요.");
      textareaRef.current.focus();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 300);  // 흔들림 끝나면 초기화
      return;
    }

    handleSave();
    setIsEditing(false);
  };

  // 메뉴 관련
  const handleMenuButtonClick = () => {
    if (!note.trim()) {
      toast.warn("메로 입력 후 이용해주세요.");
    } else {
      setIsMenuOpen(true);
    }
  };
  const closeMenu = () => setIsMenuOpen(false);
  const openDeleteModal = () => {
    setIsMenuOpen(false);
    setIsDeleteConfirmOpen(true);
  };
  const closeDeleteModal = () => setIsDeleteConfirmOpen(false);

  const handleEdit = () => {
    closeMenu();
    setIsEditing(true);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} />
        </BackButton>
        <Title>내가 해야 할 건 ...</Title>
      </Header>

      <CardWrapper>
        <NoteCard
          title={subjectName}
          date={null}
          content={
            isEditing ? (
              <ShakingWrapper isShaking={isShaking}>
                <textarea
                ref={textareaRef}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onBlur={handleBlur}
                placeholder="메모를 입력해 주세요."
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  resize: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "13px",
                  color: "#111111",
                }}
              />
              </ShakingWrapper>
            ) : (
              <NoteContent>{note ? note : "메모를 입력해 주세요."}</NoteContent>
            )
          }
          headerButton={
            <MenuButton
              onClick={handleMenuButtonClick}
              style={{ padding: "0 1vh", margin: "0" }}
            >
              <TbDots size={20} color="#140B77" />
            </MenuButton>
          }
          bottomButton={
            <EditButton onClick={() => setIsEditing(true)}>
              <FaPen />
            </EditButton>
          }
        />

        {isMenuOpen && (
          <MenuModal
            onClose={closeMenu}
            onEdit={handleEdit}
            onDelete={openDeleteModal}
            planText={note}
          />
        )}

        {isDeleteConfirmOpen && (
          <DeleteConfirmModal
            onClose={closeDeleteModal}
            onDelete={handleDelete}
            planCategory={subjectName}
          />
        )}
      </CardWrapper>
    </Container>
  );
};

export default SubjectNote;