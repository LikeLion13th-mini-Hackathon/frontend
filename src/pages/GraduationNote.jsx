import NoteCard from "../components/NoteCard";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";
import {
  fetchGraduationMemo,
  createGraduationMemo,
  updateGraduationMemo,
  deleteGraduationMemo,
} from "../api/graduationMemo";
import { toast } from "react-toastify";
import { useRef } from "react";

import { TbDots } from "react-icons/tb";
import MenuModal from "../components/Planner/MenuModal";
import DeleteConfirmModal from "../components/Planner/DeleteConfirmModal";
import { MenuButton } from '../styles/PlannerDetailItem.styles';

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
  overflow-y: auto;
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

const GraduationNote = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [memoId, setMemoId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  useEffect(() => {
    loadMemo();
  }, []);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const categories = {
    gpa: "학점",
    toeic: "토익",
    project: "졸업작품",
  };

  const apiCategoryMap = {
    gpa: "GPA",
    toeic: "TOEIC",
    project: "GRADUATION_PROJECT",
  };

  // 메모 조회
  const loadMemo = async () => {
    setLoading(true);
    try {
      const data = await fetchGraduationMemo(apiCategoryMap[category]);
      if (data && data.length > 0) {
        setNote(data[0].content);
        setMemoId(data[0].id);
      } else {
        setNote("");
        setMemoId(null);
      }
    } catch (err) {
      console.error("메모 조회 실패:", err);
      setNote("");
      setMemoId(null);
    } finally {
      setLoading(false);
    }
  };

  // 메모 저장/수정
  const saveMemo = async (content) => {
    try {
      if (memoId) {
        await updateGraduationMemo(memoId, content);
        setNote(content);
        alert("메모가 수정되었습니다.");
      }
      else {
        const data = await createGraduationMemo(apiCategoryMap[category], content);
        alert("메모가 저장되었습니다.");
        if (data?.id) setMemoId(data.id);
        setNote(content);
      }
    } catch (err) {
      console.error("메모 저장 실패:", err);
      alert("저장에 실패했습니다.");
    }
  };

  // 메모 삭제
  const deleteMemo = async () => {
    if (!memoId) return;
    try {
      await deleteGraduationMemo(memoId);
      setNote("");
      setMemoId(null);
      alert("메모가 삭제되었습니다.");
    } catch (err) {
      console.error("메모 삭제 실패:", err);
      alert("삭제에 실패했습니다.");
    }
  };

  const handleBlur = () => {
    saveMemo(note);
    setIsEditing(false);
  };

  const openMenuModal = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const openDeleteModal = () => {
    setIsMenuOpen(false);
    setIsDeleteConfirmOpen(true);
  };

  const closeDeleteModal = () => setIsDeleteConfirmOpen(false);

  const handleDelete = async () => {
    await deleteMemo();
    toast.success("메모가 삭제되었습니다.");
    closeDeleteModal();
    navigate(-1);
  };

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
          title={categories[category]}
          date={null}
          content={
            isEditing ? (
              <textarea
                ref={textareaRef}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onBlur={handleBlur}     // 포커스 벗어나면 자동 저장
                placeholder="메모를 입력해 주세요."
                style={{
                  width: "100%",
                  border: "none",
                  resize: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "13px",
                  color: "#111111",
                }}
                rows={8}
              />
            ) : (
              <NoteContent>
                {note || "메모를 입력해 주세요."}
              </NoteContent>
            )
          }
          headerButton={
            <MenuButton onClick={openMenuModal} style={{ padding: "0 1vh", margin: "0" }} >
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
            planCategory={categories[category]}
          />
        )}
      </CardWrapper>
    </Container>
  );
};

export default GraduationNote;