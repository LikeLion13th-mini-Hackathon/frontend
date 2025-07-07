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
import MyPage from "./pages/Mypage";
import EditProfile from "./pages/EditProfile";
import Graduation from "./pages/Graduation";
import GraduationMemoPage from "./pages/GraduationNote";
import SubjectNotePage from "./pages/SubjectNote";
import Planner from "./pages/Planner";
import PlanDetail from "./pages/PlannerDetail";

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
            <Route path="/note/:id" element={<SubjectNotePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/edit-profile" element={<EditProfile />} />
            <Route path="/graduation" element={<Graduation />} />
            <Route
              path="/graduation-memo/:category"
              element={<GraduationMemoPage />}
            />
            <Route path="/planner" element={<Planner />} />
            <Route path="/plans/:semester/:category" element={<PlanDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
