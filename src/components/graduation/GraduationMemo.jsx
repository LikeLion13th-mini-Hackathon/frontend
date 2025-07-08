import { useEffect, useState } from "react";
import {
  MemoContainer,
  SubText,
  Card,
  CardContent,
  CardHeader,
  SelectButton,
  EmptyMemo,
  MemoText,
  EditButton,
} from "../../styles/Graduation.styles";
import { useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { fetchGraduationMemo } from "../../api/graduation";

export default function GraduationMemo() {
  const [selectedTab, setSelectedTab] = useState("학점");
  const [memo, setMemo] = useState("");
  const navigate = useNavigate();

  const categoryKeys = {
    학점: "학점",
    토익: "TOEIC",
    졸업작품: "졸업작품",
  };

  const categories = Object.keys(categoryKeys);

  const emptyMessage = {
    학점: "학점 계획을 작성해주세요.\nex) 이번 학기 성적 4.0 넘기기",
    토익: "토익 계획을 작성해주세요.\nex) 토익 800점 넘기기",
    졸업작품: "졸업작품 계획을 작성해주세요.\nex) 졸업작품 주제 선정하기",
  };

  // 할 일 메모 조회
  useEffect(() => {
    const loadMemo = async () => {
      try {
        const data = await fetchGraduationMemo(categoryKeys[selectedTab]);
        setMemo(data?.[0]?.content || "");
      } catch (err) {
        console.error("메모 조회 실패:", err);
        setMemo("");
      }
    };

    loadMemo();
  }, [selectedTab]);

  return (
    <MemoContainer>
      <SubText>내가 해야 할 건...</SubText>
      <Card>
        <CardHeader>
          {categories.map((category) => (
            <SelectButton
              key={category}
              $isSelected={selectedTab === category}
              onClick={() => setSelectedTab(category)}
            >
              {category}
            </SelectButton>
          ))}
        </CardHeader>
        <CardContent>
          {memo ? (
            <MemoText>{memo}</MemoText>
          ) : (
            <EmptyMemo>{emptyMessage[selectedTab]}</EmptyMemo>
          )}
          <EditButton
            onClick={() =>
              navigate(
                `/graduation-memo/${categoryKeys[selectedTab].toLowerCase()}`
              )
            }
          >
            <FaPen size={20} color="white" />
          </EditButton>
        </CardContent>
      </Card>
    </MemoContainer>
  );
}
