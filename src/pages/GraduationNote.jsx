// 졸업요건 - 메모 페이지
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
  fetchGraduationMemo,
  createGraduationMemo,
  updateGraduationMemo,
  deleteGraduationMemo,
} from "../api/graduationMemo";

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

const categories = {
  gpa: "학점",
  toeic: "토익",
  project: "졸업작품",
  학점: "학점",
  졸업작품: "졸업작품",
};

const apiCategoryMap = {
  gpa: "학점",
  toeic: "TOEIC",
  project: "GRADUATION_PROJECT",
  학점: "학점",
  토익: "TOEIC",
  졸업작품: "GRADUATION_PROJECT",
};

const GraduationNote = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [memoId, setMemoId] = useState(null);
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

  const loadMemo = async () => {
    try {
      // 할 일 메모 조회 API
      const data = await fetchGraduationMemo(apiCategoryMap[category]);
      if (data && data.length > 0) {
        setNote(data[0].content);
        setMemoId(data[0].id);
      } else {
        setNote("");
        setMemoId(null);
      }
    } catch (err) {
      console.error("❌ 메모 조회 실패:", err);
      setNote("");
      setMemoId(null);
    }
  };

  // 저장/수정 통합 함수 (blur에서만 호출)
  const handleSave = async () => {
    if (note.trim() === "") {
      toast.warn("내용을 입력하세요.", { autoClose: 2000 });
      return;
    }

    try {
      if (memoId) {
        // 할 일 메모 수정 API
        await updateGraduationMemo(memoId, note);
        toast.success("메모가 수정되었습니다.", { autoClose: 2000 });
      } else {
        // 할 일 메모 등록 API
        await createGraduationMemo(apiCategoryMap[category], note);
        toast.success("메모가 저장되었습니다.", { autoClose: 2000 });
      }
      await loadMemo();
    } catch (err) {
      console.error("❌ 메모 저장 실패:", err);
      toast.error("메모 저장에 실패했습니다.", { autoClose: 2000 });
    }
  };

  const handleBlur = () => {
    if (!note.trim()) {
      toast.warn("내용을 입력하세요.", { autoClose: 2000 });
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 300);
      textareaRef.current.focus();
      return;
    }

    handleSave();
    setIsEditing(false);
  };

  // 메뉴 관련
  const openMenuModal = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const openDeleteModal = () => {
    setIsMenuOpen(false);
    setIsDeleteConfirmOpen(true);
  };
  const closeDeleteModal = () => setIsDeleteConfirmOpen(false);

  const handleDeleteButton = async () => {
    try {
      // 할 일 메모 삭제 API
      await deleteGraduationMemo(memoId);
      toast.success("메모가 삭제되었습니다.", { autoClose: 2000 });
      closeDeleteModal();
      navigate(-1);
    } catch (err) {
      console.error("❌ 메모 삭제 실패:", err);
      toast.error("메모 삭제에 실패했습니다.", { autoClose: 2000 });
    }
  };

  const handleEdit = () => {
    closeMenu();
    setIsEditing(true);
  };

  const handleMenuButtonClick = () => {
    if (!note.trim()) {
      toast.warn("메모 입력 후 이용해주세요.", { autoClose: 2000 });
    } else {
      setIsMenuOpen(true);
    }
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
          title={categories[category]}
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
            onDelete={handleDeleteButton}
            planCategory={categories[category]}
          />
        )}
      </CardWrapper>
    </Container>
  );
};

export default GraduationNote;
