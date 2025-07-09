// 회원가입 페이지
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Form,
  Field,
  Label,
  Required,
  Input,
  Select,
  Row,
  SubmitButton,
} from "../styles/Signup.styles";
import SubLogo from "../assets/SubLogo.png";
import { signup } from "../api/auth";
import { toast } from "react-toastify";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("");

  const navigate = useNavigate();

  const formValid =
    name &&
    birthYear &&
    birthMonth &&
    birthDay &&
    email &&
    password &&
    department &&
    grade;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const birthDate = `${birthYear}-${birthMonth.padStart(
      2,
      "0"
    )}-${birthDay.padStart(2, "0")}`;

    const payload = {
      email,
      password,
      nickname: name,
      birthdate: birthDate,
      department,
      grade: Number(grade),
    };

    try {
      // 회원가입 API
      await signup(payload);
      toast.success("회원가입 완료!", { autoClose: 2000 });
      navigate("/signup/complete");
    } catch (err) {
      console.error("❌ 회원가입 실패:", err);
      toast.err("회원가입 실패, 다시 시도해 주세요.", { autoClose: 2000 });
    }
  };

  return (
    <Wrapper>
      <img src={SubLogo} style={{ width: "45%", marginBottom: "3vh" }} />

      <Form>
        <Field>
          <Label>
            이름<Required>*</Required>
          </Label>
          <Row style={{ display: "flex", gap: "8px" }}>
            <Input
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ flex: 1 }}
            />
          </Row>
        </Field>

        <Field>
          <Label>
            생년월일<Required>*</Required>
          </Label>
          <Row style={{ display: "flex", gap: "8px" }}>
            <Select
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
            >
              <option value="">출생연도</option>
              {Array.from({ length: 100 }, (_, i) => {
                const year = 2024 - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </Select>
            <Select
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
            >
              <option value="">출생 월</option>
              {Array.from({ length: 12 }, (_, i) => {
                const month = String(i + 1).padStart(2, "0");
                return (
                  <option key={month} value={month}>
                    {month}
                  </option>
                );
              })}
            </Select>
            <Select
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
            >
              <option value="">출생 일</option>
              {Array.from({ length: 31 }, (_, i) => {
                const day = String(i + 1).padStart(2, "0");
                return (
                  <option key={day} value={day}>
                    {day}
                  </option>
                );
              })}
            </Select>
          </Row>
        </Field>

        <Field>
          <Label>
            이메일<Required>*</Required>
          </Label>
          <Input
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </Field>

        <Field>
          <Label>
            비밀번호<Required>*</Required>
          </Label>
          <Input
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </Field>

        <Row style={{ display: "flex", gap: "8px" }}>
          <Field style={{ flex: 1 }}>
            <Label>
              학과(부)<Required>*</Required>
            </Label>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">학과(부) 선택</option>
              <option value="디자인학부">디자인학부</option>
              <option value="산업경영공학과">산업경영공학과</option>
              <option value="영어영문학과">영어영문학과</option>
              <option value="컴퓨터공학부">컴퓨터공학부</option>
            </Select>
          </Field>

          <Field style={{ flex: 1 }}>
            <Label>
              학년<Required>*</Required>
            </Label>
            <Select value={grade} onChange={(e) => setGrade(e.target.value)}>
              <option value="">학년 선택</option>
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
              <option value="4">4학년</option>
            </Select>
          </Field>
        </Row>
      </Form>

      <SubmitButton onClick={handleSubmit} disabled={!formValid}>
        회원가입
      </SubmitButton>
    </Wrapper>
  );
}
