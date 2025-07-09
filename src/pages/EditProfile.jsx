// 마이 - 프로필 수정 페이지
import { useState, useEffect } from "react";
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
import { fetchMyProfile, updateMyProfile } from "../api/user";
import { toast } from "react-toastify";

function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nickname: "",
    birthdate: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    // 마이페이지 프로필 정보 수정
    const loadUserInfo = async () => {
      try {
        const { nickname, birthdate, email, department } =
          await fetchMyProfile();

        setForm({
          nickname,
          birthdate: birthdate?.replace(/-/g, ".") || "",
          email,
          department,
        });
      } catch (err) {
        console.error("⚠️ 유저 정보 불러오기 실패:", err);
      }
    };

    loadUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValidBirthdate = (birth) => /^\d{4}\.\d{2}\.\d{2}$/.test(birth);

  const handleSave = async () => {
    if (!isValidBirthdate(form.birthdate)) {
      toast.error("생년월일 형식이 올바르지 않습니다. (예: 2000.01.01)", {
        autoClose: 2000,
      });
      return;
    }

    try {
      await updateMyProfile(form);
      toast.success("사용자 정보가 성공적으로 수정되었습니다!", {
        autoClose: 2000,
      });
      navigate("/mypage");
    } catch (err) {
      console.error("❌ 사용자 정보 수정 실패:", err);
      toast.error("수정 중 오류가 발생했습니다.", {
        autoClose: 2000,
      });
    }
  };

  return (
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
          <Input
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label2>생년월일</Label2>
          <Input
            name="birthdate"
            value={form.birthdate}
            onChange={handleChange}
            placeholder="2000.01.01"
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
          <Label2>학과(부)</Label2>
          <Select
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            <option value="디자인학부">디자인학부</option>
            <option value="산업경영공학과">산업경영공학과</option>
            <option value="영어영문학과">영어영문학과</option>
            <option value="컴퓨터공학부">컴퓨터공학부</option>
          </Select>
        </FormGroup>

        <EditButton onClick={handleSave}>수정하기</EditButton>
      </Form>
    </Container>
  );
}

export default EditProfile;
