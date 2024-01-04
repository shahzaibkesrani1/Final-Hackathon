import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Credentials/Register/Register";
import Login from "./Components/Credentials/Login/Login";
import AdminLogin from "./Components/Credentials/Admin/Admin-login";
import Manageuser from "./Components/Credentials/Dashboard/Manageuser";
import Attendance from "./Components/Credentials/Dashboard/Attendance";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Register/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/admin"  element={<AdminLogin/>}/>
      <Route path="/Dashboard"  element={<Manageuser/>}/>
      <Route path="/attendance"  element={<Attendance/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
