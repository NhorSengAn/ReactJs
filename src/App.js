import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screen/home/HomeScreen";
import AboutScreen from "./screen/about/AboutScreen";
import StudentScreen from "./screen/nav/student/StudentScreen";
import RoutNotfounnd from "./screen/error/errorScreen";
import LinkPage from "./screen/nav/link";
import LoginForm from "./screen/login/login";
const App = () => {
  return (
    <div>
      {/* configure rout or register rout */}
      <BrowserRouter>
        <div className="link-page">{LinkPage()}</div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/student" element={<StudentScreen />} />
          <Route path="/login" element={<LoginForm />} />
          {/* if user put the wrong path will show the error function */}
          <Route path="*" element={<RoutNotfounnd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
