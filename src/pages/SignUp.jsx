import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 스크롤 금지
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/주소");
  };

  return (
    <>
      <h1>회원가입 페이지</h1>
      <h2>입니다</h2>
    </>
  );
}

export default Signup;
