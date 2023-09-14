import "./App.css";

import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { NavBar } from "./Components/Navbar/NavBar";
import { SideBar } from "./Components/SideBar/SideBar";
import { AdminDashboard } from "./Components/AdminDashboard/AdminDashboard";

function App() {
  
  return (
  <div className="main-page-content">
      <BrowserRouter>
          <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
