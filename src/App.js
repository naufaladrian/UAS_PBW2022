import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/landingPages/LandingPage.js";
import LoginPage from "./pages/login-signup/LoginPage";
import SignupPage from "./pages/login-signup/SignupPage";
import HomeApp from "./pages/mainApp/HomeApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomeApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
