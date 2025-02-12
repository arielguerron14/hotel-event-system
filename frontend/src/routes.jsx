import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Register from "./pages/Register";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
