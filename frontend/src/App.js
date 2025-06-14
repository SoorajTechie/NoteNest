import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp";

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import "./App.css";

function App() {
  return (
     <Router>
        <div className="nav-top">
          <div className="name-project">NoteNest</div>
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Login</Link>

        </div>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>

        </Routes>

    </Router>
  );
}

export default App;
