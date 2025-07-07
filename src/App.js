import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import "./assets/fonts/Pretendard-Regular.ttf";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SignupComplete from "./pages/SignupComplete";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import Gpa from "./pages/GPA";
import Graduation from "./pages/Graduation";
import GraduationNote from "./pages/GraduationNote";
import SubjectNotePage from "./pages/SubjectNote";
import Planner from "./pages/Planner";
import PlanDetail from "./pages/PlannerDetail";
import PlannerNote from "./pages/PlannerNote";
import MyPage from "./pages/Mypage";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/complete" element={<SignupComplete />} />
            <Route path="/mainpage" element={<MainPage />} />

            <Route path="/gpa" element={<Gpa />} />
            <Route path="/note/:id" element={<SubjectNotePage />} />

            <Route path="/graduation" element={<Graduation />} />
            <Route
              path="/graduation-memo/:category"
              element={<GraduationNote />}
            />

            <Route path="/planner" element={<Planner />} />
            <Route path="/plans/:semester/:category" element={<PlanDetail />} />
            <Route
              path="/planner-note/:semester/:category"
              element={<PlannerNote />}
            />

            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/edit-profile" element={<EditProfile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
