import "./App.css";
import { Button, Form } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { BasicPage } from "./pages/basicPage";
import { DetailedPage } from "./pages/detailedPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basicPage" element={<BasicPage />} />
        <Route path="/detailedPage" element={<DetailedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
