import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import BackToTop from './components/BackToTop';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/blog1' element={<Blog1 />} />
        <Route path='/blog2' element={<Blog2 />} />
      </Routes>
      <BackToTop />
    </Router>
  );
}

export default App;
