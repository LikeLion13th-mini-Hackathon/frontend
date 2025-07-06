import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {
  Container,
  Header,
  ProfileSection2,
  Form,
  FormGroup,
  Label2,
  Input,
  Select,
  EditButton,
} from "../styles/MyPage.styles";
import axios from "axios";

function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "임상현",
    birth: "2000.00.00",
    email: "email@gmail.com",
    major: "영어영문학과",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.patch(
        "http://localhost:5000/api/user/mypage",
        {
          nickname: form.name,
          email: form.email,
          birthdate: form.birth.replace(/\./g, "-"), // "2000.01.01" → "2000-01-01"
          department: form.major,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ 사용자 정보가 성공적으로 수정되었습니다!");
      navigate("/mypage"); // 수정 완료 후 이동
    } catch (err) {
      console.error("❌ 사용자 정보 수정 실패:", err);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Container>
        <Header>
          <IoIosArrowBack
            size={20}
            style={{ marginRight: "13vh" }}
            onClick={() => navigate(-1)}
          />
          <h3 style={{ color: "#140b77" }}>프로필 편집</h3>
        </Header>

        <ProfileSection2>
          <FaUserCircle size={70} style={{ color: "#767676" }} />
        </ProfileSection2>

        <Form>
          <FormGroup>
            <Label2>이름</Label2>
            <Input name="name" value={form.name} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label2>생년월일</Label2>
            <Input
              name="birth"
              value={form.birth}
              onChange={handleChange}
              placeholder="2000.00.00"
            />
          </FormGroup>

          <FormGroup>
            <Label2>이메일</Label2>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
            />
          </FormGroup>

          <FormGroup>
            <Label2>학과</Label2>
            <Select name="major" value={form.major} onChange={handleChange}>
              <option value="디자인학부">디자인학부</option>
              <option value="산업경영공학과">산업경영공학과</option>
              <option value="영어영문학과">영어영문학과</option>
              <option value="컴퓨터공학부">컴퓨터공학부</option>
            </Select>
          </FormGroup>
          <EditButton onClick={handleSave}>수정하기</EditButton>
        </Form>
      </Container>
    </>
  );
}

export default EditProfile;
