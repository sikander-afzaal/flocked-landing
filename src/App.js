import "./App.css";
import Header from "./Layout/Header/Header";
import Landing from "./Pages/Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from "./Pages/Faq/Faq";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<Faq />} path="/faq" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
