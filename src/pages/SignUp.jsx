import React from "react";
import { useState } from "react";
import {
  Wrapper,
  Title,
  Form,
  Field,
  Label,
  Required,
  Input,
  Select,
  Row,
  SmallButton,
  SubmitButton,
} from "../styles/Signup.styles";


export default function Signup() {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 학과 정보
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("");

  const formValid = name && birthYear && birthMonth && birthDay && email && password;

  const handleSumit = (e) => {
    e.preventDefault();

    const birthDate = `${birthYear}-${birthMonth.padStart(2, "0")}-${birthDay.padStart(2, "0")}`;

    const payload = {
      name,
      email,
      password,
      birthDate,
      department,
      grade,
    };
    console.log("회원가입 정보:", payload);

    // API 추가 예정
  }

  return (
    <Wrapper>
      <Title>회원가입</Title>

      <Form>
        <Field>
          <Label>이름 <Required>*</Required></Label>
          <Row>
            <Input 
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
            <SmallButton>본인 확인</SmallButton>
          </Row>
        </Field>

        <Field>
          <Label>생년월일 <Required>*</Required></Label>
          <Row>
            <Select value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
              <option value="" disabled hidden>출생연도</option>
              {Array.from({ length: 100 }, (_, i) => {
                const year = 2024 - i;
                return <option key={year} value={year}>{year}</option>;
              })}
            </Select>

            <Select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
              <option value="" disabled hidden>월</option>
              {Array.from({ length: 12 }, (_, i) => {
                const month = String(i + 1).padStart(2, "0");
                return <option key={month} value={month}>{month}</option>;
              })}
            </Select>

            <Select value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
              <option value="" disabled hidden>일</option>
              {Array.from({ length: 31 }, (_, i) => {
                const day = String(i + 1).padStart(2, "0");
                return <option key={day} value={day}>{day}</option>;
              })}
            </Select>
          </Row>
        </Field>

        <Field>
          <Label>이메일 <Required>*</Required></Label>
          <Input 
            placeholder="이메일을 입력해주세요" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </Field>

        <Field>
          <Label>비밀번호 <Required>*</Required></Label>
          <Input 
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" />
        </Field>

      </Form>

      <SubmitButton onClick={handleSumit} disabled={!formValid}>회원가입</SubmitButton>
    </Wrapper>
  );
}
