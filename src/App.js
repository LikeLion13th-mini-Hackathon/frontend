import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/fonts/Pretendard-Regular.ttf";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SignupComplete from "./pages/SignupComplete";
import Layout from "./components/Layout";
import { GlobalStyle } from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import Gpa from "./pages/GPA";
import Note from "./pages/Note";
import MyPage from "./pages/Mypage";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/complete" element={<SignupComplete />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/gpa" element={<Gpa />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/edit-profile" element={<EditProfile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
