import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Content from './pages/Content';
import ContentDetail from './pages/ContentDetail';
import Footer from './components/Footer';
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
  };

  return (
    <div id="app-wrapper">
      <div className="App">
        <Router>
        <Navbar onSearch={handleSearch} resetSearch={() => setSearchTerm('')} />        {/* Pass the handleSearch function */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/content" element={<Content searchTerm={searchTerm}/>} /> {/* Pass searchTerm to Content */}
            <Route path="/content/:id" element={<ContentDetail />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
