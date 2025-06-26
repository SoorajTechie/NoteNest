import About from "./Pages/About";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp";
import Addnote from "./Pages/Addnote";


import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Update from "./Pages/Update";

function App() {
  return (
     <Router>
        <div className="nav-top">
          <div className="name-project">NoteNest</div>
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
          <Route path="/create" element={<Addnote/>}></Route>

        </Routes>

    </Router>
  );
}

export default App;
