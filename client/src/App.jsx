import "./App.css";

import { BrowserRouter} from "react-router-dom";
import Home from "./Home";

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
