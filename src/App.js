import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Route components
import Home from "../src/routes/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
