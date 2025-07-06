import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { TbArrowBack } from "react-icons/tb";
import axios from "axios";
import {
  NoteContainer,
  NoteHeader,
  NoteTitle,
  NoteCard,
  NoteContent,
  EditButton,
} from "../styles/Note.styles";
import Footer from "../components/Footer";

function Note() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [showModal, setShowModal] = useState(false);

  // 메모 불러오기
  useEffect(() => {
    const fetchMemo = async () => {
      try {
        // 주소 변경 필요
        const res = await axios.get(`http://localhost:3000/api/memo/${id}`);
        setNote(res.data.memo || "");
        setSubjectName(res.data.subjectName || "");
      } catch (err) {
        console.error("메모 조회 실패:", err);
      }
    };

    fetchMemo();
  }, [id]);

  // 메모 저장
  const saveMemo = async () => {
    try {
      // 주소 변경 필요
      await axios.put(`http://localhost:3000/api/memo/${id}`, { memo: note });
    } catch (err) {
      console.error("메모 저장 실패:", err);
    }
  };

  // 메모 삭제
  const deleteMemo = async () => {
    try {
      // 주소 변경 필요
      await axios.delete(`http://localhost:3000/api/memo/${id}`);
      setNote("");
    } catch (err) {
      console.error("메모 삭제 실패:", err);
    }
  };

  return (
    <>
      <NoteContainer>
        <NoteHeader>
          <IoIosArrowBack
            size={20}
            style={{ marginRight: "14vh" }}
            onClick={() => navigate(-1)}
          />
          <h3 style={{ color: "#140b77" }}>과목 메모</h3>
        </NoteHeader>

        <NoteCard>
          <NoteTitle>
            <h3 style={{ fontWeight: "bold" }}>{subjectName}</h3>
            <FaRegTrashCan
              onClick={() => setShowModal(true)}
              style={{ color: "#fb4343", cursor: "pointer" }}
            />
          </NoteTitle>

          <hr style={{ marginTop: "0" }} />

          {isEditing ? (
            <textarea
              autoFocus
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onBlur={() => {
                setIsEditing(false);
                saveMemo();
              }}
              style={{
                width: "100%",
                height: "50vh",
                padding: "1vh",
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            />
          ) : (
            <NoteContent>
              {note.trim() ? note : "메모를 입력하세요..."}
            </NoteContent>
          )}

          {!isEditing && (
            <EditButton onClick={() => setIsEditing(true)}>
              <FaPen size={20} color="white" />
            </EditButton>
          )}
        </NoteCard>
      </NoteContainer>

      {/* 모달창 */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "90vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "10px",
              minWidth: "40vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              style={{
                marginBottom: "1rem",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {subjectName} 메모를 정말 삭제할까요?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: "1vh 4.5vh",
                  backgroundColor: "#e5e5e5",
                  border: "none",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                <TbArrowBack
                  size={20}
                  style={{ color: "#140b77", marginBottom: "0.5vh" }}
                />
                뒤로가기
              </button>
              <button
                onClick={() => {
                  deleteMemo();
                  setShowModal(false);
                }}
                style={{
                  padding: "1vh 4.5vh",
                  backgroundColor: "#e5e5e5",
                  border: "none",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                <FaRegTrashCan
                  size={18}
                  style={{ color: "#fb4343", marginBottom: "1vh" }}
                />
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Note;
