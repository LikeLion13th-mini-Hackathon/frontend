import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SignupComplete from "./pages/SignupComplete";
import Layout from "./components/Layout";
import { GlobalStyle } from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage";

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
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
