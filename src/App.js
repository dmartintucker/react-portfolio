import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Route components
import Home from "../src/routes/Home";
import About from "./routes/About";
import Work from "./routes/Work";

// Other components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/work/:id" element={<Work />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
