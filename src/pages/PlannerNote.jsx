import NoteCard from "../components/NoteCard";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";
import {
  createPlanner,
} from "../api/planner";
import { toast } from "react-toastify";

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

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0.5rem;
`;


const SaveButton = styled.button`
  background-color: #140b77;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const PlannerNote = () => {
  const { semester, category } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState("");

  if (!semester || !category) {
    toast.error("잘못된 접근입니다.");
    navigate(-1);
    return null;
  }

  const handleSave = async () => {
    if (!note.trim()) {
      toast.error("계획을 입력해 주세요.");
      return;
    }

    try {
      const res = await createPlanner({
        semester: semester.replace(/\s+/g, ""),
        category,
        goal: note,
      });
      toast.success("저장이 완료되었습니다.");
      navigate(-1);
    } catch (err) {
      toast.error("저장 실패");
    }
  };

  const today = new Date().toISOString().split("T")[0].replace(/-/g, ".");

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} />
        </BackButton>
        <Title>플래너</Title>
      </Header>

      <ContentWrapper>
        <NoteCard
          title={category}
          date={today}
          content={
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="계획을 입력해 주세요."
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
          }
          headerButton={null}
          bottomButton={
            <SaveButton onClick={handleSave}>
              <FaDownload />
            </SaveButton>
          }
        />
      </ContentWrapper>
    </Container>
  );
};

export default PlannerNote;