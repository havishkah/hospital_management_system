import "./App.css";

import { BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

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
