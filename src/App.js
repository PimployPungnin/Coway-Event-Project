import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Component/NavigationBar';
import Headers from './Component/Headers';
import Event from './Component/Event';
import Register from './Component/Register';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';
import Success from './Component/Success';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Headers />} />
          <Route path="/about" element={<Headers />} />
          <Route path="/event" element={<Event />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;