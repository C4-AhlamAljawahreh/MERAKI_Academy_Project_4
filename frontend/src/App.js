import "./App.css";
import Login from "./components/Login";
import { Routes, Route, Link, Router } from "react-router-dom";
import Register from './components/Rigester'

function App() {
  return (
    <div className="App">
      <h1>Welcome To App</h1>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Login/> */}
    </div>
  );
}

const Navigation = () => {
  return (
    <>
      <div className="Navigation" style={{ display: "flex", gap: "20px" }}>
        <Link to="/login">login </Link>
        <Link to="/register">register</Link>
      </div>
    </>
  );
};

export default App;
