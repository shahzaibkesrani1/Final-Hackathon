import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Credentials/Register/Register";
import Login from "./Components/Credentials/Login/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Register/>}/>
      <Route path="/login"  element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
