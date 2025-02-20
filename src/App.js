import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Content from "./pages/Content";
import ContentDetail from "./pages/ContentDetail";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const PageWrapper = () => {
    const location = useLocation();
    const isFullWidthPage =
      location.pathname === "/" || location.pathname === "/about";

    return (
      <div className={`App ${isFullWidthPage ? "full-width" : ""}`}>
        <Navbar onSearch={handleSearch} resetSearch={() => setSearchTerm("")} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onSearch={handleSearch}
                resetSearch={() => setSearchTerm("")}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/content"
            element={<Content searchTerm={searchTerm} />}
          />
          <Route path="/content/:id" element={<ContentDetail />} />
        </Routes>
        <Footer />
      </div>
    );
  };

  return (
    <div id="app-wrapper">
      <Router>
        <PageWrapper />
      </Router>
    </div>
  );
}

export default App;
