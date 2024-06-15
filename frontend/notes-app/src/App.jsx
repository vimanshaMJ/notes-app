import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

const App = () => {
  return <div>{routes}</div>;
};

export default App;
